<script lang="ts">
	import type * as Fabric from 'fabric';
	import getRealBBox from '../utils/getRealBBox';

	export let canvas: Fabric.Canvas;
	export let fabric: typeof Fabric;

    // Note: Calling htis does not update the checkerboard background
	const fitToContent = () => {
		// select all object
		let activeSelection = new fabric.ActiveSelection(canvas.getObjects(), {
			canvas: canvas
		});
		canvas.setActiveObject(activeSelection);

		// measure, align, resize
		let bound = activeSelection.getBoundingRect();
		let resize = async () => {
			let realBound = await getRealBBox(activeSelection);
			activeSelection.set('left', activeSelection.left - bound.left - realBound.x1);
			activeSelection.set('top', activeSelection.top - bound.top - realBound.y1);

			let width = realBound.width;
			let height = realBound.height;

			canvas.setDimensions({ width, height });
			canvas.discardActiveObject();
			canvas.renderAll();
			canvas.calcOffset();
			//   canvas.trigger('object:modified') //@todo history
		};
		resize();
	};
</script>

<h3>Canvas Settings</h3>
<hr />
<h4>Canvas Size</h4>
<div class="row g-3 align-items-center">
	<div class="col-auto">
		<label for="inputWidth" class="col-form-label">Width</label>
	</div>
	<div class="col-md-3">
		<input type="number" id="inputWidth" class="form-control" />
	</div>
	<div class="col-auto">
		<span class="form-text"> px </span>
	</div>
</div>
<div class="row g-3 align-items-center">
	<div class="col-auto">
		<label for="inputHeight" class="col-form-label">Height</label>
	</div>
	<div class="col-md-3">
		<input type="number" id="inputHeight" class="form-control" />
	</div>
	<div class="col-auto">
		<span class="form-text"> px </span>
	</div>
</div>
<div class="form-check">
	<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
	<label class="form-check-label" for="flexCheckDefault"> Keep Aspect Ratio </label>
</div>

<button class="btn btn-secondary" on:click={fitToContent}>Fit to Content</button>
