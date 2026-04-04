<script lang="ts">
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import Navbar from '$lib/Navbar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		const interval = setInterval(() => {
			invalidateAll();
		}, 30000);

		return () => clearInterval(interval);
	});

	function formatDate(dateStr: string) {
		if (!dateStr) return '';
		return new Date(dateStr).toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
			timeZone: 'UTC'
		});
	}

	function formatMatchName(compLevel: string, setNumber: number, matchNumber: number): string {
		switch (compLevel) {
			case 'qm':
				return `Quals ${matchNumber}`;
			case 'ef':
				return `Octos ${setNumber}M${matchNumber}`;
			case 'qf':
				return `Quarters ${setNumber}M${matchNumber}`;
			case 'sf':
				// In FRC 2023+, "sf" covers all double-elimination playoff rounds
				return `Semis ${setNumber}M${matchNumber}`;
			case 'f':
				return `Finals ${matchNumber}`;
			default:
				return `${compLevel.toUpperCase()} ${matchNumber}`;
		}
	}

	function formatMatchTime(match: any): string {
		const ts = match.predicted_time ?? match.time;
		if (!ts) return 'TBD';
		const d = new Date(ts * 1000);
		const day = d.toLocaleDateString('en-US', { weekday: 'short' });
		const time = d.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: '2-digit',
			hour12: true
		});
		return `${day} ${time}${match.predicted_time ? '*' : ''}`;
	}

	function isPlayed(match: any): boolean {
		return (match.alliances?.red?.score ?? -1) >= 0 && (match.alliances?.blue?.score ?? -1) >= 0;
	}

	function teamNum(teamKey: string): string {
		return teamKey.replace('frc', '');
	}

	function isOurTeam(teamKey: string): boolean {
		return teamKey === data.teamKey;
	}

	function getLocation(event: any): string {
		return [event.city, event.state_prov, event.country].filter(Boolean).join(', ');
	}

	function getYoutubeLink(match: any): string | null {
		const video = (match.videos ?? []).find((v: any) => v.type === 'youtube');
		return video ? `https://youtu.be/${video.key}` : null;
	}

	function resolveWebcast(webcast: any): string | null {
		if (!webcast) return null;
		switch (webcast.type) {
			case 'twitch':
				return `https://www.twitch.tv/${webcast.channel}`;
			case 'youtube':
				return `https://www.youtube.com/watch?v=${webcast.channel}`;
			case 'livestream':
				return `https://livestream.com/accounts/${webcast.channel}/events/${webcast.file}`;
			case 'bluealliance':
				return `https://www.thebluealliance.com/gameday/${webcast.channel}`;
			case 'ustream':
				return `https://www.ustream.tv/channel/${webcast.channel}`;
			default:
				return `https://www.thebluealliance.com/gameday#event=${data.eventKey}`;
		}
	}

	$: qualMatches = data.matches.filter((m: any) => m.comp_level === 'qm');
	$: elimMatches = data.matches.filter((m: any) => m.comp_level !== 'qm');

	$: rankingsList = data.rankings?.rankings ?? [];
	$: sortOrderInfo = data.rankings?.sort_order_info ?? [];

	$: qualStatus = data.teamStatus?.qual;
	$: teamRank = qualStatus?.ranking?.rank ?? null;
	$: numTeams = qualStatus?.num_teams ?? null;
	$: teamRecord = qualStatus?.ranking?.record ?? null;
</script>

<Navbar />

