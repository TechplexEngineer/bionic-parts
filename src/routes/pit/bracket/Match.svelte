<script lang="ts">
	import type { StatboticsTeamMatch } from '../restTypes';

	export let matchHeader = 'Match 1';
	export let redTitle = 'Alliance 1';
	export let blueTitle = 'Alliance 8';

	export let match: StatboticsTeamMatch | undefined;
	// console.log('match', match);

	let red1Team = match?.alliances?.red.team_keys[0] || '';
	let red2Team = match?.alliances?.red.team_keys[1] || '';
	let red3Team = match?.alliances?.red.team_keys[2] || '';
	let blue1Team = match?.alliances?.blue.team_keys[0] || '';
	let blue2Team = match?.alliances?.blue.team_keys[1] || '';
	let blue3Team = match?.alliances?.blue.team_keys[2] || '';

	export let redScore = match?.result?.red_score || '';
	export let blueScore = match?.result?.blue_score || '';

	export let pos: { x: number; y: number } = { x: 0, y: 0 };
</script>

<g transform="translate({pos.x}, {pos.y})">
	<g name="background">
		<path d="M0 0h22v74H0Z" fill="black" />
		<path fill="red" d="M22 0h160.107L197 18l-14.893 18H22Z" />
		<path name="divider" d="M22 36h160v2H22z" fill="#fff" stroke-width="4" />
		<path fill="blue" d="M22 74V38h160.107L197 55.995 182.107 74Z" />
	</g>

	<text
		x="-37"
		y="15"
		font-size="12"
		text-anchor="middle"
		fill="#fff"
		transform="matrix(0 -1 1 0 0 0)">{matchHeader}</text
	>

	<g name="title" text-anchor="middle">
		<text x="100" y="15">{redTitle}</text>
		<text x="100" y="53">{blueTitle}</text>
	</g>
	<g name="score" font-size="15">
		<text x="155.397" y="23.457">{parseInt(redScore) < 0 ? '' : redScore}</text>
		<text x="155.397" y="61.457">{parseInt(blueScore) < 0 ? '' : blueScore}</text>
	</g>
	<g name="teams" font-size="12">
		<text x="32.834" y="30.234">{red1Team}</text>
		<text x="75.021" y="30.234">{red2Team}</text>
		<text x="117.208" y="30.234">{red3Team}</text>

		<text x="30.971" y="67.416">{blue1Team}</text>
		<text x="73.158" y="67.416">{blue2Team}</text>
		<text x="115.345" y="67.416">{blue3Team}</text>
	</g>

	<g name="dots">
		<circle
			cx="196"
			cy="18"
			r="8"
			fill="#ffca10"
			name="red"
			style="display: {redScore > blueScore ? 'inherit' : 'none'};"
		/>
		<circle
			cx="196"
			cy="56"
			r="8"
			fill="#ffca10"
			name="blue"
			style="display: {blueScore > redScore ? 'inherit' : 'none'};"
		/>
	</g>
</g>

<style>
	text {
		fill: #ffffff;
	}
</style>
