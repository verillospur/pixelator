// 
//  green-influencer.js
//  ~/pixelator/influencers/
// 
//  created:    2021-05-14
// 
//  influencer for green-weighted pixel drawing
//  :: GREEN WEIGHT ::
// 
'use strict';

// GREEN WEIGHT INFLUENCER

const rndInt = require('../../framework/randomiser').randomInt;
const rndBool = require('../../framework/randomiser').randomBool;

const INFLUENCER_ID = 'green';

const influencer = () => {

    let rb = false,
        gb = false,
        bb = false,
        yb = false;

    // make this pixel green?
    gb = rndBool();
    if (!gb) {
        // nope. blue?
        bb = rndBool();
        if (!bb) {
            // red then?
            rb = rndBool();
            if (!rb) yb = true;     // guess it's yellow
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
