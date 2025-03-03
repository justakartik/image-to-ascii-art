// meow
import Jimp from 'jimp';
import { promises as fs } from 'fs';

// Define ASCII characters from darkest to lightest.
const asciiChars = '@%#*+=-:. ';

async function imageToAscii(imagePath) {
  try {
    // Load and resize the image for a manageable output.
    const image = await Jimp.read(imagePath);
    image.resize(100, Jimp.AUTO); // Adjust width as needed

    let ascii = '';

    for (let y = 0; y < image.bitmap.height; y++) {
      let line = '';
      for (let x = 0; x < image.bitmap.width; x++) {
        // Get pixel color and convert to RGBA.
        const pixelColor = image.getPixelColor(x, y);
        const { r, g, b } = Jimp.intToRGBA(pixelColor);

        // Calculate brightness using the luminosity formula.
        const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

        // Map brightness to an ASCII character.
        const charIndex = Math.floor((brightness / 255) * (asciiChars.length - 1));
        line += asciiChars[charIndex];
      }
      ascii += line + '\n';
    }
    
    // Write the ASCII art to a text file
    await fs.writeFile('output.txt', ascii);
    console.log('ASCII art generated and saved to output.txt');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

// Run the function with an example image.
imageToAscii('image.png'); // Change 'art.png' to your image path
