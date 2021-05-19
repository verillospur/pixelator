// 
//  app.js
//  ~/pixelator/
// 
//  created:    2021-05-14
// 
//  intention is that this is the core engine - to take over from ~/app.js
// 
'use strict';

const { WEIGHT_BLUE, WEIGHT_GREEN } = require('./config');

const root = () => {

	console.log('Starting.');

	// get framework stuff
	const log = require('../log');
	const logLevels = require('../log/log-levels');
	const config = require('../config')
	const framework = require('../framework');

	const lg = msg => { log.log(`app.root: ${msg}`) };

	const VERBOSE = false;
	lg(`VERBOSE mode: ${VERBOSE}`);

	// get image attribs from config
	lg('Loading image config...');
	const IMAGE_WIDTH = config.pixelator.IMAGE_WIDTH;
	const IMAGE_HEIGHT = config.pixelator.IMAGE_HEIGHT;
	lg(`IMAGE_WIDTH: ${IMAGE_WIDTH}; IMAGE_HEIGHT: ${IMAGE_HEIGHT}`);

	// create a pixel map - just an array with an element per pixel
	lg('Generating pixel map...');
	const newPixelObj = require('./new-pixel-obj');
	const pixel_map = require('./pixel-map').newmap(IMAGE_WIDTH, IMAGE_HEIGHT);
	for (let x = 0; x < IMAGE_WIDTH - 1; x++) {
		for (let y = 0; y < IMAGE_HEIGHT - 1; y++) {
			const pixel = newPixelObj(x, y, IMAGE_WIDTH, IMAGE_HEIGHT);
			pixel_map.addNext(pixel);
			lg(`Mapped pixel at ${x}, ${y}.`);
		}
	}
	lg(`Pixel map complete. Length: ${pixel_map.listArray.length}`);

	// get processing instructions
	// lg('Loading processing config...');
	// const WEIGHT_RED = config.pixelator.WEIGHT_RED;
	// const WEIGHT_GREEN = config.pixelator.WEIGHT_GREEN;
	// const WEIGHT_BLUE = config.pixelator.WEIGHT_BLUE;
	// const WEIGHT_YELLLOW = config.pixelator.WEIGHT_YELLLOW;
	// lg(`Processing config: WEIGHT_RED=${WEIGHT_RED}, WEIGHT_GREEN=${WEIGHT_GREEN}; WEIGHT_BLUE=${WEIGHT_BLUE}, WEIGHT_YELLLOW=${WEIGHT_YELLLOW}`);
	lg('Loading processing config no longer executing.');

	const RESULTS_LIST = [];
	const process_pixels = (pixel_map) => {

		// config for rgb - percentage likelihood for 
		lg('Loading processing config...');
		const red_percent = config.pixelator.PERCENT_WEIGHT_RED;
		const green_percent = config.pixelator.PERCENT_WEIGHT_GREEN;
		const blue_percent = config.pixelator.PERCENT_WEIGHT_BLUE;
		const yellow_percent = config.pixelator.PERCENT_WEIGHT_YELLOW;

		const red_percent_n = red_percent;
		const green_percent_n = green_percent;
		const blue_percent_n = blue_percent;
		const yellow_percent_n = yellow_percent;

		const rgb_config = [
			{ colour: 'r', pc: red_percent_n },
			{ colour: 'g', pc: green_percent_n },
			{ colour: 'b', pc: blue_percent_n },
			{ colour: 'y', pc: yellow_percent_n },
		];

		// run pixels through initial processing
		const randomiser = framework.randomiser;
		let spin_result_n = randomiser.randomInt(1, 100);
		if (VERBOSE) console.log(`Spin result: ${spin_result_n}`);
		let spin_result;
		for (const cfg of rgb_config) {
			const pcnum = cfg.pc;
			if (VERBOSE) console.log(`Test against: ${pcnum}`);
			if (spin_result_n <= pcnum) {
				spin_result = cfg;
				if (VERBOSE) console.log(`Hit: ${cfg.colour}`);
				break;
			} else {
				spin_result_n -= pcnum;
				if (VERBOSE) console.log(`No hit. spin_result_n=${spin_result_n}}`);
			}
		}
		if (spin_result) {
			const spin_result_colours = {
				'r': 'Red',	
				'g': 'Green',
				'b': 'Blue',
				'y': 'Yellow',
			};
			
			// save result
			RESULTS_LIST.push(spin_result.colour);
			lg(`Added to list: ${spin_result_colours[spin_result.colour]}`);
		}
		else {
			lg('No result!')
		}


		// load influencers

	};

	const NUM_CYCLES = 20;
	for (let i = 0; i <= NUM_CYCLES; i++) {
		if (VERBOSE && i > 0) lg('--------------------------------------');
		process_pixels(pixel_map);
	}

	// report
	const _results = {
		'r': 0,
		'g': 0,
		'b': 0,
		'y': 0,
	};
	console.log('generating results:');
	console.log(` - RESULTS_LIST.length=${RESULTS_LIST.length}`);
	for (const res_item of RESULTS_LIST) {
		_results[res_item]++;
		console.log(`res_item=${res_item}; colour=${res_item}; _results[ric]=${_results[res_item]}`);
	}
	const RESULTS = [];
	const _colours = { 'r': 'Red', 'g': 'Green', 'b': 'Blue', 'y': 'Yellow' };
	['r', 'g', 'b', 'y'].forEach(col => {
		RESULTS[col] = `${_colours[col]}: ${_results[col]}`;
	});

	console.log(RESULTS);

	console.log('Exiting.');
	process.exit(0);
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
module.exports = {
	app: app,
	root: root,
}
