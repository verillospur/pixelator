// 
//  default-log-levels.js
//  ~/log/
// 
//  created:    2021-05-14
// 
//  [ basic description ] 
// 
'use strict';

const log_levels = require('./log-levels');

const default_log_level = () => {
    return {
        debug: log_levels.Debug,

        default: log_levels.Information,

        error: log_levels.Error, 
        warning: log_levels.Warning, 
        critical: log_levels.Critical,
    };
};

module.exports = default_log_level();
