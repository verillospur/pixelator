// 
//  app.js
//  ~/pixelator/
// 
//  created:    2021-05-14
// 
//  intention is that this is the core engine - to take over from ~/app.js
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
for (let x = 0; x < IMAGE_WIDTH - 1; x++) {
	for (let y = 0; y < IMAGE_HEIGHT - 1; y++) {
		const pixel = newPixelObj(x, y, IMAGE_WIDTH, IMAGE_HEIGHT);
		pixel_map.addNext(pixel);
	}
}


// get processing instructions
const WEIGHT_RED = config.pixelator.WEIGHT_RED;
const WEIGHT_GREEN = config.pixelator.WEIGHT_GREEN;
const WEIGHT_BLUE = config.pixelator.WEIGHT_BLUE;
const WEIGHT_YELLLOW = config.pixelator.WEIGHT_YELLLOW;

const process_pixels = (pixel_map) => {

	// config for rgb - percentage likelihood for each
	const red_percent = 40;
	const green_percent = 20;
	const blue_percent = 20;
	const yellow_percent = 20;
	const rgb_config = [
		{ colour: 'r', pc: red_percent },
		{ colour: 'g', pc: green_percent },
		{ colour: 'b', pc: blue_percent },
		{ colour: 'y', pc: yellow_percent },
	];

	// run pixels through initial processing
	const randomiser = framework.randomiser;
	const spin_result_n = randomiser.randomInt(1, 100);
	let spin_result;
	for (const cfg in rgb_config) {
		if (
			spin_result_n >= rgb_config[cfg].pc
			&& spin_result_n < spin_result_n.pc) {
				//
				// found it. The spin result lies in the... look at it like this:
				//
				//		Here, red % is 30, green % is 20 and blue % is 50.
				//		If the randomiser lands on 44, for example, then 
				//		we get green.
				//
				// 		| 0 - 30 | 31 - 50 | 51 - 100 |
				// 		| red    | green   | blue     |
				//
				//		of course there's fucking yellow there as well, just to
				//		be a wank.
				//
				spin_result = cfg;
				break;
		}
	}
	switch (spin_result.colour) {
		case 'r':
			console.log('Red.');
			break;
		case 'g':
			console.log('Green.');
			break;
		case 'b':
			console.log('Blue.');
			break;
		case 'y':
			console.log('Yellow.');
			break;

		default:
			console.log('** NONE !! ** ');
			break;
	}


	// load influencers


};


const app = () => {

	log.log("Calling app()", logLevels.Debug);

	/* 
	this fn (loadImage) is used for loading image files for reading pixel data 
	or drawing into canvases or zooming or whatever.
	*/
	// const loadImage = require('canvas').loadImage;

	const createCanvas = require('canvas').createCanvas;
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

	// get image data - need to get the pixel count etc
	const imageData = ctx.getImageData(0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

	// do pixel data
	const imgdata = [];
	for (let i = 0; i < imageData.data.length; i += 4) {

		// return value from influencers
		let img_data = {};

		// weight red
		if (WEIGHT_RED) {
			const red_weight_influ = require('./influencers/red-influencer');
			img_data = red_weight_influ.influencer();
		}

		// weight green
		if (WEIGHT_GREEN) {
			const green_weight_influ = require('./influencers/green-influencer');
			img_data = green_weight_influ.influencer();
		}

		// weight blue
		if (WEIGHT_BLUE) {
			const blue_weight_influ = require('./influencers/blue-influencer');
			img_data = blue_weight_influ.influencer();
		}

		// weight yellow
		if (WEIGHT_YELLLOW) {
			const yellow_weight_influ = require('./influencers/yellow-influencer');
			img_data = yellow_weight_influ.influencer();
		}

		imgdata[i + 0] = img_data.r;       // R
		imgdata[i + 1] = img_data.g;       // G
		imgdata[i + 2] = img_data.b;       // B
		imgdata[i + 3] = img_data.a;       // A

		// record stats
		if (img_data.r > 0) stats.reds += 1;
		if (img_data.g > 0) stats.greens += 1;
		if (img_data.b > 0) stats.blues += 1;
		if (img_data.y > 0) stats.yellows += 1;
	}

	// set image data from our pixel map
	for (let i = 0; i < imgdata.length; i++) {
		imageData.data[i] = imgdata[i];
	}
	ctx.putImageData(imageData, 0, 0);

	// render output file
	const createOutput = require('../output-writer.js');
	createOutput.createOutput(canvas, stats, IMAGE_WIDTH, IMAGE_HEIGHT);
};

// exports
module.exports = app;

