// 
//  check-filename.js
//  ~/log/
// 
//  created:    05/01/2021
// 
//  checks log file name (uses today's date in config'd format)
// 
'use strict';

/**
 * Returns the name of the file currently in use (after checking)
 */
const check = () => {

    // get tools 
    const namer = require('./current-log-filename');
    const generator = require('./generate-filename');

    // get filename for today, and the filename currently in use
    const todayName = generator.get();
    const currentName = namer.get();

    // if they don't match, set the new current filename to today's
    if (todayName != currentName) {
        namer.set(todayName);
    }

    // return the name for convenience sake
    return todayName;
};

module.exports = {
  checkCurrent: check
};
