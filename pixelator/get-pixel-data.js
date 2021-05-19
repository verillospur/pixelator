// 
//  get-pixel-data.js
//  ~/pixelator/
// 
//  created:    2021-05-14
// 
//  getPixelData fn
// 
'use strict';

const log = require('../log');
const config = require('../config');

const getPixelData = (isRed, isGreen, isBlue, isYellow, transPercent) =>
{
    // declare colour vars
    let g = 0;
    let b = 0;
    let r = 0;

    // yellow?
    if (isYellow) {
        r = 255;
        g = 255;
        b = 0;
    }
    else {
        r = isRed ? 255 : 0;
        g = isGreen ? 255 : 0;
        b = isBlue ? 255 : 0;
    }

    // calculate transparency
    const alpha = Math.trunc((255 / 100) * transPercent);
    
    const rv = {
        r: r,
        g: g,
        b: b,
        a: alpha,
        red: r,
        green: g,
        blue: b,
        alpha: alpha,
    };

    return rv;
};

module.exports = getPixelData;