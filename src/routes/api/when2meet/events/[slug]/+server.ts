import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getDb, getEventBySlug, getEventColumns, getParticipants, getAggregates } from '$lib/when2meet/db';
import { computeTopSlots } from '$lib/when2meet/grid';

export const GET: RequestHandler = async ({ params, platform }) => {
  const db = await getDb(platform);
  const event = await getEventBySlug(db, params.slug);
  if (!event) return json({ error: 'Event not found' }, { status: 404 });

  const [columns, participants, aggregates] = await Promise.all([
    getEventColumns(db, event),
    getParticipants(db, event.id),
    getAggregates(db, event.id),
  ]);

  const slotCount = Math.ceil((event.end_time_minutes - event.start_time_minutes) / event.slot_interval_minutes);
  const topSlots = computeTopSlots(aggregates, columns, participants.length, slotCount, event.start_time_minutes, event.slot_interval_minutes);

  return json({
    event: {
      slug: event.slug,
      title: event.title,
      description: event.description,
      mode: event.mode,
      timezone: event.timezone,
      startTimeMinutes: event.start_time_minutes,
      endTimeMinutes: event.end_time_minutes,
      slotIntervalMinutes: event.slot_interval_minutes,
      status: event.status,
      columns,
    },
    participants: participants.map((p) => ({ id: p.id, displayName: p.display_name })),
    aggregates,
    topSlots,
  });
};
