// 
//  checkexists-dir.js
//  ~/framework/filesystem/
// 
//  created:    06/01/2021
// 
//  checks for existence of directories
// 
'use strict';

const checker = require('./checkexists');

const check = (dirPath) => {
    return checker.checkExists(dirPath);
};

module.exports = {
  checkExists: check
}
