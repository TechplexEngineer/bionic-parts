import { TBA_API_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';

const TEAM_KEY = 'frc4909';
const TEAM_NUMBER = 4909;
const CURRENT_YEAR = new Date().getFullYear();

export const load = (async ({ url, fetch }) => {
	const yearStr = url.searchParams.get('year');
	const year = yearStr ? parseInt(yearStr) : CURRENT_YEAR;

	let events: any[] = [];
	try {
		const res = await fetch(
			`https://www.thebluealliance.com/api/v3/team/${TEAM_KEY}/events/${year}`,
			{ headers: { 'X-TBA-Auth-Key': TBA_API_KEY, accept: 'application/json' } }
		);
		if (res.ok) events = await res.json<any[]>();
	} catch {
		events = [];
	}

	const processedEvents = (events || []).map((event: any) => {
		let displayWeek = event.week;
		if (displayWeek === null || displayWeek === undefined) {
			if (event.event_type === 100) displayWeek = -1; // Week 0 for Preseason
		}
		return { ...event, displayWeek };
	});

	const sortedEvents = processedEvents.sort((a: any, b: any) => {
		// Championship/off-season/preseason events have no week — sort preseason first, others last
		const PRESEASON = -1;
		const SORT_LAST = 99;
		
		const weekA = a.displayWeek ?? (a.event_type === 100 ? PRESEASON : SORT_LAST);
		const weekB = b.displayWeek ?? (b.event_type === 100 ? PRESEASON : SORT_LAST);
		
		if (weekA !== weekB) return weekA - weekB;
		return (a.start_date || '').localeCompare(b.start_date || '');
	});

	return {
		year,
		currentYear: CURRENT_YEAR,
		teamNumber: TEAM_NUMBER,
		events: sortedEvents
	};
}) satisfies PageServerLoad;
