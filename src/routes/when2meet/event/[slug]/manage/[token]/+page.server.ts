import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getDb, getEventByOrganizerToken, getParticipants } from '$lib/when2meet/db';

export const load: PageServerLoad = async ({ params, platform }) => {
  const db = await getDb(platform);
  const event = await getEventByOrganizerToken(db, params.slug, params.token);
  if (!event) throw error(404, 'Event not found or invalid token');

  const participants = await getParticipants(db, event.id);

  return {
    event: {
      id: event.id,
      slug: event.slug,
      title: event.title,
      description: event.description,
      mode: event.mode,
      timezone: event.timezone,
      startTimeMinutes: event.start_time_minutes,
      endTimeMinutes: event.end_time_minutes,
      status: event.status,
    },
    participantCount: participants.length,
    token: params.token,
  };
};
