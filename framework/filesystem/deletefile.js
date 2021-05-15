// 
//  deletefile.js
//  ~/framework/filesystem/
// 
//  created:    09/05/2021
// 
//  deletes  a file
// 
'use strict';

const log = require('../../log');
const config = require('../../config-root');

const fs = require('fs');
const filesystem = require('./filesystem');

const deleteFile = (filePath) => {

  // check file exists
  const mfs = require('./filesystem');
  if (mfs.checkExists(filePath)) {
    fs.unlinkSync(filePath);
  }

  // const checker = require('./checkexists-file');
  // if (!checker.checkExists(filePath)) {
  //   fs.closeSync(
  //     fs.rmSync(filePath, true)    // ignore exceptions
  //   );
  // }
  
};;

module.exports = deleteFile;
