// 
//  app.js
//  ~/
// 
//  created:    2021-05-08
// 
//  app entry point
// 
'use strict';


// get framework stuff
const log = require('../log');
const logLevels = require('../log/log-levels');
const config = require('../config')
const framework = require('../framework');

// get image attribs from config
const IMAGE_WIDTH = config.pixelator.IMAGE_WIDTH;
const IMAGE_HEIGHT = config.pixelator.IMAGE_HEIGHT;

// create a pixel map - just an array with an element per pixel
const newPixelObj = require('./new-pixel-obj');
const pixel_map = require('./pixel-map').newmap(IMAGE_WIDTH, IMAGE_HEIGHT);
for (let x = 0; y < IMAGE_WIDTH - 1; x++) {
	for (let y = 0; x < IMAGE_HEIGHT - 1; y++) {
		const pixel = newPixelObj(x, y, IMAGE_WIDTH, IMAGE_HEIGHT);
		pixel_map.addNext(pixel);
	}
}

process.exit(0);


const pixapp = require('./pixelator/app');
pixapp();

process.exit(0);

/*

const log = require('./log');
const logLevels = require('./log/log-levels');
const config = require('./config')

const IMAGE_WIDTH = config.pixelator.IMAGE_WIDTH;
const IMAGE_HEIGHT = config.pixelator.IMAGE_HEIGHT;
const WEIGHT_RED = config.pixelator.WEIGHT_RED;
const WEIGHT_GREEN = config.pixelator.WEIGHT_GREEN;
const WEIGHT_BLUE = config.pixelator.WEIGHT_BLUE;
const WEIGHT_YELLLOW = config.pixelator.WEIGHT_YELLLOW;

const { startOfWeek } = require('date-fns');
const { randomInt } = require('./framework/randomiser');

// weirdness? create the app then run it...? guess so...
const app = () => {

	log.log("Calling app()", logLevels.Debug);

	const createCanvas = require('canvas').createCanvas;
	const loadImage = require('canvas').loadImage;
	const canvas = createCanvas(IMAGE_WIDTH, IMAGE_HEIGHT);
	const ctx = canvas.getContext('2d');

	const stats = {
		reds: 0,
		greens: 0,
		blues: 0,
		yellows: 0,
		report: () => {
			return `Reds: =${stats.reds};\n`
				+ `Greens: =${stats.greens};\n`
				+ `Blues: =${stats.blues};\n`
				+ `Yellows: =${stats.yellows};`;
		}
	};

	const rndInt = require('./framework/randomiser').randomInt;
	const rndBool = require('./framework/randomiser').randomBool;

	// // do pixel data
	//const imageData = ctx.createImageData(IMAGE_WIDTH, IMAGE_WIDTH);
	const imageData = ctx.getImageData(0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
	for (let i = 0; i < imageData.data.length; i += 4) {

		// const r = rndInt(0, 255);
		// const g = rndInt(0, 255);
		// const b = rndInt(0, 255);
		// const a = rndInt(150, 255);

		let rb = false,
			gb = false,
			bb = false,
			yb = false;

		// weight red
		if (WEIGHT_RED) {
			rb = rndBool();
			if (!rb) {
				gb = rndBool();
				if (!gb) {
					bb = rndBool();
					if (!bb) yb = true;
				}
			}
		}

		// weight green
		if (WEIGHT_GREEN) {
			gb = rndBool();
			if (!gb) {
				bb = rndBool();
				if (!bb) {
					rb = rndBool();
					if (!rb) yb = true;
				}
			}
		}

		// weight blue
		if (WEIGHT_BLUE) {
			bb = rndBool();
			if (!bb) {
				rb = rndBool();
				if (!rb) {
					gb = true;
					if (!gb) yb = true;
				}
			}
		}

		// weight yellow
		if (WEIGHT_YELLLOW) {
			yb = rndBool();
			if (!yb) {
				rb = rndBool();
				if (!rb) {
					gb = rndBool();
					if (!gb) bb = true;
				}
			}
		}

		// const rb = rndBool();
		// const gb = rndBool();
		// const bb = rndBool();

		// declare colour vars
		let g = 0;
		let b = 0;
		let r = 0;

		// yellow?
		if (yb) {
			r = 255;
			g = 255;
			b = 0;
		}
		else {
			r = rb ? 255 : 0;
			g = gb ? 255 : 0;
			b = bb ? 255 : 0;
		}
		const a = 255;

		imageData.data[i + 0] = r;       // R
		imageData.data[i + 1] = g;       // G
		imageData.data[i + 2] = b;       // B
		imageData.data[i + 3] = a;       // A

		// record stats
		if (rb) stats.reds += 1;
		if (gb) stats.greens += 1;
		if (bb) stats.blues += 1;
		if (yb) stats.yellows += 1;

		// looky looky - let's not log this. takes forver.
		// const ma = [
		// 	  imageData.data[i + 0]
		// 	, imageData.data[i + 1]
		// 	, imageData.data[i + 2]
		// 	, imageData.data[i + 3]
		// ]
		//
		//log.log(`imageData{${i}}:${ma}`);
	}
	ctx.putImageData(imageData, 0, 0);

	// render output file
	const createOutput = require('./output-writer.js');
	createOutput.createOutput(canvas, stats, IMAGE_WIDTH, IMAGE_HEIGHT);
};

// exports
module.exports = app;

// run the app
// const p = require('prompt');
// p.start();
// p.get(
// 	(['Run the app?'],
// 	(err, result) => )
// );
app();

*/