// 
//  loader.js
//  ~/pixelator/influencers/
// 
//  created:    2021-05-17
// 
//  influencers loader
// 
'use strict';

const load = (INFLUENCER_ID) => {

    const loader = require('./get-influencer-from-id');
    return loader.getInfluencer(INFLUENCER_ID);
};

module.exports = {
  load: load
};
