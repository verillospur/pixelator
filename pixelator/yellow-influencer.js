
// 
//  yellow-influencer.js
//  ~/pixelator/
// 
//  created:    2021-05-14
// 
//  influencer for yellow-weighted pixel drawing
//  :: YELLOW WEIGHT ::
// 
'use strict';

// YELLOW WEIGHT INFLUENCER

const rndInt = require('./framework/randomiser').randomInt;
const rndBool = require('./framework/randomiser').randomBool;

const influencer = () => {

    let rb = false,
        gb = false,
        bb = false,
        yb = false;

    yb = rndBool();
    if (!yb) {
        rb = rndBool();
        if (!rb) {
            gb = rndBool();
            if (!gb) bb = true;
        }
    }

    const rv = (r, g, b, rb, gb, bb, yb);
    return rv;

    const setColorVars = (r, g, b, rb, gb, bb, yb) => {

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

        const rv = {
            r: r,
            g: g,
            b: b,
            a: a,
            red: r,
            green: g,
            blue: b,
            alpha: a,
        };

        return rv;
    };
};

module.exports = {
    influencer: influencer
};
