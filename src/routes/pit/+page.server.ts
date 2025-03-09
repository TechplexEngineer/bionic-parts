
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


    const rankingsRequest = await fetch(`https://api.statbotics.io/v3/team_events?year=${year}&event=${eventKey}&metric=rank&ascending=true&limit=4`);
    const rankings = await rankingsRequest.json<StatboticsTeamEvent>();

    const ourRankingsRequest = await fetch(`https://api.statbotics.io/v3/team_events?team=${team}&year=${year}&event=${eventKey}&metric=rank&ascending=true&limit=5`);
    const ourRanking = await ourRankingsRequest.json<StatboticsTeamEvent>();

    return {
        eventKey,
        team,
        year,
        event,
        teamYear,
        upcommingMatches: matches.filter((m) => m.result.winner == null)
            .map((m) => {
                let color = 'Unknown';
                if (
                    m.alliances.red.team_keys.includes(team) ||
                    m.alliances.red.surrogate_team_keys.includes(team)
                ) {
                    color = 'Red';
                } else if (
                    m.alliances.blue.team_keys.includes(team) ||
                    m.alliances.blue.surrogate_team_keys.includes(team)
                ) {
                    color = 'Blue';
                }

                const now = new Date();
                const duration = Math.round((new Date(m.time * 1000).getTime() - now.getTime()) / 60000);
                const hours = Math.floor(duration / 60);
                const minutes = duration % 60;
                const seconds = Math.floor((new Date(m.time * 1000).getTime() - now.getTime()) / 1000) % 60;
                const formattedDuration = `~${hours}h ${minutes}m ${seconds}s`;

                return {
                    match: m.key.replace(`${eventKey}_`, '').toUpperCase(),
                    predictedTime: formattedDuration,
                    color: color
                };
            }),
        nextmatch: matches.filter((m) => m.result.winner == null)[0],
        rankings: rankings.map((t) => {
            return {
                rank: t.record.qual.rank,
                team: `${t.team} - ${t.team_name}`,
                epa: JSON.stringify(t.epa.total_points.mean, null, 2)
            };
        }),
        ourRanking: ourRanking[0],
        lastUpdated: new Date()
    };
}) satisfies PageServerLoad;