// 
//  get-influencer-from-id.js
//  ~/pixelator/inflencers/
// 
//  created:    2021-05-17
// 
//  get influencer from id
// 
'use strict';

// ok, we can either load all the influencer files and read
// their ID values get the right one, or we can hard code
// the IDs against the files.
//
// Hmmm, what to do, whah to do....

const getInfluencers = () => {
    return {
        red: 'red-influencer',
        green: 'green-influencer',
        yellow: 'yellow-influencer',
        blue: 'blue-influencer',
        paintItBlack: 'paint-it-black',
    };
};

const getInfluencer = (INFLUENCER_ID) => {
    return getInfluencers[INFLUENCER_ID];
};

module.exports = {
  getInfluencer: getInfluencer
};
