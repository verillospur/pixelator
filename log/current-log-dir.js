// 
//  current-log-dir.js 
//  ~/log/
// 
//  created:    05/01/2021 
// 
//  gets/sets log directory currently in use
// 
'use strict';

var currentValue = '';

const getCurrentDirectory = () => {
    return currentValue;
};

const setCurrentDirectory = (dir) => {
    currentValue = dir;
};

module.exports = {
    get: getCurrentDirectory,
    set: setCurrentDirectory,
}
