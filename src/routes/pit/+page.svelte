<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import TableForObjectArray, {
		type TableColumns
	} from '$lib/components/TableForObjectArray.svelte';
	import Modal from '$lib/Modal.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import Badge from './Badge.svelte';
	// import { preferences } from './store';
	import { page } from '$app/stores';
	import TeamAndEpa from './TeamAndEPA.svelte';

	export let data: PageData;

	let updateIntervalMs = 30 * 1000;

	onMount(() => {
		const updateData = async () => {
			await invalidateAll();
			setTimeout(updateData, updateIntervalMs);
		};

		setTimeout(updateData, updateIntervalMs);
	});

	const upcommingMatchColumns: TableColumns = [
		{ data: 'match', title: 'Match' },
		{ data: 'predictedTime', title: 'Predicted Time' },
		{ data: 'color', title: 'Color', renderHTML: (data) => `<span class="badge badge-${data.toLowerCase()}">${data}</span>` },
	];

	const rankingsColumns: TableColumns = [
		{ data: 'rank', title: 'Rank' },
		{ data: 'teamNumber', title: 'Team', renderHTML: (val, _, row) => {
			const formatted = `${row.teamNumber} - ${row.teamName}`;
			if (val == data.teamNumber) {
				return `<span class="fw-bold border-bottom">${formatted}</span>`
			}
			return formatted;
		} },
		{ data: 'epa', title: 'EPA' },
	];
</script>

<svelte:head>
	<title>Bionics Pit Display</title>
</svelte:head>

<div class="wrapper">
	<div class="row mt-4" data-name="Logo and Stats">
		<div class="col logocol">
			<a href="/pit/config">
				<img src="bionics-logo.svg" alt="Bionics Logo" class="logo" />
			</a>
		</div>
		<div class="col-6">
			<div class="text-center bin h-100">
				<h4 class="binHeader">Rank by EPA</h4>
				<div class="d-flex align-items-center justify-content-center gap-3">
					<Badge
						value={data.ourRanking ? data.ourRanking.record.qual.rank : '?'}
						prefix={'Event'}
						desc={`out of ${data.ourRanking ? data.ourRanking.record.qual.num_teams : '?'}`}
					/>
					<Badge
						value={data.teamYear.epa.ranks.state.rank}
						prefix={data.teamYear.state || 'State'}
						desc={`out of ${data.teamYear.epa.ranks.state.team_count}`}
					/>
					<Badge
						value={data.teamYear.epa.ranks.district.rank}
						prefix={data.teamYear.district.toUpperCase() || 'District'}
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
		</div>
		<!-- <div class="col-2">
	<div class="text-center bin d-flex align-items-center justify-content-center gap-3">
		<h4>District Stats</h4>
		<Badge
			value={data.teamYear.district_rank}
			prefix={'District Rank'}
			desc={`out of ${data.teamYear.epa.ranks.district.team_count}<br> with ${data.teamYear.district_points} points`}
		/>
	</div>
