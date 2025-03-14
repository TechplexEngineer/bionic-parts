
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { NexusEventStatus, StatboticsEvent, StatboticsTeam, StatboticsTeamEvent, StatboticsTeamMatches, StatboticsTeamYear } from './restTypes';
import { NEXUS_API_KEY } from '$env/static/private';
import { parse } from 'svelte/compiler';
import { nexusToTBA } from './mapNexusToTBA';
import { getSimData } from './simdata';

const getData = async (teamNumber: number, year: number, eventKey: string): Promise<[teamYear: StatboticsTeamYear, matches: StatboticsTeamMatches, ranking: StatboticsTeamEvent, nexusEventStatus: NexusEventStatus, eventKey: string]> => {
    if (eventKey.toUpperCase() == "SIM") {
        return getSimData();
    }
    return await Promise.all([
        fetch(`https://api.statbotics.io/v3/team_year/${teamNumber}/${year}`).then(res => res.json<StatboticsTeamYear>()),
        fetch(`https://api.statbotics.io/v3/matches?year=${year}&event=${eventKey}`).then(res => res.json<StatboticsTeamMatches>()),
        fetch(`https://api.statbotics.io/v3/team_events?year=${year}&event=${eventKey}&metric=rank&ascending=true`).then(res => res.json<StatboticsTeamEvent>()),
        fetch(`https://frc.nexus/api/v1/event/${eventKey}`, {
            headers: {
                "Nexus-Api-Key": NEXUS_API_KEY
            }
        }).then(res => res.json<NexusEventStatus>()),
        eventKey
    ]);
}

