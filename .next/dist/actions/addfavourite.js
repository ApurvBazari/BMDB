'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addFavourite = undefined;

var _actionTypes = require('../actionTypes.js');

var addFavourite = exports.addFavourite = function addFavourite(id) {
	return function (dispatch) {
		return dispatch({
			type: _actionTypes.LIKE_MOVIE,
			id: id
		});
	};
};