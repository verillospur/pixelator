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
const { check } = require('../../log/log-file-manager');

const checkExists = async (path) => {

    let exists = false;

    if (path) {
        // exists = fs.existsSync(path);
        // exists = await fs.stat(path).isDirectory;
    }

    return exists;
};

module.exports = checkExists;
