/// <reference types="node" />

/**
 * Compresses a Buffer and writes the compressed data to a file.
 * @param buffer - The input data to compress.
 * @param outFile - The path of the output .lz4 file.
 * @returns A Promise that resolves when the file is written.
 */
export function lz4Compress(buffer: Buffer, outFile: string): Promise<void>;

/**
 * Decompresses an LZ4-compressed file and returns its original content as a Buffer.
 * @param filename - The path to the .lz4 file.
 * @returns A Promise that resolves with the decompressed data as Buffer.
 */
export function lz4Decompress(filename: string): Promise<Buffer>;
