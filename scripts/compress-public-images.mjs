import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

import { imageCompressionConfig } from './image-compression.config.mjs';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');
const textFileExtensions = new Set(['.html', '.css', '.js', '.mjs', '.json', '.txt', '.xml', '.webmanifest']);

function normalizeRelativePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function getTargetRelativePath(relativePath) {
  const extension = path.extname(relativePath).toLowerCase();

  if (extension === `.${imageCompressionConfig.targetFormat}`) {
    return relativePath;
  }

  return relativePath.slice(0, -extension.length) + `.${imageCompressionConfig.targetFormat}`;
}

function isExcluded(relativePath) {
  return imageCompressionConfig.exclude.some((rule) => {
    if (rule instanceof RegExp) {
      return rule.test(relativePath);
    }

    return normalizeRelativePath(rule) === relativePath;
  });
}

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (imageCompressionConfig.includeExtensions.includes(extension)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertToTargetFormat(inputBuffer) {
  if (imageCompressionConfig.targetFormat !== 'webp') {
    return inputBuffer;
  }

  return sharp(inputBuffer).webp(imageCompressionConfig.webp).toBuffer();
}

async function collectTextFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectTextFiles(fullPath)));
      continue;
    }

    if (textFileExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function updateDistReferences(referenceMap) {
  if (referenceMap.size === 0) {
    return;
  }

  const textFiles = await collectTextFiles(distDir);

  for (const textFile of textFiles) {
    const originalContent = await fs.readFile(textFile, 'utf8');
    let nextContent = originalContent;

    for (const [fromPath, toPath] of referenceMap) {
      nextContent = nextContent.split(fromPath).join(toPath);
    }

    if (nextContent !== originalContent) {
      await fs.writeFile(textFile, nextContent, 'utf8');
    }
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function main() {
  const publicExists = await pathExists(publicDir);
  const distExists = await pathExists(distDir);

  if (!publicExists || !distExists) {
    console.warn('[compress-public-images] Skipped because public or dist directory was not found.');
    return;
  }

  const publicFiles = await collectFiles(publicDir);
  let compressedCount = 0;
  let skippedCount = 0;
  let totalSaved = 0;
  const referenceMap = new Map();
  const filesToDelete = [];

  for (const publicFile of publicFiles) {
    const relativePath = normalizeRelativePath(path.relative(publicDir, publicFile));

    if (isExcluded(relativePath)) {
      skippedCount += 1;
      console.log(`[compress-public-images] Excluded: ${relativePath}`);
      continue;
    }

    const distFile = path.join(distDir, relativePath);
    const distFileExists = await pathExists(distFile);

    if (!distFileExists) {
      skippedCount += 1;
      console.warn(`[compress-public-images] Missing in dist: ${relativePath}`);
      continue;
    }

    const originalBuffer = await fs.readFile(distFile);
    const sourceBuffer = await fs.readFile(publicFile);
    const convertedBuffer = await convertToTargetFormat(sourceBuffer);
    const targetRelativePath = getTargetRelativePath(relativePath);
    const targetDistFile = path.join(distDir, targetRelativePath);

    if (convertedBuffer.length >= originalBuffer.length) {
      skippedCount += 1;
      console.log(`[compress-public-images] Kept original: ${relativePath}`);
      continue;
    }

    await fs.mkdir(path.dirname(targetDistFile), { recursive: true });
    await fs.writeFile(targetDistFile, convertedBuffer);

    if (targetRelativePath !== relativePath) {
      referenceMap.set(relativePath, targetRelativePath);
      filesToDelete.push(distFile);
    }

    compressedCount += 1;
    totalSaved += originalBuffer.length - convertedBuffer.length;

    console.log(
      `[compress-public-images] Converted to ${imageCompressionConfig.targetFormat}: ${relativePath} -> ${targetRelativePath} (${formatBytes(originalBuffer.length)} -> ${formatBytes(convertedBuffer.length)})`,
    );
  }

  await updateDistReferences(referenceMap);

  for (const filePath of filesToDelete) {
    await fs.unlink(filePath);
  }

  console.log(
    `[compress-public-images] Done. Compressed ${compressedCount}, skipped ${skippedCount}, saved ${formatBytes(totalSaved)}.`,
  );
}

main().catch((error) => {
  console.error('[compress-public-images] Failed:', error);
  process.exitCode = 1;
});
