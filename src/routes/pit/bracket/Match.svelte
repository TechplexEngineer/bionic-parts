<script lang="ts">
	import type { StatboticsTeamMatch } from '../restTypes';

	export let matchHeader = 'Match 1';
	export let redTitle = 'Alliance 1';
	export let blueTitle = 'Alliance 8';

	export let match: StatboticsTeamMatch | undefined;
	// console.log('match', match);

	$: red1Team = match?.alliances?.red.team_keys[0] || '';
	$: red2Team = match?.alliances?.red.team_keys[1] || '';
	$: red3Team = match?.alliances?.red.team_keys[2] || '';
	$: blue1Team = match?.alliances?.blue.team_keys[0] || '';
	$: blue2Team = match?.alliances?.blue.team_keys[1] || '';
	$: blue3Team = match?.alliances?.blue.team_keys[2] || '';

	$: redScore = match?.result?.red_score ?? '';
	$: blueScore = match?.result?.blue_score ?? '';

	export let pos: { x: number; y: number } = { x: 0, y: 0 };
</script>

<g transform="translate({pos.x}, {pos.y})">
	<g name="background">
		<path name="header" fill="black" d="M0 0h22v74H0Z" />
		<path name="red" fill="#FF7575" d="M22 0h160L197 18l-14.893 18H22Z" />
		<path name="divider" fill="black" d="M22 36h160v2H22z" stroke-width="4" />
		<path name="blue" fill="#6C6CFF" d="M22 74V38h160.107L197 55.995 182.107 74Z" />
	</g>

	<text
		x="-37"
		y="15"
		class="matchHeader"
		font-size="12"
		text-anchor="middle"
		fill="#fff"
		transform="matrix(0 -1 1 0 0 0)">{matchHeader}</text
	>

	<g name="title" text-anchor="middle" font-size="12">
		<text x="100" y="12">{redTitle}</text>
		<text x="100" y="50">{blueTitle}</text>
	</g>
	<!--  transform="translate(100,100) rotate(90)" -->
	<g name="score" font-size="14" text-anchor="middle">
		<g transform="translate(173,17)">
			<text transform="rotate(90)">{parseInt(redScore) < 0 ? '' : redScore}</text>
		</g>
		<g transform="translate(173,55)">
			<text transform="rotate(90)">{parseInt(blueScore) < 0 ? '' : blueScore}</text>
		</g>
	</g>
	<g name="teams" font-size="17">
		<text x="23" y="30">{red1Team}</text>
		<text x="73" y="30">{red2Team}</text>
		<text x="122" y="30">{red3Team}</text>

		<text x="23" y="67">{blue1Team}</text>
		<text x="73" y="67">{blue2Team}</text>
		<text x="122" y="67">{blue3Team}</text>
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
	text.matchHeader {
		fill: #ffffff;
	}
</style>
