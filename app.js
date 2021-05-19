// 
//  app.js
//  ~/
// 
//  created:    2021-05-08
// 
//  app entry point
// 
'use strict';

require('./pixelator/app').root();
require('./pixelator/app').app();

// console.log('Starting.');

// // get framework stuff
// const log = require('./log');
// const logLevels = require('./log/log-levels');
// const config = require('./config')
// const framework = require('./framework');

// const VERBOSE = false;

// // get image attribs from config
// const IMAGE_WIDTH = config.pixelator.IMAGE_WIDTH;
// const IMAGE_HEIGHT = config.pixelator.IMAGE_HEIGHT;

// // create a pixel map - just an array with an element per pixel
// const newPixelObj = require('./pixelator/new-pixel-obj');
// const pixel_map = require('./pixelator/pixel-map').newmap(IMAGE_WIDTH, IMAGE_HEIGHT);
// for (let x = 0; x < IMAGE_WIDTH - 1; x++) {
// 	for (let y = 0; y < IMAGE_HEIGHT - 1; y++) {
// 		const pixel = newPixelObj(x, y, IMAGE_WIDTH, IMAGE_HEIGHT);
// 		pixel_map.addNext(pixel);
// 	}
// }


// // get processing instructions
// const WEIGHT_RED = config.pixelator.WEIGHT_RED;
// const WEIGHT_GREEN = config.pixelator.WEIGHT_GREEN;
// const WEIGHT_BLUE = config.pixelator.WEIGHT_BLUE;
// const WEIGHT_YELLLOW = config.pixelator.WEIGHT_YELLLOW;

// const RESULTS_LIST = [];

// const process_pixels = (pixel_map) => {

// 	// config for rgb - percentage likelihood for each
// 	const red_percent = 50;
// 	const green_percent = 25;
// 	const blue_percent = 25;
	
// 	const red_percent_n = red_percent;
// 	const green_percent_n = green_percent;
// 	const blue_percent_n = blue_percent;

// 	const rgb_config = [
// 		{ colour: 'r', pc: red_percent_n },
// 		{ colour: 'g', pc: green_percent_n },
// 		{ colour: 'b', pc: blue_percent_n }
// 	];

// 	// run pixels through initial processing
// 	const randomiser = framework.randomiser;
// 	let spin_result_n = randomiser.randomInt(1, 100);
// 	if (VERBOSE) console.log(`Spin result: ${spin_result_n}`);
// 	let spin_result;
// 	for (const cfg of rgb_config) {
// 		const pcnum = cfg.pc;
// 		if (VERBOSE) console.log(`Test against: ${pcnum}`);
// 		if (spin_result_n <= pcnum) {
// 			spin_result = cfg;
// 			if (VERBOSE) console.log(`Hit: ${cfg.colour}`);
// 			break;
// 		} else {
// 			spin_result_n -= pcnum;
// 			if (VERBOSE) console.log(`No hit. spin_result_n=${spin_result_n}}`);
// 		}
// 	}
// 	if (spin_result) {
// 		switch (spin_result.colour) {
// 			case 'r':
// 				console.log('Red.');
// 				break;
// 			case 'g':
// 				console.log('Green.');
// 				break;
// 			case 'b':
// 				console.log('Blue.');
// 				break;

// 			default:
// 				console.log('** NONE !! ** ');
// 				break;
// 		}

// 		// save result
// 		RESULTS_LIST.push(spin_result.colour);
// 	}
// 	else {
// 		console.log('No result. Sorry dude.')
// 	}


// 	// load influencers

// };

// const NUM_CYCLES = 20;
// for (let i = 0; i <= NUM_CYCLES; i++) {
// 	if (i > 0) console.log('--------------------------------------');
// 	process_pixels(pixel_map);
// }

// // report
// const RESULTS = [];
// const _results_r_count = 0;
// const _results_g_count = 0;
// const _results_b_count = 0;
// const _results_y_count = 0;
// const _results = { 
// 	'r': 0,
// 	'g': 0,
// 	'b': 0,
// 	'y': 0,
// };
// console.log('generating results:');
// console.log(` - RESULTS_LIST.length=${RESULTS_LIST.length}`);
// for (const res_item of RESULTS_LIST) {
// 	_results[res_item]++;
// 	console.log(`res_item=${res_item}; colour=${res_item}; _results[ric]=${_results[res_item]}`);
// }
// const _colours = { 'r': 'Red', 'g': 'Green', 'b': 'Blue', 'y': 'Yellow' };
// ['r', 'g', 'b', 'y'].forEach(col => {
// 	RESULTS[col] = `${_colours[col]}: ${_results[col]}`;
// });

// console.log(RESULTS);

// console.log('Exiting.');
// process.exit(0);


// const pixapp = require('./pixelator/app');
// pixapp();

// process.exit(0);

// /*

// const log = require('./log');
// const logLevels = require('./log/log-levels');
// const config = require('./config')

