import type * as fabric from 'fabric'; 

export const initNudge = (fabricCanvas: fabric.Canvas) => {
    // move objects with arrow keys
    document.addEventListener('keydown', (e) => {
        // if we are in a textarea or input, don't move the object
        if (document.querySelectorAll('textarea:focus, input:focus').length > 0) return;

        // if the key isn't an arrow key, nothing to do
        if (!['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(e.code)) {
            return;
        }
        e.preventDefault();
        let activeObject = fabricCanvas.getActiveObject();

        if (!activeObject) {
            return;
        }

        if (e.code === 'ArrowLeft') {
            activeObject.left -= 1;
        } else if (e.code === 'ArrowRight') {
            activeObject.left += 1;
        } else if (e.code === 'ArrowUp') {
            activeObject.top -= 1;
        } else if (e.code === 'ArrowDown') {
            activeObject.top += 1;
        }

        activeObject.setCoords();
        fabricCanvas.renderAll();
        fabricCanvas.fire('object:modified');
    });

    document.addEventListener('keydown', (e) => {
        console.log('e.code', e.code);
        
        if (e.code === "Delete" && document.querySelectorAll('textarea:focus, input:focus').length === 0) {
            fabricCanvas.getActiveObjects().forEach((obj) => {
                fabricCanvas.remove(obj);
            });

            fabricCanvas.discardActiveObject();
            fabricCanvas.requestRenderAll();
            fabricCanvas.fire('object:modified');
        }
    });
}