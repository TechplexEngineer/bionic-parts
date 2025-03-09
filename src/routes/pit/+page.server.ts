
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { NexusEventStatus, StatboticsEvent, StatboticsTeamEvent, StatboticsTeamMatches, StatboticsTeamYear } from './restTypes';
import { NEXUS_API_KEY } from '$env/static/private';



export const load = (async ({ params, url }) => {

    if (!url.searchParams.get("eventKey") || !url.searchParams.get("teamNumber")) {
        throw redirect(307, '/pit/config')
    }

    const eventKey = url.searchParams.get("eventKey");
    const year = new Date().getFullYear();
    const teamNumber = url.searchParams.get("teamNumber"); //4909;

    const eventRequest = await fetch(`https://api.statbotics.io/v3/event/${eventKey}`);
    const event = await eventRequest.json<StatboticsEvent>();

    const teamYearRequest = await fetch(`https://api.statbotics.io/v3/team_year/${teamNumber}/${year}`);
    const teamYear = await teamYearRequest.json<StatboticsTeamYear>();

    const matchesRequest = await fetch(`https://api.statbotics.io/v3/matches?team=${teamNumber}&year=${year}&event=${eventKey}`);
    const matches = await matchesRequest.json<StatboticsTeamMatches>();


    const rankingsRequest = await fetch(`https://api.statbotics.io/v3/team_events?year=${year}&event=${eventKey}&metric=rank&ascending=true&limit=4`);
    const rankings = await rankingsRequest.json<StatboticsTeamEvent>();

    const ourRankingsRequest = await fetch(`https://api.statbotics.io/v3/team_events?team=${teamNumber}&year=${year}&event=${eventKey}&metric=rank&ascending=true&limit=5`);
    const ourRankingArr = await ourRankingsRequest.json<StatboticsTeamEvent>();

    // https://frc.nexus/api/v1/event/{eventKey}
    const nexusEventStatusRequest = await fetch(`https://frc.nexus/api/v1/event/${eventKey}`, {
        headers: {
            "Nexus-Api-Key": NEXUS_API_KEY
        }
    });
    const nexusEventStatus = await nexusEventStatusRequest.json<NexusEventStatus>();

    // console.log(nexusEventStatus.matches[nexusEventStatus.matches.length - 1]);
    console.log(nexusEventStatus.matches.map((m) => `${m.label} ${m.status}`));


    return {
        eventKey,
        teamNumber,
        year,
        event,
        teamYear,
        upcommingMatches: matches.filter((m) => m.result.winner == null)
            .map((m) => {
                let color = 'Unknown';
                if (
                    m.alliances.red.team_keys.includes(parseInt(teamNumber)) ||
                    m.alliances.red.surrogate_team_keys.includes(teamNumber)
                ) {
                    color = 'Red';
                } else if (
                    m.alliances.blue.team_keys.includes(parseInt(teamNumber)) ||
                    m.alliances.blue.surrogate_team_keys.includes(teamNumber)
                ) {
                    color = 'Blue';
                }

                // const now = new Date();
                // let duration = Math.round((new Date(m.time * 1000).getTime() - now.getTime()) / 60000);
                // if (duration < 0)
                //     duration = 0;
                // const hours = Math.floor(duration / 60);
                // const minutes = duration % 60;
                // const seconds = Math.round((duration - Math.floor(duration)) * 60);
                // const formattedDuration = `~${hours}h ${minutes}m ${seconds}s`;

                return {
                    match: m.key.replace(`${eventKey}_`, '').toUpperCase(),
                    predictedTime: -1,
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
        ourRanking: ourRankingArr[0],
        lastUpdated: new Date(),
        nexusEventStatus
    };
}) satisfies PageServerLoad;