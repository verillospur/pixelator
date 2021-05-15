// 
//  template-loader.js
//  ~/
// 
//  created:    2021-05-14
// 
//  template loader
// 
'use strict';

const log = require('./log');
const config = require('./config')

const TEMPLATE_FILE = config.pixelator.TEMPLATE_FILE;

// template loader
const loadOutputTemplate = (
	dataUrl, 
	report, 
	imageWidth, 
	imageHeight
) => {

	const filesystem = require('./framework/filesystem');
	const template = filesystem.readFile(TEMPLATE_FILE);

	log.log(`TEMPLATE:\n${template}`);

	const output = template
					.replace('${dataUrl}', dataUrl)
					
					.replace('${imageWidth}', imageWidth)
					.replace('${imageWidth}', imageWidth)
					.replace('${imageWidth}', imageWidth)
					
					.replace('${imageHeight}', imageHeight)
					.replace('${imageHeight}', imageHeight)
					.replace('${imageHeight}', imageHeight)

					.replace('${report}', 
						report
							.replace(new RegExp('\n', "g"), '<br/>')
							.replace(new RegExp('=', 'g'), '<strong>')
							.replace(new RegExp(';', 'g'), '</strong>')
					);

	log.log(`PROCESSED TEMPLATE:\n${template}`);

	return output;
};

module.exports = loadOutputTemplate;