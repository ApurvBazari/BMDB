'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _fetchData = require('./fetchData');

exports.default = (0, _redux.combineReducers)({
	fetchReducer: _fetchData.fetchReducer
});