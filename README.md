# Image to ASCII Art Converter

## Description

This Node.js project converts digital images into ASCII art. It leverages the [Jimp](https://jimp-dev.github.io/jimp/) library to load, resize, and convert images to grayscale. The project then maps the brightness of each pixel to a set of ASCII characters to produce a text-based representation of the image. The generated ASCII art is saved to a text file, allowing you to easily view or share your creation.

## Features

- **Image Processing:** Loads and resizes images for optimal ASCII conversion.
- **Grayscale Conversion:** Converts images to grayscale to simplify brightness calculations.
- **ASCII Art Generation:** Maps pixel brightness values to a customizable set of ASCII characters.
- **File Output:** Saves the ASCII art to a text file (`output.txt`).
- **ES Module Support:** Built using modern ES module syntax for compatibility with current Node.js versions.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later is recommended)

## Installation

1. **Clone the Repository**  
   Clone or download the project files to your local machine.

2. **Navigate to the Project Directory**  
   Open your terminal and change to the project directory:
   ```bash
   cd path/to/your/project
   ```

3. **Install Dependencies**  
   Run the following command to install the required packages:
   ```bash
   npm install
   ```
   Ensure your `package.json` includes `"type": "module"` if you're using ES module syntax.

## Usage

1. **Prepare Your Image**  
   Place the image you want to convert (e.g., `art.png`) in the project folder.

2. **Update the Image Path**  
   In the `asii.mjs` file, update the image path if needed:
   ```javascript
   imageToAscii('art.png'); // Change 'art.png' to your image path
   ```

3. **Run the Application**  
   Execute the script using Node.js:
   ```bash
   node index.mjs
   ```

4. **View the Result**  
   After running the script, the generated ASCII art will be saved to `output.txt` in your project directory.

## Customization

- **Image Path:** Modify the file name in the `imageToAscii` function call to convert a different image.
- **ASCII Character Set:** Customize the ASCII characters used by editing the `asciiChars` string.
- **Resize Width:** Adjust the width in `image.resize(100, Jimp.AUTO)` to change the resolution of the ASCII output.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [Jimp Documentation](https://jimp-dev.github.io/jimp/) for providing comprehensive guides and API references.
- The open-source community for inspiration and support.
