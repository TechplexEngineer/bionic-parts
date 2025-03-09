
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { NexusEventStatus, StatboticsEvent, StatboticsTeamEvent, StatboticsTeamMatches, StatboticsTeamYear } from './restTypes';
import { NEXUS_API_KEY } from '$env/static/private';
import { parse } from 'svelte/compiler';
import { nexusToTBA } from './mapNexusToTBA';



export const load = (async ({ params, url }) => {

    const teamNumberStr = url.searchParams.get("teamNumber");
    const eventKey = url.searchParams.get("eventKey");
    const year = new Date().getFullYear();

    if (!eventKey || !teamNumberStr) {
        throw redirect(307, '/pit/config')
    }
    const teamNumber = parseInt(teamNumberStr);

    const eventRequest = await fetch(`https://api.statbotics.io/v3/event/${eventKey}`);
    const event = await eventRequest.json<StatboticsEvent>();

    const teamYearRequest = await fetch(`https://api.statbotics.io/v3/team_year/${teamNumber}/${year}`);
    const teamYear = await teamYearRequest.json<StatboticsTeamYear>();

    const matchesRequest = await fetch(`https://api.statbotics.io/v3/matches?&year=${year}&event=${eventKey}`); //team=${teamNumber}
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
    // console.log('nexusEventStatus', nexusEventStatus);


    // console.log(nexusEventStatus.matches[nexusEventStatus.matches.length - 1]);
    // console.log(nexusEventStatus.matches.map((m) => `${m.label} ${m.status}`));

    // const upcommingMatchesOld = matches.filter((m) => m.result.winner == null)
    //     .map((m) => {
    //         let color = 'Unknown';
    //         if (
    //             m.alliances.red.team_keys.includes(parseInt(teamNumber)) ||
    //             m.alliances.red.surrogate_team_keys.includes(teamNumber)
    //         ) {
    //             color = 'Red';
    //         } else if (
    //             m.alliances.blue.team_keys.includes(parseInt(teamNumber)) ||
    //             m.alliances.blue.surrogate_team_keys.includes(teamNumber)
    //         ) {
    //             color = 'Blue';
    //         }

    //         return {
    //             match: m.key.replace(`${eventKey}_`, '').toUpperCase(),
    //             predictedTime: -1,
    //             color: color
    //         };
    //     });

    const timestampToDateTime = (timestamp: number) => {
        const date = new Date(timestamp);
        const today = new Date();
        const isSameDay = date.toDateString() === today.toDateString();
        return isSameDay ? date.toLocaleTimeString() : date.toLocaleString();
    };

    const upcommingMatches = nexusEventStatus.matches
        .filter((m) => m.status != 'On field');

    // console.log("matches", matches)


    // find the match where the label matches. But match_name is in the form Qual 15 and the equivalent label is Qualification 15, for playoffs match_name is Semis 13 Match 1 and the quivalent label Playoff 13 for finals the match_name is Final 1 Match 1 and the quivalent is Final 1
    // const getMatchFromLabel = (label: string, matches: StatboticsTeamMatches) => {
    //     const labelParts = label.split(' ');
    //     let matchName = '';

    //     if (label.startsWith('Qualification')) {
    //         matchName = `Qual ${labelParts[1]}`;
    //     } else if (label.startsWith('Playoff')) {
    //         matchName = `Semis ${labelParts[1]} Match`;
    //     } else if (label.startsWith('Final')) {
    //         matchName = `Final ${labelParts[1]} Match}`;
    //     }

    //     return matches.find((m) => m.match_name.startsWith(matchName));
    // };

    // console.log("matchNumbers", matches.map((m) => m.key.replace(`${eventKey}_`, '')));
    // console.log('nexus Matches', nexusEventStatus.matches.map((m) => m.label));


    const tbaMatch = nexusToTBA(upcommingMatches[0].label);
    console.log('tbaMatch', tbaMatch, upcommingMatches[0].label);

    const nextMatch = matches.find(m => m.key == `${eventKey}_${tbaMatch}`);
    console.log("nextMatch", nextMatch);
    const ourWinProb = nextMatch ?
        Math.round(
            nextMatch.alliances.red.team_keys.includes(teamNumber)
                ? nextMatch.pred.red_win_prob * 100
                : 100 - nextMatch.pred.red_win_prob * 100
        ) : "??"

    const ourNextMatch = {
        match_name: upcommingMatches[0].label,
        alliances: {
            red1: {
                number: upcommingMatches[0].redTeams ? upcommingMatches[0].redTeams[0] : "",
                epa: 55
            },
            red2: {
                number: upcommingMatches[0].redTeams ? upcommingMatches[0].redTeams[1] : "",
                epa: 55
            },
            red3: {
                number: upcommingMatches[0].redTeams ? upcommingMatches[0].redTeams[2] : "",
                epa: 55
            },
            blue1: {
                number: upcommingMatches[0].blueTeams ? upcommingMatches[0].blueTeams[0] : "",
                epa: 55
            },
            blue2: {
                number: upcommingMatches[0].blueTeams ? upcommingMatches[0].blueTeams[1] : "",
                epa: 55
            },
            blue3: {
                number: upcommingMatches[0].blueTeams ? upcommingMatches[0].blueTeams[2] : "",
                epa: 55
            }
        },
        ourWinProb: ourWinProb
    };

    return {
        eventKey,
        teamNumber,
        year,
        teamYear,
        upcommingMatches: upcommingMatches.map((m) => ({
            match: m.label,
            predictedTime: timestampToDateTime(m.times.estimatedQueueTime),
            color: m.blueTeams?.includes(`${teamNumber}`)
                ? 'Blue'
                : m.redTeams?.includes(`${teamNumber}`)
                    ? 'Red'
                    : '',
            // blueTeams: m.blueTeams || '',
            // redTeams: m.redTeams || ''
        })),
        nextmatch: ourNextMatch, //matches.filter((m) => m.result.winner == null)[0],
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

function mapNexusToTBA(label: string) {
    throw new Error('Function not implemented.');
}
