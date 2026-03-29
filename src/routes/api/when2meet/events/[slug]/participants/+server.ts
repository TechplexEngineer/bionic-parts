import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getDb, getEventBySlug, createParticipant } from '$lib/when2meet/db';

export const POST: RequestHandler = async ({ params, request, platform }) => {
  let body: unknown;
  try { body = await request.json(); } catch { return json({ error: 'Invalid JSON' }, { status: 400 }); }
  const b = body as Record<string, unknown>;

  const rawName = typeof b.displayName === 'string' ? b.displayName : '';
  const displayName = rawName.trim().replace(/\s+/g, ' ').slice(0, 40);
  if (!displayName) return json({ error: 'Display name required' }, { status: 400 });

  const db = await getDb(platform);
  const event = await getEventBySlug(db, params.slug);
  if (!event) return json({ error: 'Event not found' }, { status: 404 });
  if (event.status !== 'active') return json({ error: 'This event no longer accepts changes.' }, { status: 403 });

  try {
    const { id, editToken } = await createParticipant(db, event.id, displayName);
    return json({ participantId: id, editToken, displayName });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    if (msg.includes('UNIQUE')) {
      return json({ error: 'That name is already in use for this event.' }, { status: 409 });
    }
    throw e;
  }
};
