// 
//  log-file-manager.js 
//  ~/log/
// 
//  created:    06/01/2021 
// 
//  log file checks consolidator
// 
'use strict';

const config = require('../config');

const checkAll = () => {

  // check directory
  const dirCheck = require('./check-dir');
  const dirPath = dirCheck.checkCurrent();

  // check filename
  const nameCheck = require('./check-filename');
  const fname = nameCheck.checkCurrent();

  // check directory exists
  const dirExists = require('../framework/filesystem/checkexists-dir');
  if (!dirExists.checkExists(dirPath)) {
    const creater = require('../framework/filesystem/createdir');
    creater.create(dirPath);
  }

  // build path
  const sep = config.log.log_file_path_seperator;
  const filePath = `${dirPath}${sep}${fname}`;

  // check file exists
  const fileExists = require('../framework/filesystem/checkexists-file');
  if (!fileExists.checkExists(filePath)) {
    const creater = require('../framework/filesystem/createfile');
    creater.create(filePath);
  }
  

  // store the filepath
  const pathStore = require('./current-log-filepath');
  pathStore.set(filePath);

  // return file path for convenience
  return filePath;
};

module.exports = {
  check: checkAll
}
