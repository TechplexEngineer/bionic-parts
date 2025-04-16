<script lang="ts">
	import Match from './Match.svelte';
	import type { StatboticsTeamMatches } from '../restTypes';

	export let data: StatboticsTeamMatches;

	console.log(data);

	// let alliances = {
	// 	a1: [...data[0].alliances.red.team_keys],
	// 	a8: [...data[0].alliances.blue.team_keys],

	// 	a4: [...data[1].alliances.red.team_keys],
	// 	a5: [...data[1].alliances.blue.team_keys],

	// 	a2: [...data[2].alliances.red.team_keys],
	// 	a7: [...data[2].alliances.blue.team_keys],

	// 	a3: [...data[3].alliances.red.team_keys],
	// 	a6: [...data[3].alliances.blue.team_keys]
	// };
	const middle = 30 + 20 + 85 * 4;
</script>

<svg
	id="bracket"
	class="bracket"
	width="1300"
	height="550"
	version="1.1"
	xml:space="preserve"
	xmlns="http://www.w3.org/2000/svg"
>
	<g id="background" transform="translate(0, -20)">
		<g fill="#dbdad9" name="matchLevelBars">
			{#each [0, 1, 2, 3, 4, 5] as i}
				<rect x={100 + 225 * i} y="41" width="75" height="512" />
			{/each}
		</g>
		<g name="roundLabels">
			<text x={100 + 225 * 0} y="36">ROUND 1</text>
			<text x={100 + 225 * 1} y="36">ROUND 2</text>
			<text x={100 + 225 * 2} y="36">ROUND 3</text>
			<text x={100 + 225 * 3} y="36">ROUND 4</text>
			<text x={100 + 225 * 4} y="36">ROUND 5</text>
			<text x={100 + 225 * 5} y="36">FINALS</text>
		</g>

		<line x1="70" x2="971" y1={middle} y2={middle} stroke="#8e8e8e" />

		<g fill="none" stroke-miterlimit="10" stroke-width="2">
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
		</g>
		<text transform="rotate(-90)" x="-210" y="25" font-size="26px" text-anchor="middle"
			>Upper Bracket</text
		>
		<text transform="rotate(-90)" x="-465.3208" y="24.104954" font-size="26px" text-anchor="middle"
			>Lower Bracket</text
		>
		<path
			id="finalsBackground"
			d="m1254.5 438.55h-230.49c-5.5 0-10-4.5-10-10v-111.1c0-5.5 4.5-10 10-10h230.49c5.5 0 10 4.5 10 10v111.1c0 5.5-4.5 10-10 10z"
			fill="#c1c1c1"
			stroke="#000"
			stroke-miterlimit="10"
			stroke-width="2"
		/>
	</g>
	<Match pos={{ x: 50, y: 30 }} matchNumber={1} />
	<Match pos={{ x: 50, y: 30 + 85 }} matchNumber={2} />
	<Match pos={{ x: 50, y: 30 + 85 * 2 }} matchNumber={3} />
	<Match pos={{ x: 50, y: 30 + 85 * 3 }} matchNumber={4} />

	<Match pos={{ x: 50, y: 30 + 85 * 3 }} matchNumber={5} />

	<Match
		pos={{ x: 270, y: 40 + 85 * 4 }}
		matchNumber={7}
		redTitle="Loser M1"
		blueTitle="Loser M2"
	/>
	<Match
		pos={{ x: 270, y: 70 + 85 * 2 }}
		matchNumber={8}
		redTitle="Winner M3"
		blueTitle="Winner M4"
	/>

	<Match
		pos={{ x: 270 + 220 * 2, y: 70 + 85 * 1 }}
		matchNumber={11}
		redTitle="Winner M7"
		blueTitle="Winner M8"
	/>

	<!-- <g id="finals" transform="translate(14.851 -51.865)">
		<g id="finalsContainer">
			<polygon
				points="1157.7 422.56 1041.4 422.56 1041.4 386.54 1157.7 386.54 1170.6 404.55"
				fill="#f00"
			/>
			<polygon
				points="1157.7 459 1041.4 459 1041.4 422.99 1157.7 422.99 1170.6 440.99"
				fill="#00f"
			/>
			<line
				x1="1157.7"
				x2="1019"
				y1="422.75"
				y2="422.75"
				fill="none"
				stroke="#fff"
				stroke-miterlimit="10"
			/>
			<rect x="1019" y="386.54" width="22.43" height="72.46" />
			<text
				transform="matrix(0 -1.0029 .99706 0 0 0)"
				x="-422.63702"
				y="1037.8254"
				font-size="12.112px"
				stroke-width="1.003"
				><tspan  text-anchor="middle">BEST 2 of 3</tspan></text
			>
			<text transform="matrix(.9941 0 0 1 1060.2 401.18)" font-size="12.147px"
				><tspan x="0" y="0">Winner of M11</tspan><tspan x="-13.42" y="14.58"
					>22222 22222 22222</tspan
				></text
			>
			<text transform="matrix(.9941 0 0 1 1060.2 437.62)" font-size="12.147px"
				><tspan x="0" y="0">Winner of M13</tspan><tspan x="-13.42" y="14.58"
					>22222 22222 22222</tspan
				></text
			>
		</g>
		<g id="trophy">
			<rect x="1204.4" y="414.19" width="26.51" height="1.66" fill="#474e5d" />
			<rect x="1207.7" y="414.19" width="1.66" height="1.66" fill="#606776" />
			<rect x="1225.9" y="414.19" width="4.97" height="1.66" fill="#2e3544" />
			<rect x="1206" y="404.25" width="23.2" height="9.94" fill="#474e5d" />
			<rect x="1209.3" y="404.25" width="1.66" height="9.94" fill="#606776" />
			<rect x="1224.2" y="404.25" width="4.97" height="9.94" fill="#2e3544" />
			<path
				d="m1219.3 390.16c0 6.11 3.9 11.31 9.35 13.26l0.6 0.83h-23.2l0.59-0.83c5.45-1.94 9.35-7.14 9.35-13.26z"
				fill="#ffca10"
			/>
			<path
				d="m1216.8 390.16h-0.41c0 6.12-2.93 11.31-7.01 13.26l-0.44 0.83h2.9l0.3-0.83c2.71-1.95 4.66-7.14 4.66-13.26z"
				fill="#fee79b"
			/>
			<path
				d="m1228.6 403.42c-5.45-1.95-9.35-7.14-9.35-13.26h-0.83c0 6.11 1.95 11.31 4.67 13.26l0.3 0.83h5.8z"
				fill="#ffa200"
			/>
			<path
				d="m1194.4 366.13c0 11.89 10.39 21.54 23.2 21.54s23.2-9.65 23.2-21.54zm23.2 19.06c-10.51 0-19.21-7.23-20.54-16.57h41.08c-1.32 9.34-10.03 16.57-20.54 16.57z"
				fill="#ffca10"
			/>
			<path
				d="m1232.5 362.82h-29.83c0 15.56 6.68 28.17 14.91 28.17s14.92-12.61 14.92-28.17z"
				fill="#ffca10"
			/>
			<path
				d="m1225.1 362.82c0 15.56-3.34 28.17-7.46 28.17 8.24 0 14.91-12.61 14.91-28.17z"
				fill="#ffa200"
			/>
			<path
				d="m1208.6 362.82h-2.18c0 15.56 5.01 28.17 11.19 28.17-4.98 0-9.01-12.61-9.01-28.17z"
				fill="#fee79b"
			/>
		</g>

		<text id="finalsM1Scores" transform="translate(1176.6 455.55)" font-size="14px"
			><tspan x="0" y="0" fill="#ff0000" font-family="MyriadPro-Semibold">999</tspan><tspan
				x="-0.77999997"
				y="14"
				fill="#0000ff"
				font-family="MyriadPro-Black">999</tspan
			></text
		>
		<text id="finalsM2Scores" transform="translate(1204.8 455.55)" font-size="14px"
			><tspan x="0" y="0" fill="#ff0000" font-family="MyriadPro-Black">999</tspan><tspan
				x="0.77999997"
				y="14"
				fill="#0000ff"
				font-family="MyriadPro-Semibold">999</tspan
			></text
		>
		<text id="finalsM3Scores" transform="translate(1234.6 455.55)" font-size="14px"
			><tspan x="0" y="0" fill="#ff0000" font-family="MyriadPro-Semibold">999</tspan><tspan
				x="-0.77999997"
				y="14"
				fill="#0000ff"
				font-family="MyriadPro-Black">999</tspan
			></text
		>
	</g>
	<g transform="translate(14.851 -51.865)">
		<polygon
			points="984.7 504.56 848.43 504.56 848.43 468.54 984.7 468.54 997.64 486.55"
			fill="#f00"
		/>
		<polygon points="984.7 541 848.43 541 848.43 504.99 984.7 504.99 997.64 522.99" fill="#00f" />
		<line
			x1="984.7"
			x2="826"
			y1="504.75"
			y2="504.75"
			fill="none"
			stroke="#fff"
			stroke-miterlimit="10"
		/>
		<rect x="826" y="468.54" width="22.43" height="72.46" />
		<text
			transform="matrix(0 -1.0029 .99706 0 0 0)"
			x="-503.79135"
			y="844.2569"
			font-size="12.112px"
			stroke-width="1.003"><tspan  text-anchor="middle">MATCH 13</tspan></text
		>
		<text transform="matrix(.9941 0 0 1 872.15 483.18)" font-size="12.147px"
			><tspan x="0" y="0">Loser of M11</tspan><tspan x="-18.35" y="14.58">22222 22222 22222</tspan
			></text
		>
		<text transform="matrix(.9941 0 0 1 867.25 519.62)" font-size="12.147px"
			><tspan x="0" y="0">Winner of M12</tspan><tspan x="-13.42" y="14.58">22222 22222 22222</tspan
			></text
		>
		<circle id="match13BueDot" class="winnerdot" cx="993" cy="483" r="8" fill="#ffca10" />
		<circle id="match13RedDot" class="winnerdot" cx="993" cy="520" r="8" fill="#ffca10" />

		<text id="M13BlueScore" transform="translate(959.4 525.63)" font-size="15px">999</text>

		<text id="M13RedScore" transform="translate(959.4 489.63)" font-size="15px">999</text>
	</g>
	<g transform="translate(14.851 -122.54)">
		<polygon
			points="815.64 556.55 802.7 574.56 666.43 574.56 666.43 538.54 802.7 538.54"
			fill="#f00"
		/>
		<polygon points="815.64 592.99 802.7 611 666.43 611 666.43 574.99 802.7 574.99" fill="#00f" />
		<line
			x1="802.7"
			x2="644"
			y1="574.75"
			y2="574.75"
			fill="none"
			stroke="#fff"
			stroke-miterlimit="10"
		/>
		<rect x="644" y="538.54" width="22.43" height="72.46" />
		<text
			transform="matrix(0 -1.0029 .99706 0 0 0)"
			x="-573.28644"
			y="661.72076"
			font-size="12.112px"
			stroke-width="1.003"
			><tspan stroke-width="1.003"  text-anchor="middle">MATCH 12</tspan></text
		>
		<text transform="matrix(.9941 0 0 1 685.25 553.18)" font-size="12.147px"
			><tspan x="0" y="0">Winner of M9</tspan><tspan x="-13.42" y="14.58">22222 22222 22222</tspan
			></text
		>
		<text transform="matrix(.9941 0 0 1 688.6 589.62)" font-size="12.147px"
			><tspan x="0" y="0">Winner of M10</tspan><tspan x="-16.790001" y="14.58"
				>22222 22222 22222</tspan
			></text
		>
		<circle id="match12BueDot" class="winnerdot" cx="814" cy="556" r="8" fill="#ffca10" />
		<circle id="match12RedDot" class="winnerdot" cx="814" cy="593" r="8" fill="#ffca10" />

		<text id="M12BlueScore" transform="translate(779.4 595.63)" font-size="15px">999</text>

		<text id="M12RedScore" transform="translate(779.4 559.63)" font-size="15px">999</text>
	</g>
	<g transform="translate(14.851 -52.626)">
		<polygon
			points="802.7 218.54 815.64 236.55 802.7 254.56 666.43 254.56 666.43 218.54"
			fill="#f00"
		/>
		<polygon points="802.7 254.99 815.64 272.99 802.7 291 666.43 291 666.43 254.99" fill="#00f" />
		<line
			x1="802.7"
			x2="644"
			y1="254.75"
			y2="254.75"
			fill="none"
			stroke="#fff"
			stroke-miterlimit="10"
		/>
		<rect x="644" y="218.54" width="22.43" height="72.46" />
		<text transform="matrix(0 -1.0059 1 0 659.78 282.33)" font-size="12.076px">MATCH 11</text>
		<text transform="matrix(.9941 0 0 1 695.36 233.18)" font-size="12.147px"
			><tspan x="0" y="0">Winner M7</tspan><tspan x="-23.59" y="14.58">22222 22222 22222</tspan
			></text
		>
		<text transform="matrix(.9941 0 0 1 688.6 269.62)" font-size="12.147px"
			><tspan x="0" y="0">Winner of M8</tspan><tspan x="-16.790001" y="14.58"
				>22222 22222 22222</tspan
			></text
		>
		<circle id="match11BueDot" class="winnerdot" cx="814" cy="236" r="8" fill="#ffca10" />
		<circle id="match11RedDot" class="winnerdot" cx="814" cy="273" r="8" fill="#ffca10" />

		<text id="M11BlueScore" transform="translate(779.4 277.63)" font-size="15px">999</text>

		<text id="M11RedScore" transform="translate(779.4 241.63)" font-size="15px">999</text>
	</g> -->
	<!-- <g transform="translate(14.851 -91.865)">
		<polygon
			points="475.43 472.54 611.7 472.54 624.64 490.55 611.7 508.56 475.43 508.56"
			fill="#f00"
		/>
		<polygon points="475.43 508.99 611.7 508.99 624.64 526.99 611.7 545 475.43 545" fill="#00f" />
		<line
			x1="611.7"
			x2="453"
			y1="508.75"
			y2="508.75"
			fill="none"
			stroke="#fff"
			stroke-miterlimit="10"
		/>
		<rect x="453" y="472.54" width="22.43" height="72.46" />
		<text
			transform="matrix(0 -1.0029 .99706 0 0 0)"
			x="-508.198"
			y="470.15775"
			font-size="12.112px"
			stroke-width="1.003"><tspan  text-anchor="middle">MATCH 10</tspan></text
		>
		<text transform="matrix(.9941 0 0 1 502.5 487.18)" font-size="12.147px"
			><tspan x="0" y="0">Loser of M8</tspan><tspan x="-21.719999" y="14.58"
				>22222 22222 22222</tspan
			></text
		>
		<text transform="matrix(.9941 0 0 1 497.6 523.62)" font-size="12.147px"
			><tspan x="0" y="0">Winner of M5</tspan><tspan x="-16.790001" y="14.58"
				>22222 22222 22222</tspan
			></text
		>
		<circle id="match10BueDot" class="winnerdot" cx="623" cy="490" r="8" fill="#ffca10" />
		<circle id="match10RedDot" class="winnerdot" cx="623" cy="527" r="8" fill="#ffca10" />

		<text id="M10BlueScore" transform="translate(587.4 532.63)" font-size="15px">999</text>

		<text id="M10RedScore" transform="translate(587.4 496.63)" font-size="15px">999</text>
	</g>
	<g transform="translate(14.851 -149.86)">
		<polygon
			points="611.7 611.54 624.64 629.55 611.7 647.56 475.43 647.56 475.43 611.54"
			fill="#f00"
		/>
		<polygon points="611.7 647.99 624.64 665.99 611.7 684 475.43 684 475.43 647.99" fill="#00f" />
		<line
			x1="611.7"
			x2="453"
			y1="647.75"
			y2="647.75"
			fill="none"
			stroke="#fff"
			stroke-miterlimit="10"
		/>
		<rect x="453" y="611.54" width="22.43" height="72.46" />
		<text
			transform="matrix(0 -1.0029 .99706 0 0 0)"
			x="-646.09204"
			y="470.15817"
			font-size="12.112px"
			stroke-width="1.003"
			><tspan stroke-width="1.003"  text-anchor="middle">MATCH 9</tspan></text
		>
		<text transform="matrix(.9941 0 0 1 502.5 626.18)" font-size="12.147px"
			><tspan x="0" y="0">Loser of M7</tspan><tspan x="-21.719999" y="14.58"
				>22222 22222 22222</tspan
			></text
		>
		<text transform="matrix(.9941 0 0 1 497.6 662.62)" font-size="12.147px"
			><tspan x="0" y="0">Winner of M6</tspan><tspan x="-16.790001" y="14.58"
				>22222 22222 22222</tspan
			></text
		>
		<circle id="match9BueDot" class="winnerdot" cx="623" cy="629" r="8" fill="#ffca10" />
		<circle id="match9RedDot" class="winnerdot" cx="623" cy="666" r="8" fill="#ffca10" />

		<text id="M9BlueScore" transform="translate(587.4 669.63)" font-size="15px">999</text>

		<text id="M9RedScore" transform="translate(587.4 633.63)" font-size="15px">999</text>
	</g>
	<g transform="translate(14.851 -51.865)">
		<polygon
			points="412.7 328.56 276.43 328.56 276.43 292.54 412.7 292.54 425.64 310.55"
			fill="#f00"
		/>
		<polygon points="412.7 365 276.43 365 276.43 328.99 412.7 328.99 425.64 346.99" fill="#00f" />
		<line
			x1="412.7"
			x2="254"
			y1="328.75"
			y2="328.75"
			fill="none"
			stroke="#fff"
			stroke-miterlimit="10"
		/>
		<rect x="254" y="292.54" width="22.43" height="72.46" />
		<text
			transform="matrix(0 -1.0029 .99706 0 0 0)"
			x="-327.61209"
			y="270.57156"
			font-size="12.112px"
			stroke-width="1.003"
			><tspan stroke-width="1.003"  text-anchor="middle">MATCH 8</tspan></text
		>
		<text transform="matrix(.9941 0 0 1 298.6 307.18)" font-size="12.147px"
			><tspan x="0" y="0">Winner of M3</tspan><tspan x="-16.790001" y="14.58"
				>22222 22222 22222</tspan
			></text
		>
		<text transform="matrix(.9941 0 0 1 298.6 343.62)" font-size="12.147px"
			><tspan x="0" y="0">Winner of M4</tspan><tspan x="-16.790001" y="14.58"
				>22222 22222 22222</tspan
			></text
		>
		<circle id="match8BueDot" class="winnerdot" cx="426" cy="309" r="8" fill="#ffca10" />
		<circle id="match8RedDot" class="winnerdot" cx="426" cy="346" r="8" fill="#ffca10" />

		<text id="M8BlueScore" transform="translate(390.4 352.63)" font-size="15px">999</text>

		<text id="M8RedScore" transform="translate(390.4 316.63)" font-size="15px">999</text>

		<polygon
			points="412.7 174.56 276.43 174.56 276.43 138.54 412.7 138.54 425.64 156.55"
			fill="#f00"
		/>
		<polygon points="412.7 211 276.43 211 276.43 174.99 412.7 174.99 425.64 192.99" fill="#00f" />
		<line
			x1="412.7"
			x2="254"
			y1="174.75"
			y2="174.75"
			fill="none"
			stroke="#fff"
			stroke-miterlimit="10"
		/>
		<rect x="254" y="138.54" width="22.43" height="72.46" />
		<text
			transform="matrix(0 -1.0029 .99706 0 0 0)"
			x="-174.0851"
			y="270.57156"
			font-size="12.112px"
			stroke-width="1.003"
			><tspan stroke-width="1.003"  text-anchor="middle">MATCH 7</tspan></text
		>
		<text transform="matrix(.9941 0 0 1 298.6 153.18)" font-size="12.147px"
			><tspan x="0" y="0">Winner of M1</tspan><tspan x="-16.790001" y="14.58"
				>22222 22222 22222</tspan
			></text
		>
		<text transform="matrix(.9941 0 0 1 298.6 189.62)" font-size="12.147px"
			><tspan x="0" y="0">Winner of M2</tspan><tspan x="-16.790001" y="14.58"
				>22222 22222 22222</tspan
			></text
		>
		<circle id="match7BueDot" class="winnerdot" cx="426" cy="156" r="8" fill="#ffca10" />
		<circle id="match7RedDot" class="winnerdot" cx="426" cy="193" r="8" fill="#ffca10" />

		<text id="M7BlueScore" transform="translate(390.4 196.63)" font-size="15px">999</text>

		<text id="M7RedScore" transform="translate(390.4 160.63)" font-size="15px">999</text>
	</g>
	<g transform="translate(14.851 -223.56)">
		<polygon
			points="276.43 721.56 276.43 685.54 412.7 685.54 425.64 703.55 412.7 721.56"
			fill="#f00"
		/>
		<polygon points="276.43 758 276.43 721.99 412.7 721.99 425.64 739.99 412.7 758" fill="#00f" />
		<line
			x1="412.7"
			x2="254"
			y1="721.75"
			y2="721.75"
			fill="none"
			stroke="#fff"
			stroke-miterlimit="10"
		/>
		<rect x="254" y="685.54" width="22.43" height="72.46" />
		<text
			transform="matrix(0 -1.0029 .99706 0 0 0)"
			x="-719.4248"
			y="270.57196"
			font-size="12.112px"
			stroke-width="1.003"
			><tspan stroke-width="1.003"  text-anchor="middle">MATCH 6</tspan></text
		>
		<text transform="matrix(.9941 0 0 1 303.5 700.18)" font-size="12.147px"
			><tspan x="0" y="0">Loser of M3</tspan><tspan x="-21.719999" y="14.58"
				>22222 22222 22222</tspan
			></text
		>
		<text transform="matrix(.9941 0 0 1 303.5 736.62)" font-size="12.147px"
			><tspan x="0" y="0">Loser of M4</tspan><tspan x="-21.719999" y="14.58"
				>22222 22222 22222</tspan
			></text
		>
		<circle id="match6BueDot" class="winnerdot" cx="426" cy="702" r="8" fill="#ffca10" />
		<circle id="match6RedDot" class="winnerdot" cx="426" cy="739" r="8" fill="#ffca10" />

		<text id="M6BlueScore" transform="translate(390.4 743.63)" font-size="15px">999</text>

		<text id="M6RedScore" transform="translate(390.4 707.63)" font-size="15px">999</text>
	</g>
	<g transform="translate(14.606 -150.6)">
		<polygon
			points="412.7 531.54 425.64 549.55 412.7 567.56 276.43 567.56 276.43 531.54"
			fill="#f00"
		/>
		<polygon points="412.7 567.99 425.64 585.99 412.7 604 276.43 604 276.43 567.99" fill="#00f" />
		<line
			x1="412.7"
			x2="254"
			y1="567.75"
			y2="567.75"
			fill="green"
			stroke="green"
			stroke-miterlimit="10"
		/>
		<rect x="254" y="531.54" width="22.43" height="72.46" fill="purple" />
		<text
			transform="matrix(0 -1.0029 .99706 0 0 0)"
			x="-566.11926"
			y="270.57196"
			font-size="12.112px"
			stroke-width="1.003"><tspan  text-anchor="middle">MATCH 5</tspan></text
		>
		<text transform="matrix(.9941 0 0 1 303.5 546.18)" font-size="12.147px"
			><tspan x="0" y="0">Loser of M1</tspan><tspan x="-21.719999" y="14.58"
				>22222 22222 22222</tspan
			></text
		>
		<text transform="matrix(.9941 0 0 1 303.5 582.62)" font-size="12.147px"
			><tspan x="0" y="0">Loser of M2</tspan><tspan x="-21.719999" y="14.58"
				>22222 22222 22222</tspan
			></text
		>
		<circle id="match5BueDot" class="winnerdot" cx="426" cy="549" r="8" fill="#ffca10" />
		<circle id="match5RedDot" class="winnerdot" cx="426" cy="586" r="8" fill="#ffca10" />

		<text id="M5BlueScore" transform="translate(390.4 589.63)" font-size="15px">999</text>

		<text id="M5RedScore" transform="translate(390.4 553.63)" font-size="15px">999</text>
	</g>
	<g transform="translate(14.851 -51.865)">
		<polygon
			points="223.7 367.56 87.43 367.56 87.43 331.54 223.7 331.54 236.64 349.55"
			fill="#f00"
		/>
		<polygon points="223.7 404 87.43 404 87.43 367.99 223.7 367.99 236.64 385.99" fill="#00f" />

		<rect x="65" y="331.54" width="22.43" height="72.46" />
		<text
			transform="matrix(0 -1.0029 .99706 0 0 0)"
			x="-366.42905"
			y="81.014839"
			font-size="12.112px"
			stroke-width="1.003"
			><tspan stroke-width="1.003"  text-anchor="middle">MATCH 4</tspan></text
		>
		<text transform="matrix(.9941 0 0 1 119.47 346.18)" font-size="12.147px"
			><tspan x="0" y="0">Alliance 3</tspan><tspan x="-26.719999" y="14.58"
				>{data[3].alliances.blue.team_keys.join(' ')}</tspan
			></text
		>
		<text transform="matrix(.9941 0 0 1 119.47 382.62)" font-size="12.147px"
			><tspan x="0" y="0">Alliance 6</tspan><tspan x="-26.719999" y="14.58"
				>{data[3].alliances.red.team_keys.join(' ')}</tspan
			></text
		>
		<circle id="match4BueDot" class="winnerdot" cx="237" cy="350" r="8" fill="#ffca10" />
		<circle id="match4RedDot" class="winnerdot" cx="237" cy="387" r="8" fill="#ffca10" />

		<text id="M4BlueScore" transform="translate(202.4 391.63)" font-size="15px"
			>{data[3].result.blue_score}</text
		>

		<text id="M4RedScore" transform="translate(202.4 355.63)" font-size="15px"
			>{data[3].result.red_score}</text
		>

		<polygon
			points="223.7 290.56 87.43 290.56 87.43 254.54 223.7 254.54 236.64 272.55"
			fill="#f00"
		/>
		<polygon points="223.7 327 87.43 327 87.43 290.99 223.7 290.99 236.64 308.99" fill="#00f" />
		<line
			x1="223.7"
			x2="65"
			y1="290.75"
			y2="290.75"
			fill="none"
			stroke="#fff"
			stroke-miterlimit="10"
		/>
		<rect x="65" y="254.54" width="22.43" height="72.46" />
		<text
			transform="matrix(0 -1.0029 .99706 0 0 0)"
			x="-289.48532"
			y="81.014839"
			font-size="12.112px"
			stroke-width="1.003"
			><tspan stroke-width="1.003" text-align="center" text-anchor="middle">MATCH 3</tspan></text
		>
		<text transform="matrix(.9941 0 0 1 119.47 269.18)" font-size="12.147px"
			><tspan x="0" y="0">Alliance 2</tspan><tspan x="-26.719999" y="14.58"
				>{data[2].alliances.blue.team_keys.join(' ')}</tspan
			></text
		>
		<text transform="matrix(.9941 0 0 1 119.47 305.62)" font-size="12.147px"
			><tspan x="0" y="0">Alliance 7</tspan><tspan x="-26.719999" y="14.58"
				>{data[2].alliances.red.team_keys.join(' ')}</tspan
			></text
		>
		<circle id="match3BueDot" class="winnerdot" cx="237" cy="272" r="8" fill="#ffca10" />
		<circle id="match3RedDot" class="winnerdot" cx="237" cy="309" r="8" fill="#ffca10" />

		<text id="M3BlueScore" transform="translate(202.4 314.63)" font-size="15px"
			>{data[2].result.blue_score}</text
		>

		<text id="M3RedScore" transform="translate(202.4 278.63)" font-size="15px"
			>{data[2].result.red_score}</text
		>

		<polygon
			points="223.7 213.56 87.43 213.56 87.43 177.54 223.7 177.54 236.64 195.55"
			fill="#f00"
		/>
		<polygon points="223.7 250 87.43 250 87.43 213.99 223.7 213.99 236.64 231.99" fill="#00f" />
		<line
			x1="223.7"
			x2="65"
			y1="213.75"
			y2="213.75"
			fill="none"
			stroke="#fff"
			stroke-miterlimit="10"
		/>
		<rect x="65" y="177.54" width="22.43" height="72.46" />
		<text
			transform="matrix(0 -1.0029 .99706 0 0 0)"
			x="-211.93748"
			y="81.014839"
			font-size="12.112px"
			stroke-width="1.003"
			><tspan stroke-width="1.003" text-align="center" text-anchor="middle">MATCH 2</tspan></text
		>
		<text transform="matrix(.9941 0 0 1 119.47 192.18)" font-size="12.147px"
			><tspan x="0" y="0">Alliance 4</tspan><tspan x="-26.719999" y="14.58"
				>{data[1].alliances.blue.team_keys.join(' ')}</tspan
			></text
		>
		<text transform="matrix(.9941 0 0 1 119.47 228.62)" font-size="12.147px"
			><tspan x="0" y="0">Alliance 5</tspan><tspan x="-26.719999" y="14.58"
				>{data[1].alliances.red.team_keys.join(' ')}</tspan
			></text
		>
		<circle id="match2BueDot" class="winnerdot" cx="237" cy="195" r="8" fill="#ffca10" />
		<circle id="match2RedDot" class="winnerdot" cx="237" cy="232" r="8" fill="#ffca10" />

		<text id="M2BlueScore" transform="translate(202.4 236.63)" font-size="15px">999</text>

		<text id="M2RedScore" transform="translate(202.4 200.63)" font-size="15px">999</text>

		<polygon
			points="223.7 136.56 87.43 136.56 87.43 100.54 223.7 100.54 236.64 118.55"
			fill="#f00"
		/>
		<polygon points="223.7 173 87.43 173 87.43 136.99 223.7 136.99 236.64 154.99" fill="#00f" />
		<line
			x1="223.7"
			x2="65"
			y1="136.75"
			y2="136.75"
			fill="none"
			stroke="#fff"
			stroke-miterlimit="10"
		/>
		<rect x="65" y="100.54" width="22.43" height="72.46" />
		<text transform="matrix(0 -1.0059 1 0 80.777 160.96)" font-size="12.076px">MATCH 1</text>
		<text transform="matrix(.9941 0 0 1 119.47 115.18)" font-size="12.147px" class="text-center">
			<tspan x="0" y="0">Alliance 1</tspan>
			<tspan x="-26.719999" y="14.58">{data[0].alliances.red.team_keys.join(' ')}</tspan>
		</text>
		<text transform="matrix(.9941 0 0 1 119.47 151.62)" font-size="12.147px"
			><tspan x="0" y="0">Alliance 8</tspan><tspan x="-26.719999" y="14.58"
				>{data[0].alliances.blue.team_keys.join(' ')}</tspan
			></text
		>
		<circle id="match1BueDot" class="winnerdot" cx="237" cy="118" r="8" fill="#ffca10" />
		<circle id="match1RedDot" class="winnerdot" cx="237" cy="155" r="8" fill="#ffca10" />

		<text id="M1BlueScore" transform="translate(202.4 159.63)" font-size="15px"
			>{data[0].result.blue_score}</text
		>

		<text id="M1RedScore" transform="translate(202.4 123.63)" font-size="15px"
			>{data[0].result.red_score}</text
		>
	</g> -->
</svg>

<style>
	svg {
		width: 100%;
	}
	@font-face {
		font-family: 'MyriadPro-Bold';
		font-style: normal;
		font-weight: normal;
		src: local('MyriadPro-Bold'), url('fonts/myriad-pro/MYRIADPRO-BOLD.woff') format('woff');
	}
	.winnerdot {
		display: none;
	}

	.bracket {
		font-family: 'MyriadPro-Bold';
		/* margin-top: -15px; */
		/* margin-bottom: -45px; */
		/* max-height: 450px; */
		color: #ffffff;
	}
	.bracket text {
		fill: #ffffff;
	}
</style>
