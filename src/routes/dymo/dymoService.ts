
import { Buffer } from 'buffer'

// import { convertImageToBitmap, rotateImage90DegreesCounterClockwise } from './imageService';



// Technical specifications Dymo LabelWriter 450.
// https://download.dymo.com/dymo/user-guides/LabelWriter/LWSE450/LWSE450_TechnicalReference.pdf

// Returns the printer to its power-up condition, clears all buffers, and resets all character attributes.
// The ESC @ command is the same as the ESC * command.
const CMD_RESET = Buffer.from([0x1b, '*'.charCodeAt(0)]);
// Feed to Tear Position. This command advances the most recently printed label to a position where it can be torn off.
const CMD_FULL_FORM_FEED = Buffer.from([0x1b, 'E'.charCodeAt(0)]);
// Feed to Print Head. Use this command when printing multiple labels.
const CMD_SHORT_FORM_FEED = Buffer.from([0x1b, 'G'.charCodeAt(0)]);
const CMD_TEXT_SPEED_MODE = Buffer.from([0x1b, 'h'.charCodeAt(0)]);
const CMD_DENSITY_NORMAL = Buffer.from([0x1b, 'e'.charCodeAt(0)]);
const CMD_NO_DOT_TAB = Buffer.from([0x1b, 'B'.charCodeAt(0), 0]);

// To reset the printer after a synchronization error or to recover from an unknown state, the host computer needs
// to send at least 85 continuous <esc> characters to the printer. This 85-character sequence is required in case the
// printer is in a mode in which it expects a raster line of data. The 85 <esc> characters exceed the default number
// of bytes required for a full line of raster data (84); this ensures that the printer looks for an ESC command.
// https://download.dymo.com/dymo/technical-data-sheets/LW%20450%20Series%20Technical%20Reference.pdf
const CMD_START_ESC = Buffer.from(new Array(313).fill(0x1b));


export class DymoService {

    /**
     * @private
     *
     * Print the bitmap image buffer.
     * The size of the image should match the size of the label.
     *
     * @param {number[][]} imageBuffer Bitmap image array, lines and rows in portrait orientation
     * @param {number} [printCount] Number of prints
     * @return {Buffer} to send to the printer
     */
    static printBitmap(imageBuffer: number[][], printCount = 1): Buffer {
        if (!imageBuffer || imageBuffer.length === 0) {
            throw Error('Empty imageBuffer, cannot print');
        }
        if (printCount <= 0) {
            throw Error(`PrintCount cannot be 0 or a negative number: ${printCount}`);
        }

        // Determine the label dimensions based on the bitmap image buffer.
        const labelLineWidth = imageBuffer[0].length * 8;
        const labelLength = imageBuffer.length;
        const chunks = DymoService.init(labelLineWidth, labelLength);

        for (let count = 1; count <= printCount; count++) {
            // Convert bitmap array to printer bitmap.
            for (let i = 0; i < imageBuffer.length; i++) {
                chunks.push(Buffer.from([0x16, ...imageBuffer[i]]));
            }
            if (count === printCount) {
                // End print job.
                chunks.push(CMD_FULL_FORM_FEED);
            } else {
                chunks.push(CMD_SHORT_FORM_FEED);
            }
        }

        return Buffer.concat(chunks);
    }

    /**
     * @private
     *
     * Initialize the buffer and the printer configuration.
     *
     * @param {number} labelLineWidth The width the print head has to print, number of dots (300 dots per inch)
     * @param {number} labelLength Number of lines to print (300 lines per inch)
     */
    static init(labelLineWidth: number, labelLength: number) {

        const chunks:Buffer[] = [];

        // To reset the printer after a synchronization error or to recover from an unknown state, the host computer
        // needs to send at least 85 continuous <esc> characters to the printer.
        chunks.push(CMD_START_ESC);
        chunks.push(CMD_RESET);

        // <esc> B n Set Dot Tab
        // This command shifts the starting dot position on the print head towards the right
        chunks.push(CMD_NO_DOT_TAB);

        // <esc> D n Set Bytes per Line
        // This command reduces the number of bytes sent for each line.
        // E.g. 332 pixels (will be 336 dots, 42 * 8).
        const labelLineWidthBytes = Math.ceil(labelLineWidth / 8);
        chunks.push(Buffer.from([0x1b, 'D'.charCodeAt(0), labelLineWidthBytes]));

        // At power up, the label length variable is set to a default value of 3058 (in 300ths of an inch units),
        // which corresponds to approximately 10.2 inches. The Set Label Length command sequence (<esc> L nl n2)
        // allows the host software to change the label length variable to accommodate longer lengths.

        // <esc> L nl n2 Set Label Length
        // This command indicates the maximum distance the printer should travel while searching for the
        // top-of-form hole or mark.
        // E.g. 1052 pixels
        const lsb = labelLength & 0xFF;
        const msb = labelLength >> 8 & 0xFF;
        chunks.push(Buffer.from([0x1b, 'L'.charCodeAt(0), msb, lsb]));

        // <esc> h Text Speed Mode (300x300 dpi)
        // This command instructs the printer to print in 300 x 300 dpi Text Quality mode.
        // This is the default, high speed printing mode.
        chunks.push(CMD_TEXT_SPEED_MODE);

        // <esc> e Set Print Density Normal
        // This command sets the strobe time of the printer to 100% of its standard duty cycle.
        chunks.push(CMD_DENSITY_NORMAL);

        return chunks;
    }

}



