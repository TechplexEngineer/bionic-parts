import type * as fabric from 'fabric';

/**
 * Define action to zoom in/out by mouse+key events
 */
// keyboard shortcuts and zoom calculations
const minZoom = 0.05
const maxZoom = 3

// zoom with key
const zoomWithKeys = (e: KeyboardEvent, canvas: fabric.Canvas, applyZoom: (zoom: number) => void) => {

    // ctr -: zoom out
    if (e.code == "Minus" && e.ctrlKey) {
        e.preventDefault()
        if (canvas.getZoom() === minZoom) return

        let updatedZoom = Math.round(canvas.getZoom() * 100)

        // 25% jumps
        if ((updatedZoom % 25) !== 0) {
            while ((updatedZoom % 25) !== 0) {
                updatedZoom = updatedZoom - 1
            }
        } else {
            updatedZoom = updatedZoom - 25
        }

        updatedZoom = updatedZoom / 100
        updatedZoom = (updatedZoom <= 0) ? minZoom : updatedZoom

        applyZoom(updatedZoom)
    }


    // ctr +: zoom in
    if (e.code == "Plus" && e.ctrlKey) {
        e.preventDefault()
        if (canvas.getZoom() === maxZoom) return

        let updatedZoom = Math.round(canvas.getZoom() * 100)

        // 25% jumps
        if ((updatedZoom % 25) !== 0) {
            while ((updatedZoom % 25) !== 0) {
                updatedZoom = updatedZoom + 1
            }
        } else {
            updatedZoom = updatedZoom + 25
        }

        updatedZoom = updatedZoom / 100
        updatedZoom = (updatedZoom > maxZoom) ? maxZoom : updatedZoom

        applyZoom(updatedZoom)
    }


    // ctr 0: reset
    if (["Numpad0", "Digit0", "BracketLeft", "Backquote"].includes(e.code) && e.ctrlKey) {
        e.preventDefault()
        applyZoom(1)
    }
}

// zoom with mouse
const zoomWithMouse = (e: WheelEvent, canvas: fabric.Canvas, applyZoom: (zoom: number) => void) => {
    if (!e.ctrlKey) return
    e.preventDefault()

    let updatedZoom = parseFloat(canvas.getZoom().toFixed(2))
    let zoomAmount = (e.deltaY > 0) ? -5 : 5
    updatedZoom = ((updatedZoom * 100) + zoomAmount) / 100
    if (updatedZoom < minZoom || updatedZoom > maxZoom) return

    applyZoom(updatedZoom)
}

export const initializeZoomEvents = (canvas: fabric.Canvas, width: number, height: number) => {
    const applyZoom = (zoom: number) => {
        canvas.setZoom(zoom)
        canvas.setDimensions({ width: width * canvas.getZoom(), height: height * canvas.getZoom() })
    }

    // zoom out/in/reset (ctr + -/+/0)
    document.addEventListener('keydown', (e) => zoomWithKeys(e, canvas, applyZoom))

    // zoom out/in with mouse
    document.addEventListener('wheel', (e) => zoomWithMouse(e, canvas, applyZoom), {
        passive: false
    })
}