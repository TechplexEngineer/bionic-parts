<script lang="ts">
	import * as fabric from 'fabric';
	import { onMount } from 'svelte';
	import SelectIcon from '~icons/mdi/cursor-default-outline';
	import ShapesIcon from '~icons/gravity-ui/shapes-3';
	import PaintIcon from '~icons/mdi/paintbrush';
	import LineIcon from '~icons/mdi/vector-line';
	import PolylineIcon from '~icons/la/bezier-curve';
	import TextIcon from '~icons/mdi/format-textbox';
	import ImageIcon from '~icons/mdi/cloud-upload';
	import SettingsIcon from '~icons/mdi/settings';

	import PrintIcon from '~icons/material-symbols/print';
	import DownloadIcon from '~icons/mdi/export-variant';
	import DownloadIconSVG from '~icons/bi/filetype-svg';
	import DownloadIconPNG from '~icons/bi/filetype-png';
	import DownloadIconJPG from '~icons/bi/filetype-jpg';
	import DownloadIconJSON from '~icons/bi/filetype-json';
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
	import { downloadImage, downloadJson, downloadSVG } from './utils/download';
	import textBoxDrawing from './tools/textBoxDrawing';
	import lineDrawing from './tools/lineDrawing';
	import pathDrawing from './tools/pathDrawing';
	import { initNudge } from './utils/nudge';
	import Shapes from './sidebar/Shapes.svelte';
	import { convertImageToBitmap } from '../imageService';
	import { DymoService } from '../dymoService';
	import ColorSettings from './tools/selection/colorSettings.svelte';
	import { initCopyPaste } from './utils/copy-paste';
	import CanvasSettings from './sidebar/CanvasSettings.svelte';

	export let canvasElement: HTMLCanvasElement;
	export let width = 540;
	export let height = 900;

	enum SidebarTool {
		SELECT,
		SHAPE,
		PAINT,
		LINE,
		POLYLINE,
		TEXT,
		UPLOAD,
		SETTINGS
	}
	let activeTool = SidebarTool.SELECT;

	let fabricCanvas: fabric.Canvas;

	let activeSelection: fabric.FabricObject[] = [];

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

		activeSelection = fabricCanvas.getActiveObjects();
		

		// Zooming out makes the print smaller
		// initializeZoomEvents(fabricCanvas, width, height);

		// fabricCanvas.add(
		// 	new fabric.Rect({
		// 		left: 100,
		// 		top: 100,
		// 		fill: 'blue',
		// 		width: 100,
		// 		height: 100,

		// 		cornerStyle: 'circle'
		// 	})
		// );

		// const img = await fabric.FabricImage.fromURL('Label Test (1.8 x 3 in).png', {}, {});

		// fabricCanvas.add(
		// 	img.set({
		// 		left: 0,
		// 		top: 0,
		// 		width: img.width,
		// 		height: img.height
		// 	})
		// );

		// set up selection style
		// fabricCanvas.selection = true;
		// fabricCanvas.selectionBorderColor = 'ping';

		fabricCanvas.on('selection:created', (e) => {
			activeSelection = [...activeSelection, ...e.selected];
		});
		fabricCanvas.on('selection:updated', (e) => {
			// add all selected objects
			activeSelection = [...activeSelection, ...e.selected];
			// remove all deselected objects
			activeSelection = activeSelection.filter((obj) => !e.deselected.includes(obj));
		});
		fabricCanvas.on('selection:cleared', (e) => {
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

		lineDrawing(fabricCanvas, fabric);
		pathDrawing(fabricCanvas, fabric);
		textBoxDrawing(fabricCanvas, fabric);
		initNudge(fabricCanvas);
		initCopyPaste(fabricCanvas, fabric);

		return () => {
			fabricCanvas.dispose();
		};
	});

	const setActiveTool = (newTool: SidebarTool) => {
		
		// reset all modes
		fabricCanvas.isDrawingMode = false;
		fabricCanvas.set('isDrawingLineMode', false);
		fabricCanvas.set('isDrawingPathMode', false);
		fabricCanvas.set('isDrawingTextMode', false);
		fabricCanvas.defaultCursor = 'default';
		fabricCanvas.selection = true;
		fabricCanvas.forEachObject((o) => {
			o.selectable = true;
			o.evented = true;
		});

		// drawing mode
		if (newTool === SidebarTool.PAINT) {
			fabricCanvas.isDrawingMode = true;
			console.log('paint mode');
		}

		// drawing line mode
		if (newTool === SidebarTool.LINE) {
			// setSelectionInfo(__('Tip: hold Shift key for 15° angle jumps!'));
			fabricCanvas.set('isDrawingLineMode', true);
			fabricCanvas.defaultCursor = 'crosshair';
			fabricCanvas.selection = false;
			fabricCanvas.forEachObject((o) => {
				o.selectable = false;
				o.evented = false;
			});
		}

		// drawing path mode
		if (newTool === SidebarTool.POLYLINE) {		
			// setSelectionInfo(__('Tip: click to place points, press and pull for curves! Click outside or press Esc to cancel!'));
			fabricCanvas.set('isDrawingPathMode', true);
			fabricCanvas.defaultCursor = 'crosshair';
			fabricCanvas.selection = false;
			fabricCanvas.forEachObject((o) => {
				o.selectable = false;
				o.evented = false;
			});
		}

		// drawing text mode
		if (newTool === SidebarTool.TEXT) {
			fabricCanvas.set('isDrawingTextMode', true);
			fabricCanvas.defaultCursor = 'crosshair';
			fabricCanvas.selection = false;
			fabricCanvas.forEachObject((o) => {
				o.selectable = false;
				o.evented = false;
			});
		}
		if (newTool === activeTool && activeTool === SidebarTool.SELECT) {
			// clear selection
			fabricCanvas.discardActiveObject();
			fabricCanvas.requestRenderAll();
		}
		activeTool = newTool;
	};

	type LeftNavTool = {
		icon: any;
		tooltip: string;
		tool: SidebarTool;
		action?: () => void;
	};

	const leftTools: LeftNavTool[] = [
		{
			icon: SelectIcon,
			tool: SidebarTool.SELECT,
			tooltip: 'Select'
		},
		// {
		// 	icon: ShapesIcon,
		// 	tool: SidebarTool.SHAPE,
		// 	tooltip: 'Add a Shape'
		// },
		// {
		// 	icon: PaintIcon,
		// 	tool: SidebarTool.PAINT,
		// 	tooltip: 'Paint'
		// },
		// {
		// 	icon: LineIcon,
		// 	tool: SidebarTool.LINE,
		// 	tooltip: 'Line'
		// },
		// {
		// 	icon: PolylineIcon,
		// 	tool: SidebarTool.POLYLINE,
		// 	tooltip: 'Polyline'
		// },
		{
			icon: TextIcon,
			tool: SidebarTool.TEXT,
			tooltip: 'Add Textbox',
		},
		// {
		// 	icon: ImageIcon,
		// 	tool: SidebarTool.UPLOAD,
		// 	tooltip: 'Upload Image'
		// },
		// {
		// 	icon: SettingsIcon,
		// 	tool: SidebarTool.SETTINGS,
		// 	tooltip: 'Settings'
		// }
	];

	type RightNavTool = {
		icon: any;
		tooltip: string;
		active?: () => boolean;
	} & ({ tool: SidebarTool } | { action: () => void });

	const rightTools: RightNavTool[] = [
		{
			icon: PrintIcon,
			tooltip: 'Print',
			action: async () => {
				const ctx = canvasElement.getContext('2d');
				if (!ctx) {
					// bindPrintMessages = 'no canvas 2d context';
					return;
				}

				const imageData = ctx.getImageData(0, 0, canvasElement.width, canvasElement.height);

				const bitmap = await convertImageToBitmap(imageData);

				// debug(bitmap);

				const data2Send = DymoService.printBitmap(bitmap);


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
					// bindPrintMessages = (err as Error).message;
					console.log('error', err);
					
				}
			}
		},
		{
			icon: DownloadIconSVG,
			tooltip: 'Download SVG',
			action: () => {
				downloadSVG(
					fabricCanvas.toSVG(undefined, (a) => a),
					'canvas'
				);
			}
		},
		{
			icon: DownloadIconPNG,
			tooltip: 'Download PNG',
			action: () => {
				downloadImage(
					fabricCanvas.toDataURL({
						format: 'png',
						quality: 0.8,
						multiplier: 1
					}),
					'canvas'
				);
			}
		},
		{
			icon: DownloadIconJPG,
			tooltip: 'Download JPG',
			action: () => {
				downloadImage(
					fabricCanvas.toDataURL({
						format: 'jpeg',
						quality: 0.8,
						multiplier: 1
					}),
					'canvas'
				);
			}
		},
		{
			icon: DownloadIconJSON,
			tooltip: 'Download JSON',
			action: () => {
				downloadJson(JSON.stringify(fabricCanvas.toJSON(), null, 2), 'canvasTemplate');
			}
		},

		// {
		// 	icon: SaveIcon,
		// 	tooltip: 'Save',
		// 	action: () => {

		// 	}
		// },
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

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container-fluid">
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarText"
			aria-controls="navbarText"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarText">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				{#each leftTools as tool}
					<button
						class="nav-link"
						class:active={'tool' in tool && activeTool === tool.tool}
						on:click={() => {							
							if (tool.tool != undefined) setActiveTool(tool?.tool);
							if (tool.action != undefined) tool.action();
						}}
						title={tool.tooltip}
					>
						<svelte:component this={tool.icon} class="fs-3" />
					</button>
				{/each}

			</ul>

			<ul class="navbar-nav mb-2 mb-lg-0">
				{#each rightTools as tool}
					<button
						class="nav-link"
						class:active={tool.active && tool.active()}
						on:click={() => {
							if ('tool' in tool) setActiveTool(tool?.tool);
							if ('action' in tool) tool.action();
						}}
						title={tool.tooltip}
					>
						<svelte:component this={tool.icon} class="fs-3" />
					</button>
				{/each}
			</ul>
		</div>
	</div>
</nav>

<div class="d-flex">
	<div class="flex-column p-4 col-2 bg-dark-subtle border-end border-dark-subtle">
	{#if activeTool == SidebarTool.SELECT && activeSelection.length > 0}
		<h3>Selection Settings</h3>
		<hr />
		<ColorSettings fabric={fabric} canvas={fabricCanvas} activeSelection={activeSelection} />
		ToDo
	{/if}
		
	{#if activeTool == SidebarTool.SHAPE}
		<h3>Shapes</h3>
		<hr />
		<Shapes fabric={fabric} canvas={fabricCanvas}/>
	{/if}

	{#if activeTool == SidebarTool.PAINT}
		<h3>Free Draw</h3>
		<hr />
		ToDo
	{/if}

	{#if activeTool == SidebarTool.UPLOAD}
		<h3>Upload Image</h3>
		<hr />
		ToDo
	{/if}

	{#if activeTool == SidebarTool.SETTINGS}
		<CanvasSettings fabric={fabric} canvas={fabricCanvas} />
		
	{/if}
	</div>
	
	
	<div class="canvas-container">
		<canvas bind:this={canvasElement} />
	</div>
	<!-- <div class="flex-column p-4 col-2" style="background-color: red;">
		Right Sidebar
	</div> -->
</div>

<style lang="scss">
	canvas {
		border: 1px solid black;
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHUlEQVQ4jWNgYGAQIYAJglEDhoUBg9+FowbQ2gAARjwKARjtnN8AAAAASUVORK5CYII=');
		background-size: 30px 30px;
	}
	.canvas-container {
		// width: var(--canvasWidth);
		// height: var(--canvasHeight);
		// background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHUlEQVQ4jWNgYGAQIYAJglEDhoUBg9+FowbQ2gAARjwKARjtnN8AAAAASUVORK5CYII=');
		// background-size: 30px 30px;
		// border: 1px solid #ccc;
		margin: auto;
	}
</style>
