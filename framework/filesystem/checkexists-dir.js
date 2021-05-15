// 
//  checkexists-dir.js
//  ~/framework/filesystem/
// 
//  created:    06/01/2021
// 
//  checks for existence of directories
// 
'use strict';

// const filesystem = require('./filesystem');

// const checkExistsDir = (dirPath) => {
//     return filesystem.checkExists(dirPath);
// };

const checkExistsDir = (dirPath) => {
    const checkExists = require('./checkexists');
    return checkExists(dirPath);
};



module.exports = checkExistsDir;
