
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { NexusEventStatus, StatboticsTeam, StatboticsTeamEvent, StatboticsTeamMatches, StatboticsTeamYear } from './restTypes';
import { NEXUS_API_KEY } from '$env/static/private';
import { nexusToTBA } from './mapNexusToTBA';
import { getSimData } from './simdata';

const getData = async (teamNumber: number, year: number, eventKey: string): Promise<[teamYear: StatboticsTeamYear, matches: StatboticsTeamMatches, ranking: StatboticsTeamEvent, nexusEventStatus: NexusEventStatus, eventKey: string]> => {
    if (eventKey.toUpperCase().startsWith("SIM")) {
        return getSimData(eventKey);
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

const titleCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

import retry from 'async-retry';

export const load = (async ({ params, url }) => {

    const teamNumberStr = url.searchParams.get("teamNumber");
    const eventKeyTmp = url.searchParams.get("eventKey");
    const year = new Date().getFullYear();

    if (!eventKeyTmp || !teamNumberStr) {
        throw redirect(307, '/pit/config')
    }
    const teamNumber = parseInt(teamNumberStr);

    const [teamYear, matches, rankings, nexusEventStatus, eventKey] =
        await retry(async (bail) => {
            return await getData(teamNumber, year, eventKeyTmp);
        }, { retries: 5 })





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

    // nextMatch?.pred.blue_score


    const ourNextMatch = {
        match_name: ourNextMatchNexus?.label || "",
        score: {
            red: nextMatch?.pred.red_score,
            blue: nextMatch?.pred.blue_score
        },
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
            epa: Math.round(t.epa.total_points.mean * 10) / 10,
            rp: t.record.qual.rps,
            matches: t.record.qual.count,
            rpPerMatch: t.record.qual.rps_per_match
        };
    }

    // 1/rp * rp/match

    const lastItem = 6;
    const rankingsDisplay = rankings.map(mapFn).sort((a, b) => a.rank - b.rank).slice(0, lastItem);
    if (!rankingsDisplay.find((t) => t.teamNumber == teamNumber)) {
        const ourRanking = rankings.find((t) => t.team == teamNumber);
        if (ourRanking) {
            rankingsDisplay.push({
                rank: "..." as any,
                teamNumber: `...` as any,
                teamName: "..." as any,
                epa: "..." as any,
                rp: "..." as any,
                matches: "..." as any,
                rpPerMatch: "..." as any,
            });
            rankingsDisplay.push(mapFn(ourRanking));
        }
    } else {
        rankingsDisplay.push(mapFn(rankings[lastItem]));
        rankingsDisplay.push(mapFn(rankings[lastItem + 1]));
    }

    const ourEventRankEPA = rankings.map(mapFn).sort((a, b) => b.epa - a.epa).map((r, idx) => { r.rank = idx + 1; return r }).find(r => r.teamNumber == teamNumber)

    const epaRanks = [
        {
            label: "Event",
            rank: ourEventRankEPA?.rank,
            total: rankings.length,
        }, {
            label: "State",
            rank: teamYear.epa.ranks.state.rank,
            total: teamYear.epa.ranks.state.team_count,
        },
        {
            label: "District",
            rank: teamYear.epa.ranks.district.rank,
            total: teamYear.epa.ranks.district.team_count,
        },
        {
            label: "Country",
            rank: teamYear.epa.ranks.country.rank,
            total: teamYear.epa.ranks.country.team_count,
        },
        {
            label: "World",
            rank: teamYear.epa.ranks.total.rank,
            total: teamYear.epa.ranks.total.team_count,
        },

    ]

    // console.log('matches', matches);



    return {
        eventKey,
        teamNumber,
        year,
        teamYear,
        epaRanks,
        upcommingMatches: upcommingMatches.filter(m => m.blueTeams == null || m.redTeams == null || m.blueTeams.includes(`${teamNumber}`) || m.redTeams.includes(`${teamNumber}`))
            .map((m) => {
                const color = m.blueTeams?.includes(`${teamNumber}`)
                    ? 'Blue'
                    : m.redTeams?.includes(`${teamNumber}`)
                        ? 'Red'
                        : '';

                const redWinProb = matches.find(i => `${i.comp_level}${i.match_number}` == nexusToTBA(m.label))?.pred.red_win_prob || -1;
                return {
                    match: titleCase(nexusToTBA(m.label)),
                    predictedTime: (m.times.estimatedQueueTime),
                    scheduledTime: (m.times.scheduledStartTime),
                    color: color,
                    winPercentage: m.blueTeams?.includes(`${teamNumber}`) ? 1 - redWinProb : redWinProb
                }
            }),
        nextmatch: ourNextMatch, //matches.filter((m) => m.result.winner == null)[0],
        rankings: rankingsDisplay,
        ourRanking: rankings.find((t) => t.team == teamNumber),
        lastUpdated: new Date(),
        nexusEventStatus
    };
}) satisfies PageServerLoad;
