
const fs = require('fs');
const { pipeline } = require('stream');
const { createEncoderStream, createDecoderStream } = require('lz4');
const { promisify } = require('util');

const pipe = promisify(pipeline);

const { PassThrough } = require('stream');

async function lz4Compress(data) {
  try {
    const input = new PassThrough();
    input.end(data);
    const output = [];
    const encoder = createEncoderStream();
    encoder.on('data', chunk => output.push(chunk));
    await pipe(input, encoder);
    return Buffer.concat(output);
  } catch (error) {
    console.error("uvUHO6YW lz4-stream-buffer encoding error:", error);
    throw error;
  }
}

async function lz4Decompress(compressed) {
  try {
    const input = new PassThrough();
    input.end(compressed);
    const output = [];
    const decoder = createDecoderStream();
    decoder.on('data', chunk => output.push(chunk));
    await pipe(input, decoder);
    return Buffer.concat(output);
  } catch (error) {
    console.error("RaNhTdDc lz4-stream-buffer decoding error:", error);
    throw error;
  }
}

// test
// (async () => {
//   const original="Hello LZ4!";
//   const compressed = await lz4Compress(Buffer.from(original));
//   console.log("Compressed data:", compressed);
//   const decompressed=await lz4Decompress(compressed);
//   console.log("Decompressed data:", decompressed.toString());
//   if (decompressed.toString() === original) {
//     console.log("Test successful!");
//   }
//   else {
//     console.error("Decompression failed!");
//   }
// })();

module.exports = { lz4Compress, lz4Decompress };