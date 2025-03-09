<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import TableForObjectArray, {
		type TableColumns
	} from '$lib/components/TableForObjectArray.svelte';
	import type { PageData } from './$types';
	import Badge from './Badge.svelte';

	export let data: PageData;

	const titleCase = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	};

	const intervalMs = 30 * 1000;

	const updateData = async () => {
		await invalidateAll();
		setTimeout(updateData, intervalMs);
	};

	setTimeout(updateData, intervalMs);

	const matchesColumns: TableColumns = [
		{ data: 'match', title: 'Match' },
		{ data: 'predictedTime', title: 'Predicted Time' },
		{ data: 'color', title: 'Color' }
	];
</script>

<div class="container-fluid mt-3">
	<!-- Logo Row -->
	<div class="row">
		<div class="col">
			<img src="bionics-logo.svg" alt="Bionics Logo" class="logo" />
		</div>
	</div>

	<!-- Rankings and Matches -->
	<div class="row">
		<div class="col">
			<div class="bin">
				<h4>Rankings</h4>
				<TableForObjectArray data={data.rankings.sort((a, b) => a.rank - b.rank)} />
			</div>
		</div>
		<div class="col">
			<div class="bin">
				<h4>Next Match: {data.nextmatch.match_name}</h4>

				<div class="row mb-3">
					<div class="col text-center">
						<span class="fs-4 text-danger">{data.nextmatch.alliances.red.team_keys[0]}</span><br
						/>EPA
					</div>
					<div class="col text-center">
						<span class="fs-4 text-danger">{data.nextmatch.alliances.red.team_keys[1]}</span><br
						/>EPA
					</div>
					<div class="col text-center">
						<span class="fs-4 text-danger">{data.nextmatch.alliances.red.team_keys[2]}</span><br
						/>EPA
					</div>
				</div>
				<div class="row mb-3">
					<!-- <div class="col text-center">
						<span class="fs-2 text-danger fw-bold">Score</span> :
						<span class="fs-3 text-primary">Score</span>
						<br />Projected Winner:
						<span class={data.nextmatch.pred.winner == 'red' ? 'text-danger' : 'text-primary'}
							>{titleCase(data.nextmatch.pred.winner)}</span
						>
					</div> -->
					<div class="col text-center">
						<span class="fs-2"
							>{Math.round(
								data.nextmatch.alliances.red.team_keys.includes(data.team)
									? data.nextmatch.pred.red_win_prob * 100
									: 100 - data.nextmatch.pred.red_win_prob * 100
							)}%</span
						><br />Win Probability
					</div>
				</div>
				<div class="row">
					<div class="col text-center">
						<span class="fs-4 text-primary">{data.nextmatch.alliances.blue.team_keys[0]}</span><br
						/>EPA
					</div>
					<div class="col text-center">
						<span class="fs-4 text-primary">{data.nextmatch.alliances.blue.team_keys[1]}</span><br
						/>EPA
					</div>
					<div class="col text-center">
						<span class="fs-4 text-primary">{data.nextmatch.alliances.blue.team_keys[2]}</span><br
						/>EPA
					</div>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="bin">
				<h4>Upcomming Matches</h4>
				<TableForObjectArray data={data.upcommingMatches} columns={matchesColumns} />
			</div>
		</div>
	</div>

	<!-- Our Stats -->
	<div class="row mt-3">
		<div class="col-6">
			<div class="text-center bin d-flex align-items-center justify-content-center gap-3">
				<h4>Rank by EPA</h4>
				<Badge
					value={data.ourRanking.record.qual.rank}
					prefix={'Event'}
					desc={`out of ${data.ourRanking.record.qual.num_teams}`}
				/>
				<Badge
					value={data.teamYear.epa.ranks.state.rank}
					prefix={'Massachusetts'}
					desc={`out of ${data.teamYear.epa.ranks.state.team_count}`}
				/>
				<Badge
					value={data.teamYear.epa.ranks.district.rank}
					prefix={'New England'}
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
				<Badge value={Math.round(data.ourRanking.epa.breakdown.auto_points)} prefix={'Auto EPA'} />
				<Badge
					value={Math.round(data.ourRanking.epa.breakdown.teleop_points)}
					prefix={'Teleop EPA'}
					color={'rgb(255, 127, 14)'}
				/>
				<Badge
					value={Math.round(data.ourRanking.epa.breakdown.endgame_points)}
					prefix={'Endgame EPA'}
					color={'rgb(44, 160, 44)'}
				/>
				<Badge
					value={Math.round(data.ourRanking.epa.breakdown.total_points)}
					prefix={'Total EPA'}
					color={'rgb(214, 39, 40)'}
				/>
			</div>
		</div>
	</div>
</div>

<div class="footer">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="btn btn-link" on:click={() => invalidateAll()}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-arrow-clockwise"
			viewBox="0 0 16 16"
		>
			<path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
			<path
				d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"
			/>
		</svg>
	</div>
	<span>Last updated: {new Date(data.lastUpdated).toLocaleString()}</span>
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
	$bionic-green: #154733;

	:global(body) {
		background-color: $bionic-green !important;
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

	:global(html) {
		position: relative;
		min-height: 100%;
	}

	$footerHeight: 40px;
	:global(body) {
		margin-bottom: $footerHeight; /* Margin bottom by footer height */
	}
	.footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: $footerHeight; /* Set the fixed height of the footer here */
		line-height: $footerHeight; /* Vertically center the text there */
		// background-color: #f5f5f5;
		background-color: darken($bionic-green, 5%); //var(--bionic-green);
		color: #666;
		padding-left: 10px;
		padding-right: 10px;
		text-align: right;
		font-size: smaller;
	}
	.footer .btn {
		color: #666 !important;
		:hover {
			color: #fff !important;
		}
	}
</style>
