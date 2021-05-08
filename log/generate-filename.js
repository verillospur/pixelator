// 
//  generate-filename.js
//  ~/log/
// 
//  created:    05/01/2021
// 
//  generates log file name for today
// 
'use strict';

const config = require('../config/config');
const dateFormatter = require('../framework/date-formatter');

const generate = () => {

  const today = new Date();
  const format = config.log.log_file_name_format

  const fname = dateFormatter.get(today, format)
  const fext = (
      config.log.log_file_name_ext.startsWith('.') 
      ? config.log.log_file_name_ext
      : '.' + config.log.log_file_name_ext
  );
  const filename = fname + fext;
  return filename;
};

module.exports = {
  get: generate
}
