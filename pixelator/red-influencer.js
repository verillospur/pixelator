// 
//  red-influencer.js
//  ~/pixelator/
// 
//  created:    2021-05-14
// 
//  influencer for red-weighted pixel drawing
//  :: RED WEIGHT ::
// 
'use strict';

// RED WEIGHT INFLUENCER

const rndInt = require('./framework/randomiser').randomInt;
const rndBool = require('./framework/randomiser').randomBool;

const influencer = () => {

    let rb = false,
        gb = false,
        bb = false,
        yb = false;

    rb = rndBool();
    if (!rb) {
        gb = rndBool();
        if (!gb) {
            bb = rndBool();
            if (!bb) yb = true;
        }
    }

    const rv = setColorVars(r, g, b, rb, gb, bb, yb);
    return rv;

    // imageData.data[i + 0] = rv.r;       // R
    // imageData.data[i + 1] = rv.g;       // G
    // imageData.data[i + 2] = rv.b;       // B
    // imageData.data[i + 3] = rv.a;       // A




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
