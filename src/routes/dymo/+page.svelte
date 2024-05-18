<script lang="ts">
	/// <reference types="w3c-web-usb" />

	import { onMount } from 'svelte';
	import { DymoService } from './dymoService';
	import { convertImageToBitmap } from './imageService';
	import LabelEditor from './ImageEditor/Editor.svelte';
	import Navbar from '$lib/Navbar.svelte';

	const debug = (bitmap: number[][]) => {
		let outString = "[\n";
		for (let row = 0; row < bitmap.length; row++) {
			outString += "\t[" + bitmap[row].map(i=>i.toString(2).padStart(8,'_')).join(',').replaceAll('0', '_') + "],\n";
		}
		outString += "]";

		console.log('bitmap', outString);
	}

	let canvasElement: HTMLCanvasElement;
	let data2Send: Buffer;
	let bindPrintMessages: string = '';

	const legacyLoad = async () => {
		const image = new Image();
		image.src = 'Label Test (1.8 x 3 in).png';
		await image.decode();

		canvasElement.width = image.width;
		canvasElement.height = image.height;

		const ctx = canvasElement.getContext('2d');
		if (!ctx) {
			console.log('no canvas 2d context');
			return;
		}

		// ctx.drawImage(image, 0, 0);

		const imageData = ctx.getImageData(0, 0, canvasElement.width, canvasElement.height);

		// const bitmap = await convertImageToBitmap(imageData);

		// // debug(bitmap);

		// data2Send = DymoService.printBitmap(bitmap);
	};

	// onMount(() => {
	// 	legacyLoad();
	// });

	//@todo deselect before printing
	const print = async () => {

		const ctx = canvasElement.getContext('2d');
		if (!ctx) {
			bindPrintMessages = 'no canvas 2d context';
			return;
		}

		const imageData = ctx.getImageData(0, 0, canvasElement.width, canvasElement.height);

		const bitmap = await convertImageToBitmap(imageData);

		debug(bitmap);

		data2Send = DymoService.printBitmap(bitmap);


		try {
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

			await device.transferOut(2, data2Send);

			await device.close();
		} catch (err) {
			bindPrintMessages = (err as Error).message;
		}
		
	};
</script>

<svelte:head>
	<title>Dymo Label Magic : Bionic Parts</title>
	<meta name="description" content="Dymo Label Magic" />
</svelte:head>

<Navbar/>

<div class="container-fluid">
	<div class="row">
		<div class="col-md-9">
			<h1>Editor</h1>
			<!-- <canvas bind:this={canvas} /> -->
			<div style="border: 1px solid green">
				<LabelEditor bind:canvasElement={canvasElement}/>
			</div>
		</div>
		<div class="col-md-3">
			<h1>Data</h1>
			<button class="btn btn-primary" on:click={print}>Print</button>
			<br>
			<textarea disabled rows="15" bind:value={bindPrintMessages} class="w-100"></textarea>
		</div>
	</div>
</div>

<!-- <br /> -->
<!-- <canvas bind:this={canvas} /> -->
<!-- <br> -->



