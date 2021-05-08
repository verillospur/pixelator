// 
//  checkexists.js
//  ~/framework/filesystem/
// 
//  created:    06/01/2021
// 
//  checks for existence of things on disk
// 
'use strict';

const fs = require('fs');

const check = (path) => {

    let exists = false;

    if (path) {
        exists = fs.existsSync(path);
    }

    return exists;
};

module.exports = {
  checkExists: check
}
