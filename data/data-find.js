// 
//  data-find.js
//  ~/path/
// 
//  created:    2021-02-01
// 
//  find fn for data controller
// 
'use strict';

const config = require('../config');
const errHandler = require('../errorhandler');
const log = require('../log');

/**
 * Find a record or records
 * @param {string} coll The data collection to search
 * @param {*} query The seach query paramters
 */
const find = (coll, query) => {
    const lg = msg => { log.log(`data.find(): ${msg}`); };

    const mongo = require('mongodb');
    const client = mongo.MongoClie;
    const url = config.MongoDB_url_nodb;

    // return values
    let rvRecords = null;
    let rvCursor = null;
    let rvError = null;
    let success = false;

    // connect 
    lg('Connecting to Mongo client');
    client.connect(
        url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
        (err, db) => {
            // error?
            if (err) {
                errHandler.handle(err);
                success = false;
                rvError = err;
            }

            //
            // no error, lets get on with it
            //
            else {

                //
                // no error, lets get on with it
                //

                // get the database
                const dbo = db.db(config.mongodb.MongoDB_db);
                lg(`DB: connected to database: ${dbo.databaseName}`);

                //
                // ** do the find **
                //
                lg(`Performing mongo find() on coll:[${coll}]`);
                const cursorWrapper = require('./cursor-wrapper');
                const recordsWrapper = cursorWrapper.wrap(dbo.collection(coll).find(query));
                lg(`Performing toArray()`);
                recordsWrapper.toArray(
                    (err, records) => {
                        // error?
                        if (err) {
                            errHandler.handle(err);
                            success = false;
                            rvError = err;
                        }

                        // no error
                        else {
                            rvRecords = records;
                            rvCursor = recordsWrapper;
                            success = true;
                        }

                    });

                // close database
                if (db.isConnected) {
                    lg('Closing database (isConnected==true)');
                    db.close();
                }
            }
        }
    );

    // return
    if (success) {
        return {
            cursor: rvCursor,
            records: rvRecords,
            success: true,
        };
    }
    else {
        return {
            success: false,
            error: rvError
        };
    }
};

module.exports = find;
