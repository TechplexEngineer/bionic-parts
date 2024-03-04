<script lang="ts">
	/// <reference types="w3c-web-usb" />

	import { onMount } from 'svelte';
	import { DymoVendorId, ESC, SYN, dymoInit, printBitmap } from './dymo';
	import { DymoService } from './dymoService';
	import { convertImageToBitmap } from './imageService';
	// import { createImageWithText } from './imageService';

	let canvas: HTMLCanvasElement;

	let data2Send;

	onMount(async () => {
		console.log('onMount');

		// const {imageWidth, imageHeight} = DymoService.DYMO_LABELS['89mm x 36mm'];

		const image = new Image();
		image.src = 'Label Test (1.8 x 3 in).png';
		await image.decode();

		// console.log("Image Loaded");

		canvas.width = image.width;
		canvas.height = image.height;

		const ctx = canvas.getContext('2d');
		if (!ctx) {
			console.log('no canvas 2d context');
			return;
		}

		ctx.drawImage(image, 0, 0);
		// console.log("Image Drawn");

		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

		// console.log("getImageData");

		console.time('convertImageToBitmap');
		const bitmap = await convertImageToBitmap(imageData);
		console.timeEnd('convertImageToBitmap');
		// const { data, width, height } = imageData;

		// const array2D = [];
		// for (let y = 0; y < height; y++) {
		// 	const row = [];
		// 	for (let x = 0; x < width; x++) {
		// 		const index = (y * width + x) * 4;
		// 		const [r, g, b, a] = data.slice(index, index + 4);
		// 		row.push(r); //{ r, g, b, a }
		// 	}
		// 	array2D.push(row);
		// }

		let outString = "[\n";

		for (let row = 0; row < bitmap.length; row++) {
			outString += "\t[" + bitmap[row].map(i=>i.toString(2).padStart(8,'_')).join(',') + "],\n";
		}
		outString += "]";

		console.log('bitmap', outString);

		data2Send = DymoService.printBitmap(bitmap);

		console.log(data2Send);
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
