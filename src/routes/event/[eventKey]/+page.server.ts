import type { PageServerLoad } from './$types';
import type { StatboticsTeam, StatboticsTeamEvent, StatboticsEvent } from '../../pit/restTypes';

const TEAM_NUMBER = 4909;

export const load = (async ({ params }) => {
	const { eventKey } = params;
	const year = parseInt(eventKey.slice(0, 4));

	let teamEvent: StatboticsTeam | null = null;
	let rankings: StatboticsTeamEvent = [];
	let eventDetails: StatboticsEvent | null = null;

	try {
		[teamEvent, rankings, eventDetails] = await Promise.all([
			fetch(`https://api.statbotics.io/v3/team_event/${TEAM_NUMBER}/${eventKey}`).then((res) =>
				res.ok ? res.json<StatboticsTeam>() : null
			),
			fetch(
				`https://api.statbotics.io/v3/team_events?year=${year}&event=${eventKey}&metric=rank&ascending=true`
			).then((res) => (res.ok ? res.json<StatboticsTeamEvent>() : [])),
			fetch(`https://api.statbotics.io/v3/event/${eventKey}`).then((res) =>
				res.ok ? res.json<StatboticsEvent>() : null
			)
		]);
	} catch {
		// API unavailable; return empty data
	}

	return {
		eventKey,
		teamNumber: TEAM_NUMBER,
		year,
		teamEvent,
		rankings: rankings || [],
		eventDetails
	};
}) satisfies PageServerLoad;