// const IMAGE_WIDTH = config.pixelator.IMAGE_WIDTH;
// const IMAGE_HEIGHT = config.pixelator.IMAGE_HEIGHT;
// const WEIGHT_RED = config.pixelator.WEIGHT_RED;
// const WEIGHT_GREEN = config.pixelator.WEIGHT_GREEN;
// const WEIGHT_BLUE = config.pixelator.WEIGHT_BLUE;
// const WEIGHT_YELLLOW = config.pixelator.WEIGHT_YELLLOW;

// const { startOfWeek } = require('date-fns');
// const { randomInt } = require('./framework/randomiser');

// // weirdness? create the app then run it...? guess so...
// const app = () => {

// 	log.log("Calling app()", logLevels.Debug);

// 	const createCanvas = require('canvas').createCanvas;
// 	const loadImage = require('canvas').loadImage;
// 	const canvas = createCanvas(IMAGE_WIDTH, IMAGE_HEIGHT);
// 	const ctx = canvas.getContext('2d');

// 	const stats = {
// 		reds: 0,
// 		greens: 0,
// 		blues: 0,
// 		yellows: 0,
// 		report: () => {
// 			return `Reds: =${stats.reds};\n`
// 				+ `Greens: =${stats.greens};\n`
// 				+ `Blues: =${stats.blues};\n`
// 				+ `Yellows: =${stats.yellows};`;
// 		}
// 	};

// 	const rndInt = require('./framework/randomiser').randomInt;
// 	const rndBool = require('./framework/randomiser').randomBool;

// 	// // do pixel data
// 	//const imageData = ctx.createImageData(IMAGE_WIDTH, IMAGE_WIDTH);
// 	const imageData = ctx.getImageData(0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
// 	for (let i = 0; i < imageData.data.length; i += 4) {

// 		// const r = rndInt(0, 255);
// 		// const g = rndInt(0, 255);
// 		// const b = rndInt(0, 255);
// 		// const a = rndInt(150, 255);

// 		let rb = false,
// 			gb = false,
// 			bb = false,
// 			yb = false;

// 		// weight red
// 		if (WEIGHT_RED) {
// 			rb = rndBool();
// 			if (!rb) {
// 				gb = rndBool();
// 				if (!gb) {
// 					bb = rndBool();
// 					if (!bb) yb = true;
// 				}
// 			}
// 		}

// 		// weight green
// 		if (WEIGHT_GREEN) {
// 			gb = rndBool();
// 			if (!gb) {
// 				bb = rndBool();
// 				if (!bb) {
// 					rb = rndBool();
// 					if (!rb) yb = true;
// 				}
// 			}
// 		}

// 		// weight blue
// 		if (WEIGHT_BLUE) {
// 			bb = rndBool();
// 			if (!bb) {
// 				rb = rndBool();
// 				if (!rb) {
// 					gb = true;
// 					if (!gb) yb = true;
// 				}
// 			}
// 		}

// 		// weight yellow
// 		if (WEIGHT_YELLLOW) {
// 			yb = rndBool();
// 			if (!yb) {
// 				rb = rndBool();
// 				if (!rb) {
// 					gb = rndBool();
// 					if (!gb) bb = true;
// 				}
// 			}
// 		}

// 		// const rb = rndBool();
// 		// const gb = rndBool();
// 		// const bb = rndBool();

// 		// declare colour vars
// 		let g = 0;
// 		let b = 0;
// 		let r = 0;

// 		// yellow?
// 		if (yb) {
// 			r = 255;
// 			g = 255;
// 			b = 0;
// 		}
// 		else {
// 			r = rb ? 255 : 0;
// 			g = gb ? 255 : 0;
// 			b = bb ? 255 : 0;
// 		}
// 		const a = 255;

// 		imageData.data[i + 0] = r;       // R
// 		imageData.data[i + 1] = g;       // G
// 		imageData.data[i + 2] = b;       // B
// 		imageData.data[i + 3] = a;       // A

// 		// record stats
// 		if (rb) stats.reds += 1;
// 		if (gb) stats.greens += 1;
// 		if (bb) stats.blues += 1;
// 		if (yb) stats.yellows += 1;

// 		// looky looky - let's not log this. takes forver.
// 		// const ma = [
// 		// 	  imageData.data[i + 0]
// 		// 	, imageData.data[i + 1]
// 		// 	, imageData.data[i + 2]
// 		// 	, imageData.data[i + 3]
// 		// ]
// 		//
// 		//log.log(`imageData{${i}}:${ma}`);
// 	}
// 	ctx.putImageData(imageData, 0, 0);

// 	// render output file
// 	const createOutput = require('./output-writer.js');
// 	createOutput.createOutput(canvas, stats, IMAGE_WIDTH, IMAGE_HEIGHT);
// };

// // exports
// module.exports = app;

// // run the app
// // const p = require('prompt');
// // p.start();
// // p.get(
// // 	(['Run the app?'],
// // 	(err, result) => )
// // );
// app();

// */