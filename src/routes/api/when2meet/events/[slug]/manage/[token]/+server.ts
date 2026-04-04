import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getDb, getEventByOrganizerToken, updateEvent, getParticipants } from '$lib/when2meet/db';

export const PATCH: RequestHandler = async ({ params, request, platform }) => {
  let body: unknown;
  try { body = await request.json(); } catch { return json({ error: 'Invalid JSON' }, { status: 400 }); }
  const b = body as Record<string, unknown>;

  const db = await getDb(platform);
  const event = await getEventByOrganizerToken(db, params.slug, params.token);
  if (!event) return json({ error: 'Event not found or invalid token' }, { status: 404 });

  const participants = await getParticipants(db, event.id);
  if (participants.length > 0 && (b.mode !== undefined || b.selectedDates !== undefined || b.selectedWeekdays !== undefined)) {
    return json({ error: 'Cannot change event structure after participants have joined.' }, { status: 400 });
  }

  const fields: { title?: string; description?: string; status?: 'active' | 'locked' | 'deleted' } = {};
  if (typeof b.title === 'string') fields.title = b.title.trim().slice(0, 120);
  if (typeof b.description === 'string') fields.description = b.description.trim().slice(0, 1000);
  if (b.status === 'active' || b.status === 'locked' || b.status === 'deleted') fields.status = b.status;

  await updateEvent(db, event.id, fields);
  return json({ ok: true });
};
