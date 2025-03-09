
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

    // const eventRequest = await fetch(`https://api.statbotics.io/v3/event/${eventKey}`);
    // const event = await eventRequest.json<StatboticsEvent>();
    // console.log('event', event);

    const [teamYear, matches, rankings, nexusEventStatus] = await Promise.all([
        fetch(`https://api.statbotics.io/v3/team_year/${teamNumber}/${year}`).then(res => res.json<StatboticsTeamYear>()),
        fetch(`https://api.statbotics.io/v3/matches?year=${year}&event=${eventKey}`).then(res => res.json<StatboticsTeamMatches>()),
        fetch(`https://api.statbotics.io/v3/team_events?year=${year}&event=${eventKey}&metric=rank&ascending=true`).then(res => res.json<StatboticsTeamEvent>()),
        fetch(`https://frc.nexus/api/v1/event/${eventKey}`, {
            headers: {
                "Nexus-Api-Key": NEXUS_API_KEY
            }
        }).then(res => res.json<NexusEventStatus>())
    ]);


    const timestampToDateTime = (timestamp: number) => {
        const date = new Date(timestamp);
        const today = new Date();
        const isSameDay = date.toDateString() === today.toDateString();
        return isSameDay ? date.toLocaleTimeString() : date.toLocaleString();
    };

    const upcommingMatches = nexusEventStatus.matches
        .filter((m) => m.status != 'On field');



    const tbaMatch = nexusToTBA(upcommingMatches[0].label);
    // console.log('tbaMatch', tbaMatch, upcommingMatches[0].label);

    const nextMatch = matches.find(m => m.key == `${eventKey}_${tbaMatch}`);
    // console.log("nextMatch", nextMatch);
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
                epa: rankings.find((t) => t.team == parseInt(upcommingMatches[0].redTeams[0]))?.epa.total_points.mean || "??"
            },
            red2: {
                number: upcommingMatches[0].redTeams ? upcommingMatches[0].redTeams[1] : "",
                epa: rankings.find((t) => t.team == parseInt(upcommingMatches[0].redTeams[1]))?.epa.total_points.mean || "??"
            },
            red3: {
                number: upcommingMatches[0].redTeams ? upcommingMatches[0].redTeams[2] : "",
                epa: rankings.find((t) => t.team == parseInt(upcommingMatches[0].redTeams[2]))?.epa.total_points.mean || "??"
            },
            blue1: {
                number: upcommingMatches[0].blueTeams ? upcommingMatches[0].blueTeams[0] : "",
                epa: rankings.find((t) => t.team == parseInt(upcommingMatches[0].blueTeams[0]))?.epa.total_points.mean || "??"
            },
            blue2: {
                number: upcommingMatches[0].blueTeams ? upcommingMatches[0].blueTeams[1] : "",
                epa: rankings.find((t) => t.team == parseInt(upcommingMatches[0].blueTeams[1]))?.epa.total_points.mean || "??"
            },
            blue3: {
                number: upcommingMatches[0].blueTeams ? upcommingMatches[0].blueTeams[2] : "",
                epa: rankings.find((t) => t.team == parseInt(upcommingMatches[0].blueTeams[2]))?.epa.total_points.mean || "??"
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
            blueTeams: m.blueTeams || '',
            redTeams: m.redTeams || ''
        })).filter(m => m.blueTeams == null || m.redTeams == null || m.blueTeams.includes(`${teamNumber}`) || m.redTeams.includes(`${teamNumber}`)),
        nextmatch: ourNextMatch, //matches.filter((m) => m.result.winner == null)[0],
        rankings: rankings.map((t) => {
            return {
                rank: t.record.qual.rank,
                team: `${t.team} - ${t.team_name}`,
                epa: JSON.stringify(t.epa.total_points.mean, null, 2)
            };
        }).slice(0, 4),
        ourRanking: rankings.find((t) => t.team == teamNumber),
        lastUpdated: new Date(),
        nexusEventStatus
    };
}) satisfies PageServerLoad;

function mapNexusToTBA(label: string) {
    throw new Error('Function not implemented.');
}