</div> -->
		<div class="col-4">
			<div class="text-center bin h-100">
				<h4 class="binHeader">EPA Stats</h4>
				<div class="d-flex align-items-center justify-content-center gap-3">
					<Badge
						value={data.ourRanking ? Math.round(data.ourRanking.epa.breakdown.auto_points) : '?'}
						prefix={'Auto EPA'}
					/>
					<Badge
						value={data.ourRanking ? Math.round(data.ourRanking.epa.breakdown.teleop_points) : '?'}
						prefix={'Teleop EPA'}
						color={'rgb(255, 127, 14)'}
					/>
					<Badge
						value={data.ourRanking ? Math.round(data.ourRanking.epa.breakdown.endgame_points) : '?'}
						prefix={'Endgame EPA'}
						color={'rgb(44, 160, 44)'}
					/>
					<Badge
						value={data.ourRanking ? Math.round(data.ourRanking.epa.breakdown.total_points) : '?'}
						prefix={'Total EPA'}
						color={'rgb(214, 39, 40)'}
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="row binrow row-fill-height mb-2" id="row2" data-name="Rankings and Matches">
		<div class="col">
			<div class="bin h-100">
				<h4 class="binHeader">Rankings</h4>
				<TableForObjectArray data={data.rankings} columns={rankingsColumns}/>
			</div>
		</div>
		<div class="col">
			<div class="bin h-100">
				<h4 class="binHeader">Next Match: {data.nextmatch?.match_name}</h4>
				<div class="mt-5"></div>
				{#if data.nextmatch?.alliances.red1.number == data.teamNumber || data.nextmatch?.alliances.red2.number == data.teamNumber || data.nextmatch?.alliances.red3.number == data.teamNumber}
					<!-- Red alliance on top -->
					<div class="row mb-3">
						<TeamAndEpa
							outTeamNumber={data.teamNumber}
							number={data.nextmatch?.alliances.red1.number}
							epa={data.nextmatch?.alliances.red1.epa}
							color="text-danger"
						/>
						<TeamAndEpa
							outTeamNumber={data.teamNumber}
							number={data.nextmatch?.alliances.red2.number}
							epa={data.nextmatch?.alliances.red2.epa}
							color="text-danger"
						/>
						<TeamAndEpa
							outTeamNumber={data.teamNumber}
							number={data.nextmatch?.alliances.red3.number}
							epa={data.nextmatch?.alliances.red3.epa}
							color="text-danger"
						/>
					</div>
					<div class="row mb-3">
						<div class="col text-center">
							<span class="fs-2">{data.nextmatch.ourWinProb}%</span><br />Win Probability
						</div>
					</div>
						
					<div class="row">
						<TeamAndEpa
							outTeamNumber={data.teamNumber}
							number={data.nextmatch?.alliances.blue1.number}
							epa={data.nextmatch?.alliances.blue1.epa}
							color="text-primary"
						/>
						<TeamAndEpa
							outTeamNumber={data.teamNumber}
							number={data.nextmatch?.alliances.blue2.number}
							epa={data.nextmatch?.alliances.blue2.epa}
							color="text-primary"
						/>
						<TeamAndEpa
							outTeamNumber={data.teamNumber}
							number={data.nextmatch?.alliances.blue3.number}
							epa={data.nextmatch?.alliances.blue3.epa}
							color="text-primary"
						/>
					</div>
				{:else}
					<!-- Blue alliance on top -->
					<div class="row mb-3">
						<TeamAndEpa
							outTeamNumber={data.teamNumber}
							number={data.nextmatch?.alliances.blue1.number}
							epa={data.nextmatch?.alliances.blue1.epa}
							color="text-primary"
						/>
						<TeamAndEpa
							outTeamNumber={data.teamNumber}
							number={data.nextmatch?.alliances.blue2.number}
							epa={data.nextmatch?.alliances.blue2.epa}
							color="text-primary"
						/>
						<TeamAndEpa
							outTeamNumber={data.teamNumber}
							number={data.nextmatch?.alliances.blue3.number}
							epa={data.nextmatch?.alliances.blue3.epa}
							color="text-primary"
						/>
					</div>
					<div class="row mb-3 text-center text-white-50">
						{#each Object.entries(data.nextmatch?.rankingPoints) as [idx, rp]}
							<div class="col">
								{rp.name}: {Math.round(rp.pred*1000)/10}%
							</div>
						{/each}
						<!-- <div class="col">
							RP1: 5
						</div>
						<div class="col">
							RP1: 5
						</div>
						<div class="col">
							RP1: 5
						</div> -->
					</div>
					<div class="row mb-3">
					
						<div class="col text-center">
							<span class="fs-2">{data.nextmatch.ourWinProb}%</span><br />Win Probability
						</div>
					</div>
					<div class="row mb-3">
						<TeamAndEpa
							outTeamNumber={data.teamNumber}
							number={data.nextmatch?.alliances.red1.number}
							epa={data.nextmatch?.alliances.red1.epa}
							color="text-danger"
						/>
						<TeamAndEpa
							outTeamNumber={data.teamNumber}
							number={data.nextmatch?.alliances.red2.number}
							epa={data.nextmatch?.alliances.red2.epa}
							color="text-danger"
						/>
						<TeamAndEpa
							outTeamNumber={data.teamNumber}
							number={data.nextmatch?.alliances.red3.number}
							epa={data.nextmatch?.alliances.red3.epa}
							color="text-danger"
						/>
					</div>
				{/if}

				<!-- <div class="row mb-3">
					<div class="col text-center">
						<span class="fs-4 text-danger">{data.nextmatch?.alliances.red1.number}</span><br />{data
							.nextmatch?.alliances.red1.epa}
					</div>
					<div class="col text-center">
						<span class="fs-4 text-danger">{data.nextmatch?.alliances.red2.number}</span><br />{data
							.nextmatch?.alliances.red2.epa}
					</div>
					<div class="col text-center">
						<span class="fs-4 text-danger">{data.nextmatch?.alliances.red3.number}</span><br />{data
							.nextmatch?.alliances.red3.epa}
					</div>
				</div>
				<div class="row mb-3">
					
					<div class="col text-center">
						<span class="fs-2">{data.nextmatch.ourWinProb}%</span><br />Win Probability
					</div>
				</div> -->
				<!-- <div class="row mb-3">
					<div class="col text-center">
					<span class="fs-2 text-danger fw-bold">Score</span> :
					<span class="fs-3 text-primary">Score</span>
					<br />Projected Winner:
					<span class={data.nextmatch.pred.winner == 'red' ? 'text-danger' : 'text-primary'}
						>{titleCase(data.nextmatch.pred.winner)}</span
					>
				</div>
					<div class="col text-center">
						<span class="fs-2">{data.nextmatch.ourWinProb}%</span><br />Win Probability
					</div>
				</div> -->
				<!-- <div class="row">
					<div class="col text-center">
						<span class="fs-4 text-primary">{data.nextmatch?.alliances.blue1.number}</span><br
						/>{data.nextmatch?.alliances.blue1.epa}
					</div>
					<div class="col text-center">
						<span class="fs-4 text-primary">{data.nextmatch?.alliances.blue2.number}</span><br
						/>{data.nextmatch?.alliances.blue2.epa}
					</div>
					<div class="col text-center">
						<span class="fs-4 text-primary">{data.nextmatch?.alliances.blue3.number}</span><br
						/>{data.nextmatch?.alliances.blue3.epa}
					</div>
				</div> -->
			</div>
		</div>
		<div class="col">
			<div class="bin h-100">
				<h4 class="binHeader">Upcomming Matches</h4>
				<div class="d-flex justify-content-between mb-2">
					<div class="text-center">
						{#if data.nexusEventStatus.nowQueuing}
							<div class="fw-bold">Now Queueing</div>
							<div>{data.nexusEventStatus.nowQueuing || ''}</div>
						{/if}
					</div>
					<div class="text-center">
						{#if data.nexusEventStatus.matches.find((m) => m.status == 'On deck')}
							<div class="fw-bold">On Deck</div>
							<div>
								{data.nexusEventStatus.matches.find((m) => m.status == 'On deck')?.label}
							</div>
						{/if}
					</div>
					
				</div>
				<!-- <TableForObjectArray data={data.upcommingMatches} columns={matchesColumns} /> -->
				<TableForObjectArray data={data.upcommingMatches.slice(0, 6)} columns={upcommingMatchColumns}/>
			</div>
		</div>
	</div>

	<div class="row binrow sponsorRow" data-name="Sponsors">
		<div class="col">
			<div class="bin sponsors text-center">
				<h4 class="binHeader">Thank You To Our Generous Sponsors</h4>
				<img src="sponsors/KLA.svg" alt="KLA" />
				<img src="sponsors/AnalogDevices.svg" alt="Analog Devices" />
				<img src="sponsors/Boeing.svg" alt="Boeing" />
				<img src="sponsors/BAE.svg" alt="BAE" />

				<img src="sponsors/AmericanTower.svg" alt="American Tower" />

				<img src="sponsors/ArgosyFoundation.svg" alt="Argosy" />
				<img src="sponsors/RTX.svg" alt="RTX" />

				<img src="sponsors/CRMachine.svg" alt="CRM" />

				<img src="sponsors/GeneHaasFoundation.svg" alt="HAAS Foundation" />
				<img src="sponsors/IntuitiveFoundation.svg" alt="Intuitive Foundation" />

				<img src="sponsors/MassCulturalCouncil.svg" alt="Mass Cultural Council" />
				<img src="sponsors/Mathnasium.svg" alt="Mathanasium" />
				<img src="sponsors/PTC.svg" alt="PTC" />
				<img src="sponsors/Polymershapes.svg" alt="PolymerShapes" />
				<img src="sponsors/FabWorks.svg" alt="FabWorks" />
				<img src="sponsors/StonehamBank.svg" alt="Stoenham Bank" />
				<img src="sponsors/TownOfBillerica.png" alt="Town Of Billerica" />
			</div>
		</div>
	</div>

	<div class="footer">
		<span>
			{data.teamNumber} - {data.eventKey}
		</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<a class="btn btn-link btnicon" href="/pit/config">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-gear-fill"
				viewBox="0 0 16 16"
			>
				<path
					d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
				/>
			</svg>
		</a>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="btn btn-link btnicon" on:click={() => invalidateAll()}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-arrow-clockwise"
				viewBox="0 0 16 16"
			>
				<path
					fill-rule="evenodd"
					d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
				/>
				<path
					d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"
				/>
			</svg>
		</div>
		<span>Last updated: {new Date(data.lastUpdated).toLocaleString()}</span>
	</div>
</div>

<!-- <h1>Pit Display</h1> -->
<!-- <div class="col">
	<img src="bionics-logo.svg" alt="Bionics Logo" class="logo" />
</div> -->
<style lang="scss">
	.logocol {
		text-align: center;
		margin-left: 0px;
		margin-top: -5px;
		margin-right: -40px;
		margin-bottom: -10px;
	}
	.logo {
		width: 250px;
		/* height: 100px; */
	}

	:global(.badge-blue) {
		
		background-color: rgb(13, 110, 253);
	}
	:global(.badge-red) {
		background-color: rgb(214, 39, 40);
	}
	
	.wrapper {
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
		zoom: 1.25;
	}
	// #row1 {
	// 	background-color: red;
	// }
	#row2 {
		// background-color: blue;
		flex: 2;
		display: flex;
	}
	// #row3 {
	// 	background-color: green;
	// }

	$bionic-green: #154733;

	.binHeader {
		margin: -30px 10px 10px;
		/* padding-bottom: 35px; */
		background: #154733;
		z-index: 5;
		position: relative;
		padding: 2px;
		border: 1px solid white;
		text-align: center;
	}

	.binrow {
		margin-top: 35px !important;
	}
	:global(html) {
		height: 100%;
	}

	:global(body) {
		background-color: $bionic-green !important;
		background-image: none !important;
		height: 100%;
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

	.btnicon {
		margin-top: -5px;
	}

	


	:global(
			.pit-table,
			.table-striped > tbody > tr:nth-of-type(odd) > *,
			.table > :not(caption) > * > *
		) {
		background-color: transparent;
		color: #fff;
		border: 0;
		margin-bottom: -10px;
	}

	:global(html) {
		position: relative;
		min-height: 100%;
		font-size: 1rem; // change this to increase whole page font size
	}

	$footerHeight: 40px;
	.sponsorRow {
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

	.sponsors img {
		height: 75px;
		background-color: #fff;
		border-radius: 10px;
		padding: 8px 8px;
		margin-bottom: 5px;
	}

	.wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.row-fill-height {
		display: flex;
		flex: 2;
	}
</style>
