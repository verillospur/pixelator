// 
//  app.js
//  ~/pixelator/
// 
//  created:    2021-05-14
// 
//  intention is that this is the core engine - to take over from ~/app.js
// 
'use strict';

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

		let img_data = [];

		let rb = false,
			gb = false,
			bb = false,
			yb = false;

		// weight red
		if (WEIGHT_RED) {
			const red_weight_influ = require('./red-influencer');
			img_data = red_weight_influ.influencer();
		}

		// weight green
		if (WEIGHT_GREEN) {
			const green_weight_influ = require('./green-influencer');
			img_data = green_weight_influ.influencer();
		}

		// weight blue
		if (WEIGHT_BLUE) {
			const blue_weight_influ = require('./blue-influencer');
			img_data = blue_weight_influ.influencer();
		}

		// weight yellow
		if (WEIGHT_YELLLOW) {
			const yellow_weight_influ = require('./yellow-influencer');
			img_data = yellow_weight_influ.influencer();
		}

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

		imageData.data[i + 0] = img_data.r;       // R
		imageData.data[i + 1] = img_data.g;       // G
		imageData.data[i + 2] = img_data.b;       // B
		imageData.data[i + 3] = img_data.a;       // A

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
