<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const availableYears = [2025, 2024, 2023, 2022];

	function formatDate(timestamp: number) {
		if (!timestamp) return 'TBD';
		return new Date(timestamp * 1000).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}

	function getStatusClass(status: string) {
		switch (status?.toLowerCase()) {
			case 'completed':
				return 'bg-secondary';
			case 'upcoming':
				return 'bg-primary';
			case 'ongoing':
				return 'bg-success';
			default:
				return 'bg-light text-dark';
		}
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
</script>

<Navbar />

<div class="container mt-4">
	<h1>Team {data.teamNumber} Events</h1>

	<div class="mb-3">
		{#each availableYears as y}
			<a href="/event?year={y}" class="btn me-1 {data.year === y ? 'btn-primary' : 'btn-outline-primary'}">
				{y}
			</a>
		{/each}
	</div>

	{#if data.events.length === 0}
		<div class="alert alert-info">No events found for {data.year}.</div>
	{:else}
		<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
			{#each data.events as event}
				<div class="col">
					<div class="card h-100">
						<div class="card-body">
							<h5 class="card-title">{event.event_name}</h5>
							<p class="card-text text-muted">
								<small>Week {event.week} &bull; {formatEventType(event.type)}</small>
							</p>
							{#if event.state || event.country}
								<p class="card-text">
									<small>📍 {[event.state, event.country].filter(Boolean).join(', ')}</small>
								</p>
							{/if}
							{#if event.time}
								<p class="card-text">
									<small>📅 {formatDate(event.time)}</small>
								</p>
							{/if}
							{#if event.status}
								<span class="badge {getStatusClass(event.status)}">{event.status}</span>
							{/if}
							{#if event.record?.qual?.count > 0}
								<p class="card-text mt-2">
									<small>
										Record: {event.record.qual.wins}-{event.record.qual.losses}-{event.record.qual.ties}
										&bull; Rank: {event.record.qual.rank}/{event.record.qual.num_teams}
									</small>
								</p>
							{/if}
						</div>
						<div class="card-footer">
							<a href="/event/{event.event}" class="btn btn-primary btn-sm">View Event</a>
							<a
								href="/pit?teamNumber={data.teamNumber}&statboticsEventKey={event.event}&nexusEventKey={event.event}"
								class="btn btn-outline-secondary btn-sm ms-1"
							>
								Pit Display
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
