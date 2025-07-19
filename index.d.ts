/// <reference types="node" />

/**
 * Compresses a data and return the compressed content as a Buffer.
 * @param data - The input data to compress.
 * @returns A Promise that resolves with the compressed data as Buffer.
 */
export function lz4Compress(data: Buffer): Promise<Buffer>;

/**
 * Decompresses an LZ4-compressed buffer and returns its original content as a Buffer.
 * @param compressed - The data to the compressed Buffer.
 * @returns A Promise that resolves with the decompressed data as Buffer.
 */
export function lz4Decompress(compressed: Buffer): Promise<Buffer>;
