// 
//  output-writer.js
//  ~/
// 
//  created:    2021-05-14
// 
//  app entry point
// 
'use strict';

const log = require('./log')
const config = require('./config')
const OUTPUT_FILE = config.pixelator.OUTPUT_FILE;

//
// output html file generator
const createOutput = (
	canvas, stats,
	IMAGE_WIDTH, IMAGE_HEIGHT
) => {

	// load output template
	const loadOutputTemplate = require('./template-loader');
	const imgstr = loadOutputTemplate(
		canvas.toDataURL()
		, stats.report()
		, IMAGE_WIDTH, IMAGE_HEIGHT
	);

	// sort this out please. Just have a single file overwriter, obvs
	//
	const framework = require('./framework');
	const filesystem = framework.filesystem;
	filesystem.deleteFile(OUTPUT_FILE);
	filesystem.appendToFile(imgstr, OUTPUT_FILE);

	log.log(`Outfile file: ${OUTPUT_FILE}`);
	console.log(`Outfile file: ${OUTPUT_FILE}`);
};

// exports
module.exports = {
	createOutput: createOutput
};
