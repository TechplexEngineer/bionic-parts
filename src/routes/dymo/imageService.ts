// import Jimp from 'jimp';

// // Supported font sizes (in pixels).
// const FONT_SIZES = [8, 10, 12, 14, 16, 32, 64, 128];


/**
 * Set the bit of given value.
 * https://lucasfcosta.com/2018/12/25/bitwise-operations.html
 *
 * @param {number} value Value to change
 * @param {number} bitIndex Bit to set to 1
 * @return {number} Result
 */
function setBit(value: number, bitIndex: number): number {
    const bitMask = 1 << bitIndex;
    return value | bitMask;
}

// /**
//  * Simulate newlines by replacing them with just enough spaces to force a break at the location of the newline.
//  *
//  * @param {any} font Jimp font
//  * @param {number} maxTextWidth The max width of the text block
//  * @param {string} text The text with newlines
//  * @return {string} The resulting text with newlines removed and spaces added
//  */
// // function simulateNewlines(font, maxTextWidth, text) {

// //     if (!font) {
// //         throw Error('simulateNewlines() - font is required');
// //     }
// //     if (!Number.isInteger(maxTextWidth)) {
// //         throw Error('simulateNewlines() - maxTextWidth needs to be a positive number');
// //     }
// //     const minimalWidth = Jimp.measureText(font, '||');
// //     if (maxTextWidth < minimalWidth) {
// //         throw Error(`simulateNewlines() - maxTextWidth needs to be greater than ${minimalWidth} but is ${maxTextWidth}`);
// //     }

// //     const texts = (text || '').split('\n');
// //     // No newlines in the text, nothing to do.
// //     if (texts.length <= 1) {
// //         return text;
// //     }
// //     // It contains newlines, now simulate the newline by adding spaces to force a break.
// //     for (let i = 0; i < texts.length - 1; i++) {
// //         let width = Jimp.measureText(font, texts[i] + '|');
// //         while (width < maxTextWidth) {
// //             texts[i] += ' ';
// //             width = Jimp.measureText(font, texts[i] + '|');
// //         }
// //     }
// //     return texts.join('');
// // }

// /**
//  * Create the image for the label.
//  *
//  * @param imageWidth Image width in pixels
//  * @param imageHeight Image height in pixels
//  * @param horizontalMargin Margin left and right for the text (it's not added to the total image width)
//  * @param {number} fontSize Size of the font; 8,10,12,14,16,32,64 or 128 pixels.
//  * @param {string} text Text to print
//  * @return {Promise<Jimp>}
//  */
// // export function createImageWithText(imageWidth: number, imageHeight: number, horizontalMargin: number, fontSize: number, text: string): Promise<Jimp> {
// //     return new Promise((resolve, reject) => {

// //         // Test parameters.
// //         if (!imageWidth || imageWidth < 0 || !Number.isInteger(imageWidth)) {
// //             throw Error(`createImage(): imageWidth should be a positive integer: "${imageWidth}"`);
// //         }
// //         if (!imageHeight || imageHeight < 0 || !Number.isInteger(imageHeight)) {
// //             throw Error(`createImage(): imageHeight should be a positive integer: : "${imageHeight}"`);
// //         }
// //         if (horizontalMargin < 0 || !Number.isInteger(horizontalMargin)) {
// //             throw Error(`createImage(): horizontalMargin should be positive integer or 0: "${horizontalMargin}"`);
// //         }
// //         if (!fontSize || FONT_SIZES.indexOf(fontSize) === -1) {
// //             throw Error(`createImage(): invalid font size: "${fontSize}"`);
// //         }
// //         if (!text) {
// //             throw Error(`createImage(): Empty text, nothing to print.`);
// //         }
// //         if (typeof text !== 'string') {
// //             throw Error(`createImage(): Text should be of type string.`);
// //         }

// //         new Jimp(imageWidth, imageHeight, '#FFFFFF', (err, image) => {
// //             if (err) {
// //                 reject(err);
// //                 return;
// //             }

// //             Jimp.loadFont(Jimp[`FONT_SANS_${fontSize}_BLACK`])
// //                 .then(font => {

// //                     const maxTextWidth = image.bitmap.width - 2 * horizontalMargin;
// //                     const maxTextHeight = image.bitmap.height;
// //                     const textObj = {
// //                         // Simulate newlines.
// //                         text: simulateNewlines(font, maxTextWidth, text),
// //                         alignmentX: Jimp.HORIZONTAL_ALIGN_LEFT,
// //                         alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
// //                     };
// //                     // Print text.
// //                     // noinspection JSUnresolvedFunction
// //                     image.print(font, horizontalMargin, 0, textObj, maxTextWidth, maxTextHeight);

// //                     resolve(image);
// //                 })
// //                 .catch(reject);
// //         });
// //     });
// // }

export const rgb565Matrix = [1, 9, 3, 11, 13, 5, 15, 7, 4, 12, 2, 10, 16, 8, 14, 6];

/**
 * Create bitmap from Jimp image object.
 *
 * @param {Jimp} image Jimp image object (image will be manipulated)
 * @return {Promise<number[][]>} Bitmap buffer array
 */
