<script lang="ts">
    import type * as Fabric from 'fabric';

    export let canvas: Fabric.Canvas;
    export let fabric: typeof Fabric;

    let dropArea: HTMLDivElement;
    let inputFile: HTMLInputElement;

	const processFiles = (e: Event, files: FileList) => {
		e.preventDefault();

		dropArea.style.backgroundColor = '#fff';

		const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];

		for (let file of files) {
			// check type
			if (!allowedTypes.includes(file.type)) continue;

			let reader = new FileReader();

			// handle svg
			if (file.type === 'image/svg+xml') {
				reader.onload = (f) => {
					fabric.loadSVGFromString(f.target.result, (objects, options) => {
						let obj = fabric.util.groupSVGElements(objects, options);
						obj.set({ left: 0, top: 0 }).setCoords();
						canvas.add(obj);

						canvas.renderAll();
						// canvas.trigger('object:modified'); //@todo history
					});
				};
				reader.readAsText(file);
				continue;
			}

			// handle image, read file, add to canvas
			reader.onload = async (f) => {
				const img = await fabric.FabricImage.fromURL(f.target.result, {}, {});
                img.set({ left: 0, top: 0 });
                img.scaleToHeight(300);
                img.scaleToWidth(300);
                canvas.add(img);

                canvas.renderAll();
                // canvas.trigger('object:modified'); //@todo history
			};

			reader.readAsDataURL(file);
		}
	};
</script>

{#if !window.File && !window.FileReader && !window.FileList && !window.Blob}
	<p>Your browser doesn't support file upload. Please upgrade to a modern browser</p>
{:else}
	<p>
		Files you select are not sent to the server. You can also copy paste an image from the
		clipboard!
	</p>

	<div
		class="drop"
		bind:this={dropArea}
		on:click={() => inputFile.click()}
        on:keydown={(e) => e.key === 'Enter' && inputFile.click()}
		on:drop={(e) => processFiles(e, e.dataTransfer?.files)}
		on:dragover={(e) => {
			e.preventDefault();
			dropArea.style.backgroundColor = '#ddd';
		}}
		on:dragleave={(e) => {
			e.preventDefault();
			dropArea.style.backgroundColor = '#fff';
		}}
	>
		<div class="info">
			{'Drag & drop files'}<br />{'or click to browse.'}<br />{'JPG, PNG or SVG only!'}
		</div>
	</div>

	<input
		type="file"
		on:change={(e) => processFiles(e, inputFile.files)}
		multiple
		bind:this={inputFile}
		style="display: none;"
	/>
{/if}
