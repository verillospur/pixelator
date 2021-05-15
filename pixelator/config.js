// 
//  config.js
//  ~/config/
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
        IMAGE_WIDTH: 450,
        IMAGE_HEIGHT: 200,
        WEIGHT_RED: true,
        WEIGHT_GREEN: false,
        WEIGHT_BLUE: false,
        WEIGHT_YELLLOW: false, 

    };
};

module.exports = config();
