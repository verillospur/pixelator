// 
//  append-to-file.js
//  ~/framework/filesystem/
// 
//  created:    06/01/2021
// 
//  appends text to file
// 
'use strict';

const appendToFile = (content, filePath, options) => {

    const log = require('../../log');
    const config = require('../../config')
    const fs = require('fs');
    
    // --------------------------------------------------------------------
    log.debugCall(__filename, "appendToFile", `
    "content": ${content}\n"filepath": ${filePath}\n"options": ${options}`
    );
    // --------------------------------------------------------------------

    // check it exists
    const checker = require('./checkexists');
    if (checker(filePath)) {

        // lock file
        // todo

        // check options
        options = options || 'a';

        // write to file
        try {
            fs.appendFileSync(filePath, content, { flag: config.framework.filesystem.FILE_WRITE_OPTIONS });
        }
        catch (ex) {
            onsole.log(ex);
        }

        // unlock file
        // todo

    }
    else {
        fs.appendFileSync(filePath, content, config.ENCODING_DEFAULT);
        // fs.writeFileSync(filePath, content, config.framework.filesystem.ENCODING_DEFAULT );
    }

};

module.exports = appendToFile;
