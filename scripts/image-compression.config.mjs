export const imageCompressionConfig = {
  includeExtensions: ['.jpg', '.jpeg', '.png', '.webp', '.avif'],
  targetFormat: 'webp',
  exclude: [
    // Use paths relative to the public directory, for example: 'images/worker.png'
    // 'images/worker.png',
    // /^images\/about\//,
    'images/jiangtian-logo-blue.jpg',
    'images/jiangtian-logo-blue.png',
    'images/jiangtian-logo-no-text.png',
    'images/jiangtian-logo.png'
  ],
  jpeg: {
    quality: 80,
    mozjpeg: true,
  },
  png: {
    quality: 80,
    compressionLevel: 9,
    effort: 8,
    palette: true,
  },
  webp: {
    quality: 80,
    effort: 6,
  },
  avif: {
    quality: 55,
    effort: 6,
  },
};
