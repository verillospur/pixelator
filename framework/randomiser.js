// 
//  randomiser.js
//  ~/framework/
// 
//  created:    2021-05-09
// 
//  random number generator
// 
'use strict';

const log = require('../log');

const randomInt = (min, max) => {
    const random = require('random');
    const rv = random.int(min, max);
    return rv;
};

const randomFloat = (min, max) => {
    const random = require('random');
    const rv = random.float(min, max);
    return rv;
};

const randomBool = () => {
    const random = require('random');
    const rv = random.boolean();
    return rv;
};

module.exports = {
    randomInt: randomInt,
    randomFloat: randomFloat,
    randomBool: randomBool,
};
