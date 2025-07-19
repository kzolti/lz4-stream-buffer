
const fs = require('fs');
const { pipeline } = require('stream');
const { createEncoderStream, createDecoderStream } = require('lz4');
const { promisify } = require('util');

const pipe = promisify(pipeline);

const { PassThrough } = require('stream');

async function lz4Compress(buffer, outFile) {
  try {
    const passThrough = new PassThrough();
    passThrough.end(buffer); 
    const outStream = fs.createWriteStream(outFile);
    await pipe(passThrough, createEncoderStream(), outStream);
  } catch (error) {
    console.error("Hiba a tömörítés során:", error);
    try { 
      await access(outFile, constants.F_OK);
      await fs.promises.unlink(outFile); 
    } catch (_) { }
    throw error; 
  }
}

async function lz4Decompress(filename) {
  try {
    const inputStream = fs.createReadStream(filename);
    const output = [];
    const decoder = createDecoderStream();
    decoder.on('data', chunk => output.push(chunk));
    await pipe(inputStream, decoder);
    return Buffer.concat(output); 
  } catch (error) {
    console.error("Hiba a visszafejtés során:", error);
    throw error; 
  }
}



// teszt Futtatás

(async () => {
  const data = await fs.promises.readFile("test.txt");
  await lz4Compress(data, "test.lz4");
  const output = await lz4Decompress("test.lz4");
  await fs.promises.writeFile("test-restored.txt", output);
  console.log("teszt ok");
})();

module.exports = { lz4Compress, lz4Decompress };