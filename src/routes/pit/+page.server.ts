
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { StatboticsEvent, StatboticsTeamEvent, StatboticsTeamMatches, StatboticsTeamYear } from './restTypes';



export const load = (async ({ params, url }) => {

    console.log("url", url.searchParams);

    if (!url.searchParams.get("eventKey") || !url.searchParams.get("teamNumber")) {
        throw redirect(307, '/pit/config')
    }

    const eventKey = url.searchParams.get("eventKey");
    const year = new Date().getFullYear();
    const teamNumber = url.searchParams.get("teamNumber"); //4909;

    console.log("eventKey", eventKey);
    console.log("teamNumber", teamNumber);

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
    let ourRanking = {};
    if (ourRankingArr.length > 0) {
        ourRanking = ourRankingArr[0];
    } else {
        ourRanking = {
            record: {
                qual: {
                    rank: "UNKNOWN",
                    num_teams: "UNKNOWN"
                }
            },
            district_points: 0,
            district_rank: 0,
            competing: {
                this_week: false,
                next_event_key: "",
                next_event_name: "",
                next_event_week: 0
            }
        };
    }
    console.log('ourRanking', ourRanking);


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
                    m.alliances.red.team_keys.includes(teamNumber) ||
                    m.alliances.red.surrogate_team_keys.includes(teamNumber)
                ) {
                    color = 'Red';
                } else if (
                    m.alliances.blue.team_keys.includes(teamNumber) ||
                    m.alliances.blue.surrogate_team_keys.includes(teamNumber)
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