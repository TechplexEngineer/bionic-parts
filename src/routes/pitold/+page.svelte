<script>
	import { onMount } from 'svelte';
	import moment from 'moment';

	// If you want to replicate the same TBA API usage, you'll need some axios-like instance
	// or fetch calls here. The original code used a 'tba' plugin with tba.get(...).
	// Adjust to your actual API usage as needed.
	// import tba from '~/plugins/tba.js';

	// Simple debounce utility
	function debounce(func, delayms) {
		let inDebounce;
		return function (...args) {
			clearTimeout(inDebounce);
			inDebounce = setTimeout(() => func.apply(this, args), delayms);
		};
	}

	let team = null;
	let event = null;
	let tba_key = null;
	let rankings = [];
	let nextMatch = {};
	let matches = [];
	let ourRank = 'unknown';
	let teamCount = 'unknown';
	let updated = new Date();
	let events = [];
	let isFinals = false;

	let updateHandle = null;

	// Replicates the "calcStatus" logic from Vue
	function calcStatus(match) {
		let out = '????';
		if (!match.actual_time) {
			// match not played yet
			return '';
		}

		// if we have no team filter
		if (!team) {
			if (!match.score_breakdown) {
				return '....';
			}
			if (match.alliances.red.score > match.alliances.blue.score) {
				out = 'Red';
				if (match.comp_level === 'qm') {
					out += ` ${match.score_breakdown.red.rp} / ${match.score_breakdown.blue.rp}`;
				}
			} else if (match.alliances.red.score < match.alliances.blue.score) {
				out = 'Blue';
				if (match.comp_level === 'qm') {
					out += ` ${match.score_breakdown.blue.rp} / ${match.score_breakdown.red.rp}`;
				}
			} else {
				out = 'Tie';
			}
			return out;
		}

		// If we have a specific team filter
		const frcTag = `frc${team}`;
		const redKeys = match.alliances.red.team_keys;
		const blueKeys = match.alliances.blue.team_keys;
		if (redKeys.includes(frcTag)) {
			if (match.alliances.red.score > match.alliances.blue.score) {
				out = 'Win';
			} else if (match.alliances.red.score < match.alliances.blue.score) {
				out = 'Loss';
			} else {
				out = 'Tie';
			}
			if (match.comp_level === 'qm' && match.score_breakdown) {
				out += ` ${match.score_breakdown.red.rp}`;
			}
		} else if (blueKeys.includes(frcTag)) {
			if (match.alliances.blue.score > match.alliances.red.score) {
				out = 'Win';
			} else if (match.alliances.blue.score < match.alliances.red.score) {
				out = 'Loss';
			} else {
				out = 'Tie';
			}
			if (match.comp_level === 'qm' && match.score_breakdown) {
				out += ` ${match.score_breakdown.blue.rp}`;
			}
		}
		return out;
	}

	function redWin(match) {
		if (!match.actual_time) return false;
		return match.alliances.red.score > match.alliances.blue.score;
	}

	function blueWin(match) {
		if (!match.actual_time) return false;
		return match.alliances.blue.score > match.alliances.red.score;
	}

	function formatTime(timestamp) {
		if (!timestamp) return '--:----';
		return moment(timestamp * 1000).format('h:mma');
	}

	function getRanking(teamKey) {
		if (!rankings || !rankings.length) {
			return 'no rankings loaded yet';
		}
		let t = rankings.find((r) => r.team_key === teamKey);
		if (!t) return '';
		return `Rank ${t.rank} / RP ${t.sort_orders[0]}`;
	}

	function isMyTeam(teamKey) {
		return teamKey === `frc${team}`;
	}

	async function updateData() {
		if (!event || !tba_key) {
			// console.log(`Missing required info: event:${event} key:${tba_key}`);
			return;
		}

		updated = new Date();

		// Example axios/fetch calls. Replace with your actual TBA usage:
		//
		// tba.get(`/event/${event}/rankings`).then((res) => {
		//   rankings = res.data.rankings;
		// });
		//
		// if (!team) {
		//   // No team filter, fetch all matches
		//   tba.get(`/event/${event}/matches`).then((res) => {
		//     let allMatches = res.data.sort((a, b) => a.time - b.time);
		//     isFinals = allMatches.map((m) => m.comp_level).includes("qf");
		//     if (isFinals) {
		//       allMatches = allMatches.filter((m) => m.comp_level !== "qm");
		//     }
		//     matches = allMatches;
		//     let notPlayed = matches.filter((m) => !m.actual_time);
		//     nextMatch = notPlayed.sort((a, b) => a.time - b.time)[0] || {};
		//     nextMatch.countdown = nextMatch.time ? (nextMatch.time * 1000 - Date.now()) : 0;
		//     nextMatch.countdownTo = "scheduled";
		//     if (nextMatch.countdown < 0) {
		//       nextMatch.countdown = 0;
		//     }
		//     nextMatch.title = "Next Match";
		//     if (nextMatch.comp_level) {
		//       nextMatch.comp_level = nextMatch.comp_level.toUpperCase();
		//     }
		//   });
		//   return;
		// }
		//
		// // If we have a team filter
		// tba.get(`/team/frc${team}/event/${event}/matches`).then((res) => {
		//   let teamMatches = res.data.sort((a, b) => a.time - b.time);
		//   isFinals = teamMatches.map((m) => m.comp_level).includes("qf");
		//   if (isFinals) {
		//     teamMatches = teamMatches.filter((m) => m.comp_level !== "qm");
		//   }
		//   matches = teamMatches;
		// });
		//
		// tba.get(`/team/frc${team}/event/${event}/status`).then(async (res) => {
		//   if (!res.data) return;
		//   teamCount = res.data.qual.num_teams;
		//   ourRank = res.data.qual.ranking.rank;
		//   if (res.data.next_match_key) {
		//     let nextMatchRes = await tba.get(`/match/${res.data.next_match_key}/simple`);
		//     nextMatch = nextMatchRes.data;
		//     nextMatch.title = "Next Match";
		//     nextMatch.comp_level = nextMatch.comp_level.toUpperCase();
		//     let countdownTo = nextMatch.predicted_time;
		//     nextMatch.countdownTo = "predicted";
		//     if (nextMatch.time > nextMatch.predicted_time) {
		//       nextMatch.countdownTo = "scheduled";
		//       countdownTo = nextMatch.time;
		//     }
		//     nextMatch.countdown = countdownTo * 1000 - Date.now();
		//     if (nextMatch.countdown < 0) {
		//       nextMatch.countdown = 0;
		//     }
		//   } else if (res.data.last_match_key) {
		//     let nextMatchRes = await tba.get(`/match/${res.data.last_match_key}/simple`);
		//     nextMatch = nextMatchRes.data;
		//     nextMatch.title = "Last Match";
		//     nextMatch.comp_level = nextMatch.comp_level.toUpperCase();
		//   } else {
		//     nextMatch = {};
		//   }
		// });

		// Placeholder log
		// console.log('updateData called. Make your API calls here.');
	}

	// Debounce the updateData function to mirror Vue's approach
	const debouncedUpdate = debounce(updateData, 500);

	// Svelte's "onMount" is similar to Vue's "mounted"
	onMount(() => {
		// Restore localStorage data
		if (localStorage.getItem('teamNumber')) {
			team = localStorage.getItem('teamNumber') || '4909';
		}
		if (localStorage.getItem('eventKey')) {
			event = localStorage.getItem('eventKey') || '2020nhgrs';
		}
		if (localStorage.getItem('tba_key')) {
			tba_key = localStorage.getItem('tba_key');
		}

		updateHandle = setInterval(updateData, 10000);
	});

	// If the component unmounts
	// in Svelte, use onDestroy to clear intervals if needed:
	// import { onDestroy } from 'svelte';
	// onDestroy(() => {
	//   clearInterval(updateHandle);
	// });

	// In Vue, watchers stored data to localStorage and called updateData.
	// We'll replicate that logic with reactive statements in Svelte.

	// When 'event' changes
	$: if (event !== null && event !== undefined) {
		localStorage.setItem('eventKey', event);
		debouncedUpdate();
	}

	// When 'team' changes
	$: if (team !== null && team !== undefined) {
		localStorage.setItem('teamNumber', team);
		debouncedUpdate();
	}

	// When 'tba_key' changes
	$: if (tba_key !== null && tba_key !== undefined) {
		localStorage.setItem('tba_key', tba_key);
		// If you have an axios instance, set the default header here:
		// tba.defaults.headers.common['X-TBA-Auth-Key'] = tba_key;
		// Then fetch events for the year
		// tba.get(`/events/${new Date().getFullYear()}`).then((res) => {
		//   events = res.data;
		// });
		debouncedUpdate();
	}

	// Compute the eventOptions array
	$: eventOptions = [
		{ value: null, text: 'Please select an event' },
		...(events
			? events
					.map((ev) => ({ value: ev.key, text: ev.name }))
					.sort((a, b) => a.text.localeCompare(b.text))
			: [])
	];

	// Compute the eventName
	$: eventName = (() => {
		let found = eventOptions.find((e) => e.value === event);
		return found ? found.text : '';
	})();

	// For a countdown-like display:
	// Here is a simple derived expression to show H:M:S from nextMatch.countdown
	// (Originally handled by <VueCountdown /> in Vue)
	$: countdownTime = Math.max(0, nextMatch.countdown || 0);
	$: countdownHours = Math.floor(countdownTime / (1000 * 60 * 60));
	$: countdownMinutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
	$: countdownSeconds = Math.floor((countdownTime % (1000 * 60)) / 1000);
