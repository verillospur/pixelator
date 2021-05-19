// 
//  yellow-influencer.js
//  ~/pixelator/influencers/
// 
//  created:    2021-05-14
// 
//  influencer for yellow-weighted pixel drawing
//  :: YELLOW WEIGHT ::
// 
'use strict';

// YELLOW WEIGHT INFLUENCER

const rndInt = require('../../framework/randomiser').randomInt;
const rndBool = require('../../framework/randomiser').randomBool;

const INFLUENCER_ID = 'yellow';

const influencer = () => {

    let rb = false,
        gb = false,
        bb = false,
        yb = false;

    // make this pixel yellow?
    yb = rndBool();
    if (!yb) {
        // nope, whah about blue?
        rb = rndBool();
        if (!rb) {
            // nope, whah about green?
            gb = rndBool();
            if (!gb) bb = true;     // nope, red
        }
    }

    const getPixelData = require('../get-pixel-data');
    const pixelData = getPixelData(rb, gb, bb, yb, 100);
    return pixelData;
    
};

module.exports = {
    id: INFLUENCER_ID,
    influencer: influencer
};
