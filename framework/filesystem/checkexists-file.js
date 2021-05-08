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

const check = (filePath) => {
    return checker.checkExists(filePath);
};

module.exports = {
  checkExists: check
}
