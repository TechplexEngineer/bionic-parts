// Database access functions for when2meet using raw D1 queries
import { nanoid } from '$lib/when2meet/nanoid';
import type { GridColumn, AggregateMap } from '$lib/when2meet/grid';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RawD1 = any;

export interface W2MEvent {
  id: string;
  slug: string;
  organizer_token: string;
  title: string;
  description: string | null;
  mode: 'specific_dates' | 'days_of_week';
  timezone: string;
  start_time_minutes: number;
  end_time_minutes: number;
  slot_interval_minutes: number;
  status: 'active' | 'locked' | 'deleted';
  created_at: number;
  updated_at: number;
}

export interface W2MParticipant {
  id: string;
  event_id: string;
  display_name: string;
  display_name_normalized: string;
  edit_token: string;
  created_at: number;
  updated_at: number;
  last_seen_at: number;
}

let getDevDb: (() => Promise<RawD1>) | null = null;

if (import.meta.env.DEV) {
  const { D1Database: D1D, D1DatabaseAPI } = await import('@miniflare/d1');
  const { createSQLiteDB } = await import('@miniflare/shared');
  const { mkdir } = await import('fs/promises');

  let _devDb: RawD1 | null = null;

  getDevDb = async (): Promise<RawD1> => {
    if (!_devDb) {
      const basePath = '.wrangler/state/d1';
      await mkdir(basePath, { recursive: true });
      const sqlLite = await createSQLiteDB(`${basePath}/BIONIC_PARTS_DB.sqlite3`);
      _devDb = new D1D(new D1DatabaseAPI(sqlLite));
    }
    return _devDb;
  };
}

export async function getDb(platform: App.Platform | undefined): Promise<RawD1> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const env = (platform as any)?.env;
  if (env?.BIONIC_PARTS_DB) {
    return env.BIONIC_PARTS_DB;
  }
  if (getDevDb) {
    return getDevDb();
  }
  throw new Error('No D1 database available');
}

export async function createEvent(
  db: RawD1,
  args: {
    title: string;
    description?: string;
    mode: 'specific_dates' | 'days_of_week';
    timezone: string;
    startTimeMinutes: number;
    endTimeMinutes: number;
    slotIntervalMinutes: number;
    selectedDates?: string[];
    selectedWeekdays?: number[];
  }
): Promise<{ slug: string; organizerToken: string }> {
  const id = nanoid(21);
  const slug = nanoid(8);
  const organizerToken = nanoid(32);
  const now = Date.now();

  await db
    .prepare(
      `INSERT INTO w2m_events (id, slug, organizer_token, title, description, mode, timezone,
       start_time_minutes, end_time_minutes, slot_interval_minutes, status, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', ?, ?)`
    )
    .bind(id, slug, organizerToken, args.title, args.description ?? null, args.mode,
      args.timezone, args.startTimeMinutes, args.endTimeMinutes, args.slotIntervalMinutes, now, now)
    .run();

  if (args.mode === 'specific_dates' && args.selectedDates) {
    for (const dateIso of args.selectedDates) {
      await db
        .prepare('INSERT INTO w2m_event_dates (event_id, date_iso) VALUES (?, ?)')
        .bind(id, dateIso)
        .run();
    }
  } else if (args.mode === 'days_of_week' && args.selectedWeekdays) {
    for (const weekday of args.selectedWeekdays) {
      await db
        .prepare('INSERT INTO w2m_event_weekdays (event_id, weekday) VALUES (?, ?)')
        .bind(id, weekday)
        .run();
    }
  }

  return { slug, organizerToken };
}

export async function getEventBySlug(db: RawD1, slug: string): Promise<W2MEvent | null> {
  const result = (await db
    .prepare('SELECT * FROM w2m_events WHERE slug = ? AND status != ?')
    .bind(slug, 'deleted')
    .first()) as W2MEvent | null;
  return result ?? null;
}

export async function getEventById(db: RawD1, id: string): Promise<W2MEvent | null> {
  const result = (await db
    .prepare('SELECT * FROM w2m_events WHERE id = ? AND status != ?')
    .bind(id, 'deleted')
    .first()) as W2MEvent | null;
  return result ?? null;
}

export async function getEventColumns(db: RawD1, event: W2MEvent): Promise<GridColumn[]> {
  if (event.mode === 'specific_dates') {
    const rows = await db
      .prepare('SELECT date_iso FROM w2m_event_dates WHERE event_id = ? ORDER BY date_iso')
      .bind(event.id)
      .all();
    return ((rows.results ?? []) as { date_iso: string }[]).map((r) => ({
      key: r.date_iso,
      label: formatDateColumn(r.date_iso),
    }));
  } else {
    const rows = await db
      .prepare('SELECT weekday FROM w2m_event_weekdays WHERE event_id = ? ORDER BY weekday')
      .bind(event.id)
      .all();
    return ((rows.results ?? []) as { weekday: number }[]).map((r) => ({
      key: `weekday-${r.weekday}`,
      label: WEEKDAY_LONG_LABELS[r.weekday],
    }));
  }
}

