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

var _jsxFileName = '/Users/apurv/Desktop/nextjs/pages/index.js?entry';

//import './index.css'

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
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement('title', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, 'BMDB'), _react2.default.createElement('a', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, _react2.default.createElement('link', { href: './movieCard.css', rel: 'stylesheet', 'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			})), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN', crossorigin: 'anonymous', 'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			})), _react2.default.createElement('div', { className: 'appHeader', 'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement('h1', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, 'BMDB'), _react2.default.createElement('select', { className: 'filter', 'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, _react2.default.createElement('option', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, 'Rating: High'), _react2.default.createElement('option', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, 'Rating: Low'), _react2.default.createElement('option', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, 'Popularity: High'), _react2.default.createElement('option', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, 'Popularity: Low')), _react2.default.createElement('select', { className: 'year', 'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement('option', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, '2010'), _react2.default.createElement('option', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, '2011'), _react2.default.createElement('option', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, '2012'), _react2.default.createElement('option', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, '2013'), _react2.default.createElement('option', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, '2014'), _react2.default.createElement('option', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, '2015'), _react2.default.createElement('option', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, '2016'), _react2.default.createElement('option', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, '2017')), _react2.default.createElement(_link2.default, { href: '/favourites', __source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, 'favourites')), _react2.default.createElement('div', { className: 'gallery', 'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement('div', {
				'data-jsx': 481859422,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, this.props.data.results.map(function (movie, i) {
				return _react2.default.createElement(_movieCard2.default, { movie: movie, __source: {
						fileName: _jsxFileName,
						lineNumber: 62
					}
				});
			}))), _react2.default.createElement(_style2.default, {
				styleId: 481859422,
				css: '.filter[data-jsx="481859422"]{padding:10px}.year[data-jsx="481859422"]{padding:10px}.appHeader[data-jsx="481859422"]{padding:10px;background:blue}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFZ0IsQUFHb0IsQUFJQSxBQUlBLGFBUGQsQUFJQSxBQUlpQixnQkFDakIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FwdXJ2L0Rlc2t0b3AvbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbi8vaW1wb3J0ICcuL2luZGV4LmNzcydcblxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuL21vdmllQ2FyZCdcbi8vIGV4cG9ydCBkZWZhdWx0ICgpID0+IChcbi8vIFx0PGRpdj5cbi8vIFx0XHQ8SGVhZD5cbi8vIFx0XHRcdDx0aXRsZT5CTURCPC90aXRsZT5cbi8vIFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbi8vICAgICAgICAgXHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMC42LjEvYnVpbGQvcHVyZS1taW4uY3NzXCIgLz5cbi8vIFx0XHQ8L0hlYWQ+XG4vLyBcdFx0Qk1CRCBBcHBcbi8vIFx0PC9kaXY+XG4vLyApXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PWQxMTVmYmE5MjU3NjM3ZTdjYWYxZGJjN2E3NWExMWQ2Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9JHsxfScpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRhOiByZXMuZGF0YVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPkJNREI8L3RpdGxlPlxuXHRcdFx0XHRcdDxhPjxsaW5rIGhyZWY9XCIuL21vdmllQ2FyZC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz48L2E+XG5cdFx0XHRcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpbnRlZ3JpdHk9XCJzaGEzODQtd3ZmWHBxcFpaVlFHSzZUQWg1UFZsR09mUU5IU29EMnhiRStRa1B4Q0FGbE5FZXZvRUgzU2wwc2liVmNPUVZuTlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcEhlYWRlclwiPlxuXHRcdFx0XHQ8aDE+Qk1EQjwvaDE+XG5cdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwiZmlsdGVyXCI+XG5cdFx0XHRcdFx0PG9wdGlvbj5SYXRpbmc6IEhpZ2g8L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPlJhdGluZzogTG93PC9vcHRpb24+XG5cdFx0XHRcdFx0PG9wdGlvbj5Qb3B1bGFyaXR5OiBIaWdoPC9vcHRpb24+XG5cdFx0XHRcdFx0PG9wdGlvbj5Qb3B1bGFyaXR5OiBMb3c8L29wdGlvbj5cblx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwieWVhclwiPlxuXHRcdFx0XHRcdDxvcHRpb24+MjAxMDwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb24+MjAxMTwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb24+MjAxMjwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb24+MjAxMzwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb24+MjAxNDwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb24+MjAxNTwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb24+MjAxNjwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb24+MjAxNzwvb3B0aW9uPlxuXHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9mYXZvdXJpdGVzXCI+ZmF2b3VyaXRlczwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5XCI+IFxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZGF0YS5yZXN1bHRzLm1hcCgobW92aWUsIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PE1vdmllQ2FyZCBtb3ZpZT17bW92aWV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmZpbHRlciB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC55ZWFyIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmFwcEhlYWRlciB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogYmx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
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

exports.default = _class;