

export const DymoVendorId = 0x0922;

export const ESC = 0x1b;
export const SYN = 0x16;
export const ETB = 0x17;




export class DymoCommands {

    /**
     * To reset the printer after a synchronization error or to recover from an unknown state, the host computer needs
     * to send at least 85 continuous <esc> characters to the printer. This 85-character sequence is required in case the
     * printer is in a mode in which it expects a raster line of data. The 85 <esc> characters exceed the default number
     * of bytes required for a full line of raster data (84); this ensures that the printer looks for an ESC command.
     * https://download.dymo.com/dymo/technical-data-sheets/LW%20450%20Series%20Technical%20Reference.pdf
     */
    static startSequence() {
        return new Array(313).fill(0x1b);
    }

    /** 
     * This command shifts the starting dot position on the print head towards the right,
     * effectively introducing an increased left margin. Each byte represents 8 dots, so a value
     * of four for n would shift an image over 32 dots, or 32 / 300ths of an inch.
     */
    static setDotTab(n: number) {
        // n = starting byte number per line(binary), where:
        // 0 <= n <= 83
        // default value = 0
        return [ESC, 'B'.charCodeAt(0), n];
    }

    /** 
     * This command reduces the number of bytes sent for each line if the right side of the label
     * is to be left blank.
     */
    static setBytesPerLine(bytesPerLine: number) {
        // n = number of bytes per line, where:
        // 0 <= n <= 84
        // default value = 84
        return [ESC, 'D'.charCodeAt(0), bytesPerLine];
    }

    /**
     * This command indicates the maximum distance the printer should travel while searching
     * for the top-of-form hole or mark. Print lines and lines fed both count towards this total so
     * that a value related to the length of the label to be printed can be used.
     * For normal labels with top-of-form marks, the actual distance fed is adjusted once the
     * top–of-form mark is detected. As a result this command is usually set to a value slightly
     * longer than the true label length to ensure that the top-of-form mark is reached before
     * feeding is terminated.
     * 
     * This command can also be used to put the printer into continuous feed mode. Any
     * negative value (0x8000 - 0xFFFF) will place the printer in continuous feed mode.
     * 
     * In continuous feed mode the printer will respond to Form Feed (<esc> E) and Short Form
     * Feed (<esc> G) commands by feeding a few lines out from the current print position. An
     * ESC E command causes the print position to feed to the tear bar and an ESC G causes it
     * to feed far enough so that a reverse feed will not cause lines to overlap.
     */
    static setLabelLength(labelLength: number) {
        const lsb = labelLength & 0xFF;
        const msb = labelLength >> 8 & 0xFF;
        return [0x1b, 'L'.charCodeAt(0), msb, lsb];
    }

    /**
     * This command advances the most recently printed label to a position where it can be torn
     * off. This positioning places the next label beyond the starting print position. Therefore, a
     * reverse-feed will be automatically invoked when printing on the next label. To optimize
     * print speed and eliminate this reverse feeding when printing multiple labels, use the Short
     * Form Feed command (see below) between labels, and the Form Feed command after the
     * last label.
     */
    static formFeed() {
        return [ESC, 'E'.charCodeAt(0)];
    }

    /**
     * This command feeds the next label into print position. The most recently printed label
     * will still be partially inside the printer and cannot be torn off. This command is meant to
     * be used only between labels on a multiple label print job.
     */
    static shortFormFeed() {
        return [ESC, 'G'.charCodeAt(0)];
    }

    /**
     * This command specifies the roll on which the printer output should be imaged. In
     * Automatic Selection mode, the printer assumes that both rolls have the same media, and
     * it will toggle back and forth as rolls become empty.
     * 
     * Twin Turbo printer Only
     * 
     * where roll is:
     * - 30 (ASCII ‘0’) = Automatic selection
     * - 31 (ASCII ‘1’) = Left roll
     * - 32 (ASCII ‘2’) = Right roll
     */
    static selectRoll(roll: number | string) {
        typeof roll === 'string' && (roll = roll.charCodeAt(0));

        return [ESC, 'q'.charCodeAt(0), roll];
    }

    /**
     * Returns a single byte with the following bit meanings (1 = true).
     * Note that printer ready is returned as 03h (Ready and Top of form).
     * 
     * Bit 0: Printer ready, paper in, no jam
     * Bit 1: Top of form
     * Bit 2: Not used
     * Bit 3: Not used
     * Bit 4: Not used
     * Bit 5: No Paper
     * Bit 6: Paper Jam
     * Bit 7: Printer error (jam, invalid sequence, etc.)
     */
    static getPrinterStatus() {
        return [ESC, 'A'.charCodeAt(0)];
    }

    /**
     * This command resets all parameters (Dot Tabs, Line Tabs, Bytes per Line, and so on) to
     * their default values and sets top-of-form as true.
     * Note: This command is acted upon immediately; any data still in the print buffer will be
     * lost.
     */
    static resetPrinter() {
        return [ESC, '@'.charCodeAt(0)];
    }

