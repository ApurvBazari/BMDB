'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getFavourite = exports.getFavourite = function getFavourite() {
	return function (dispatch) {
		debugger;
		var movies = localStorage.getItem('favouriteMovies');
		return dispatch({
			type: 'FAVOURITE_MOVIES',
			movies: movies
		});
	};
};