<script lang="ts">
	import TableForObjectArray, {
		type TableColumns
	} from '$lib/components/TableForObjectArray.svelte';
	import type { PageData } from './$types';
	import Badge from './Badge.svelte';

	export let data: PageData;

	// let { data }: { data: PageData } = $props();
	let rankData: { rank: number; team: string; epa: string }[] = data.rankings.map((t) => {
		return {
			rank: t.record.qual.rank,
			team: `${t.team} - ${t.team_name}`,
			epa: JSON.stringify(t.epa.total_points.mean, null, 2)
		};
	});

	let upcommingMatches = data.matches
		.filter((m) => m.result.winner == null)
		.map((m) => {
			let color = 'Unknown';
			if (
				m.alliances.red.team_keys.includes(data.team) ||
				m.alliances.red.surrogate_team_keys.includes(data.team)
			) {
				color = 'Red';
			} else if (
				m.alliances.blue.team_keys.includes(data.team) ||
				m.alliances.blue.surrogate_team_keys.includes(data.team)
			) {
				color = 'Blue';
			}

			const now = new Date();
			const duration = Math.round((new Date(m.time * 1000).getTime() - now.getTime()) / 60000);
			const hours = Math.floor(duration / 60);
			const minutes = duration % 60;
			const seconds = Math.floor((new Date(m.time * 1000).getTime() - now.getTime()) / 1000) % 60;
			const formattedDuration = `~${hours}h ${minutes}m ${seconds}s`;

			return {
				match: m.key.replace(`${data.eventKey}_`, '').toUpperCase(),
				predictedTime: formattedDuration,
				color: color
			};
		});
	const matchesColumns: TableColumns = [
		{ data: 'match', title: 'Match' },
		{ data: 'predictedTime', title: 'Predicted Time' },
		{ data: 'color', title: 'Color' }
	];
</script>

<div class="container-fluid mt-3">
	<div class="row">
		<div class="col">
			<img src="bionics-logo.svg" alt="Bionics Logo" class="logo" />
		</div>
	</div>
	<div class="row">
		<div class="col">
			<div class="bin">
				<h4>Rankings</h4>
				<TableForObjectArray data={rankData.sort((a, b) => a.rank - b.rank)} />
			</div>
		</div>
		<div class="col">
			<div class="bin">
				<h4>Next Match: qm??</h4>

				<div class="row mb-3">
					<div class="col text-center">
						<span class="fs-4 text-danger">????</span><br />EPA
					</div>
					<div class="col text-center"><span class="fs-4 text-danger">????</span><br />EPA</div>
					<div class="col text-center"><span class="fs-4 text-danger">????</span><br />EPA</div>
				</div>
				<div class="row mb-3">
					<div class="col text-center">
						<span class="fs-2 text-danger fw-bold">Score</span> :
						<span class="fs-3 text-primary">Score</span>
						<br />Projected Winner:
						<span class="text-danger">Color</span>
					</div>
					<div class="col text-center">
						<span class="fs-2 text-danger">64%</span><br />Win Probability
					</div>
				</div>
				<div class="row">
					<div class="col text-center"><span class="fs-4 text-primary">????</span><br />55</div>
					<div class="col text-center"><span class="fs-4 text-primary">????</span><br />55</div>
					<div class="col text-center"><span class="fs-4 text-primary">????</span><br />55</div>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="bin">
				<h4>Upcomming Matches</h4>
				<TableForObjectArray data={upcommingMatches} columns={matchesColumns} />
			</div>
		</div>
	</div>

	<!-- Our Stats -->
	<div class="row">
		<div class="col-6">
			<div class="text-center bin d-flex align-items-center justify-content-center gap-3">
				<h4>Rank by EPA</h4>
				<Badge value={'?'} prefix={'Event'} desc={'out of 3//'} />
				<Badge
					value={data.teamYear.epa.ranks.state.rank}
					prefix={'Massachusetts'}
					desc={`out of ${data.teamYear.epa.ranks.state.team_count}`}
				/>
				<Badge
					value={data.teamYear.epa.ranks.district.rank}
					prefix={'NE'}
					desc={`out of ${data.teamYear.epa.ranks.district.team_count}`}
				/>
				<Badge
					value={data.teamYear.epa.ranks.country.rank}
					prefix={'USA'}
					desc={`out of ${data.teamYear.epa.ranks.country.team_count}`}
				/>
				<Badge
					value={data.teamYear.epa.ranks.total.rank}
					prefix={'Worldwide'}
					desc={`out of ${data.teamYear.epa.ranks.total.team_count}`}
				/>
			</div>
		</div>
		<div class="col-2">
			<div class="text-center bin d-flex align-items-center justify-content-center gap-3">
				<h4>District Stats</h4>
				<Badge
					value={data.teamYear.district_rank}
					prefix={'District Rank'}
					desc={`out of ${data.teamYear.epa.ranks.district.team_count}<br> with ${data.teamYear.district_points} points`}
				/>
			</div>
		</div>
		<div class="col-4">
			<div class="text-center bin d-flex align-items-center justify-content-center gap-3">
				<h4>EPA Stats</h4>
				<Badge value={'?'} prefix={'Auto EPA'} />
				<Badge value={'?'} prefix={'Teleop EPA'} color={'rgb(255, 127, 14)'} />
				<Badge value={'?'} prefix={'Endgame EPA'} color={'rgb(44, 160, 44)'} />
				<Badge value={'?'} prefix={'Total EPA'} color={'rgb(214, 39, 40)'} />
			</div>
		</div>
	</div>