export async function getParticipants(db: RawD1, eventId: string): Promise<{ id: string; display_name: string }[]> {
  const rows = await db
    .prepare('SELECT id, display_name FROM w2m_participants WHERE event_id = ? ORDER BY created_at')
    .bind(eventId)
    .all();
  return (rows.results ?? []) as { id: string; display_name: string }[];
}

export async function getAggregates(db: RawD1, eventId: string): Promise<AggregateMap> {
  const rows = await db
    .prepare(
      `SELECT column_key, slot_index, COUNT(*) as cnt
       FROM w2m_availability_slots WHERE event_id = ?
       GROUP BY column_key, slot_index`
    )
    .bind(eventId)
    .all();

  const map: AggregateMap = {};
  for (const row of (rows.results ?? []) as { column_key: string; slot_index: number; cnt: number }[]) {
    if (!map[row.column_key]) map[row.column_key] = {};
    map[row.column_key][row.slot_index] = row.cnt;
  }
  return map;
}

export async function getParticipantAvailability(db: RawD1, participantId: string): Promise<{ column_key: string; slot_index: number }[]> {
  const rows = await db
    .prepare('SELECT column_key, slot_index FROM w2m_availability_slots WHERE participant_id = ?')
    .bind(participantId)
    .all();
  return (rows.results ?? []) as { column_key: string; slot_index: number }[];
}

export async function createParticipant(
  db: RawD1,
  eventId: string,
  displayName: string
): Promise<{ id: string; editToken: string }> {
  const id = nanoid(21);
  const editToken = nanoid(32);
  const now = Date.now();
  const normalized = displayName.trim().toLowerCase();

  await db
    .prepare(
      `INSERT INTO w2m_participants (id, event_id, display_name, display_name_normalized, edit_token, created_at, updated_at, last_seen_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(id, eventId, displayName.trim(), normalized, editToken, now, now, now)
    .run();

  return { id, editToken };
}

export async function validateParticipantToken(
  db: RawD1,
  participantId: string,
  editToken: string
): Promise<W2MParticipant | null> {
  const result = (await db
    .prepare('SELECT * FROM w2m_participants WHERE id = ? AND edit_token = ?')
    .bind(participantId, editToken)
    .first()) as W2MParticipant | null;
  return result ?? null;
}

export async function applyAvailabilityBatch(
  db: RawD1,
  eventId: string,
  participantId: string,
  operation: 'add' | 'remove',
  changes: { columnKey: string; slotIndex: number }[]
): Promise<void> {
  const now = Date.now();
  if (operation === 'add') {
    for (const change of changes) {
      await db
        .prepare(
          `INSERT OR IGNORE INTO w2m_availability_slots (event_id, participant_id, column_key, slot_index, created_at)
           VALUES (?, ?, ?, ?, ?)`
        )
        .bind(eventId, participantId, change.columnKey, change.slotIndex, now)
        .run();
    }
  } else {
    for (const change of changes) {
      await db
        .prepare(
          'DELETE FROM w2m_availability_slots WHERE participant_id = ? AND column_key = ? AND slot_index = ?'
        )
        .bind(participantId, change.columnKey, change.slotIndex)
        .run();
    }
  }
}

export async function getSlotParticipantNames(
  db: RawD1,
  eventId: string,
  columnKey: string,
  slotIndex: number
): Promise<string[]> {
  const rows = await db
    .prepare(
      `SELECT p.display_name FROM w2m_availability_slots a
       JOIN w2m_participants p ON p.id = a.participant_id
       WHERE a.event_id = ? AND a.column_key = ? AND a.slot_index = ?
       ORDER BY p.display_name`
    )
    .bind(eventId, columnKey, slotIndex)
    .all();
  return ((rows.results ?? []) as { display_name: string }[]).map((r) => r.display_name);
}

export async function updateEvent(
  db: RawD1,
  id: string,
  fields: { title?: string; description?: string; status?: 'active' | 'locked' | 'deleted' }
): Promise<void> {
  const now = Date.now();
  const sets: string[] = ['updated_at = ?'];
  const binds: unknown[] = [now];

  if (fields.title !== undefined) { sets.push('title = ?'); binds.push(fields.title); }
  if (fields.description !== undefined) { sets.push('description = ?'); binds.push(fields.description); }
  if (fields.status !== undefined) { sets.push('status = ?'); binds.push(fields.status); }

  binds.push(id);
  await db
    .prepare(`UPDATE w2m_events SET ${sets.join(', ')} WHERE id = ?`)
    .bind(...binds)
    .run();
}

export async function getEventByOrganizerToken(db: RawD1, slug: string, token: string): Promise<W2MEvent | null> {
  const result = (await db
    .prepare('SELECT * FROM w2m_events WHERE slug = ? AND organizer_token = ?')
    .bind(slug, token)
    .first()) as W2MEvent | null;
  return result ?? null;
}

const WEEKDAY_LONG_LABELS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function formatDateColumn(dateIso: string): string {
  const [year, month, day] = dateIso.split('-').map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}
