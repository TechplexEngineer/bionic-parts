<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let r = 170,
		g = 170,
		b = 170;
	let h = 0,
		s = 0,
		v = 67;
	let hex = '#AAAAAA';
	let inc = 9;

	const increments = [1, 5, 9, 13, 17, 22, 26, 30, 34, 39, 43, 47, 51];

	function clamp(val: number, min: number, max: number) {
		return Math.max(min, Math.min(max, val));
	}

	function hexToRgb(currHex: string) {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(currHex);
		return result
			? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16)
			  }
			: null;
	}

	function rgbToHex(r: number, g: number, b: number) {
		return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
	}

	function rgbToHsv(r: number, g: number, b: number) {
		let rabs = r / 255,
			gabs = g / 255,
			babs = b / 255;
		let cmax = Math.max(rabs, gabs, babs),
			diff = cmax - Math.min(rabs, gabs, babs);
		let h = 0,
			s = cmax === 0 ? 0 : diff / cmax;

		if (diff === 0) h = 0;
		else if (cmax === rabs) h = ((gabs - babs) / diff) % 6;
		else if (cmax === gabs) h = (babs - rabs) / diff + 2;
		else if (cmax === babs) h = (rabs - gabs) / diff + 4;

		h = Math.round(h * 60);
		if (h < 0) h += 360;

		return {
			h: isNaN(h) ? 0 : h,
			s: Math.round(s * 100),
			v: Math.round(cmax * 100)
		};
	}

	function hsvToRgb(h: number, s: number, v: number) {
		s = s / 100;
		v = v / 100;
		let c = v * s;
		let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
		let m = v - c;
		let r1 = 0,
			g1 = 0,
			b1 = 0;

		if (0 <= h && h < 60) {
			r1 = c;
			g1 = x;
			b1 = 0;
		} else if (60 <= h && h < 120) {
			r1 = x;
			g1 = c;
			b1 = 0;
		} else if (120 <= h && h < 180) {
			r1 = 0;
			g1 = c;
			b1 = x;
		} else if (180 <= h && h < 240) {
			r1 = 0;
			g1 = x;
			b1 = c;
		} else if (240 <= h && h < 300) {
			r1 = x;
			g1 = 0;
			b1 = c;
		} else if (300 <= h && h <= 360) {
			r1 = c;
			g1 = 0;
			b1 = x;
		}

		return {
			r: Math.round((r1 + m) * 255),
			g: Math.round((g1 + m) * 255),
			b: Math.round((b1 + m) * 255)
		};
	}

	function syncFromRgb() {
		hex = rgbToHex(clamp(r, 0, 255), clamp(g, 0, 255), clamp(b, 0, 255));
		let hsv = rgbToHsv(clamp(r, 0, 255), clamp(g, 0, 255), clamp(b, 0, 255));
		h = hsv.h;
		s = hsv.s;
		v = hsv.v;
	}

	function syncFromHsv() {
		let rgb = hsvToRgb(clamp(h, 0, 360), clamp(s, 0, 100), clamp(v, 0, 100));
		r = rgb.r;
		g = rgb.g;
		b = rgb.b;
		hex = rgbToHex(r, g, b);
	}

	function syncFromHex() {
		let rgb = hexToRgb(hex);
		if (rgb) {
			r = rgb.r;
			g = rgb.g;
			b = rgb.b;
			let hsv = rgbToHsv(r, g, b);
			h = hsv.h;
			s = hsv.s;
			v = hsv.v;
		}
	}

	function tweak(channel: string, dir: number) {
		if (channel === 'r') r = clamp(r + dir * inc, 0, 255);
		if (channel === 'g') g = clamp(g + dir * inc, 0, 255);
		if (channel === 'b') b = clamp(b + dir * inc, 0, 255);
		if (['r', 'g', 'b'].includes(channel)) syncFromRgb();

		if (channel === 'h') {
			let hInc = Math.floor(inc % 2 === 1 ? (inc + 1) / 2 : inc / 2);
			h = clamp(h + dir * hInc, 0, 360);
		}
		if (channel === 's') s = clamp(s + dir * inc, 0, 100);
		if (channel === 'v') v = clamp(v + dir * inc, 0, 100);
		if (['h', 's', 'v'].includes(channel)) syncFromHsv();
	}

	function randomColor() {
		r = Math.floor(Math.random() * 256);
		g = Math.floor(Math.random() * 256);
		b = Math.floor(Math.random() * 256);
		syncFromRgb();
	}
</script>

<svelte:head>
	<title>HTML Color Calculator | Modern Code Generator</title>
</svelte:head>

<Navbar />

