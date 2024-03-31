import type * as Fabric from 'fabric';

/**
 * Define copy/paste actions on fabric js canvas
 */
export const initCopyPaste = (canvas: Fabric.Canvas, fabric: typeof Fabric) => {

    // copy
    document.addEventListener('copy', async (e) => {
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
            const cloned = await activeObject.clone();
            e.clipboardData?.setData('text/plain', JSON.stringify(cloned.toJSON()))
            
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
    document.addEventListener('paste', async (e) => {
        console.log('paste event triggered');
        
        let pasteTextData = e.clipboardData?.getData('text')

        // check if base64 image
        if (pasteTextData && isBase64String(pasteTextData)) {
            console.log('first');
            const img = await fabric.FabricImage.fromURL(pasteTextData, {}, {});

            img.set({
                left: 0,
                top: 0
            })
            img.scaleToHeight(100)
            img.scaleToWidth(100)
            canvas.add(img)
            canvas.setActiveObject(img)
            // canvas.trigger('object:modified') //@todo history

            return
        }

        // check if there's an image in clipboard items
        if (e.clipboardData?.items && e.clipboardData.items.length > 0) {
            console.log('second');
            for (let i = 0; i < e.clipboardData.items.length; i++) {
                if (e.clipboardData.items[i].type.indexOf('image') !== 0) {
                    console.log('not an image');
                    continue;
                }
                let blob = e.clipboardData.items[i].getAsFile()
                if (blob == null) {
                    console.log('blob is null');
                    continue;
                }
                let reader = new FileReader()
                reader.onload = async (f) => {
                    const img = await fabric.FabricImage.fromURL(f.target!.result as any, {}, {});

                    

                    img.set({
                        left: canvas.getActiveObject()?.get("left") || 0,
                        top: canvas.getActiveObject()?.get("top") || 0
                    })
                    img.scaleToHeight(100)
                    img.scaleToWidth(100)
                    canvas.add(img)
                    canvas.setActiveObject(img)
                }
                reader.readAsDataURL(blob);
            }
        }

        // check if JSON and type is valid
        const validTypes = ['rect', 'circle', 'line', 'path', 'polygon', 'polyline', 'textbox', 'group']
        if (pasteTextData && isJSONObjectString(pasteTextData)) {
            console.log('third', pasteTextData);
            const obj = JSON.parse(pasteTextData)
            if (!validTypes.includes((obj.type as string).toLowerCase())){
                console.log('not valid type:', obj.type);
                return
            }
            console.log('here');
            
            // insert and select
            const objects = await fabric.util.enlivenObjects([obj]);
            
            (objects as Fabric.FabricObject[]).forEach(function (o) {
                let left = o.get('left') + 10;
                let top = o.get('top') + 10;
                const ao = canvas.getActiveObject();
                if (ao) {
                    left = ao.left + 10;
                    top = ao.top + 10;
                }
                o.set({
                    left: left,
                    top: top
                })
                canvas.add(o)
                // o.setCoords()
                canvas.setActiveObject(o)
            })
            canvas.renderAll()
            //canvas.trigger('object:modified')//@todo history
        }
    })
};