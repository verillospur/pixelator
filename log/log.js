// 
//  log.js 
//  ~/lof/ 
// 
//  created:    05/01/2021 
// 
//  application log
// 
'use strict';

const g_config = require('../config');
const config = g_config.log;

const message = (msg) => {

    // check directory and file 
    const fileman = require('./log-file-manager');
    const filepath = fileman.check();

    // process message
    const processer = require('./message-processor');
    const finalMsg = processer.process(msg);
    
    // write msg 
    const writer = require('../framework/filesystem/append-to-file');
    writer.append(finalMsg, filepath);

    // console write?
    if (config.always_write_to_console) {
      console.log(finalMsg);
    }

};


module.exports = {
  log: message
}
