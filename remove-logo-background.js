const sharp = require('sharp');
const path = require('path');

const logoPath = path.join(__dirname, 'public', 'logo.png');

async function removeWhiteBackground() {
  console.log('Removing white background from logo...\n');

  try {
    await sharp(logoPath)
      .flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .threshold(240) // Adjust threshold to remove white/light colors
      .negate() // Invert to get the logo
      .png({ quality: 100, compressionLevel: 9 })
      .toFile(logoPath + '.temp');

    // Better approach: use removeAlpha and transparent background
    await sharp(logoPath)
      .removeAlpha()
      .threshold(240, { grayscale: false })
      .negate()
      .toFile(logoPath + '.step1');

    // Now add transparency
    const metadata = await sharp(logoPath).metadata();
    
    await sharp(logoPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true })
      .then(({ data, info }) => {
        // Process pixels to make white transparent
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // If pixel is white or near-white, make it transparent
          if (r > 240 && g > 240 && b > 240) {
            data[i + 3] = 0; // Set alpha to 0 (transparent)
          }
        }
        
        return sharp(data, {
          raw: {
            width: info.width,
            height: info.height,
            channels: 4
          }
        })
        .png({ quality: 100 })
        .toFile(logoPath + '.transparent');
      });

    // Use the simpler sharp method with removeBackground (if available)
    // Or use the processed transparent version
    const fs = require('fs');
    fs.unlinkSync(logoPath);
    fs.renameSync(logoPath + '.transparent', logoPath);
    
    // Cleanup
    if (fs.existsSync(logoPath + '.temp')) fs.unlinkSync(logoPath + '.temp');
    if (fs.existsSync(logoPath + '.step1')) fs.unlinkSync(logoPath + '.step1');

    console.log('✅ Logo background removed successfully!');
    console.log('📍 Location: public/logo.png');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

removeWhiteBackground();
