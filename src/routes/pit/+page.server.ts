
import type { PageServerLoad } from './$types';
import { StatboticsEvent, StatboticsTeamEvent, StatboticsTeamMatches, StatboticsTeamYear } from './restTypes';



export const load = (async () => {
    const eventKey = "2025ctwat";
    const year = 2025;
    const team = 7407; //4909;

    const eventRequest = await fetch(`https://api.statbotics.io/v3/event/${eventKey}`);
    const event = await eventRequest.json<StatboticsEvent>();

    const teamYearRequest = await fetch(`https://api.statbotics.io/v3/team_year/${team}/${year}`);
    const teamYear = await teamYearRequest.json<StatboticsTeamYear>();

    const matchesRequest = await fetch(`https://api.statbotics.io/v3/matches?team=${team}&year=${year}&event=${eventKey}`);
    const matches = await matchesRequest.json<StatboticsTeamMatches>();


    const rankingsRequest = await fetch(`https://api.statbotics.io/v3/team_events?year=${year}&event=${eventKey}&metric=rank&ascending=true&limit=5`);
    const rankings = await rankingsRequest.json<StatboticsTeamEvent>();

    return {
        eventKey,
        team,
        year,
        event,
        teamYear,
        matches,
        rankings
    };
}) satisfies PageServerLoad;