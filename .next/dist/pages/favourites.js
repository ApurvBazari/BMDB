'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _favourites = require('../components/favourites.js');

var _favourites2 = _interopRequireDefault(_favourites);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _fetchFavourite = require('../actions/fetchFavourite.js');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/apurv/Desktop/BMDB/pages/favourites.js?entry';


var Favourite = function (_React$Component) {
	(0, _inherits3.default)(Favourite, _React$Component);

	function Favourite() {
		(0, _classCallCheck3.default)(this, Favourite);

		return (0, _possibleConstructorReturn3.default)(this, (Favourite.__proto__ || (0, _getPrototypeOf2.default)(Favourite)).apply(this, arguments));
	}

	(0, _createClass3.default)(Favourite, [{
		key: 'render',
		value: function render() {
			//console.log(this, this.isServer);
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}, _react2.default.createElement(_favourites2.default, { linkTo: '/favourites', __source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
				var store = _ref.store,
				    isServer = _ref.isServer;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (isServer) {
									_context.next = 3;
									break;
								}

								_context.next = 3;
								return store.dispatch((0, _fetchFavourite.getFavourite)());

							case 3:
								return _context.abrupt('return', {
									isServer: isServer
								});

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref2.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return Favourite;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		getFavourite: (0, _redux.bindActionCreators)(_fetchFavourite.getFavourite, dispatch)
	};
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, function (state) {
	return state;
}, mapDispatchToProps)(Favourite);

//export default Favourite;