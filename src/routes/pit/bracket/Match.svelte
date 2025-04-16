<script lang="ts">
	export let matchNumber = 1;
	export let redTitle = 'Alliance 1';
	export let blueTitle = 'Alliance 8';

	export let red1Team = '12345';
	export let red2Team = '12345';
	export let red3Team = '12345';
	export let blue1Team = '54321';
	export let blue2Team = '54321';
	export let blue3Team = '54321';

	export let redScore = '111';
	export let blueScore = '999';

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
		transform="matrix(0 -1 1 0 0 0)">MATCH {matchNumber}</text
	>

	<g name="title" text-anchor="middle">
		<text x="100" y="15">{redTitle}</text>
		<text x="100" y="53">{blueTitle}</text>
	</g>
	<g name="score" font-size="15">
		<text x="155.397" y="23.457">{redScore}</text>
		<text x="155.397" y="61.457">{blueScore}</text>
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
