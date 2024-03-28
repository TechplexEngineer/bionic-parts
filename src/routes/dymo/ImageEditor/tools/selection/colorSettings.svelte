<script lang="ts">
	import type * as Fabric from 'fabric';
	import { onMount } from 'svelte';
	import type { ChangeEventHandler } from 'svelte/elements';

	export let canvas: Fabric.Canvas;
	export let activeSelection: Fabric.FabricObject[];
	export let fabric: typeof Fabric;

  let selectionColor: string = '#000000';

  if (activeSelection.length > 0 && activeSelection[0].fill && typeof activeSelection[0].fill === 'string') {
    let fillColor = new fabric.Color(activeSelection[0].fill);
		selectionColor = `#${fillColor.toHex()}`;
  }

  const colorChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    activeSelection.forEach((item) => {
      item.set('fill', e.currentTarget?.value);
    });
    canvas.requestRenderAll();
  }

	
</script>

<input type="color" value={selectionColor} on:change={colorChange} />
