<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	function formatDate(dateStr: string) {
		if (!dateStr) return 'TBD';
		return new Date(dateStr).toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
			timeZone: 'UTC'
		});
	}

	function formatEventType(type: string) {
		return (
			type
				?.replace(/_/g, ' ')
				.split(' ')
				.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
				.join(' ') || ''
		);
	}

	$: topRankings = data.rankings.slice(0, 10);
	$: ourTeamInTop = topRankings.some((t) => t.team === data.teamNumber);
	$: ourTeamRanking = !ourTeamInTop
		? data.rankings.find((t) => t.team === data.teamNumber)
		: null;
</script>

<Navbar />

<div class="container mt-4">
	<nav aria-label="breadcrumb">
		<ol class="breadcrumb">
			<li class="breadcrumb-item"><a href="/event?year={data.year}">Events {data.year}</a></li>
			<li class="breadcrumb-item active">{data.eventDetails?.name ?? data.eventKey}</li>
		</ol>
	</nav>

	<div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
		<div>
			<h1>{data.eventDetails?.name ?? data.eventKey}</h1>
			{#if data.eventDetails}
				<p class="text-muted mb-1">
					{formatEventType(data.eventDetails.type)} &bull; Week {data.eventDetails.week}
					{#if data.eventDetails.start_date}
						&bull; {formatDate(data.eventDetails.start_date)} – {formatDate(
							data.eventDetails.end_date
						)}
					{/if}
				</p>
				{#if data.eventDetails.state || data.eventDetails.country}
					<p class="text-muted mb-0">
						📍 {[data.eventDetails.state, data.eventDetails.country].filter(Boolean).join(', ')}
					</p>
				{/if}
			{/if}
		</div>
		<a
			href="/pit?teamNumber={data.teamNumber}&statboticsEventKey={data.eventKey}&nexusEventKey={data.eventKey}"
			class="btn btn-primary"
		>
			Open Pit Display
		</a>
	</div>

	{#if data.teamEvent}
		<div class="row g-3 mb-4">
			<div class="col-md-4">
				<div class="card h-100">
					<div class="card-header">
						<strong>Team {data.teamNumber} — {data.teamEvent.team_name}</strong>
					</div>
					<div class="card-body">
						<div class="mb-2">
							<span class="badge bg-success fs-6">
								EPA: {Math.round(data.teamEvent.epa.total_points.mean * 10) / 10}
							</span>
							{#if data.teamEvent.status}
								<span class="badge bg-secondary ms-1">{data.teamEvent.status}</span>
							{/if}
						</div>
						{#if data.teamEvent.record?.qual?.count > 0}
							<p class="mb-1"><strong>Qualification Record:</strong></p>
							<p class="mb-2">
								{data.teamEvent.record.qual.wins}-{data.teamEvent.record.qual.losses}-{data.teamEvent
									.record.qual.ties}
								(Rank {data.teamEvent.record.qual.rank}/{data.teamEvent.record.qual.num_teams})
							</p>
						{/if}
						{#if data.teamEvent.record?.elim?.count > 0}
							<p class="mb-1"><strong>Playoff Record:</strong></p>
							<p class="mb-0">
								{data.teamEvent.record.elim.wins}-{data.teamEvent.record.elim.losses}-{data.teamEvent
									.record.elim.ties}
							</p>
						{/if}
					</div>
				</div>
			</div>

			<div class="col-md-4">
				<div class="card h-100">
					<div class="card-header"><strong>EPA Breakdown</strong></div>
					<div class="card-body p-0">
						<table class="table table-sm mb-0">
							<tbody>
								<tr>
									<td>Total</td>
									<td
										><strong
											>{Math.round(data.teamEvent.epa.breakdown.total_points * 10) / 10}</strong
										></td
									>
								</tr>
								<tr>
									<td>Auto</td>
									<td>{Math.round(data.teamEvent.epa.breakdown.auto_points * 10) / 10}</td>
								</tr>
								<tr>
									<td>Teleop</td>
									<td>{Math.round(data.teamEvent.epa.breakdown.teleop_points * 10) / 10}</td>
								</tr>
								<tr>
									<td>Endgame</td>
									<td>{Math.round(data.teamEvent.epa.breakdown.endgame_points * 10) / 10}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	{/if}

	{#if data.rankings.length > 0}
		<h2>Event Rankings</h2>
		<div class="table-responsive">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Rank</th>
						<th>Team</th>
						<th>EPA</th>
						<th>W-L-T</th>
						<th>RPs</th>
					</tr>
				</thead>
				<tbody>
					{#each topRankings as team}
						<tr class:table-success={team.team === data.teamNumber}>
							<td>{team.record.qual.rank}</td>
							<td>
								<strong>{team.team}</strong>
								{#if team.team_name}
									<small class="text-muted"> — {team.team_name}</small>
								{/if}
							</td>
							<td>{Math.round(team.epa.total_points.mean * 10) / 10}</td>
							<td
								>{team.record.qual.wins}-{team.record.qual.losses}-{team.record.qual.ties}</td
							>
							<td>{team.record.qual.rps}</td>
						</tr>
					{/each}
					{#if ourTeamRanking}
						<tr>
							<td colspan="5" class="text-center text-muted py-1">…</td>
						</tr>
						<tr class="table-success">
							<td>{ourTeamRanking.record.qual.rank}</td>
							<td>
								<strong>{ourTeamRanking.team}</strong>
								{#if ourTeamRanking.team_name}
									<small class="text-muted"> — {ourTeamRanking.team_name}</small>
								{/if}
							</td>
							<td>{Math.round(ourTeamRanking.epa.total_points.mean * 10) / 10}</td>
							<td
								>{ourTeamRanking.record.qual.wins}-{ourTeamRanking.record.qual.losses}-{ourTeamRanking
									.record.qual.ties}</td
							>
							<td>{ourTeamRanking.record.qual.rps}</td>
						</tr>
					{/if}
				</tbody>
			</table>
		</div>
	{/if}
</div>
