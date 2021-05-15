// 
//  log-file-manager.js 
//  ~/log/
// 
//  created:    06/01/2021 
// 
//  log file checks consolidator
// 
'use strict';

const checkAll = () => {

  const log = require('../log');
  const config = require('../config');

  // log.debugCall(__filename, "checkAll", [], '');
  // log.log(__filename); // CAN'T CALL LOG!! CAIUSES INFINITE CALL STACK LOOP

  // check directory
  const dirCheck = require('./check-dir');
  const dirPath = dirCheck.checkCurrent();

  // check filename
  const nameCheck = require('./check-filename');
  const fname = nameCheck.checkCurrent();

  // check directory exists
  const framework = require('../framework');
  if (!framework.filesystem.checkExists(dirPath)) {
    framework.filesystem.createDir(dirPath);
  }

  // build path
  const sep = config.log.log_file_path_seperator;
  const filePath = `${dirPath}${sep}${fname}`;

  // check file exists
  if (!framework.filesystem.checkExists(filePath)) {
    framework.filesystem.createFile(filePath);
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
