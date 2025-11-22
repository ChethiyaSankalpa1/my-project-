const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// Images to optimize (large files)
const imagesToOptimize = [
  'about.jpg',
  'bac1.jpg',
  'bac2.jpg',
  'bac3.jpg',
  'beach.jpg',
  'logo.png',
  'footer.jpg',
  'ninearch.jpg',
  'pasikuda.jpg',
  'riverston.jpg',
  'tea.jpg',
  'templeofthetooth.jpg',
  'mountain.jpg',
  'anuradhapura.jpg',
  'polonnaruwa.jpg',
  'portcity.jpg',
  'Nallur.jpg',
  'beach2.jpg'
];

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  for (const imageName of imagesToOptimize) {
    const imagePath = path.join(publicDir, imageName);
    
    if (!fs.existsSync(imagePath)) {
      console.log(`⏭️  Skipping ${imageName} - file not found`);
      continue;
    }

    const stats = fs.statSync(imagePath);
    const originalSize = (stats.size / (1024 * 1024)).toFixed(2);

    try {
      // Backup original
      const backupPath = imagePath + '.backup';
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(imagePath, backupPath);
      }

      // Optimize based on file type
      const ext = path.extname(imageName).toLowerCase();
      
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(imagePath)
          .resize(1920, 1080, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .jpeg({
            quality: 80,
            progressive: true,
            mozjpeg: true
          })
          .toFile(imagePath + '.tmp');
      } else if (ext === '.png') {
        await sharp(imagePath)
          .resize(1920, 1080, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .png({
            quality: 80,
            compressionLevel: 9
          })
          .toFile(imagePath + '.tmp');
      } else if (ext === '.webp') {
        await sharp(imagePath)
          .resize(1920, 1080, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({
            quality: 80
          })
          .toFile(imagePath + '.tmp');
      }

      // Replace original with optimized
      fs.unlinkSync(imagePath);
      fs.renameSync(imagePath + '.tmp', imagePath);

      const newStats = fs.statSync(imagePath);
      const newSize = (newStats.size / (1024 * 1024)).toFixed(2);
      const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);

      console.log(`✅ ${imageName}: ${originalSize}MB → ${newSize}MB (${reduction}% reduction)`);
    } catch (error) {
      console.error(`❌ Error optimizing ${imageName}:`, error.message);
    }
  }

  console.log('\n✨ Image optimization complete!');
}

optimizeImages().catch(console.error);
