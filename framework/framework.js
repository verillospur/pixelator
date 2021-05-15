// 
//  framework.js
//  ~/framework/
// 
//  created:    2021-05-14
// 
//  framework functions
// 
'use strict';

const filesystem = require('./filesystem');
const randomiser = require('./randomiser');
const dateFormatter = require('./date-formatter');

module.exports = {
  filesystem: filesystem,
  randomiser: randomiser,
  dateFormatter: dateFormatter,
};
