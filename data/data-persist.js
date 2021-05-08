// 
//  data-persist.js
//  ~/data/
// 
//  created:    2021-02-01
// 
//  persist() fn for data controller
//
'use strict';

const log = require('../log');

const persist = require('./data-prepersist');
const prePersist = require('./prePersist');
/**
 * Stores the specified document (object) in the specified collection (table).
 * Checks the document first to ensure it's all good to be stored.
 * Returns FALSE if not, TRUE if no problems.
 * @param  {object} doc The document to insert into the specified collection
 * @param  {string} coll The name of the collection into which to insert the specified document
 */
const store = (doc, coll) => {
  const lg = msg => { log.log(`data.store(): ${msg}`); };

  // success flag
  let sucess = false;

  // check our document is ok to store
  const okToPersist = prePersist.check(doc, coll);

  // if it is, store the damn thing
  if (okToPersist) {
    lg(`Pre-persist checks complete, persisting document: [${doc}] in: [${coll}]`);
    success = persist.write(doc, coll);
    if (!success) {
      lg(`Persistent write failed for document: [${doc}] in: [${coll}]`);
    }
    else {
      lg(`Persistent write complete for document: [${doc}] in: [${coll}]`);
    }
  }

  // otherwise... what?
  else {
    success = false;
    lg(`Pre-persist checks failed, cannot persist document: [${doc}] in: [${coll}]`);
  }

  // return flag
  return success;

};

module.exports = store;
