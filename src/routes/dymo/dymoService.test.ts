import { test, expect } from "vitest";
import { DymoService } from "./dymoService";

test("print", async () => {
  // Mock image data
  const image: number[][] = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ];

  // Mock dependencies
  const rotateImage90DegreesCounterClockwise = jest.fn().mockReturnValue(image);
  const convertImageToBitmap = jest.fn().mockResolvedValue(Buffer.from("bitmapImageBuffer"));
  const printBitmap = jest.fn().mockResolvedValue("Print successful");


  // Call the print method
    const result = await DymoService.print(image, 2);

  // Assertions
  expect(rotateImage90DegreesCounterClockwise).toHaveBeenCalledWith(image);
  expect(convertImageToBitmap).toHaveBeenCalledWith(image);
  expect(printBitmap).toHaveBeenCalledWith(Buffer.from("bitmapImageBuffer"), 2);
  expect(result).toBe("Print successful");
});