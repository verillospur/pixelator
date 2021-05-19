// 
//  pixel-map.js
//  ~/pixelator/
// 
//  created:    2021-05-17
// 
//  pixel map
// 
'use strict';

const log = require('../log');

const pixel_map = (img_w, img_h) => {

	const list = new Array(img_w * img_h);

	let addCounter = -1;

	return {
		listArray: list,

		addNext: (pixelObj) => {
			addCounter++;
			if (addCounter == list.length) {
				// too many adds
				throw new Error('Added too many pixels.');
			}
			else {
				list[addCounter] = pixelObj;
			}
		},
		getAddCounter: () => { return addCounter; },

		to2dArray: () => {
			const rv = new Array(img_w, img_h);
			list.forEach(pixel => {
				rv[pixel.x, pixel.y] = pixel;
			});
			return rv;
		},
	};
};

module.exports = {
	newmap: pixel_map
};
