<script lang="ts">
	import * as fabric from 'fabric';
	import { onMount } from 'svelte';
	import SelectIcon   from '~icons/mdi/cursor-default-outline';
	import ShapesIcon   from '~icons/gravity-ui/shapes-3';
	import PaintIcon    from '~icons/mdi/paintbrush';
	import LineIcon     from '~icons/mdi/vector-line';
	import PolylineIcon from '~icons/la/bezier-curve';
	import TextIcon     from '~icons/mdi/format-textbox';
	import ImageIcon    from '~icons/mdi/cloud-upload';
	import SettingsIcon from '~icons/mdi/settings';


	import DownloadIcon from '~icons/mdi/tray-download';
	import SaveIcon from '~icons/mdi/content-save';
	import UndoIcon from '~icons/material-symbols/undo';
	import RedoIcon from '~icons/material-symbols/redo';
	import ClearIcon from '~icons/mdi/eraser-variant';


	// DownloadIcon
	// SaveIcon
	// UndoIcon
	// RedoIcon
	// ClearIcon

	import { initializeZoomEvents } from './zoom';
	

	export let canvasElement: HTMLCanvasElement;
	export let width = 540;
	export let height = 900;

    let activeSelection: fabric.FabricObject[] = [];

    enum Tool {
        SELECT,
        SHAPE,
        PAINT,
        LINE,
        POLYLINE,
        TEXT,
        IMAGE
    }


	let fabricCanvas: fabric.Canvas;
    

	onMount(async () => {


        // FabricObject.prototype.transparentCorners = false;
        // FabricObject.prototype.cornerStyle = 'circle';
        // FabricObject.prototype.borderColor = '#C00000';
        // FabricObject.prototype.cornerColor = '#C00000';
        // FabricObject.prototype.cornerStrokeColor = '#FFF';
        // FabricObject.prototype.padding = 0;

        // FabricObject.prototype.cornerColor = 'blue';

		fabricCanvas = new fabric.Canvas(canvasElement, {
			width: width,
			height: height
		});

		// Zooming out makes the print smaller
		// initializeZoomEvents(fabricCanvas, width, height);

        


		fabricCanvas.add(
			new fabric.Rect({
				left: 100,
				top: 100,
				fill: 'blue',
				width: 100,
				height: 100,

                cornerStyle: 'circle'
			})
		);

		fabricCanvas.add(
			new fabric.Textbox('Hello world', {
				left: 100,
				top: 100,
				width: 100,
				fontSize: 20
			})
		);

		const img = await fabric.FabricImage.fromURL("Label Test (1.8 x 3 in).png", {}, {})

		fabricCanvas.add(
			img.set({
				left: 0,
				top: 0,
				width: img.width,
				height: img.height
			})
		);

        

        // set up selection style
        // fabricCanvas.selection = true;
        // fabricCanvas.selectionBorderColor = 'ping';

		fabricCanvas.on('selection:created', (e) => {
			activeSelection.push(...e.selected);
		});
		fabricCanvas.on('selection:updated', e => {
			activeSelection.push(...e.selected);
			// remove all deselected objects
			activeSelection = activeSelection.filter((obj) => !e.deselected.includes(obj));
		});
		fabricCanvas.on('selection:cleared', e => {
			activeSelection = [];
		});

		// snap to an angle on rotate if shift key is down
		fabricCanvas.on('object:rotating', (e) => {
			if (e.e.shiftKey) {
				e.target.snapAngle = 15;
			} else {
				// e.target.snapAngle = false;
			}
		});

		// @todo history
		// fabricCanvas.on('object:modified', () => {
		//     console.log('trigger: modified')
		//     let currentState = this.canvas.toJSON();
		//     this.history.push(JSON.stringify(currentState));
		// })
		//
		// const savedCanvas = saveInBrowser.load('canvasEditor');
		// if (savedCanvas) {
		//     fabricCanvas.loadFromJSON(savedCanvas, fabricCanvas.renderAll.bind(fabricCanvas));
		// }

		

        // @todo history
		// setTimeout(() => {
		// 	let currentState = fabricCanvas.toJSON();
		// 	this.history.push(JSON.stringify(currentState));
		// }, 1000);

		return () => {
			fabricCanvas.dispose();
		};
	});

	const setActiveTool = (tool: Tool) => {
		console.log('tool', tool);

		// clear settings from previous tool
		if (tool !== Tool.SELECT) {
			fabricCanvas.discardActiveObject();
			fabricCanvas.renderAll();
			activeSelection = [];
		}

		// fabricCanvas.isDrawingLineMode = false;
		// fabricCanvas.isDrawingPathMode = false;
		fabricCanvas.isDrawingMode = false;
		// fabricCanvas.isDrawingTextMode = false;

		fabricCanvas.defaultCursor = 'default';
		fabricCanvas.selection = true;
		fabricCanvas.forEachObject(o => {
			o.selectable = true;
			o.evented = true;
		})
	}

	const addText = () => {
		fabricCanvas.add(
			new fabric.Textbox('ChangeMe', {
				left: 100,
				top: 100,
				width: 100,
				fontSize: 50
			})
		);
	};

	type NavTool = {
		icon: any; 
		tooltip: string;
	} & ( 
		{tool: Tool;} | 
		{action: () => void;} 
	);

	const leftTools: NavTool[] = [
		{
			icon: SelectIcon,
			tool: Tool.SELECT,
			tooltip: 'Select'
			
		},
		{
			icon: ShapesIcon,
			tool: Tool.SHAPE,
			tooltip: 'Add a Shape'
		},
		{
			icon: PaintIcon,
			tool: Tool.PAINT,
			tooltip: 'Paint'
		},
		{
			icon: LineIcon,
			tool: Tool.LINE,
			tooltip: 'Line'
		},
		{
			icon: PolylineIcon,
			tool: Tool.POLYLINE,
			tooltip: 'Polyline'
		},
		{
			icon: TextIcon,
			tool: Tool.TEXT,
			tooltip: 'Add Textbox'
		},
		{
			icon: ImageIcon,
			tool: Tool.IMAGE,
			tooltip: 'Upload Image'
		}
		
	];

	const rightTools: NavTool[] = [
		{
			icon: SettingsIcon,
			tooltip: 'Settings',
			action: () => {}
		},
		{
			icon: DownloadIcon,
			tooltip: 'Download',
			action: () => {}
		},
		{
			icon: SaveIcon,
			tooltip: 'Save',
			action: () => {}
		},
		// {
		// 	icon: UndoIcon,
		// 	tooltip: 'Undo',
		// 	action: () => {}
		// },
		// {
		// 	icon: RedoIcon,
		// 	tooltip: 'Redo',
		// 	action: () => {}
		// },
		{
			icon: ClearIcon,
			tooltip: 'Clear',
			action: () => {
				if (window.confirm('This will clear the canvas! Are you sure?')) {
					fabricCanvas.clear();
				}
			}
		}
	];

