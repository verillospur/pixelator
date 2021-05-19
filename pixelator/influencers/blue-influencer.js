// 
//  blue-influencer.js
//  ~/pixelator/influencers/
// 
//  created:    2021-05-14
// 
//  influencer for blue-weighted pixel drawing
//  :: BLUE WEIGHT ::
// 
'use strict';

// BLUE WEIGHT INFLUENCER

const rndInt = require('../framework/randomiser').randomInt;
const rndBool = require('../framework/randomiser').randomBool;

const INFLUENCER_ID = 'blue';

const influencer = () => {

    let rb = false,
        gb = false,
        bb = false,
        yb = false;

    bb = rndBool();
    if (!bb) {
        rb = rndBool();
        if (!rb) {
            gb = true;
            if (!gb) yb = true;
        }
    }

    const getPixelData = require('./get-pixel-data');
    const pixelData = getPixelData(rb, gb, bb, yb, 100);
    return pixelData;

};

module.exports = {
    id: INFLUENCER_ID,
    influencer: influencer
};
