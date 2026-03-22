<script lang="ts">
	import Match from './Match.svelte';
	import type { StatboticsTeamMatches } from '../restTypes';

	export let data: StatboticsTeamMatches;

	const middle = 30 + 20 + 85 * 4;

	console.log('matches', data);
</script>

<svg
	id="bracket"
	class="bracket"
	viewBox="0 15 1355 540"
	width="100%"
	version="1.1"
	xml:space="preserve"
	xmlns="http://www.w3.org/2000/svg"
>
	<g id="background" transform="translate(0, -20)">
		<g fill="#9C9C9C" name="matchLevelBars">
			{#each [0, 1, 2, 3, 4, 5] as i}
				<rect x={50 + 220 * i + 62} y="41" width="75" height="512" />
			{/each}
		</g>
		<!-- <g name="roundLabels">
			<text x={117 + 220 * 0} y="36">ROUND 1</text>
			<text x={117 + 220 * 1} y="36">ROUND 2</text>
			<text x={117 + 220 * 2} y="36">ROUND 3</text>
			<text x={117 + 220 * 3} y="36">ROUND 4</text>
			<text x={117 + 220 * 4} y="36">ROUND 5</text>
			<text x={123 + 220 * 5} y="36">FINALS</text>
		</g> -->

		<line x1="70" x2="971" y1={middle} y2={middle} stroke="#8e8e8e" />

		<!-- <g fill="none" stroke-miterlimit="10" stroke-width="2">
			<g stroke="red">
				<polyline
					transform="translate(0,-48)"
					points="242.02 175.06 430.85 175.06 430.85 328.12 242.62 328.12"
				/>
				<polyline
					transform="translate(0,-48)"
					points="186.26 136.56 242.54 136.56 242.54 213.56 199.05 213.56"
				/>
				<polyline
					transform="translate(0,-48)"
					points="186.26 291.56 242.54 291.56 242.54 368.56 199.05 368.56"
				/>
				<path d="m431 206h575v250.12h-375.17" />
				<path d="m409.47 501.65h220.25v-80.662h-219.01" />
				<line x1="1024" x2="1006" y1="373" y2="373" />
			</g>
		</g> -->
		<text transform="rotate(-90)" x="-210" y="25" font-size="26px" text-anchor="middle"
			>Upper Bracket</text
		>
		<text transform="rotate(-90)" x="-465.3208" y="24.104954" font-size="26px" text-anchor="middle"
			>Lower Bracket</text
		>
	</g>
	<Match
		pos={{ x: 50, y: 30 }}
		matchHeader="MATCH 1"
		match={data.find((m) => m.comp_level == 'sf' && m.set_number == 1)}
		redTitle="Alliance 1"
		blueTitle="Alliance 8"
	/>
	<Match
		pos={{ x: 50, y: 30 + 85 }}
		matchHeader="MATCH 2"
		match={data.find((m) => m.comp_level == 'sf' && m.set_number == 2)}
		redTitle="Alliance 4"
		blueTitle="Alliance 5"
	/>
	<Match
		pos={{ x: 50, y: 30 + 85 * 2 }}
		matchHeader="MATCH 3"
		match={data.find((m) => m.comp_level == 'sf' && m.set_number == 3)}
		redTitle="Alliance 2"
		blueTitle="Alliance 7"
	/>
	<Match
		pos={{ x: 50, y: 30 + 85 * 3 }}
		matchHeader="MATCH 4"
		match={data.find((m) => m.comp_level == 'sf' && m.set_number == 4)}
		redTitle="Alliance 3"
		blueTitle="Alliance 6"
	/>

	<Match
		pos={{ x: 50 + 220, y: 40 + 85 * 4 }}
		matchHeader="MATCH 5"
		redTitle="Loser M1"
		blueTitle="Loser M2"
		match={data.find((m) => m.comp_level == 'sf' && m.set_number == 5)}
	/>
	<Match
		pos={{ x: 50 + 220, y: 40 + 85 * 5 }}
		matchHeader="MATCH 6"
		redTitle="Loser M3"
		blueTitle="Loser M4"
		match={data.find((m) => m.comp_level == 'sf' && m.set_number == 6)}
	/>
	<Match
		pos={{ x: 50 + 220, y: 70 }}
		matchHeader="MATCH 7"
		redTitle="Winner M1"
		blueTitle="Winner M2"
		match={data.find((m) => m.comp_level == 'sf' && m.set_number == 7)}
	/>
	<Match
		pos={{ x: 50 + 220, y: 70 + 85 * 2 }}
		matchHeader="MATCH 8"
		redTitle="Winner M3"
		blueTitle="Winner M4"
		match={data.find((m) => m.comp_level == 'sf' && m.set_number == 8)}
	/>

	<Match
		pos={{ x: 50 + 220 * 2, y: 40 + 85 * 5 }}
		matchHeader="MATCH 9"
		redTitle="Loser M7"
		blueTitle="Winner M6"
		match={data.find((m) => m.comp_level == 'sf' && m.set_number == 9)}
	/>
	<Match
		pos={{ x: 50 + 220 * 2, y: 40 + 85 * 4 }}
		matchHeader="MATCH 10"
		redTitle="Loser M8"
		blueTitle="Winner M5"
		match={data.find((m) => m.comp_level == 'sf' && m.set_number == 10)}
	/>

	<Match
		pos={{ x: 50 + 220 * 3, y: 70 + 85 * 1 }}
		matchHeader="MATCH 11"
		redTitle="Winner M7"
		blueTitle="Winner M8"
		match={data.find((m) => m.comp_level == 'sf' && m.set_number == 11)}
	/>

	<Match
		pos={{ x: 50 + 220 * 3, y: 40 + 85 * 4.5 }}
		matchHeader="MATCH 12"
		redTitle="Winner M9"
		blueTitle="Winner M10"
		match={data.find((m) => m.comp_level == 'sf' && m.set_number == 12)}
	/>

	<Match
		pos={{ x: 50 + 220 * 4, y: 40 + 85 * 4.5 }}
		matchHeader="MATCH 13"
		redTitle="Loser M11"
		blueTitle="Winner M12"
		match={data.find((m) => m.comp_level == 'sf' && m.set_number == 13)}
	/>

	<Match
		pos={{ x: 50 + 220 * 5, y: 40 + 85 * 3 }}
		matchHeader="BEST 2 OF 3"
		redTitle="Winner M11"
		blueTitle="Winner M13"
		match={data.find((m) => m.comp_level == 'f' && m.set_number == 1)}
	/>
</svg>

<style>
	svg {
		width: 100%;
	}
	@font-face {
		font-family: 'MyriadPro-Regular';
		font-style: normal;
		font-weight: normal;
		src: url('/fonts/myriad-pro/MYRIADPRO-SEMIBOLD.woff') format('woff');
	}

	.bracket {
		font-family: 'MyriadPro-Regular';
		margin-top: -10px;
		margin-bottom: -20px;
		/* margin-bottom: -45px; */
		/* max-height: 450px; */
		color: #ffffff;
	}
	.bracket text {
		fill: #ffffff;
	}
</style>