<div class="page-wrapper" style="--base-color: {hex}">
	<div class="calculator-card">
		<header>
			<div>
				<h1>Color Calculator</h1>
				<p class="subtitle">HTML HEX Code Generator</p>
			</div>
			<button class="action-btn" on:click={randomColor}>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path
						d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
					/><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line
						x1="12"
						y1="22.08"
						x2="12"
						y2="12"
					/></svg
				>
				Random
			</button>
		</header>

		<div class="content">
			<!-- Hex section -->
			<div class="section hex-section">
				<label for="hex">Hex Code</label>
				<div class="input-group hex-input-group">
					<div class="color-preview" style="background-color: {hex}">
						<input type="color" bind:value={hex} on:input={syncFromHex} title="Choose a color" />
					</div>
					<input
						class="modern-input hex-input"
						type="text"
						id="hex"
						bind:value={hex}
						on:input={syncFromHex}
						maxlength="7"
						spellcheck="false"
					/>
				</div>
			</div>

			<div class="sliders-body">
				<!-- RGB section -->
				<div class="rgb-section section internal-grid">
					<h3>RGB Values</h3>
					<div class="group">
						<label>R</label>
						<input
							class="modern-input"
							type="number"
							bind:value={r}
							min="0"
							max="255"
							on:input={syncFromRgb}
						/>
					</div>
					<div class="group">
						<label>G</label>
						<input
							class="modern-input"
							type="number"
							bind:value={g}
							min="0"
							max="255"
							on:input={syncFromRgb}
						/>
					</div>
					<div class="group">
						<label>B</label>
						<input
							class="modern-input"
							type="number"
							bind:value={b}
							min="0"
							max="255"
							on:input={syncFromRgb}
						/>
					</div>
				</div>

				<!-- HSV section -->
				<div class="hsv-section section internal-grid">
					<h3>HSV Values</h3>
					<div class="group">
						<label>H</label>
						<input
							class="modern-input"
							type="number"
							bind:value={h}
							min="0"
							max="360"
							on:input={syncFromHsv}
						/>
					</div>
					<div class="group">
						<label>S</label>
						<input
							class="modern-input"
							type="number"
							bind:value={s}
							min="0"
							max="100"
							on:input={syncFromHsv}
						/>
					</div>
					<div class="group">
						<label>V</label>
						<input
							class="modern-input"
							type="number"
							bind:value={v}
							min="0"
							max="100"
							on:input={syncFromHsv}
						/>
					</div>
				</div>
			</div>

			<!-- Tweaking Section -->
			<div class="tweak-section section">
				<div class="tweak-control-bar">
					<div class="tweak-button-block">
						<div class="tweak-row">
							<button class="tweak-btn plus" on:click={() => tweak('r', 1)}>R+</button>
							<button class="tweak-btn plus" on:click={() => tweak('g', 1)}>G+</button>
							<button class="tweak-btn plus" on:click={() => tweak('b', 1)}>B+</button>
						</div>
						<div class="tweak-row">
							<button class="tweak-btn minus" on:click={() => tweak('r', -1)}>R-</button>
							<button class="tweak-btn minus" on:click={() => tweak('g', -1)}>G-</button>
							<button class="tweak-btn minus" on:click={() => tweak('b', -1)}>B-</button>
						</div>
					</div>

					<div class="tweak-button-block">
						<div class="tweak-row">
							<button class="tweak-btn plus" on:click={() => tweak('h', 1)}>H+</button>
							<button class="tweak-btn plus" on:click={() => tweak('s', 1)}>S+</button>
							<button class="tweak-btn plus" on:click={() => tweak('v', 1)}>V+</button>
						</div>
						<div class="tweak-row">
							<button class="tweak-btn minus" on:click={() => tweak('h', -1)}>H-</button>
							<button class="tweak-btn minus" on:click={() => tweak('s', -1)}>S-</button>
							<button class="tweak-btn minus" on:click={() => tweak('v', -1)}>V-</button>
						</div>
					</div>

					<div class="tweak-dropdown-block">
						<select class="modern-select" bind:value={inc}>
							{#each increments as incrementValue}
								<option value={incrementValue}>increment = {incrementValue}x</option>
							{/each}
						</select>
						<div class="tweak-label">&lt;tweaking area&gt;</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@500&display=swap');

	.page-wrapper {
		min-height: calc(100vh - 64px);
		padding: 40px 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--base-color, #aaaaaa);
		background-image: radial-gradient(
			circle at 50% 0%,
			rgba(255, 255, 255, 0.15) 0%,
			transparent 70%
		);
		transition: background-color 0.4s ease-out;
		font-family: 'Inter', system-ui, -apple-system, sans-serif;
		color: #1a1a24;
	}

	.calculator-card {
		background: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(40px);
		-webkit-backdrop-filter: blur(40px);
		box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15), inset 0 2px 0 rgba(255, 255, 255, 0.8);
		border-radius: 32px;
		width: 100%;
		max-width: 760px;
		padding: 48px;
		position: relative;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.5);
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40px;
		border-bottom: 2px solid rgba(0, 0, 0, 0.05);
		padding-bottom: 24px;
	}

	h1 {
		margin: 0;
		font-size: 28px;
		font-weight: 700;
		letter-spacing: -0.5px;
		color: #111;
	}

	.subtitle {
		margin: 4px 0 0 0;
		color: #666;
		font-size: 14px;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: 600;
	}

	.action-btn {
		display: flex;
		align-items: center;
		gap: 8px;
		background: #111;
		color: white;
		border: none;
		padding: 12px 20px;
		border-radius: 100px;
		font-family: 'Inter', sans-serif;
		font-weight: 600;
		font-size: 14px;
		cursor: pointer;
		transition: all 0.2s ease;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.action-btn:hover {
		transform: translateY(-2px);
		background: #333;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
	}

	.action-btn:active {
		transform: translateY(0);
	}

	h3 {
		margin: 0 0 16px 0;
		font-size: 15px;
		color: #444;
		text-transform: uppercase;
		letter-spacing: 1.5px;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.hex-section {
		background: rgba(255, 255, 255, 0.5);
		padding: 24px;
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.7);
	}

	.hex-section label {
		display: block;
		margin-bottom: 12px;
		font-size: 14px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: #555;
	}

	.input-group.hex-input-group {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.color-preview {
		width: 64px;
		height: 64px;
		border-radius: 16px;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.2);
		transition: background-color 0.1s;
		border: 2px solid white;
		position: relative;
		overflow: hidden;
	}

	.color-preview input[type='color'] {
		position: absolute;
		top: -10px;
		left: -10px;
		width: calc(100% + 20px);
		height: calc(100% + 20px);
		opacity: 0;
		cursor: pointer;
	}

	.modern-input {
		background: white;
		border: 2px solid transparent;
		border-radius: 12px;
		padding: 12px 16px;
		font-family: 'Roboto Mono', monospace;
		font-size: 16px;
		font-weight: 500;
		color: #111;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
		transition: all 0.2s;
		width: 100%;
		box-sizing: border-box;
	}

	.modern-input:focus {
		outline: none;
		border-color: #007aff;
		box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.15);
	}

	.hex-input {
		font-size: 24px;
		text-transform: uppercase;
		max-width: 200px;
	}

	.sliders-body {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}

	.internal-grid {
		background: rgba(255, 255, 255, 0.4);
		padding: 24px;
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.6);
	}

	.group {
		display: flex;
		align-items: center;
		margin-bottom: 16px;
		gap: 16px;
	}

	.group:last-child {
		margin-bottom: 0;
	}

	.group label {
		width: 24px;
		font-weight: 700;
		font-size: 18px;
		color: #333;
	}

	.tweak-section {
		background: rgba(255, 255, 255, 0.5);
		padding: 24px;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.7);
	}

	.tweak-control-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
		align-items: center;
		justify-content: center;
	}

	.tweak-button-block {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.tweak-row {
		display: flex;
		gap: 6px;
	}

	.tweak-dropdown-block {
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: center;
	}

	.tweak-label {
		font-family: 'Inter', sans-serif;
		font-weight: 700;
		font-size: 14px;
		color: rgba(0, 0, 0, 0.4);
	}

	.modern-select {
		appearance: none;
		background: white;
		border: 2px solid transparent;
		padding: 10px 36px 10px 16px;
		font-size: 15px;
		font-weight: 600;
		border-radius: 12px;
		color: #111;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
		background-repeat: no-repeat;
		background-position: right 12px center;
		background-size: 16px;
		transition: all 0.2s ease;
	}

	.modern-select:focus {
		outline: none;
		border-color: #007aff;
		box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.15);
	}

	.tweak-btn {
		background: white;
		border: none;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		border-radius: 12px;
		font-family: 'Roboto Mono', monospace;
		font-weight: 600;
		font-size: 16px;
		color: #333;
		cursor: pointer;
		transition: all 0.1s ease;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 1px 0 rgba(0, 0, 0, 0.05) inset;
	}

	.tweak-btn:hover {
		background: #f8f9fa;
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
	}

	.tweak-btn:active {
		transform: translateY(1px);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	}

	.tweak-btn.plus {
		color: #007aff;
		background: rgba(0, 122, 255, 0.05);
		border: 1px solid rgba(0, 122, 255, 0.1);
	}

	.tweak-btn.plus:hover {
		background: rgba(0, 122, 255, 0.1);
	}

	.tweak-btn.minus {
		color: #ff3b30;
		background: rgba(255, 59, 48, 0.05);
		border: 1px solid rgba(255, 59, 48, 0.1);
	}

	.tweak-btn.minus:hover {
		background: rgba(255, 59, 48, 0.1);
	}

	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type='number'] {
		-moz-appearance: textfield;
	}

	@media (max-width: 768px) {
		.calculator-card {
			padding: 24px;
		}
		.sliders-body {
			grid-template-columns: 1fr;
		}
		.tweak-control-bar {
			flex-direction: column;
		}
	}
</style>
