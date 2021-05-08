// 
//  current-log-filename.js 
//  ~/log/
// 
//  created:    05/01/2021 
// 
//  gets/sets log file name currently in use
// 
'use strict';

var currentValue = '';

const getCurrentFilename = () => {
    return currentValue;
};

const setCurrentFilename = (filename) => {
    currentValue = filename;
};

module.exports = {
    get: getCurrentFilename,
    set: setCurrentFilename,
}
