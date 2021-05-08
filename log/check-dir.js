// 
//  check-dir.js
//  ~/log/
// 
//  created:    06/01/2021
// 
//  checks log file directory
// 
'use strict';

const config = require('../config');

/**
 * Returns the directory path
 */
const check = () => {

    // get dir
    const namer = require('./current-log-dir');
    const dir = namer.get();

    // get config dir name
    const configdir = config.log.log_file_dir;

    // if they don't match, set the new current filename to today's
    const properDir = configdir;
    if (dir != configdir) {
        namer.set(configdir);
    }

    // return dir path
    return configdir;
};

module.exports = {
    checkCurrent: check
};