<script lang="ts">
	import * as fabric from 'fabric';
	import { onMount } from 'svelte';

	export let canvasElement: HTMLCanvasElement;

    let activeSelection: any;

	const setActiveSelection = (selection: any) => {
		console.log('selection', selection);
        activeSelection = selection;
	};

    enum Tool {
        SELECT,
        SHAPE,
        PAINT,
        LINE,
        POLYLINE,
        TEXT,
        IMAGE,
        SETTINGS
    }

    

	onMount(async () => {


        // FabricObject.prototype.transparentCorners = false;
        // FabricObject.prototype.cornerStyle = 'circle';
        // FabricObject.prototype.borderColor = '#C00000';
        // FabricObject.prototype.cornerColor = '#C00000';
        // FabricObject.prototype.cornerStrokeColor = '#FFF';
        // FabricObject.prototype.padding = 0;

        // FabricObject.prototype.cornerColor = 'blue';

		const fabricCanvas = new fabric.Canvas(canvasElement, {
			width: 540,
			height: 900
		});

        const setActiveTool = (tool: Tool) => {
            console.log('tool', tool);

            // clear settings from previous tool
            if (tool !== Tool.SELECT) {
                fabricCanvas.discardActiveObject();
                fabricCanvas.renderAll();
                activeSelection = null;
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

		// retrieve active selection to react state
		fabricCanvas.on('selection:created', ({ selected }) => setActiveSelection(selected));
		fabricCanvas.on('selection:updated', ({ selected }) => setActiveSelection(selected));
		fabricCanvas.on('selection:cleared', ({ e }) => setActiveSelection(null));

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

		// move objects with arrow keys
		document.addEventListener('keydown', (e) => {
			const key = e.code;
			let activeObject;

			// if we are in a textarea or input, don't move the object
			if (document.querySelectorAll('textarea:focus, input:focus').length > 0) return;

			if (key !== 'ArrowLeft' && key !== 'ArrowUp' && key !== 'ArrowRight' && key !== 'ArrowDown') {
				return;
			}
			e.preventDefault();
			activeObject = fabricCanvas.getActiveObject();

			if (!activeObject) {
				return;
			}

			if (key === 'ArrowLeft') {
				activeObject.left -= 1;
			} else if (key === 'ArrowRight') {
				activeObject.left += 1;
			} else if (key === 'ArrowUp') {
				activeObject.top -= 1;
			} else if (key === 'ArrowDown') {
				activeObject.top += 1;
			}

			activeObject.setCoords();
			fabricCanvas.renderAll();
			// fabricCanvas.trigger('object:modified'); //@todo history
		});

		document.addEventListener('keydown', (e) => {
			const key = e.which || e.keyCode;
			if (key === 46 && document.querySelectorAll('textarea:focus, input:focus').length === 0) {
				fabricCanvas.getActiveObjects().forEach((obj) => {
					fabricCanvas.remove(obj);
				});

				fabricCanvas.discardActiveObject();
				fabricCanvas.requestRenderAll();
				// fabricCanvas.trigger('object:modified')
			}
		});

        // @todo history
		// setTimeout(() => {
		// 	let currentState = fabricCanvas.toJSON();
		// 	this.history.push(JSON.stringify(currentState));
		// }, 1000);

		return () => {
			fabricCanvas.dispose();
		};
	});
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
	<div class="container-fluid">
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNavAltMarkup"
			aria-controls="navbarNavAltMarkup"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div class="navbar-nav">
				<a class="nav-link active" href="/">Select Tool</a>
				<a class="nav-link" href="#">Shapes Tool</a>
				<a class="nav-link" href="#">Paint Tool</a>
				<a class="nav-link" href="#">Line Tool</a>
				<a class="nav-link" href="#">Polyline Tool</a>
				<a class="nav-link" href="#">Text Tool</a>
				<a class="nav-link" href="#">Image Tool</a>
				<a class="nav-link" href="#">Settings</a>
			</div>
		</div>
	</div>
</nav>

<div class="canvas-container">
    <canvas bind:this={canvasElement} />
</div>

<style>
	canvas {
		border: 1px solid black;
	}
    .canvas-container {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHUlEQVQ4jWNgYGAQIYAJglEDhoUBg9+FowbQ2gAARjwKARjtnN8AAAAASUVORK5CYII=");
        background-size: 30px 30px;
        border: 1px solid #ccc;
        margin: auto;
    }
</style>