export function convertImageToBitmap(image: ImageData): number[][] {

    if (!image) {
        throw Error('convertImageToBitmapBuffer(): parameter image is required');
    }

    const bitmap: number[][] = [];

    for (let pixel = 0; pixel < image.data.length; pixel += 4) {
        const x = (pixel/4) % image.width;
        const y = Math.floor((pixel/4) / image.width);        

        // make the alpha channel opaque
        image.data[pixel + 3] = 255;

        // convert to greyscale
        const grey = 0.2126 * image.data[pixel] +
            0.7152 * image.data[pixel + 1] +
            0.0722 * image.data[pixel + 2];
        image.data[pixel] = grey;
        image.data[pixel + 1] = grey;
        image.data[pixel + 2] = grey;

        // set brightness to .3
        const newBrightness = 0.3;
        image.data[pixel + 0] += (255 - image.data[pixel + 0]) * newBrightness;
        image.data[pixel + 1] += (255 - image.data[pixel + 1]) * newBrightness;
        image.data[pixel + 2] += (255 - image.data[pixel + 2]) * newBrightness;

        //dither565
        const thresholdId = ((y & 3) << 2) + (x % 4);
        const dither = rgb565Matrix[thresholdId];
        image.data[pixel] = Math.min(image.data[pixel] + dither, 0xff);
        image.data[pixel + 1] = Math.min(
            image.data[pixel + 1] + dither,
            0xff
        );
        image.data[pixel + 2] = Math.min(
            image.data[pixel + 2] + dither,
            0xff
        );

        // posterize(2)
        const posterizeN = 2;
        image.data[pixel + 0] = (Math.floor((image.data[pixel + 0] / 255) * (posterizeN - 1)) / (posterizeN - 1)) * 255;
        image.data[pixel + 1] = (Math.floor((image.data[pixel + 1] / 255) * (posterizeN - 1)) / (posterizeN - 1)) * 255;
        image.data[pixel + 2] = (Math.floor((image.data[pixel + 2] / 255) * (posterizeN - 1)) / (posterizeN - 1)) * 255;

        //convert to dymo bitmap

        // Add new empty row.
        if (bitmap.length <= y) {
            const bytes = Math.ceil(image.width / 8);
            bitmap.push(new Array(bytes).fill(0));
        }

        // The image is posterized, so we only have to check the "red" channel.
        const black = (image.data[pixel] < 50);
        if (black) {
            const row = bitmap[y];
            // Set the right bit.
            // Pixels from left to right, but bits from right to left. Translate this.
            const byteIndex = Math.floor(x / 8);
            // Set bits from left to right.
            row[byteIndex] = setBit(row[byteIndex], [7, 6, 5, 4, 3, 2, 1, 0][x % 8]);
        }

    }

    return bitmap;


    // // Convert to black- and white image.
    // // noinspection JSUnresolvedFunction
    // const bwImage = image
    //     .opaque()
    //     .greyscale()
    //     .brightness(0.3)
    //     .dither565()
    //     .posterize(2);

    // // const bitmap: number[][] = [];

    // // Helper method is available to scan a region of the bitmap:
    // // image.scan(x, y, w, h, f); // scan a given region of the bitmap and call the function f on every pixel
    // bwImage.scan(0, 0, bwImage.bitmap.width, bwImage.bitmap.height, (x, y, idx) => {
    //     // x, y is the position of this pixel on the image.
    //     // idx is the position start position of this rgba tuple in the bitmap Buffer.

    //     // Add new empty row.
    //     if (bitmap.length <= y) {
    //         const bytes = Math.ceil(bwImage.bitmap.width / 8);
    //         bitmap.push(new Array(bytes).fill(0));
    //     }

    //     // The image is posterized, so we only have to check the "red" channel.
    //     const black = (bwImage.bitmap.data[idx] < 50);
    //     if (black) {
    //         const row = bitmap[y];
    //         // Set the right bit.
    //         // Pixels from left to right, but bits from right to left. Translate this.
    //         const byteIndex = Math.floor(x / 8);
    //         // Set bits from left to right.
    //         row[byteIndex] = setBit(row[byteIndex], [7, 6, 5, 4, 3, 2, 1, 0][x % 8]);
    //     }
    // }, function () {
    //     resolve(bitmap);
    // });

}

// /**
//  * Convenient function to load image.
//  *
//  * @param {string|Buffer|Jimp} arg Path, URL, Buffer or Jimp image
//  * @return {Promise<Jimp>} Promise which resolves with image when successfully loaded, rejects with error otherwise
//  */
// export function loadImage(arg: string|Buffer|Jimp) {
//     return Jimp.read(arg);
// }

// /**
//  * Because Jimp contains a bug rotating the image, we have to crop te image after rotation to keep the same width and height.
//  *
//  * @param {Jimp} image Image to rotate
//  * @return {Jimp} New rotated image
//  */
// export function rotateImage90DegreesCounterClockwise(image) {

//     if (!image) {
//         throw Error('rotateImage90DegreesCounterClockwise(): parameter image is required');
//     }
//     if (!image.rotate) {
//         throw Error('rotateImage90DegreesCounterClockwise(): parameter image should be of type Jimp image');
//     }

//     // Rotate image for label writer. Needs to be in portrait mode for printing.
//     const clonedImage = image.clone();
//     const previousWidth = clonedImage.bitmap.width;
//     const previousHeight = clonedImage.bitmap.height;

//     clonedImage.rotate(-90, true);

//     // Fix for: when rotated, the width and height of pic gets larger #808
//     // https://github.com/oliver-moran/jimp/issues/808
//     if (clonedImage.bitmap.width !== previousHeight || clonedImage.bitmap.height !== previousWidth) {
//         // Crop to original size.
//         clonedImage.crop(1, 0, previousHeight, previousWidth);
//     }
//     return clonedImage;
// }

