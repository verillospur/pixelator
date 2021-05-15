// 
//  config.js
//  ~/framework/
// 
//  created:    2021-05-06
// 
//  framework config
// 
'use strict';

const config = () => {

    return {

        // filesystem
        filesystem: require('./filesystem/config'),
        
    };
};

module.exports = config();