</div>

<!-- <h1>Pit Display</h1> -->
<!-- <div class="col">
	<img src="bionics-logo.svg" alt="Bionics Logo" class="logo" />
</div> -->
<style lang="scss">
	/* .flex-grid {
		display: flex;
	}
	.col {
		flex: 1;
	} */
	:global(body) {
		background-color: #154733 !important;
		background-image: none !important;
	}
	.bin {
		position: relative;
		min-height: 100px;
		margin: 5px;
		color: #fff;
		// overflow: hidden;
		padding: 10px;
	}
	.bin:before {
		--bin-corner-size: 8px;
		--bin-size: calc(2 * var(--bin-corner-size));

		min-height: calc(4 * var(--bin-corner-size));
		padding-left: calc(var(--bin-corner-size) + 15px);
		padding-right: calc(var(--bin-corner-size) + 15px);

		content: '';
		position: absolute;
		inset: 0;
		background: #fff;
		clip-path: polygon(
			0 var(--bin-size),
			var(--bin-size) 0,
			calc(100% - var(--bin-size)) 0,
			100% var(--bin-size),
			100% calc(100% - var(--bin-size)),
			calc(100% - var(--bin-size)) 100%,
			var(--bin-size) 100%,
			0 calc(100% - var(--bin-size)),
			0 var(--bin-size),
			1px calc(var(--bin-size) + 0.41px),
			1px calc(100% - var(--bin-size) - 0.41px),
			calc(var(--bin-size) + 0.41px) calc(100% - 1px),
			calc(100% - var(--bin-size) - 0.41px) calc(100% - 1px),
			calc(100% - 1px) calc(100% - var(--bin-size) - 0.41px),
			calc(100% - 1px) calc(var(--bin-size) + 0.41px),
			calc(100% - var(--bin-size) - 0.41px) 1px,
			calc(var(--bin-size) + 0.41px) 1px,
			1px calc(var(--bin-size) + 0.41px)
		);
	}

	.logo {
		width: 200px;
		/* height: 100px; */
	}

	:global(
			.pit-table,
			.table-striped > tbody > tr:nth-of-type(odd) > *,
			.table > :not(caption) > * > *
		) {
		background-color: transparent;
		color: #fff;
		border: 0;
	}
</style>
