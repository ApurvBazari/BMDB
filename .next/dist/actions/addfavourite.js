'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var addFavourite = exports.addFavourite = function addFavourite(id) {
	return function (dispatch) {
		debugger;
		return dispatch({
			type: 'LIKE_MOVIE',
			id: id
		});
	};
};