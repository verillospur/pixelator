// 
//  date-formatter.js
//  ~/admin/
// 
//  created:    05/01/2021
// 
//  what it says on the tin
// 
'use strict';

const formatter = require('date-fns');

const fn = (date, format) => {
  const rv = formatter.format(date, format);
  return rv;
};

module.exports = {
  get: fn
}
