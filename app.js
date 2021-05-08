// 
//  app.js
//  ~/
// 
//  created:    2021-05-08
// 
//  app entry point
// 
'use strict';

const app = () => {

    const log = require('./log');
    return {
        log: log
    };
};

module.exports = app;

app().log.log('App appears to be running.');
