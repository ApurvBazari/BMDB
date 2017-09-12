'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getFavourite = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFavourite = exports.getFavourite = function getFavourite() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var action = arguments[1];

	debugger;
	switch (action.type) {
		case 'FAVOURITE_MOVIES':
			return (0, _assign2.default)({}, state, { movies: action.movies, isLiked: true });

		case 'DISLIKE_MOVIE':
			var movieIdDislike = action.id;
			return (0, _assign2.default)({}, state, { id: movieIdDislike, isLiked: false });

		default:
			return state;
	}
};