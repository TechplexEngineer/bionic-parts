import { TBA_API_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';

const TEAM_KEY = 'frc4909';
const TEAM_NUMBER = 4909;

const compLevelOrder: Record<string, number> = { qm: 0, ef: 1, qf: 2, sf: 3, f: 4 };

export const load = (async ({ params, fetch }) => {
	const { eventKey } = params;
	const year = parseInt(eventKey.slice(0, 4));

	const headers = { 'X-TBA-Auth-Key': TBA_API_KEY, accept: 'application/json' };

	let eventDetails: any = null;
	let teamMatches: any[] = [];
	let rankings: any = null;
	let teamStatus: any = null;

	try {
		[eventDetails, teamMatches, rankings, teamStatus] = await Promise.all([
			fetch(`https://www.thebluealliance.com/api/v3/event/${eventKey}`, { headers }).then((r) =>
				r.ok ? r.json<any>() : null
			),
			fetch(
				`https://www.thebluealliance.com/api/v3/team/${TEAM_KEY}/event/${eventKey}/matches`,
				{ headers }
			).then((r) => (r.ok ? r.json<any[]>() : [])),
			fetch(`https://www.thebluealliance.com/api/v3/event/${eventKey}/rankings`, {
				headers
			}).then((r) => (r.ok ? r.json<any>() : null)),
			fetch(
				`https://www.thebluealliance.com/api/v3/team/${TEAM_KEY}/event/${eventKey}/status`,
				{ headers }
			).then((r) => (r.ok ? r.json<any>() : null))
		]);
	} catch {
		// API unavailable; return empty data
	}

	const sortedMatches = (teamMatches || []).sort((a: any, b: any) => {
		const levelDiff = (compLevelOrder[a.comp_level] ?? 5) - (compLevelOrder[b.comp_level] ?? 5);
		if (levelDiff !== 0) return levelDiff;
		if (a.set_number !== b.set_number) return a.set_number - b.set_number;
		return a.match_number - b.match_number;
	});

	return {
		eventKey,
		teamKey: TEAM_KEY,
		teamNumber: TEAM_NUMBER,
		year,
		eventDetails,
		matches: sortedMatches,
		rankings,
		teamStatus
	};
}) satisfies PageServerLoad;
