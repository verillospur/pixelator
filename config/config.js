// 
//  config.js
//  ~/config/
// 
//  created:    2021-05-06
// 
//  global config
// 
'use strict';

const config = () => {

    return {

        // defaults
        ENCODING_DEFAULT: 'utf8',
        FILE_WRITE_OPTIONS: 'a',

        // log
        log: require('../log/config'),

        // framework
        framework: require('../framework/config'),

        // pixels
        pixelator: require('../pixelator/config'),
        
    };
};

module.exports = config();
