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
        // if the pixel is fully transparent, convert the color to white
        const black = image.data[pixel + 3] === 255 && (image.data[pixel] < 50);
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
}
