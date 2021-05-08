// 
//  current-log-filepath.js
//  ~/log/
// 
//  created:    05/01/2021 
// 
//  gets/sets log file path currently in use
// 
'use strict';

var currentValue = '';

const getCurrentFilePath = () => {
    return currentValue;
};

const setCurrentFilePath = (filePath) => {
    currentValue = filePath;
};

module.exports = {
    get: getCurrentFilePath,
    set: setCurrentFilePath,
}
