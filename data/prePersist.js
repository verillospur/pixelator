// 
//  prePersist.js 
//  ~/data/ 
// 
//  created:    2021-02-01
// 
//  staging intended for documents to be passed through
//  prior to persistence.
// 
'use strict';
/**
 * Checks the specified document (object) for persistence
 * into the specified collection.
 * Ensures there are no problems that will kill the persist attempt.
 * Returns TRUE if everything is cool, FALSE if not.
 * @param  {object} doc The document to be persisted.
 * @param  {string} coll The name of the collection to be persisted to.
 */
const checkBeforePersist = (doc, coll) => {
    if (!doc) throw new Error('No document specified for pre-persistence.');
    if (!coll) throw new Error('No collection specified for document pre-persistence.');

    // our all-is-cool flag
    let allCool = false;

    //
    // basically all this needs to do is check for the existence 
    // of an "_id" field (property) and add one if it doesn't exist.
    // if it doesn't, and the object is immutable, this would be a
    // reason to flag all as NOT being cool.
    //

    // check direct property
    if (doc.hasOwnProperty('_id') {
        allCool = true;
    }

    // check inherited
    else {
        if ('_id' in doc) {
            allCool = true;
        }
    }

    // that's basically it. Any other checks can be added here. 
    // we can't do stuff like checking the unique-ness of the _id
    // field against every other document in the collection, for
    // obvious fucking reasons. 

    // return the coolness of everything
    return allCool;
};

module.exports = {
    check: checkBeforePersist
}
