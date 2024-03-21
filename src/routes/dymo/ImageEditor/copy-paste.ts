import type * as fabric from 'fabric'; 

/**
 * Define copy/paste actions on fabric js canvas
 */
export const copyPaste = (canvas: fabric.Canvas) => {

    // copy
    document.addEventListener('copy', (e) => {
        const activeObject = canvas.getActiveObject()
        if (!activeObject) return

        // copy image as dataUrl
        if (activeObject.type === 'image') {
            e.preventDefault()

            e.clipboardData?.setData('text/plain', activeObject.toDataURL())
        }


        // if selection is not an image, copy as JSON
        if (activeObject.type !== 'image') {
            e.preventDefault()
            activeObject.clone((cloned) => {
                e.clipboardData?.setData('text/plain', JSON.stringify(cloned.toJSON()))
            })
        }
    })

    // JSON string validator
    const isJSONObjectString = (s: string) => {
        try {
            const o = JSON.parse(s);
            return !!o && (typeof o === 'object') && !Array.isArray(o)
        } catch {
            return false
        }
    }

    // base64 validator
    const isBase64String = (str: string) => {
        try {
            const testString = str.split('base64,').pop()
            if (!testString) return false
            window.atob(testString)
            return true
        } catch (e) {
            return false
        }
    }

    // paste
    document.addEventListener('paste', (e) => {
        let pasteTextData = e.clipboardData?.getData('text')

        // check if base64 image
        if (pasteTextData && isBase64String(pasteTextData)) {
            fabric.FabricImage.fromURL(pasteTextData, (img) => {
                img.set({
                    left: 0,
                    top: 0
                })
                img.scaleToHeight(100)
                img.scaleToWidth(100)
                canvas.add(img)
                canvas.setActiveObject(img)
                canvas.trigger('object:modified')
            })

            return
        }

        // check if there's an image in clipboard items
        if (e.clipboardData?.items && e.clipboardData.items.length > 0) {
            for (let i = 0; i < e.clipboardData.items.length; i++) {
                if (e.clipboardData.items[i].type.indexOf('image') === 0) {
                    let blob = e.clipboardData.items[i].getAsFile()
                    if (blob !== null) {
                        let reader = new FileReader()
                        reader.onload = (f) => {
                            fabric.FabricImage.fromURL(f.target.result, (img) => {
                                img.set({
                                    left: 0,
                                    top: 0
                                })
                                img.scaleToHeight(100)
                                img.scaleToWidth(100)
                                canvas.add(img)
                                canvas.setActiveObject(img)
                                canvas.trigger('object:modified')
                            })
                        }
                        reader.readAsDataURL(blob)
                    }
                }
            }
        }

        // check if JSON and type is valid
        const validTypes = ['rect', 'circle', 'line', 'path', 'polygon', 'polyline', 'textbox', 'group']
        if (pasteTextData && isJSONObjectString(pasteTextData)) {
            const obj = JSON.parse(pasteTextData)
            if (!validTypes.includes(obj.type)) return

            // insert and select
            fabric.util.enlivenObjects([obj], function (objects) {
                objects.forEach(function (o) {
                    o.set({
                        left: 0,
                        top: 0
                    })
                    canvas.add(o)
                    o.setCoords()
                    canvas.setActiveObject(o)
                })
                canvas.renderAll()
                canvas.trigger('object:modified')
            })
        }
    })
};