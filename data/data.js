// 
//  data.js 
//  ~/data/ 
// 
//  created:    2021-02-01
// 
//  Central data controller
// 
'use strict';

const store = require('./data-persist');
const loadAll = require('./data-loadall'); 
const find = require('./data-find'); 
const checkForError = require('./data-checkForError');

module.exports = {
  store: store,
  loadAll: loadAll,
  find: find,
  checkForError: checkForError,
};