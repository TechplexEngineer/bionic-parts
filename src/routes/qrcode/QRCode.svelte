<script lang="ts">
	import { onMount } from 'svelte';
	import QRcode from 'qrcode';

	export let errorCorrection = 'L';
	// export let background = "#fff";
	// export let color = "#000";
	export let width = 200;
	export let value = '';
	export let padding = 4;
	export let className = 'qrcode';

	async function generateQrCode(value: string) {
		return await QRcode.toDataURL(value, {
			errorCorrectionLevel: 'L',
			margin: padding,
			width: width
		});
	}
</script>

{#await generateQrCode(value)}
	<p>...waiting</p>
{:then dataUrl}
	<img src={dataUrl} alt={value} class={className} style="width: 100%" />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