</script>

<div class="container-fluid px-5 py-4">
	<div class="row">
		<!-- Left column: Matches -->
		<div class="col-lg-12 col-xl-8">
			<h2 class="text-center">{eventName} - Matches</h2>
			<table class="table table-striped table-dark table-borderless rounded text-center">
				<thead>
					<tr>
						<th class="bg-secondary">Match</th>
						<th class="bg-secondary">
							Time <small>(scheduled / predicted / acutal)</small>
						</th>
						<th colspan="3" class="font-weight-bold bg-danger">Red</th>
						<th colspan="3" class="font-weight-bold bg-primary">Blue</th>
						<th colspan="3" class="bg-secondary">Status</th>
					</tr>
				</thead>
				<tbody>
					{#each matches as match}
						<tr>
							<th>
								{match.comp_level?.toUpperCase()}#{match.match_number}
							</th>
							<td>
								{formatTime(match.time)} / {formatTime(match.predicted_time)} / {formatTime(
									match.actual_time
								)}
							</td>
							{#each match.alliances.red.team_keys as teamKey}
								<td class:myteam={isMyTeam(teamKey)}>
									{teamKey.replace('frc', '')}
								</td>
							{/each}
							{#each match.alliances.blue.team_keys as teamKey}
								<td class:myteam={isMyTeam(teamKey)}>
									{teamKey.replace('frc', '')}
								</td>
							{/each}
							<td class:text-danger={redWin(match)} class:text-primary={blueWin(match)}>
								{calcStatus(match)}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<!-- Right column: Next match + Rankings -->
		<div class="col-lg-12 col-xl-4">
			<div class="row">
				<!-- Next match display -->
				<div class="col-lg-6 col-xl-12">
					<h2 class="text-center display-5">
						{#if team}
							<small class="smaller">FRC{team}</small>
						{/if}
						{nextMatch.title}
						<small class="smaller">{nextMatch.comp_level}#{nextMatch.match_number}</small>
					</h2>

					<div class="row text-center">
						<div class="col text-nowrap">Scheduled: {formatTime(nextMatch.time)}</div>
						<div class="col text-nowrap">Predicted: {formatTime(nextMatch.predicted_time)}</div>
					</div>

					<h2 class="text-center pt-2 pb-2" style="white-space: nowrap;">
						<small style="font-size: 75%;">Countdown:</small>
						<!-- Simple H:M:S in place of VueCountdown slot -->
						{#if countdownHours > 0}{countdownHours}h {/if}{countdownMinutes}m {countdownSeconds}s
						<small style="font-size: 35%;">(to {nextMatch.countdownTo})</small>
					</h2>

					<table class="table table-striped table-dark table-borderless rounded shadow-sm">
						<thead class="text-center thead-dark">
							<tr class="rounded-top">
								<th class="font-weight-bold bg-danger">Red</th>
								<th class="font-weight-bold bg-primary">Blue</th>
							</tr>
						</thead>
						<tbody class="text-center rounded-bottom">
							{#if nextMatch.alliances}
								{#each Array(3) as _, idx (idx)}
									<tr>
										<td>
											<span class:myteam={isMyTeam(nextMatch.alliances.red.team_keys[idx])}>
												{nextMatch.alliances.red.team_keys[idx]
													? nextMatch.alliances.red.team_keys[idx].replace('frc', '').trim()
													: ''}
											</span>
											<br />
											<small>
												{#if nextMatch.alliances.red.team_keys[idx]}
													{getRanking(nextMatch.alliances.red.team_keys[idx])}
												{/if}
											</small>
										</td>
										<td>
											<span class:myteam={isMyTeam(nextMatch.alliances.blue.team_keys[idx])}>
												{nextMatch.alliances.blue.team_keys[idx]
													? nextMatch.alliances.blue.team_keys[idx].replace('frc', '').trim()
													: ''}
											</span>
											<br />
											<small>
												{#if nextMatch.alliances.blue.team_keys[idx]}
													{getRanking(nextMatch.alliances.blue.team_keys[idx])}
												{/if}
											</small>
										</td>
									</tr>
								{/each}
							{/if}
						</tbody>
					</table>
				</div>

				<!-- Rankings -->
				<div class="col-lg-6 col-xl-12">
					<h2 class="text-center">
						Rankings <small class="smaller">Rank {ourRank} of {teamCount}</small>
					</h2>
					<table class="table table-striped table-dark table-borderless rounded shadow-sm">
						<thead class="text-center thead-dark">
							<tr class="rounded-top">
								<th class="font-weight-bold bg-secondary">Rank</th>
								<th class="font-weight-bold bg-secondary">Team</th>
								<th class="bg-secondary">RP</th>
								<th class="bg-secondary">W-L-T</th>
								<th class="bg-secondary">Played</th>
							</tr>
						</thead>
						<tbody class="text-center rounded-bottom">
							{#each rankings.slice(0, 8) as teamObj}
								<tr>
									<td>{teamObj.rank}</td>
									<td class:myteam={isMyTeam(teamObj.team_key)}>
										{teamObj.team_key.replace('frc', '')}
									</td>
									<td>{teamObj.sort_orders[0]}</td>
									<td>
										{teamObj.record.wins}-{teamObj.record.losses}-{teamObj.record.ties}
									</td>
									<td>{teamObj.matches_played}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<!-- Data Input row -->
	<div class="row text-muted">
		<div class="col-2 text-center">
			Optional Team Filter:
			<input type="number" bind:value={team} placeholder="####" class="form-control" />
		</div>
		<div class="col-4 text-center">
			Event:
			<select bind:value={event} class="form-control">
				{#each eventOptions as e}
					<option value={e.value}>{e.text}</option>
				{/each}
			</select>
		</div>
		<div class="col-3 text-center">
			TBA API Key:
			<input type="password" bind:value={tba_key} class="form-control" />
		</div>
		<div class="col-3 text-center">
			Last Updated: <br />
			{moment(updated).format('h:mm:ssa YYYY-MMM-DD')}
		</div>

		<!-- Breakpoint indicators (Bootstrap) -->
		<div class="d-block d-sm-none">xs</div>
		<div class="d-none d-sm-block d-md-none">sm</div>
		<div class="d-none d-md-block d-lg-none">md</div>
		<div class="d-none d-lg-block d-xl-none">lg</div>
		<div class="d-none d-xl-block d-xxl-none">xl</div>
		<div class="d-none d-xxl-block">xxl</div>
	</div>
</div>

<style>
	/* Svelte doesn't strictly need "scoped" – styles here are scoped by default. */

	.rounded-top-left {
		border-top-left-radius: 0.25rem !important;
	}
	.rounded-top-right {
		border-top-right-radius: 0.25rem !important;
	}
	.rounded-bottom-left {
		border-bottom-left-radius: 0.25rem !important;
	}
	.rounded-bottom-right {
		border-bottom-right-radius: 0.25rem !important;
	}

	.smaller {
		font-size: 70%;
	}

	.myteam {
		font-weight: bold;
		text-decoration: underline;
		font-size: 125%;
	}
</style>
