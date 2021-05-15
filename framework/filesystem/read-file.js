// 
//  read-file.js
//  ~/framework/filesystem/
// 
//  created:    2021-05-00
// 
//  basic text file reader
// 
'use strict';

const log = require('../../log');
const config = require('../../config-root');

const fs = require('fs');

const readFile = pathToFile => {
    const checker = require('./checkexists-file');
    let rv = '';
    if (checker(pathToFile)) {
         rv = fs.readFileSync(
            pathToFile
            , config.root.framework.filesystem.ENCODING_DEFAULT
            // , { encoding: 'utf8', flag: 'r' }
        ); // or 'a'. The check above renders it rather moot, old chap
    }
    return rv;
};

module.exports = readFile;
