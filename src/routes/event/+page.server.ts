import type { PageServerLoad } from './$types';
import type { StatboticsTeam } from '../pit/restTypes';

const TEAM_NUMBER = 4909;
const CURRENT_YEAR = new Date().getFullYear();

export const load = (async ({ url }) => {
	const yearStr = url.searchParams.get('year');
	const year = yearStr ? parseInt(yearStr) : CURRENT_YEAR;

	let events: StatboticsTeam[] = [];
	try {
		events = await fetch(
			`https://api.statbotics.io/v3/team_events?team=${TEAM_NUMBER}&year=${year}`
		).then((res) => (res.ok ? res.json() : []));
	} catch {
		events = [];
	}

	const sortedEvents = (events || []).sort((a, b) => (a.time || 0) - (b.time || 0));

	return {
		year,
		currentYear: CURRENT_YEAR,
		teamNumber: TEAM_NUMBER,
		events: sortedEvents
	};
}) satisfies PageServerLoad;
