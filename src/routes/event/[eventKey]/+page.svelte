<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

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
				return `Playoffs ${setNumber}M${matchNumber}`;
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
		const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
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

	function getYoutubeLink(match: any): string | null {
		const video = (match.videos ?? []).find((v: any) => v.type === 'youtube');
		return video ? `https://youtu.be/${video.key}` : null;
	}

	$: qualMatches = data.matches.filter((m: any) => m.comp_level === 'qm');
	$: elimMatches = data.matches.filter((m: any) => m.comp_level !== 'qm');

	$: rankingsList = data.rankings?.rankings ?? [];
	$: sortOrderInfo = data.rankings?.sort_order_info ?? [];
	$: topRankings = rankingsList.slice(0, 15);
	$: ourRankInTop = topRankings.some((r: any) => r.team_key === data.teamKey);
	$: ourRanking = !ourRankInTop
		? rankingsList.find((r: any) => r.team_key === data.teamKey)
		: null;

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
					<p class="mb-1">
						📍 in <a
							href="https://maps.google.com/?q={[data.eventDetails.city, data.eventDetails.state_prov, data.eventDetails.country].filter(Boolean).join(', ')}"
							target="_blank"
							rel="noopener"
						>
							{[data.eventDetails.city, data.eventDetails.state_prov, data.eventDetails.country]
								.filter(Boolean)
								.join(', ')}
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
					<span class="badge bg-secondary mb-2">Week {data.eventDetails.week + 1}</span>
				{/if}
			{/if}

			{#if teamRank && teamRecord}
				<p class="mt-2 mb-1">
					Team {data.teamNumber} was Rank {teamRank}{numTeams ? `/${numTeams}` : ''} with a record
					of {teamRecord.wins}-{teamRecord.losses}-{teamRecord.ties}
				</p>
			{/if}

			<div class="mt-3 d-flex flex-column gap-2">
				<a
					href="https://www.thebluealliance.com/event/{data.eventKey}#matches"
					target="_blank"
					rel="noopener"
					class="btn btn-outline-dark"
				>
					◉ Watch All Matches
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
								<th class="text-center video-col"></th>
								<th>Match</th>
								<th colspan="3" class="text-center red-header">Red Alliance</th>
								<th colspan="3" class="text-center blue-header">Blue Alliance</th>
								<th colspan="2" class="text-center">Scores</th>
							</tr>
						</thead>
						<tbody>
							{#if qualMatches.length > 0}
								<tr class="section-header">
									<td colspan="10" class="text-center">Qualifications</td>
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
										<td class="match-name">{formatMatchName(match.comp_level, match.set_number, match.match_number)}</td>
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
										{:else}
											<td colspan="2" class="text-center text-muted scheduled-time">{formatMatchTime(match)}</td>
										{/if}
									</tr>
								{/each}
							{/if}
							{#if elimMatches.length > 0}
								<tr class="section-header">
									<td colspan="10" class="text-center">Playoffs</td>
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
										<td class="match-name">{formatMatchName(match.comp_level, match.set_number, match.match_number)}</td>
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
										{:else}
											<td colspan="2" class="text-center text-muted scheduled-time">{formatMatchTime(match)}</td>
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
						{#each topRankings as r}
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
						{#if ourRanking}
							<tr>
								<td colspan="6" class="text-center text-muted py-1">…</td>
							</tr>
							<tr class="table-success">
								<td>{ourRanking.rank}</td>
								<td class="fw-bold">{teamNum(ourRanking.team_key)}</td>
								{#each (ourRanking.sort_orders ?? []).slice(0, 2) as so, i}
									<td
										>{sortOrderInfo[i]?.precision === 0
											? so
											: so.toFixed(sortOrderInfo[i]?.precision ?? 2)}</td
									>
								{/each}
								<td>{ourRanking.record.wins}-{ourRanking.record.losses}-{ourRanking.record.ties}</td>
								<td>{ourRanking.matches_played}</td>
							</tr>
						{/if}
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
	.scheduled-time {
		font-size: 0.8rem;
	}
</style>
