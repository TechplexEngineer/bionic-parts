/*
 * The logic behind line drawing.
 */

import type * as Fabric from 'fabric';
import { __ } from '../translations';

const lineDrawing = (fabricCanvas: Fabric.Canvas, fabric: any) => {

    let isDrawingLine = false;
    let lineToDraw: Fabric.Line;
    let pointer;
    let pointerPoints: number[];

    fabricCanvas.on('mouse:down', (o) => {
        if (!fabricCanvas.get("isDrawingLineMode")) return

        isDrawingLine = true
        pointer = fabricCanvas.getPointer(o.e)
        pointerPoints = [pointer.x, pointer.y, pointer.x, pointer.y]

        lineToDraw = new fabric.Line(pointerPoints, {
            strokeWidth: 2,
            stroke: '#000000'
        });
        lineToDraw.selectable = false
        lineToDraw.evented = false
        lineToDraw.strokeUniform = true
        fabricCanvas.add(lineToDraw)
    });

    fabricCanvas.on('mouse:move', (o) => {
        if (!isDrawingLine) return

        pointer = fabricCanvas.getPointer(o.e)

        if (o.e.shiftKey) {
            // calc angle
            let startX = pointerPoints[0]
            let startY = pointerPoints[1]
            let x2 = pointer.x - startX
            let y2 = pointer.y - startY
            let r = Math.sqrt(x2 * x2 + y2 * y2)
            let angle = (Math.atan2(y2, x2) / Math.PI * 180)

            angle = Math.round(((angle + 7.5) % 360) / 15) * 15

            let cosx = r * Math.cos(angle * Math.PI / 180)
            let sinx = r * Math.sin(angle * Math.PI / 180)

            lineToDraw.set({
                x2: cosx + startX,
                y2: sinx + startY
            })

        } else {
            lineToDraw.set({ x2: pointer.x, y2: pointer.y })
        }

        fabricCanvas.renderAll()

    });

    fabricCanvas.on('mouse:up', () => {
        if (!isDrawingLine) return;

        lineToDraw.setCoords();
        isDrawingLine = false;
        fabricCanvas.fire('object:modified');
    });

}

export default lineDrawing
