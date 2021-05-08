// 
//  message-processor.js 
//  ~/log/
// 
//  created:    06/01/2021 
// 
//  log message massager
// 
'use strict';

const config = require('../config');

const process = (msg) => {

  // get prefix format
  const prefixFormat = config.log.log_message_prefix_format;

  // get today's date
  const today = new Date();

  // format it
  const formatter = require('../framework/date-formatter');
  const prefix = formatter.get(today, prefixFormat);

  // construct message 
  const m = `${prefix}${msg}\n`;

  // return prefixed messaged
  return m;
};

module.exports = {
  process: process
}
