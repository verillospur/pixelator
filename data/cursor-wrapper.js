// 
//  cursor-wrapper.js
//  ~/data/
// 
//  created:    2021-02-01
// 
//  Wrapper for cursor object returned by mongodb driver
// 
'use strict';

const wrapper = (mongoCursor) => {
    return {
        mongoCursor: mongoCursor,
        hasNext: mongoCursor.hasNext,
        next: mongoCursor.next,
        sort: mongoCursor.sort,
        limit: mongoCursor.limit,
        skip: mongoCursor.skip, 
        toArray: mongoCursor.toArray,
    }
};

module.exports = {
    wrap: wrapper
};