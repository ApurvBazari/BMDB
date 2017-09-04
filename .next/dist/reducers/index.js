'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _items = require('./items');

var _likeReducer = require('./likeReducer.js');

exports.default = (0, _redux.combineReducers)({
	items: _items.items,
	itemsHasErrored: _items.itemsHasErrored,
	itemsIsLoading: _items.itemsIsLoading,
	addFavourite: _likeReducer.addFavourite
});