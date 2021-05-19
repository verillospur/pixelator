// 
//  new-pixel-obj.js
//  ~/pixelator/
// 
//  created:    2021-05-17
// 
//  newPixwlObj() - create new pixel object
// 
'use strict';

const log = require('../log');

const edges = require('./pixel-edges');

const newPixelObj = (x, y, img_w, img_h) => {
	const e = edges.getPixelEdge(x, y, img_w, img_h);
	// if (x == 0) 
	const rv = {
		x: x,
		y: y,
		r: -1,
		g: -1,
		b: -1,
		a: -1,
		edge: e,
	};
	return rv;
};

module.exports = newPixelObj;
