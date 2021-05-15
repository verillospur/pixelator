// 
//  filename.js
//  ~/path/
// 
//  created:    2021-05-09
// 
//  framework filesystem controller
// 
'use strict';

const appendToFile = require('./append-to-file');
const checkExists = require('./checkexists');
const checkExistsDir = require('./checkexists-dir');
const checkExistsFile = require('./checkexists-file');
const createDir = require('./createdir');
const createFile = require('./createfile');
const deleteFile = require('./deletefile');
const writeToFile = require('./write-file');
const readFile = require('./read-file');

module.exports = {
  appendToFile: appendToFile,
  checkExists: checkExists,
  checkExistsDir: checkExistsDir,
  checkExistsFile: checkExistsFile,
  createDir: createDir,
  createFile: createFile,
  deleteFile: deleteFile,
  writeToFile: writeToFile,
  readFile: readFile,
};