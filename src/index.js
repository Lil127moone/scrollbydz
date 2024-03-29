// File: image-processing-utils.js

const Jimp = require('jimp');

/**
 * Resize an image.
 * @param {string} inputPath - The path to the input image.
 * @param {string} outputPath - The path to save the resized image.
 * @param {number} width - The target width of the resized image.
 * @param {number} height - The target height of the resized image.
 */
async function resizeImage(inputPath, outputPath, width, height) {
  try {
    const image = await Jimp.read(inputPath);
    await image.resize(width, height).write(outputPath);
    console.log('Image resized successfully.');
  } catch (error) {
    console.error('Error resizing image:', error.message);
  }
}

/**
 * Crop an image.
 * @param {string} inputPath - The path to the input image.
 * @param {string} outputPath - The path to save the cropped image.
 * @param {number} x - The x-coordinate of the top-left corner of the crop area.
 * @param {number} y - The y-coordinate of the top-left corner of the crop area.
 * @param {number} width - The width of the crop area.
 * @param {number} height - The height of the crop area.
 */
async function cropImage(inputPath, outputPath, x, y, width, height) {
  try {
    const image = await Jimp.read(inputPath);
    await image.crop(x, y, width, height).write(outputPath);
    console.log('Image cropped successfully.');
  } catch (error) {
    console.error('Error cropping image:', error.message);
  }
}

module.exports = {
  resizeImage,
  cropImage,
};
