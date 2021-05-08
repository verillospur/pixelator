// 
//  persist.js 
//  ~/data/ 
// 
//  created:    2021-02-01
// 
//  persist fn for data controller
// 
'use strict';

const config = require('../config');
const errHandler = require('../errorhandler');
const admin = require('../admin`');
const log = require('../log');

/**
 * Stores the specified document (object) in the specified collection (table).
 * The document should have a field named "_id" with a unique value, otherwise 
 * the driver will create one and assign a unique value to it.
 * Returns TRUE if stored successfully, FALSE otherwise.
 * @param  {object} doc The document to insert into the specified collection
 * @param  {string} coll The name of the collection into which to insert the specified document
 */
const persist = (doc, coll) => {
    const lg = msg => { log.log(`persist.persist(): ${msg}`); };

    const mongo = require('mongodb');
    const client = mongo.MongoClient;
    const url = config.MongoDB_url_nodb;

    // success flag
    let success = false;

    // connect 
    lg('Connecting to Mongo client');
    client.connect(
        url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err, db) => {
            // error?
            if (err) {
                errHandler.handle(err);
                success = false;
            }

            //
            // no error, lets get on with it
            //
            else {
                // get the database
                const dbo = db.db(config.mongodb.MongoDB_db);
                admin.logMsg(`DB: connected to database: ${dbo.databaseName}`);

                // insert the doc into the collection
                dbo.collection(coll).insertOne(
                    doc,
                    (err, result) => {
                        // errors? hope not! handle if so
                        if (err) {
                            lg(`Error inseting document: ${err}`)
                            errHandler.handle(err);
                        }

                        // no errors? great. 
                        success = (result.insertedCount == 1);
                        lg('insertedCount == 1. Document inserted successfully.');

                        // close database - should it be done here?
                        lg('Closing database.');
                        db.close();
                    }
                );
                // close database - should it be done here?
                if (db.isConnected) {
                    lg('Closing database (isConnected==true)');
                    db.close();
                }
            }
        }
    );

    // return result
    return success;

};

module.exports = {
    write: persist
}
