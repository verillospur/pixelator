// 
//  filename.js 
//  ~/path/ 
// 
//  created:    01/01/2021 
// 
//  generates unique id based on RFC4122 (uuid v4)
//  removes "-" characters.
//  optional numbers only option.
//  
//  useage:
//      const gen = require('whatever');
//      const newId = gen.generate()
//
//   numeric only id:
//      const newId = gen.generate(true);
// 
'use strict';

/**
 *   Generates and returns unique id based on RFC4122 (uuid v4)
 *   Removes "-" characters.
 *   Optional numberic only generation.
 *   
 *   Useage:
 *       const gen = require('whatever');
 *       const newId = gen.generate()
 *   
 *    Numeric only id:
 *       const newId = gen.generate(true);
 *   
 * @param  {Boolean} numericOnly
 */
const generator = (numericOnly) => {
    
    // generate RFC4122 uuid
    const { v4: uuidv4 } = require('uuid');
    const genId = uuidv4();

    // remove "-" characters

    // let newId = genId.replace('-', '');

    // the above line doesn't work, for some reason. Fucking thing.
    let tmpId = genId.split('');
    let newId = '';
    tmpId.forEach(c => {
        if (c != '-') newId += c;
    });

    // numeric only?
    if (numericOnly) {
        // split newid into char array
        let tmp = newId.split('');
        let numbersOnly = '';
        // iterate char array
        tmp.forEach(
            c => {
                // convert char to num
                const n = parseInt(c);
                // if numeric, add to new id
                if (!isNaN(n)) {
                    numbersOnly += c;
                } 
                // otherwise, add a random number
                else {
                    const randomNumber = Math.floor(Math.random() * 10);
                    numbersOnly += randomNumber;
                }
            }
        );

        // done
        newId = numbersOnly;
    }
    
    // return it
    return newId;
};


module.exports = {
    generate: generator
};