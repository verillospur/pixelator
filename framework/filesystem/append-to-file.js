// 
//  append-to-file.js
//  ~/framework/filesystem/
// 
//  created:    06/01/2021
// 
//  appends text to file
// 
'use strict';

const write = (content, filePath, options) => {

    // check it exists
    const checker = require('./checkexists');
    checker.checkExists(filePath);

    // lock file
    // todo

    // check options
    options = options || 'a';

    // write to file
    const fs = require('fs');
    fs.appendFileSync( filePath, content, { flag: options } );

    // unlock file
    // todo

};

module.exports = {
  append: write
};