export const load = (async ({ params, url }) => {

    const teamNumberStr = url.searchParams.get("teamNumber");
    const eventKeyTmp = url.searchParams.get("eventKey");
    const year = new Date().getFullYear();

    if (!eventKeyTmp || !teamNumberStr) {
        throw redirect(307, '/pit/config')
    }
    const teamNumber = parseInt(teamNumberStr);

    const [teamYear, matches, rankings, nexusEventStatus, eventKey] = await getData(teamNumber, year, eventKeyTmp);

    // const eventRequest = await fetch(`https://api.statbotics.io/v3/event/${eventKey}`);
    // const event = await eventRequest.json<StatboticsEvent>();
    // console.log('event', event);

    // const [teamYear, matches, rankings, nexusEventStatus] = await Promise.all([
    //     fetch(`https://api.statbotics.io/v3/team_year/${teamNumber}/${year}`).then(res => res.json<StatboticsTeamYear>()),
    //     fetch(`https://api.statbotics.io/v3/matches?year=${year}&event=${eventKey}`).then(res => res.json<StatboticsTeamMatches>()),
    //     fetch(`https://api.statbotics.io/v3/team_events?year=${year}&event=${eventKey}&metric=rank&ascending=true`).then(res => res.json<StatboticsTeamEvent>()),
    //     fetch(`https://frc.nexus/api/v1/event/${eventKey}`, {
    //         headers: {
    //             "Nexus-Api-Key": NEXUS_API_KEY
    //         }
    //     }).then(res => res.json<NexusEventStatus>())
    // ]);


    const timestampToDateTime = (timestamp: number) => {
        const date = new Date(timestamp);
        const today = new Date();
        const isSameDay = date.toDateString() === today.toDateString();
        return isSameDay ? date.toLocaleTimeString() : date.toLocaleString();
    };

    const upcommingMatches = nexusEventStatus.matches
        .filter((m) => m.status != 'On field');

    const ourNextMatchNexus = upcommingMatches.find((m) => m.redTeams?.includes(`${teamNumber}`) || m.blueTeams?.includes(`${teamNumber}`));


    // console.log('upcommingMatches', upcommingMatches[0]);

    const tbaMatch = nexusToTBA(ourNextMatchNexus?.label || "");
    // console.log('tbaMatch', tbaMatch, upcommingMatches[0].label);

    const nextMatch = matches.find(m => {
        // console.log("m.key", m.key);
        return m.key == `${eventKey}_${tbaMatch}`
    });
    // console.log("nextMatch", nextMatch);
    const ourWinProb = nextMatch ?
        Math.round(
            nextMatch.alliances.red.team_keys.includes(teamNumber)
                ? nextMatch.pred.red_win_prob * 100
                : 100 - nextMatch.pred.red_win_prob * 100
        ) : "??"

    // console.log('upcommingMatches', upcommingMatches);
    const rankingPoints = nextMatch ?
        nextMatch.alliances.red.team_keys.includes(teamNumber) ? [
            { name: "Auto RP", pred: nextMatch.pred.red_auto_rp },
            { name: "Coral RP", pred: nextMatch.pred.red_coral_rp },
            { name: "Barge RP", pred: nextMatch.pred.red_barge_rp },
        ] : [
            { name: "Auto", pred: nextMatch.pred.blue_auto_rp },
            { name: "Coral", pred: nextMatch.pred.blue_coral_rp },
            { name: "Barge", pred: nextMatch.pred.blue_barge_rp },
        ]
        : [];


    const ourNextMatch = {
        match_name: ourNextMatchNexus?.label || "",
        alliances: {
            red1: {
                number: ourNextMatchNexus && ourNextMatchNexus.redTeams ? ourNextMatchNexus.redTeams[0] : "",
                epa: ourNextMatchNexus && ourNextMatchNexus.redTeams ? rankings.find((t) => t.team == parseInt(ourNextMatchNexus.redTeams[0]))?.epa.total_points.mean || "??" : "?"
            },
            red2: {
                number: ourNextMatchNexus && ourNextMatchNexus.redTeams ? ourNextMatchNexus.redTeams[1] : "",
                epa: ourNextMatchNexus && ourNextMatchNexus.redTeams ? rankings.find((t) => t.team == parseInt(ourNextMatchNexus.redTeams[1]))?.epa.total_points.mean || "??" : "?"
            },
            red3: {
                number: ourNextMatchNexus && ourNextMatchNexus.redTeams ? ourNextMatchNexus.redTeams[2] : "",
                epa: ourNextMatchNexus && ourNextMatchNexus.redTeams ? rankings.find((t) => t.team == parseInt(ourNextMatchNexus.redTeams[2]))?.epa.total_points.mean || "??" : "?"
            },
            blue1: {
                number: ourNextMatchNexus && ourNextMatchNexus.blueTeams ? ourNextMatchNexus.blueTeams[0] : "",
                epa: ourNextMatchNexus && ourNextMatchNexus.blueTeams ? rankings.find((t) => t.team == parseInt(ourNextMatchNexus.blueTeams[0]))?.epa.total_points.mean || "??" : "?"
            },
            blue2: {
                number: ourNextMatchNexus && ourNextMatchNexus.blueTeams ? ourNextMatchNexus.blueTeams[1] : "",
                epa: ourNextMatchNexus && ourNextMatchNexus.blueTeams ? rankings.find((t) => t.team == parseInt(ourNextMatchNexus.blueTeams[1]))?.epa.total_points.mean || "??" : "?"
            },
            blue3: {
                number: ourNextMatchNexus && ourNextMatchNexus.blueTeams ? ourNextMatchNexus.blueTeams[2] : "",
                epa: ourNextMatchNexus && ourNextMatchNexus.blueTeams ? rankings.find((t) => t.team == parseInt(ourNextMatchNexus.blueTeams[2]))?.epa.total_points.mean || "??" : "?"
            }
        },
        ourWinProb: ourWinProb,
        rankingPoints

    };

    // console.log("ourRanking", teamNumber, rankings.find((t) => t.team == teamNumber));

    const mapFn = (t: StatboticsTeam) => {
        return {
            rank: t.record.qual.rank,
            teamNumber: t.team,
            teamName: t.team_name,
            epa: Math.round(t.epa.total_points.mean * 10) / 10
        };
    }

    const lastItem = 6;
    const rankingsDisplay = rankings.map(mapFn).sort((a, b) => a.rank - b.rank).slice(0, lastItem);
    if (!rankingsDisplay.find((t) => t.teamNumber == teamNumber)) {
        const ourRanking = rankings.find((t) => t.team == teamNumber);
        if (ourRanking) {
            rankingsDisplay.push({
                rank: "..." as any,
                teamNumber: `...` as any,
                teamName: "..." as any,
                epa: "..." as any
            });
            rankingsDisplay.push(mapFn(ourRanking));
        }
    } else {
        rankingsDisplay.push(mapFn(rankings[lastItem]));
        rankingsDisplay.push(mapFn(rankings[lastItem + 1]));
    }


    return {
        eventKey,
        teamNumber,
        year,
        teamYear,
        upcommingMatches: upcommingMatches.filter(m => m.blueTeams == null || m.redTeams == null || m.blueTeams.includes(`${teamNumber}`) || m.redTeams.includes(`${teamNumber}`)).map((m) => ({
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
        rankings: rankingsDisplay,
        ourRanking: rankings.find((t) => t.team == teamNumber),
        lastUpdated: new Date(),
        nexusEventStatus
    };
}) satisfies PageServerLoad;
