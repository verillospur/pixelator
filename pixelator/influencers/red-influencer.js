// 
//  red-influencer.js
//  ~/pixelator/influencers/
// 
//  created:    2021-05-14
// 
//  influencer for red-weighted pixel drawing
//  :: RED WEIGHT ::
// 
'use strict';

// RED WEIGHT INFLUENCER

const rndInt = require('../../framework/randomiser').randomInt;
const rndBool = require('../../framework/randomiser').randomBool;

const INFLUENCER_ID = 'red';

const influencer = () => {

    let rb = false,
        gb = false,
        bb = false,
        yb = false;

    // make this a red pixel?
    rb = rndBool();
    if (!rb) {
        // green?
        gb = rndBool();
        if (!gb) {
            // blue?
            bb = rndBool();
            if (!bb) yb = true;     // nope, it's yellow
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
