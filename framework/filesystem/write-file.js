// 
//  write-file.js
//  ~/framework/filesystem/
// 
//  created:    2021-05-12
// 
//  basic text file writer
// 
'use strict';

const log = require('../../log');
const config = require('../../config-root');

const fs = require('fs');

// todo: does this actually do what it's supposed to?
// with files being created/appended/overwritten/etc?
const write = (pathToTFile, append, content) => {
    const checker = require('./checkexists-file');
    if (!checker.checkExists(pathToFile)) {
        fs.writeFileSync(pathToFile, content, 
            config.root.framework.filesystem.ENCODING_DEFAULT);
    }
    else {
        // file exists
        fs.writeFileSync(pathToFile, content, "w");
    }
};

module.exports = write;
