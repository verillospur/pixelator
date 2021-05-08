// 
//  createdir.js
//  ~/framework/filesystem/
// 
//  created:    06/01/2021
// 
//  creates a directory
// 
'use strict';

const fs = require('fs');

const createDir = (dirPath) => {

    const checker = require('./checkexists-dir');
    if (!checker.checkExists(dirPath)) {
        
        fs.mkdirSync(dirPath, { recursive: true } );
    }
};

module.exports = {
  create: createDir
};
