import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getDb, getEventBySlug, getSlotParticipantNames } from '$lib/when2meet/db';

export const GET: RequestHandler = async ({ params, url, platform }) => {
  const db = await getDb(platform);
  const event = await getEventBySlug(db, params.slug);
  if (!event) return json({ error: 'Not found' }, { status: 404 });

  const columnKey = url.searchParams.get('columnKey') ?? '';
  const slotIndex = Number(url.searchParams.get('slotIndex') ?? '-1');
  if (!columnKey || slotIndex < 0) return json({ names: [] });

  const names = await getSlotParticipantNames(db, event.id, columnKey, slotIndex);
  return json({ names });
};
