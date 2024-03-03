<script lang="ts">
	/// <reference types="w3c-web-usb" />

	import { onMount } from 'svelte';
	import { DymoVendorId, ESC, SYN, dymoInit, printBitmap } from './dymo';

	let canvas: HTMLCanvasElement;

	// const width = 2 * 300;
	// const height = Math.ceil(3.375 * 300);

	onMount(() => {
		const loadImage = async () => {
			const image = new Image();
			image.src = 'Label Test sm.png';

			await image.decode();

			console.log('image', image.width, image.height);

			// const canvas = document.querySelector('canvas');
			canvas.width = image.width;
			canvas.height = image.height;
			const ctx = canvas.getContext('2d');
			if (!ctx) {
				console.log('no canvas 2d context');
				return;
			}

			console.log('canvas', canvas.width, canvas.height);

			// // save the unrotated context of the canvas so we can restore it later
			// // the alternative is to untranslate & unrotate after drawing
			// ctx.save();

			// // move to the center of the canvas
			// ctx.translate(canvas.width/2,canvas.height/2);

			// rotate the canvas to the specified degrees
			// ctx.rotate(90*Math.PI/180);

			// draw the image
			// since the context is rotated, the image will be rotated also

			ctx.drawImage(image, 0, 0);

			// // we’re done with the rotating so restore the unrotated context
			// ctx.restore();

			var img = ctx.getImageData(0, 0, canvas.width, canvas.height);

			// for (let row = 0; row < canvas.height; row++) {
			// 	for (let col = 0; col < canvas.width; col++) {
			// 		const i = (row * canvas.width + col) * 4;
			// 		const r = img.data[i];
			// 		const g = img.data[i + 1];
			// 		const b = img.data[i + 2];
			// 		const a = img.data[i + 3];
			// 		if (r > 0 || g > 0 || b > 0 || a > 0) console.log('r', r, 'g', g, 'b', b, 'a', a);
			// 	}
			// }

			// console.log('img', img.data);
			// for (let i = 0; i < img.data.length; i += 4*canvas.width) {
			// 	const row = i/(4*canvas.width);
			// 	console.log('img.data', row, img.data.slice(i, i + 4*canvas.width).filter((_, index) => index % 4 === 0).map((x) => 255 - x));

			// 	if (row > 30) break;
			// }

			const startDoc = dymoInit(img.width, img.height);

			const dataToSend = prepareImageData(img, img.width, img.height, startDoc);

			// console.log('dataToSend.byteLength', dataToSend.byteLength);

			// for(let i = 0; i < dataToSend.byteLength; i++) {
			// 	console.log('dataToSend', dataToSend.slice(i, i + 1));
			// }
		};

		loadImage();
	});

	function prepareImageData(img: ImageData,
		pageWidth: number,
		pageHeight: number,
		startDoc: number[]) {
		const endDoc = [ESC, 0x45]; // Form feed

		var dataBytesPerLine = pageWidth / 8;

		// every row of the image results in 2 rows of pixels to be printed, both
		// with one extra byte in front of it
		var bytesPerRow = (dataBytesPerLine + 1) * 2;

		var bytesForImage = bytesPerRow * pageHeight;
		// Total size is the size of all the data + the prefix and suffix
		// and 3 bytes to set the line size
		var totalDataSize = bytesForImage + startDoc.length + endDoc.length + 3;

		var data = new ArrayBuffer(totalDataSize);
		var dataView = new Uint8Array(data, 0, totalDataSize);
		// Set beginning data
		dataView.set(startDoc, 0);
		var offset = startDoc.length;
		// Set Bytes Per Line
		dataView.set([ESC, 0x44, 84], offset);
		offset += 3;

		for (var x = 0; x < img.width; x++) {
			var off1 = offset;
			var off2 = offset + dataBytesPerLine + 1;
			dataView[off1++] = SYN;
			// dataView[off2++] = SYN;
			for (var y = 0; y < img.height; y += 4) {
				var cur1 = 0;
				var cur2 = 0;
				for (var bit = 0; bit < 8; bit++) {
					cur1 = cur1 << 1;
					cur2 = cur2 << 1;
					var i = ((img.height - (y + bit) - 1) * img.width + x) * 4;
					// convert color to greyscale
					var color = 0.2126 * img.data[i] + 0.7152 * img.data[i + 1] + 0.0722 * img.data[i + 2];
					// we want higher numbers to be darker colors
					color = 255 - color;
					// multiple color by alpha channel
					color = (color * img.data[i + 3]) / 255;
					// set 0 1 or both bits depending on color
					if (color > 170) {
						cur1 |= 1;
						cur2 |= 1;
					} else if (color > 85) {
						// for grey, alternate which of the two bits we set
						if (bit & 1) cur1 |= 1;
						else cur2 |= 1;
					}
				}
				dataView[off1++] = cur1;
				// dataView[off2++] = cur2;
			}
			offset = off1;
		}
		//dataView.set(endDoc, offset);

		return data;
	}

	function prepareImageDataBroke(
		img: ImageData,
		pageWidth: number,
		pageHeight: number,
		startDoc: number[]
	) {
		const endDoc = [ESC, 0x45]; // Form feed

		var dataBytesPerLine = pageWidth / 8;
		console.log('dataBytesPerLine', dataBytesPerLine);

		// every row of the image results in 2 rows of pixels to be printed, both
		// with one extra byte in front of it
		var bytesPerRow = Math.ceil((dataBytesPerLine + 1) * 2);
		console.log('bytesPerRow', bytesPerRow);

		var bytesForImage = bytesPerRow * pageHeight;
		console.log('bytesForImage', bytesForImage);
		// Total size is the size of all the data + the prefix and suffix
		// and 3 bytes to set the line size
		var totalDataSize = bytesForImage + startDoc.length + endDoc.length + 3;
		console.log(
			`totalDataSize(${totalDataSize})=${bytesForImage} + ${startDoc.length} + ${
				endDoc.length
			} + ${3}`
		);

		var data = new ArrayBuffer(totalDataSize);
		var dataView = new Uint8Array(data, 0, totalDataSize);
		// Set beginning data
		dataView.set(startDoc, 0);
		var offset = startDoc.length;
		console.log('offset', offset);

		// Set Bytes Per Line
		dataView.set([ESC, 0x44, 75], offset);
		offset += 3;

		for (var x = 0; x < img.width; x++) {
			var off1 = offset;
			var off2 = offset + dataBytesPerLine + 1;
			dataView[off1++] = SYN;
			dataView[off2++] = SYN;
			for (var y = 0; y < img.height; y += 8) {
				var cur1 = 0;
				var cur2 = 0;
				for (var bit = 0; bit < 8; bit++) {
					cur1 = cur1 << 1;
					cur2 = cur2 << 1;
					var i = ((img.height - (y + bit) - 1) * img.width + x) * 4;
					// convert color to greyscale
					var color = 0.2126 * img.data[i] + 0.7152 * img.data[i + 1] + 0.0722 * img.data[i + 2];
					// we want higher numbers to be darker colors
					color = 255 - color;
					// multiple color by alpha channel
					color = (color * img.data[i + 3]) / 255;
					// set 0 1 or both bits depending on color
					if (color > 170) {
						cur1 |= 1;
						cur2 |= 1;
					} else if (color > 85) {
						// for grey, alternate which of the two bits we set
						if (bit & 1) cur1 |= 1;
						else cur2 |= 1;
					}
				}
				dataView[off1++] = cur1;
				dataView[off2++] = cur2;
			}
			offset = off2;
		}
		console.log('offset', offset);

		dataView.set(endDoc, offset);

		return data;
	}

	const print = async () => {
		const device = await navigator.usb.requestDevice({
			filters: [
				{
					vendorId: DymoVendorId
				}
			]
		});

		console.log('device', device);

		await device.open();

		if (device.configuration === null) {
			await device.selectConfiguration(0);
		}

		await device.claimInterface(0);

		const ctx = canvas.getContext('2d');
		if (!ctx) {
			console.log('no canvas 2d context');
			return;
		}

		var img = ctx.getImageData(0, 0, canvas.width, canvas.height);

		const startDoc = dymoInit(img.width, img.height);

		const dataToSend = prepareImageData(img, img.width, img.height, startDoc);
		// // pixels is R,G,B,A
		// const pixels = img.data;

		// // const grayscaleLength = pixels.length / 4;
		// console.log('height', height);
		// console.log('width', width);

		// const grayscale = new Array(height).fill(0).map(() => new Uint8ClampedArray(width).fill(0));
		// // convert to grayscale
		// for (let i =0; i < pixels.length; i += 4) {
		//     const lightness = ~((pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3); //note: ~~ converts to integer
		//     const pixelNumber = i/4;
		//     const row = Math.floor(pixelNumber / width);
		//     const col = pixelNumber % width;
		//     // console.log('pixelNumber', pixelNumber, 'row', row, 'col', col);

		//     grayscale[row][col] = lightness;
		// }

		// // console.log('img', img);

		// const dataToSend = printBitmap(grayscale);
		// console.log('dataToSend', dataToSend);

		console.log('dataToSend', dataToSend);

		await device.transferOut(2, dataToSend);

		await device.close();
	};
</script>

<svelte:head>
	<title>Dymo Label Magic : Bionic Parts</title>
	<meta name="description" content="Dymo Label Magic" />
</svelte:head>

<button class="btn btn-primary" on:click={print}>Print</button>
<br />
<canvas bind:this={canvas} />
