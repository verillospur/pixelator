// 
//  checkexists-file.js
//  ~/framework/filesystem/
// 
//  created:    06/01/2021
// 
//  checks for existence of files
// 
'use strict';

const checker = require('./checkexists');

const checkExistsFile = (filePath) => {
    return checker(filePath);
};

module.exports = checkExistsFile;