<div class="container-fluid mt-4 px-4">
	<nav aria-label="breadcrumb">
		<ol class="breadcrumb">
			<li class="breadcrumb-item"><a href="/event?year={data.year}">Events {data.year}</a></li>
			<li class="breadcrumb-item active">{data.eventDetails?.name ?? data.eventKey}</li>
		</ol>
	</nav>

	<div class="row g-4">
		<!-- Left: Event info -->
		<div class="col-12 col-md-4 col-lg-3">
			<h2>{data.eventDetails?.name ?? data.eventKey}</h2>
			{#if data.eventDetails}
				{#if data.eventDetails.city || data.eventDetails.state_prov || data.eventDetails.country}
					{@const location = getLocation(data.eventDetails)}
					<p class="mb-1">
						📍 in <a href="https://maps.google.com/?q={location}" target="_blank" rel="noopener">
							{location}
						</a>
					</p>
				{/if}
				{#if data.eventDetails.start_date}
					<p class="mb-1">
						📅 {formatDate(data.eventDetails.start_date)} to {formatDate(
							data.eventDetails.end_date
						)}
					</p>
				{/if}
				{#if data.eventDetails.week != null}
					<!-- TBA week is 0-indexed; add 1 for human-readable display -->
					<span class="badge bg-secondary mb-2">Week {data.eventDetails.week + 1}</span>
				{/if}
			{/if}

			{#if teamRank && teamRecord}
				<p class="mt-2 mb-1">
					Team {data.teamNumber} was Rank {teamRank}{numTeams ? `/${numTeams}` : ''} with a record of
					{teamRecord.wins}-{teamRecord.losses}-{teamRecord.ties}
				</p>
			{/if}

			<div class="mt-3 d-flex flex-column gap-2">
				{#if data.eventDetails?.webcasts && data.eventDetails.webcasts.length > 0}
					{#each data.eventDetails.webcasts as webcast, i}
						{@const url = resolveWebcast(webcast)}
						{#if url}
							<a href={url} target="_blank" rel="noopener" class="btn btn-outline-primary">
								Open Webcast {webcast.date} ({webcast.type})
							</a>
						{/if}
					{/each}
				{/if}

				<a
					href="https://www.thebluealliance.com/event/{data.eventKey}#matches"
					target="_blank"
					rel="noopener"
					class="btn btn-outline-dark"
				>
					View event on The Blue Alliance
				</a>
				<a
					href="/pit?teamNumber={data.teamNumber}&statboticsEventKey={data.eventKey}&nexusEventKey={data.eventKey}"
					class="btn btn-primary"
				>
					Open Pit Display
				</a>
			</div>
		</div>

		<!-- Right: Match schedule -->
		<div class="col-12 col-md-8 col-lg-9">
			{#if data.matches.length === 0}
				<div class="alert alert-info">No match data available for this event.</div>
			{:else}
				<div class="table-responsive">
					<table class="table table-sm table-bordered match-table">
						<thead>
							<tr>
								<th class="text-center video-col" />
								<th>Match</th>
								<th colspan="3" class="text-center red-header">Red Alliance</th>
								<th colspan="3" class="text-center blue-header">Blue Alliance</th>
								<th colspan="2" class="text-center">Scores</th>
								<th colspan="2" class="text-center">RP</th>
							</tr>
						</thead>
						<tbody>
							{#if qualMatches.length > 0}
								<tr class="section-header">
									<td colspan="12" class="text-center">Qualifications</td>
								</tr>
								{#each qualMatches as match}
									{@const redTeams = match.alliances?.red?.team_keys ?? []}
									{@const blueTeams = match.alliances?.blue?.team_keys ?? []}
									{@const played = isPlayed(match)}
									{@const video = getYoutubeLink(match)}
									<tr>
										<td class="text-center p-1 video-col">
											{#if video}
												<a href={video} target="_blank" rel="noopener" class="text-dark">◉</a>
											{/if}
										</td>
										<td class="match-name">
											<a href="/matchposttemplate?match={match.key}">
												{formatMatchName(match.comp_level, match.set_number, match.match_number)}
											</a>
										</td>
										{#each redTeams as teamKey}
											<td class="text-center red-cell" class:our-team={isOurTeam(teamKey)}>
												{teamNum(teamKey)}
											</td>
										{/each}
										{#each blueTeams as teamKey}
											<td class="text-center blue-cell" class:our-team={isOurTeam(teamKey)}>
												{teamNum(teamKey)}
											</td>
										{/each}
										{#if played}
											<td class="text-center red-score fw-bold">{match.alliances.red.score}</td>
											<td class="text-center blue-score fw-bold">{match.alliances.blue.score}</td>
											<td class="text-center red-rp">{match.score_breakdown?.red?.rp ?? 0}</td>
											<td class="text-center blue-rp">{match.score_breakdown?.blue?.rp ?? 0}</td>
										{:else}
											<td colspan="4" class="text-center text-muted scheduled-time"
												>{formatMatchTime(match)}</td
											>
										{/if}
									</tr>
								{/each}
							{/if}
							{#if elimMatches.length > 0}
								<tr class="section-header">
									<td colspan="12" class="text-center">Playoffs</td>
								</tr>
								{#each elimMatches as match}
									{@const redTeams = match.alliances?.red?.team_keys ?? []}
									{@const blueTeams = match.alliances?.blue?.team_keys ?? []}
									{@const played = isPlayed(match)}
									{@const video = getYoutubeLink(match)}
									<tr>
										<td class="text-center p-1 video-col">
											{#if video}
												<a href={video} target="_blank" rel="noopener" class="text-dark">◉</a>
											{/if}
										</td>
										<td class="match-name">
											<a href="/matchposttemplate?match={match.key}">
												{formatMatchName(match.comp_level, match.set_number, match.match_number)}
											</a>
										</td>
										{#each redTeams as teamKey}
											<td class="text-center red-cell" class:our-team={isOurTeam(teamKey)}>
												{teamNum(teamKey)}
											</td>
										{/each}
										{#each blueTeams as teamKey}
											<td class="text-center blue-cell" class:our-team={isOurTeam(teamKey)}>
												{teamNum(teamKey)}
											</td>
										{/each}
										{#if played}
											<td class="text-center red-score fw-bold">{match.alliances.red.score}</td>
											<td class="text-center blue-score fw-bold">{match.alliances.blue.score}</td>
											<td class="text-center red-rp">-</td>
											<td class="text-center blue-rp">-</td>
										{:else}
											<td colspan="4" class="text-center text-muted scheduled-time"
												>{formatMatchTime(match)}</td
											>
										{/if}
									</tr>
								{/each}
							{/if}
						</tbody>
					</table>
				</div>
			{/if}
		</div>
	</div>

	<!-- Rankings -->
	{#if rankingsList.length > 0}
		<div class="mt-4">
			<h3>Rankings</h3>
			<div class="table-responsive">
				<table class="table table-sm table-hover">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Team</th>
							{#each sortOrderInfo.slice(0, 2) as info}
								<th>{info.name}</th>
							{/each}
							<th>W-L-T</th>
							<th>Played</th>
						</tr>
					</thead>
					<tbody>
						{#each rankingsList as r}
							<tr class:table-success={r.team_key === data.teamKey}>
								<td>{r.rank}</td>
								<td class:fw-bold={r.team_key === data.teamKey}>{teamNum(r.team_key)}</td>
								{#each (r.sort_orders ?? []).slice(0, 2) as so, i}
									<td
										>{sortOrderInfo[i]?.precision === 0
											? so
											: so.toFixed(sortOrderInfo[i]?.precision ?? 2)}</td
									>
								{/each}
								<td>{r.record.wins}-{r.record.losses}-{r.record.ties}</td>
								<td>{r.matches_played}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{/if}
</div>

<style>
	.red-header {
		background-color: rgba(220, 53, 69, 0.12);
	}
	.blue-header {
		background-color: rgba(13, 110, 253, 0.12);
	}
	.red-cell {
		background-color: rgba(220, 53, 69, 0.07);
	}
	.blue-cell {
		background-color: rgba(13, 110, 253, 0.07);
	}
	.red-score {
		background-color: rgba(220, 53, 69, 0.15);
	}
	.blue-score {
		background-color: rgba(13, 110, 253, 0.15);
	}
	.red-rp {
		background-color: rgba(220, 53, 69, 0.05);
		width: 40px;
	}
	.blue-rp {
		background-color: rgba(13, 110, 253, 0.05);
		width: 40px;
	}
	.our-team {
		text-decoration: underline;
		font-weight: bold;
	}
	.section-header td {
		background-color: #f0f0f0;
		font-weight: 600;
		font-size: 0.85rem;
	}
	.match-table {
		font-size: 0.875rem;
	}
	.video-col {
		width: 28px;
	}
	.match-name {
		white-space: nowrap;
	}
	.match-name a {
		text-decoration: none;
		color: inherit;
		font-weight: 500;
	}
	.match-name a:hover {
		text-decoration: underline;
		color: var(--bs-primary);
	}
	.scheduled-time {
		font-size: 0.8rem;
	}
</style>
