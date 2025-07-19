# lz4-stream-buffer

Async LZ4 compression and decompression for buffers and files using Node.js.

This package provides a very fast and simple way to compress and decompress data using LZ4. It uses the native [@pierrec/node-lz4](https://github.com/pierrec/node-lz4) module for maximum speed.

## Features

- Asynchronous API with Promise support
- Compress Buffer data directly to .lz4 files
- Decompress .lz4 files to Buffer
- Powered by the fast native `@pierrec/node-lz4` dependency

## Installation

```bash
npm install lz4-stream-buffer
```

## Usage

```js
const { lz4Compress, lz4Decompress } = require('lz4-stream-buffer');

// Compress a buffer to a file
const buffer = Buffer.from('Hello LZ4!');
await lz4Compress(buffer, 'output.lz4');

// Decompress a file to a buffer
const originalBuffer = await lz4Decompress('output.lz4');
console.log(originalBuffer.toString()); // 'Hello LZ4!'
```

## License

MIT