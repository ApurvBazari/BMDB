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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _movieCard = require('./movieCard');

var _movieCard2 = _interopRequireDefault(_movieCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default () => (
// 	<div>
// 		<Head>
// 			<title>BMDB</title>
// 			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
//         	<link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/pure-min.css" />
// 		</Head>
// 		BMBD App
// 	</div>
// )

var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	function _class() {
		(0, _classCallCheck3.default)(this, _class);

		return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	}

	(0, _createClass3.default)(_class, [{
		key: 'render',
		value: function render() {
			console.log(this.props);
			return _react2.default.createElement('div', {
				'data-jsx': 481859422
			}, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
				'data-jsx': 481859422
			}, 'BMDB'), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN', crossorigin: 'anonymous', 'data-jsx': 481859422
			})), _react2.default.createElement('div', { className: 'appHeader', 'data-jsx': 481859422
			}, _react2.default.createElement('h1', {
				'data-jsx': 481859422
			}, 'BMDB'), _react2.default.createElement('select', { className: 'filter', 'data-jsx': 481859422
			}, _react2.default.createElement('option', {
				'data-jsx': 481859422
			}, 'Rating: High'), _react2.default.createElement('option', {
				'data-jsx': 481859422
			}, 'Rating: Low'), _react2.default.createElement('option', {
				'data-jsx': 481859422
			}, 'Popularity: High'), _react2.default.createElement('option', {
				'data-jsx': 481859422
			}, 'Popularity: Low')), _react2.default.createElement('select', { className: 'year', 'data-jsx': 481859422
			}, _react2.default.createElement('option', {
				'data-jsx': 481859422
			}, '2010'), _react2.default.createElement('option', {
				'data-jsx': 481859422
			}, '2011'), _react2.default.createElement('option', {
				'data-jsx': 481859422
			}, '2012'), _react2.default.createElement('option', {
				'data-jsx': 481859422
			}, '2013'), _react2.default.createElement('option', {
				'data-jsx': 481859422
			}, '2014'), _react2.default.createElement('option', {
				'data-jsx': 481859422
			}, '2015'), _react2.default.createElement('option', {
				'data-jsx': 481859422
			}, '2016'), _react2.default.createElement('option', {
				'data-jsx': 481859422
			}, '2017')), _react2.default.createElement(_link2.default, { href: '/favourites' }, 'favourites')), _react2.default.createElement('div', { className: 'gallery', 'data-jsx': 481859422
			}, _react2.default.createElement('div', {
				'data-jsx': 481859422
			}, this.props.data.results.map(function (movie, i) {
				return _react2.default.createElement(_movieCard2.default, { movie: movie });
			}))), _react2.default.createElement(_style2.default, {
				styleId: 481859422,
				css: '.filter[data-jsx="481859422"]{padding:10px}.year[data-jsx="481859422"]{padding:10px}.appHeader[data-jsx="481859422"]{padding:10px;background:blue}'
			}));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var res;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _axios2.default.get('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}');

							case 2:
								res = _context.sent;
								return _context.abrupt('return', {
									data: res.data
								});

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return _class;
}(_react2.default.Component);

//import './index.css'

exports.default = _class;