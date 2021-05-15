// 
//  log-levels.js
//  ~/log/
// 
//  created:    2021-05-14
// 
//  log levels
// 
'use strict';

const levels = () => {
    return {
        Information: 0,
        Warning: 100, 
        Error: 1000,
        Critical: 2000,
        Debug: -1
    };
};

module.exports = levels();
