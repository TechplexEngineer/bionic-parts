<script lang="ts">
	/// <reference types="w3c-web-usb" />

	import { onMount } from 'svelte';
	import { DymoService } from './dymoService';
	import { convertImageToBitmap } from './imageService';

	const debug = (bitmap: number[][]) => {
		let outString = "[\n";
		for (let row = 0; row < bitmap.length; row++) {
			outString += "\t[" + bitmap[row].map(i=>i.toString(2).padStart(8,'_')).join(',').replaceAll('0', '_') + "],\n";
		}
		outString += "]";

		console.log('bitmap', outString);
	}

	let canvas: HTMLCanvasElement;

	let data2Send: Buffer;

	onMount(async () => {

		const image = new Image();
		image.src = 'Label Test (1.8 x 3 in).png';
		await image.decode();

		canvas.width = image.width;
		canvas.height = image.height;

		const ctx = canvas.getContext('2d');
		if (!ctx) {
			console.log('no canvas 2d context');
			return;
		}

		ctx.drawImage(image, 0, 0);

		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

		const bitmap = await convertImageToBitmap(imageData);

		// debug(bitmap);

		data2Send = DymoService.printBitmap(bitmap);

		// console.log(data2Send);
	});

	const print = async () => {
		const device = await navigator.usb.requestDevice({
			filters: [
				{
					vendorId: 0x0922
				}
			]
		});
		await device.open();

		if (device.configuration === null) {
			await device.selectConfiguration(0);
		}

		await device.claimInterface(0);

		return device.transferOut(2, data2Send);
	};
</script>

<svelte:head>
	<title>Dymo Label Magic : Bionic Parts</title>
	<meta name="description" content="Dymo Label Magic" />
</svelte:head>

<button class="btn btn-primary" on:click={print}>Print</button>
<br />
<canvas bind:this={canvas} />
