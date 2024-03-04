import { test, expect } from "vitest";


test("triangles", () => {
  // 672 max points across width of label maker
  // 300 dpi
  const dotsPerInch = 300;
  const labelLengthInches = 1/12;
  const labelWidthInches = 1/12;

  const labelLengthPixels = 10; //labelLengthInches * dotsPerInch;
  const labelWidthPixels = labelWidthInches * dotsPerInch;

  const bitsPerByte = 8;

  const totalDataSize = labelLengthPixels * labelWidthPixels;

  var data = new ArrayBuffer(totalDataSize);
  var dataView = new Uint8Array(data, 0, totalDataSize);

  for(let row = 0; row < labelLengthPixels; row++){
    for(let col = 0; col < labelWidthPixels; col++) {     
      dataView[row * labelWidthPixels + col] = row > col ? 0 : 1;
    }
    // console.log(`row  ${row.toString().padStart(2)} =`, Array.from(new Uint8Array(data, row * labelWidthPixels, labelWidthPixels-1)).join(','));
  }

  // bitpack
  const packedLabelWidthBytes = Math.ceil(labelWidthPixels / bitsPerByte);
  const packedDataSize = labelLengthPixels * packedLabelWidthBytes;

  var packedData = new ArrayBuffer(packedDataSize);
  var packedDataView = new Uint8Array(packedData, 0, packedDataSize);

  for (let row = 0; row < labelLengthPixels; row++) {
    console.log(`row  ${row.toString().padStart(2)} =`, Array.from(new Uint8Array(data, row * labelWidthPixels, labelWidthPixels - 1)).join(','));
    for (let col = 0; col < packedLabelWidthBytes; col++) {
      const packedIdx = row * packedLabelWidthBytes + col;
      const idx = row * labelWidthPixels + col * bitsPerByte;      
      packedDataView[packedIdx] = 
        dataView[idx + 7] << 0 |
        dataView[idx + 6] << 1 |
        dataView[idx + 5] << 2 |
        dataView[idx + 4] << 3 |
        dataView[idx + 3] << 4 |
        dataView[idx + 2] << 5 |
        dataView[idx + 1] << 6 |
        dataView[idx + 0] << 7;
    }
     console.log(`prow ${row.toString().padStart(2)} =`, Array.from(new Uint8Array(packedData, row * packedLabelWidthBytes, packedLabelWidthBytes - 1)).join(','));
     console.log('');
     
  }

});

test("pack bits", () => {
  const data = new Uint8Array([1, 0, 1, 0, 1, 0, 1, 0]);
  const packedData = new Uint8Array(1);
  packedData[0] = 
    data[7] << 0 |
    data[6] << 1 |
    data[5] << 2 |
    data[4] << 3 |
    data[3] << 4 |
    data[2] << 5 |
    data[1] << 6 |
    data[0] << 7;
  expect(packedData[0]).toBe(0b10101010);
})

test("outline", () => {
  const dotsPerInch = 300;
  const bitsPerByte = 8;

  const labelLengthInches = 1 / 12;
  const labelWidthInches = 1 / 12;

  const labelLengthPixels = labelLengthInches * dotsPerInch;
  const labelWidthPixels = 8*4; //labelWidthInches * dotsPerInch;

  const packedLabelWidthBytes = Math.ceil(labelWidthPixels / bitsPerByte);
  const packedDataSize = labelLengthPixels * packedLabelWidthBytes;

  var packedData = new ArrayBuffer(packedDataSize);
  var packedDataView = new Uint8Array(packedData, 0, packedDataSize);

  for (let row = 0; row < labelLengthPixels; row++) {
    for (let col = 0; col < packedLabelWidthBytes; col++) {
      const packedIdx = row * packedLabelWidthBytes + col;
      // console.log('packedIdx', packedIdx, 'row', row, 'col', col);
      
      console.log('col', col, packedLabelWidthBytes - 1, col == packedLabelWidthBytes - 1, packedIdx);
      
      if (row == 0 || row == labelLengthPixels - 1) {
        packedDataView[packedIdx] = 0b11111111;
      } else if (col == 0) {
        packedDataView[packedIdx] = 0b10000000;
      } else if (col == packedLabelWidthBytes-1) {
        packedDataView[packedIdx] = 0b00000001;
      }else {
        packedDataView[packedIdx] = 0b0000000;
      }
      
    }
    console.log(`prow ${row.toString().padStart(2)} =`, Array.from(new Uint8Array(packedData, row * packedLabelWidthBytes, packedLabelWidthBytes)).join(','));
  }
  console.log('data', packedDataView.join(','));
  
});