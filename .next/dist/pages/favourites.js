'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _movieCard = require('../components/movieCard.js');

var _movieCard2 = _interopRequireDefault(_movieCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/apurv/Desktop/BMDB/pages/favourites.js?entry';


var Favourites = function (_React$Component) {
	(0, _inherits3.default)(Favourites, _React$Component);

	function Favourites(props) {
		(0, _classCallCheck3.default)(this, Favourites);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Favourites.__proto__ || (0, _getPrototypeOf2.default)(Favourites)).call(this, props));

		console.log(_this.props);
		return _this;
	}

	(0, _createClass3.default)(Favourites, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) {
				this.setState({
					favouriteIds: JSON.parse(localStorage.getItem("favouriteIds"))
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			debugger;
			var cards = this.props ? this.props.favouriteIds.forEach(function (movie) {
				_react2.default.createElement(_movieCard2.default, { movie: movie, __source: {
						fileName: _jsxFileName,
						lineNumber: 25
					}
				});
			}) : null;
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, cards);
		}
	}]);

	return Favourites;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		favouriteIds: state.addFavourite.id
	};
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, mapStateToProps, null)(Favourites);