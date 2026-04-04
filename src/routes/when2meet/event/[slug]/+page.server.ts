import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getDb, getEventBySlug, getEventColumns, getParticipants, getAggregates } from '$lib/when2meet/db';
import { computeTopSlots } from '$lib/when2meet/grid';

export const load: PageServerLoad = async ({ params, platform }) => {
  const db = await getDb(platform);
  const event = await getEventBySlug(db, params.slug);
  if (!event) throw error(404, 'Event not found');

  const [columns, participants, aggregates] = await Promise.all([
    getEventColumns(db, event),
    getParticipants(db, event.id),
    getAggregates(db, event.id),
  ]);

  const slotCount = Math.ceil((event.end_time_minutes - event.start_time_minutes) / event.slot_interval_minutes);
  const topSlots = computeTopSlots(
    aggregates,
    columns,
    participants.length,
    slotCount,
    event.start_time_minutes,
    event.slot_interval_minutes
  );

  return {
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
  };
};
