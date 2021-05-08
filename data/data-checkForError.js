// 
//  data.js 
//  ~/data/ 
// 
//  created:    2021-02-01
// 
//  Central data controller
// 
'use strict';

const log = require('../log');


/**
 * Checks for errors in data persistence operations.
 * Returns either the error object, or null/undefined.
 * @param {*} retval Return value from any data operation
 */
const checkForError = (retval) => {
  // set default return value - ie if no error detected
  let rv = undefined;
  if (retval) {     // check the value is a thing
    if (Array.isArray(retval)) {    // is it an array?
      if (retval.length == 1) {     // is there a single element?
        const e = retval[0];        // grab the element
        if (e instanceof Error) {   // if it's an Error then 
          rv = e;                   // return it
        }
      }
    }
  }
  return rv;
};

module.exports = checkForError;