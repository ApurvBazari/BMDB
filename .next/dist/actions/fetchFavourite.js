'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getFavourite = exports.getFavourite = function getFavourite() {
	return function (dispatch) {
		debugger;
		var ids = localStorage.getItem('favouriteIds');
		console.log(ids);
		return dispatch({
			type: 'FAVOURITE_MOVIES',
			ids: ids
		});
	};
};