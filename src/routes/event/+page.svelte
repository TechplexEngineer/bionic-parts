<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const currentYear = data.currentYear;
	const availableYears = Array.from({ length: currentYear - 2021 }, (_, i) => currentYear - i);

	function formatDateRange(startDate: string, endDate: string) {
		if (!startDate) return 'TBD';
		const opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', timeZone: 'UTC' };
		const start = new Date(startDate).toLocaleDateString('en-US', opts);
		const end = new Date(endDate).toLocaleDateString('en-US', { ...opts, year: 'numeric' });
		return `${start} - ${end}`;
	}

	function getEventStatus(event: any): 'upcoming' | 'ongoing' | 'completed' {
		const now = Date.now();
		const start = new Date(event.start_date + 'T00:00:00Z').getTime();
		const end = new Date(event.end_date + 'T23:59:59Z').getTime();
		if (now < start) return 'upcoming';
		if (now > end) return 'completed';
		return 'ongoing';
	}

	function getStatusBadgeClass(event: any) {
		const status = getEventStatus(event);
		if (status === 'upcoming') return 'bg-primary';
		if (status === 'completed') return 'bg-secondary';
		return 'bg-success';
	}

	function getStatusLabel(event: any) {
		const status = getEventStatus(event);
		if (status === 'upcoming') return 'Upcoming';
		if (status === 'completed') return 'Completed';
		return 'Ongoing';
	}

	$: activeEvents = data.events.filter((e: any) => getEventStatus(e) !== 'completed');
	$: pastEvents = data.events.filter((e: any) => getEventStatus(e) === 'completed');
</script>

<Navbar />

<div class="container mt-4">
	<h1>Team {data.teamNumber} Events</h1>

	<div class="mb-3">
		{#each availableYears as y}
			<a
				href="/event?year={y}"
				class="btn me-1 {data.year === y ? 'btn-primary' : 'btn-outline-primary'}"
			>
				{y}
			</a>
		{/each}
	</div>

	{#if data.events.length === 0}
		<div class="alert alert-info">No events found for {data.year}.</div>
	{:else}
		{#if activeEvents.length > 0}
			<div class="mb-5">
				<h2 class="h4 mb-3">Active & Upcoming Events</h2>
				<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
					{#each activeEvents as event}
						<div class="col">
							<div class="card h-100 border-primary shadow-sm">
								<div class="card-body">
									<h5 class="card-title">{event.name}</h5>
									<p class="card-text text-muted">
										<small>
											{event.event_type_string || ''}{event.displayWeek != null
												? ` · Week ${event.displayWeek + 1}`
												: ''}
										</small>
									</p>
									{#if event.city || event.state_prov || event.country}
										<p class="card-text">
											<small
												>📍 {[event.city, event.state_prov, event.country]
													.filter(Boolean)
													.join(', ')}</small
											>
										</p>
									{/if}
									{#if event.start_date}
										<p class="card-text">
											<small>📅 {formatDateRange(event.start_date, event.end_date)}</small>
										</p>
									{/if}
									<span class="badge {getStatusBadgeClass(event)}">{getStatusLabel(event)}</span>
								</div>
								<div class="card-footer">
									<a href="/event/{event.key}" class="btn btn-primary btn-sm">View Event</a>
									<a
										href="/pit?teamNumber={data.teamNumber}&statboticsEventKey={event.key}&nexusEventKey={event.key}"
										class="btn btn-outline-secondary btn-sm ms-1"
									>
										Pit Display
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		{#if pastEvents.length > 0}
			<div class="mb-5">
				<h2 class="h4 mb-3 text-muted">Completed Events</h2>
				<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
					{#each pastEvents as event}
						<div class="col">
							<div class="card h-100 opacity-75">
								<div class="card-body">
									<h5 class="card-title">{event.name}</h5>
									<p class="card-text text-muted">
										<small>
											{event.event_type_string || ''}{event.displayWeek != null
												? ` · Week ${event.displayWeek + 1}`
												: ''}
										</small>
									</p>
									{#if event.city || event.state_prov || event.country}
										<p class="card-text">
											<small
												>📍 {[event.city, event.state_prov, event.country]
													.filter(Boolean)
													.join(', ')}</small
											>
										</p>
									{/if}
									{#if event.start_date}
										<p class="card-text">
											<small>📅 {formatDateRange(event.start_date, event.end_date)}</small>
										</p>
									{/if}
									<span class="badge {getStatusBadgeClass(event)}">{getStatusLabel(event)}</span>
								</div>
								<div class="card-footer bg-light">
									<a href="/event/{event.key}" class="btn btn-outline-primary btn-sm"
										>View Results</a
									>
									<a
										href="/pit?teamNumber={data.teamNumber}&statboticsEventKey={event.key}&nexusEventKey={event.key}"
										class="btn btn-outline-secondary btn-sm ms-1"
									>
										Pit Display
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	{/if}
</div>
