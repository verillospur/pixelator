// 
//  pixel-edges.js
//  ~/pixelator/
// 
//  created:    2021-05-17
// 
//  pixel edge defs
// 
'use strict';

const log = require('../log');

const pixel_edges = {
	NotEdge: 0,
	TopEdge: {
		TopOnly: 101,
		TopAndLeft: 102,
		TopAndRight: 103,
	},
	LeftEdge: {
		LeftOnly: 201,
		LeftAndBottom: 202,
		LeftAndTop: 102,
	},
	RightEdge: {
		RightOnly: 301,
		RightAndBottom: 302,
		RightAndTop: 103,
	},
	BottomEdge: {
		BottomOnly: 401,
		BottomAndLeft: 202,
		BottomAndRight: 302,
	},
};

const getPixelEdge = (x, y, w, h) => {

	// default not an edge
	let rv = pixel_edges.NotEdge;

	if (x == 0) {
		// left
		if (y == 0) {
			// top left
			rv = pixel_edges.TopEdge.TopAndLeft
		}
		else if (y == (h - 1)) {
			// bottom left
			rv = pixel_edges.TopEdge.BottomAndLeft;
		}
		else {
			// just top
			rv = pixel_edges.TopEdge.TopOnly;
		}
	}

	if (x == (w - 1)) {
		// right
		if (y == 0) {
			// top right
			rv = pixel_edges.BottomEdge.BottomAndRight;
		}
		else if (y == (h - 1)) {
			// bottom right
			rv = pixel_edges.BottomEdge.BottomAndRight;
		}
		else {
			rv = pixel_edges.BottomEdge.BottomOnly;
		}
	}

	// just a left edge, not a corner?
	if (y == 0) {
		if (rv = pixel_edges.NotEdge) {
			rv = pixel_edges.LeftEdge.LeftOnly;
		}
	}

	// right edge?
	else if (y == (w - 1)) {
		if (rv = pixel_edges.NotEdge) {
			rv = pixel_edges.LeftEdge.RightOnly;
		}
	}

	return rv;
};

module.exports = {
	pixel_edges: pixel_edges,
	getPixelEdge: getPixelEdge
};