    /**
     * This command resets all internal parameters to their default values.
     * Note: This command is acted upon when it is received. 
     */
    static restoreDefaultSettings() {
        return [ESC, '*'.charCodeAt(0)];
    }

    /**
     * This command skips over the next “n” lines on the label. The distance of a “line” is
     * dependant on the current resolution set for the printer by the ESC h / ESC i commands.
     * Note: This command is unusual because it requires the “1” prior to the value for the
     * number of lines to skip.
     */
    static skipLines(numLinesToSkip: number) {
        return [ESC, 'f'.charCodeAt(0), 1, numLinesToSkip];
    }

    /**
     * This command returns the printer model and firmware version number as an ASCII
     * string. The information is returned as a 10- character ASCII string in the following format.
     * Bytes 0-6: the 7-digit model number (e.g. “93089”)
     * Byte 7: a lowercase letter (commonly “v”)
     * Bytes 8-9: the two-digit firmware version (e.g. “0N”)
     * Example: 98039v0K
     */
    static getRevision() {
        return [ESC, 'V'.charCodeAt(0)];
    }

    /**
     * This command sends a raster line of print data to the printer.
     */
    static transferPrintData(low: number, high: number) {
        return [SYN, low, high];
    }

    /**
     * This command sends compressed raster line images. This command is generally not
     * needed due to the high bandwidth of USB communications, but it might provide some
     * nominal increase in performance.
     */
    static transferCompressedPrintData(low: number, high: number) {
        return [ETB, low, high];
    }

    /**
     * This command instructs the printer to print in 300 x 300 dpi Text Quality mode. This is
     * the default, high speed printing mode.
     */
    static textSpeedMode() {
        return [ESC, 'h'.charCodeAt(0)];
    }

    /**
     * This command instructs the printer to print in 300 x 600 dpi Barcode and Graphics mode.
     * This results in lower speed but greater positional and sizing accuracy of the print
     * elements.
     */
    static barcodeGraphicsSpeedMode() {
        return [ESC, 'i'.charCodeAt(0)];
    }

    /**
     * This command sets the strobe time of the printer to 100% of its standard duty cycle.
     */
    static densityLight() {
        return [ESC, 'c'.charCodeAt(0)];
    }

    /**
     * This command sets the strobe time of the printer to 100% of its standard duty cycle.
     */
    static densityMedium() {
        return [ESC, 'd'.charCodeAt(0)];
    }

    /**
     * This command sets the strobe time of the printer to 100% of its standard duty cycle.
     */
    static densityNormal() {
        return [ESC, 'e'.charCodeAt(0)];
    }

    /**
     * This command sets the strobe time of the printer to 100% of its standard duty cycle.
     */
    static densityDark() {
        return [ESC, 'g'.charCodeAt(0)];
    }
}

/**
 * 
 * @param labelLineWidth The width the print head has to print, number of dots (300 dots per inch)
 * @param labelLength Number of lines to print (300 lines per inch)
 * @returns 
 */
export function dymoInit(labelLineWidthPixels: number, labelLengthPixels: number): number[] {

    const labelLineWidthBytes = Math.ceil(labelLineWidthPixels / 8);

    return [
        ...DymoCommands.startSequence(),
        ...DymoCommands.resetPrinter(),
        ...DymoCommands.restoreDefaultSettings(),
        ...DymoCommands.setDotTab(0), //0 means no left offset
        ...DymoCommands.setBytesPerLine(labelLineWidthBytes),
        ...DymoCommands.setLabelLength(labelLengthPixels),
        ...DymoCommands.textSpeedMode(),
        ...DymoCommands.densityNormal(),
    ];

}

export function printBitmap(imageBuffer: Uint8ClampedArray[], printCount = 1): BufferSource {
    if (!imageBuffer || imageBuffer.length === 0) {
        throw Error('Empty imageBuffer, cannot print');
    }
    if (printCount <= 0) {
        throw Error(`PrintCount cannot be 0 or a negative number: ${printCount}`);
    }


    // Determine the label dimensions based on the bitmap image buffer.
    const labelLineWidth = imageBuffer[0].length * 8;
    const labelLength = imageBuffer.length / imageBuffer.length;

    let dataToSend = [...dymoInit(labelLineWidth, labelLength)];

    for (let count = 1; count <= printCount; count++) {
        // Convert bitmap array to printer bitmap.
        for (let i = 0; i < imageBuffer.length; i++) {
            dataToSend = dataToSend.concat([SYN, ...imageBuffer[i]]);
        }
        if (count === printCount) {
            // End print job.
            dataToSend = dataToSend.concat(DymoCommands.formFeed());
        } else {
            dataToSend = dataToSend.concat(DymoCommands.shortFormFeed());
        }
    }

    return new Uint8Array(dataToSend);
}