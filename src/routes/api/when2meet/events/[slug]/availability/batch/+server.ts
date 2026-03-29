import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getDb, getEventBySlug, validateParticipantToken, applyAvailabilityBatch, getAggregates, getEventColumns } from '$lib/when2meet/db';

const MAX_BATCH_SIZE = 500;

export const POST: RequestHandler = async ({ params, request, platform }) => {
  let body: unknown;
  try { body = await request.json(); } catch { return json({ error: 'Invalid JSON' }, { status: 400 }); }
  const b = body as Record<string, unknown>;

  const participantId = typeof b.participantId === 'string' ? b.participantId : '';
  const editToken = typeof b.editToken === 'string' ? b.editToken : '';
  const operation = b.operation as string;
  const changes = Array.isArray(b.changes) ? b.changes : [];

  if (!participantId || !editToken) return json({ error: 'Missing credentials' }, { status: 400 });
  if (operation !== 'add' && operation !== 'remove') return json({ error: 'Invalid operation' }, { status: 400 });
  if (changes.length > MAX_BATCH_SIZE) return json({ error: 'Too many changes' }, { status: 400 });

  const db = await getDb(platform);
  const event = await getEventBySlug(db, params.slug);
  if (!event) return json({ error: 'Event not found' }, { status: 404 });
  if (event.status !== 'active') return json({ error: 'This event no longer accepts changes.' }, { status: 403 });

  const participant = await validateParticipantToken(db, participantId, editToken);
  if (!participant || participant.event_id !== event.id) return json({ error: 'Invalid credentials' }, { status: 401 });

  const columns = await getEventColumns(db, event);
  const validKeys = new Set(columns.map((c) => c.key));
  const slotCount = Math.ceil((event.end_time_minutes - event.start_time_minutes) / event.slot_interval_minutes);

  const validChanges: { columnKey: string; slotIndex: number }[] = [];
  for (const change of changes) {
    const ck = typeof (change as Record<string, unknown>).columnKey === 'string' ? (change as Record<string, unknown>).columnKey as string : '';
    const si = typeof (change as Record<string, unknown>).slotIndex === 'number' ? (change as Record<string, unknown>).slotIndex as number : -1;
    if (validKeys.has(ck) && si >= 0 && si < slotCount) {
      validChanges.push({ columnKey: ck, slotIndex: si });
    }
  }

  await applyAvailabilityBatch(db, event.id, participantId, operation as 'add' | 'remove', validChanges);

  const aggregates = await getAggregates(db, event.id);
  const deltas = validChanges.map((c) => ({
    columnKey: c.columnKey,
    slotIndex: c.slotIndex,
    count: aggregates[c.columnKey]?.[c.slotIndex] ?? 0,
  }));

  return json({ ok: true, updatedAggregateDeltas: deltas });
};
