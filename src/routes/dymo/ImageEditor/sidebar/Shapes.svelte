<script lang="ts">
    import * as Fabric from 'fabric';

	// import MaterialSymbolsSquareOutline from '~icons/material-symbols/square-outline?raw';
	// import MaterialSymbolsSquareOutlineRounded from '~icons/material-symbols/square-outline-rounded?raw';
	// import MaterialSymbolsSquare from '~icons/material-symbols/square?raw';
	// import MaterialSymbolsSquareRounded from '~icons/material-symbols/square-rounded?raw';

	// let shapes = [
	// 	MaterialSymbolsSquareOutline,
	// 	MaterialSymbolsSquareOutlineRounded,
	// 	MaterialSymbolsSquare,
	// 	MaterialSymbolsSquareRounded
	// ];

    // console.log('MaterialSymbolsSquareOutline', MaterialSymbolsSquareOutline);
    

    export let canvas: Fabric.Canvas;
    export let fabric: any;

	const handleShapeAdd = async (e: MouseEvent) => {
        console.log('here1', e.currentTarget.children[0].outerHTML);
		const out = await Fabric.loadSVGFromString(e.currentTarget?.children[0].outerHTML);

            if (out.objects == null) {
                return; //@todo
            }
            
			var obj = Fabric.util.groupSVGElements(out.objects as any);
			obj.strokeUniform = true;
			obj.strokeLineJoin = 'miter';
			obj.scaleToWidth(100);
			obj.scaleToHeight(100);
			obj.set({ left: 0, top: 0 });
			canvas.add(obj)
            canvas.renderAll();
			canvas.fire('object:modified');
		
	};
</script>

<div class="shapes">
    <!-- <img src={MaterialSymbolsSquareOutline} alt=""> -->
	<!-- {#each shapes as shape}
		<div class="button" on:click={(e) => handleShapeAdd(e)}>
			<svelte:component this={shape} class="fs-1" />
		</div>
	{/each} -->
    <div class="button" on:click={(e) => handleShapeAdd(e)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <path fill="currentColor" d="m12 21l-4-4l1.4-1.4l1.6 1.575V13q0-.825-.587-1.412T9 11H1V3h2v6h6q.9 0 1.675.363T12 10.35q.55-.625 1.325-.987T15 9h6V3h2v8h-8q-.825 0-1.412.588T13 13v4.175l1.575-1.575L16 17z" />
        </svg>
    </div>
</div>

<style lang="scss">
	.shapes {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-row-gap: 12px;

		.button {
			cursor: pointer;
			line-height: 1em;
			overflow: hidden;
			padding: 0;
			color: #777;

			&:hover {
				color: #000;
			}
		}
	}
</style>
