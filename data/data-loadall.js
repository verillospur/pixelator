// 
//  data-loadall.js
//  ~/data/
// 
//  created:    2021-02-01
// 
//  loadAll() fn for data controller
//
'use strict';

const log = require('../log');

const persist = require('./data-prepersist');
const prePersist = require('./prePersist');
/**
 * Load all documents from the specified collection.
 * Returns an array of records.
 * @param  {string} coll Name of the collection against which to find 
 * @param  {object} query
 */
const loadAll = (coll, query) => {
  const lg = msg => { log.log(`data.loadall(): ${msg}`); };

  // load operation
  lg('Running loadAll() on loader');
  const loader = require('./loadAll');
  const result = loader.loadAll(coll, query);

  let rv = null;
  if (!result.success) {
    // error. return error in 1-element array 
    lg(`Error: ${result.error}`)
    rv = [ result.error ];
  }

  // no error
  else {
    rv = Array.from(result.records);
    lg(`Fetched ${rv.length} record(s)`);
  }

  return rv;
};

module.exports = loadAll;
