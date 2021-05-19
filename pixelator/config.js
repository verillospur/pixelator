// 
//  config.js
//  ~/config/pixelator/
// 
//  created:    2021-05-06
// 
//  pixels config
// 
'use strict';

const config = () => {

    return {

        // template/output files
        // TEMPLATE_FILE: config.template_file,
        // OUTPUT_FILE: config.output_file,
        // TEMPLATE_FILE: require('../config').TEMPLATE_FILE,
        // OUTPUT_FILE: require('../config').OUTPUT_FILE,

        TEMPLATE_FILE: 'C:\\dev\\pixelator\\template.html',
        OUTPUT_FILE: 'C:\\dev\\pixelator\\output.html',

        // defaults
        IMAGE_WIDTH: 400,
        IMAGE_HEIGHT: 250,

        // unused?
        WEIGHT_RED: false,
        WEIGHT_GREEN: false,
        WEIGHT_BLUE: false,
        WEIGHT_YELLLOW: true, 
        
        PERCENT_WEIGHT_RED: 0,//40,
        PERCENT_WEIGHT_GREEN: 23,
        PERCENT_WEIGHT_BLUE: 23,
        PERCENT_WEIGHT_YELLOW: 54,//14,

    };
};

module.exports = config();