</script>

<!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
	<div class="container-fluid">
		
		<div class="navbar-nav">
			{#each leftTools as tool}
				<button class="nav-link" on:click={() => tool?.tool && setActiveTool(tool?.tool)} title={tool.tooltip}>
					<svelte:component this={tool.icon} class="fs-3" />
				</button>
			{/each}
		</div>
	</div>
</nav> -->

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
		{#each leftTools as tool}
			<button class="nav-link" on:click={() => {
				if ("tool" in tool) setActiveTool(tool?.tool);
				if ("action" in tool) tool.action();
			}} title={tool.tooltip}>
				<svelte:component this={tool.icon} class="fs-3" />
			</button>
		{/each}
        <!-- <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li> -->
      </ul>

	  <ul class="navbar-nav mb-2 mb-lg-0">
		{#each rightTools as tool}
			<button class="nav-link" on:click={() => {
				if ("tool" in tool) setActiveTool(tool?.tool);
				if ("action" in tool) tool.action();
			}} title={tool.tooltip}>
				<svelte:component this={tool.icon} class="fs-3" />
			</button>
		{/each}
      </ul>
    </div>
  </div>
</nav>


<div class="d-flex">
	<div class="flex-column p-4 col-2">
		Left Sidebar
	</div>
	<div class="canvas-container" style="width:{width}px; height:{height}px">
		<canvas bind:this={canvasElement}/>
	</div>
	<div class="flex-column p-4 col-2" style="background-color: red;">
		Right Sidebar
	</div>
</div>

<style>
	canvas {
		border: 1px solid black;
	}
    .canvas-container {
		width: var(--canvasWidth);
		height: var(--canvasHeight);
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHUlEQVQ4jWNgYGAQIYAJglEDhoUBg9+FowbQ2gAARjwKARjtnN8AAAAASUVORK5CYII=");
        background-size: 30px 30px;
        border: 1px solid #ccc;
        margin: auto;
    }
</style>
