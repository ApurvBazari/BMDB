'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

var _movieCard = require('../components/movieCard');

var _movieCard2 = _interopRequireDefault(_movieCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/apurv/Desktop/BMDB/components/favourites.js',
    _this2 = undefined;

var Favourites = function (_React$Component) {
	(0, _inherits3.default)(Favourites, _React$Component);

	function Favourites() {
		(0, _classCallCheck3.default)(this, Favourites);

		return (0, _possibleConstructorReturn3.default)(this, (Favourites.__proto__ || (0, _getPrototypeOf2.default)(Favourites)).apply(this, arguments));
	}

	(0, _createClass3.default)(Favourites, [{
		key: 'render',
		value: function render() {
			console.log(this);
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 10
				}
			}, _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}, 'Favourite Movies'), this.props.favouriteIds.map(function (movie, i) {
				return _react2.default.createElement(_movieCard2.default, { movie: movie, key: i, __source: {
						fileName: _jsxFileName,
						lineNumber: 14
					}
				});
			}));
		}
	}]);

	return Favourites;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
	debugger;
	console.log(_this2);
	return {
		favouriteIds: JSON.parse(state.getFavourite.ids),
		isLiked: state.getFavourite.isLiked
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Favourites);