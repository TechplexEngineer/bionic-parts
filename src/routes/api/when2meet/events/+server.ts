import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getDb, createEvent } from '$lib/when2meet/db';

export const POST: RequestHandler = async ({ request, platform }) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const b = body as Record<string, unknown>;

  const title = typeof b.title === 'string' ? b.title.trim() : '';
  if (!title || title.length > 120) return json({ error: 'Title required (max 120 chars)' }, { status: 400 });

  const description = typeof b.description === 'string' ? b.description.trim().slice(0, 1000) : undefined;
  const mode = b.mode as string;
  if (mode !== 'specific_dates' && mode !== 'days_of_week') return json({ error: 'Invalid mode' }, { status: 400 });

  const timezone = typeof b.timezone === 'string' ? b.timezone : '';
  if (!timezone) return json({ error: 'Timezone required' }, { status: 400 });

  const startTimeMinutes = Number(b.startTimeMinutes);
  const endTimeMinutes = Number(b.endTimeMinutes);
  const slotIntervalMinutes = Number(b.slotIntervalMinutes) || 15;

  if (isNaN(startTimeMinutes) || isNaN(endTimeMinutes)) return json({ error: 'Invalid time range' }, { status: 400 });
  if (startTimeMinutes >= endTimeMinutes) return json({ error: 'End time must be after start time' }, { status: 400 });
  if (endTimeMinutes - startTimeMinutes > 24 * 60) return json({ error: 'Event cannot exceed 24 hours' }, { status: 400 });

  let selectedDates: string[] | undefined;
  let selectedWeekdays: number[] | undefined;

  if (mode === 'specific_dates') {
    selectedDates = Array.isArray(b.selectedDates)
      ? (b.selectedDates as unknown[]).filter((d): d is string => typeof d === 'string')
      : [];
    if (selectedDates.length === 0) return json({ error: 'At least one date required' }, { status: 400 });
    if (selectedDates.length > 62) return json({ error: 'Too many dates (max 62)' }, { status: 400 });
  } else {
    selectedWeekdays = Array.isArray(b.selectedWeekdays)
      ? (b.selectedWeekdays as unknown[]).filter((d): d is number => typeof d === 'number')
      : [];
    if (selectedWeekdays.length === 0) return json({ error: 'At least one weekday required' }, { status: 400 });
  }

  const db = await getDb(platform);
  const { slug, organizerToken } = await createEvent(db, {
    title, description, mode, timezone, startTimeMinutes, endTimeMinutes, slotIntervalMinutes,
    selectedDates, selectedWeekdays
  });

  return json({
    slug,
    publicUrl: `/when2meet/event/${slug}`,
    manageUrl: `/when2meet/event/${slug}/manage/${organizerToken}`
  });
};
