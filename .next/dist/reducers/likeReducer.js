'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addFavourite = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addFavourite = exports.addFavourite = function addFavourite() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var action = arguments[1];

	debugger;
	switch (action.type) {
		case 'LIKE_MOVIE':
			var movieIdLike = action.id;
			return (0, _assign2.default)({}, state, { id: movieIdLike, isLiked: true });

		case 'DISLIKE_MOVIE':
			var movieIdDislike = action.id;
			return (0, _assign2.default)({}, state, { id: movieIdDislike, isLiked: false });

		default:
			return state;
	}
};