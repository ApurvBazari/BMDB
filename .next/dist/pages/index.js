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

var _redux = require('redux');

var _store = require('../store.js');

var _index = require('../actions/index.js');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _movieCard = require('../components/movieCard');

var _movieCard2 = _interopRequireDefault(_movieCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/apurv/Desktop/BMDB/pages/index.js?entry';


var FirstPage = function (_React$Component) {
	(0, _inherits3.default)(FirstPage, _React$Component);

	function FirstPage() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, FirstPage);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FirstPage.__proto__ || (0, _getPrototypeOf2.default)(FirstPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleSearch = function () {
			console.log(_this.props);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(FirstPage, [{
		key: 'render',
		value: function render() {
			console.log(this.props);
			return _react2.default.createElement('div', { className: 'app', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, _react2.default.createElement('title', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, 'BMDB'), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN', crossorigin: 'anonymous', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			})), _react2.default.createElement('div', { className: 'appHeader', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, _react2.default.createElement('img', { src: '/static/logo.png', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}), _react2.default.createElement('div', { className: 'headerLinks', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement(_link2.default, { href: '/favourites', __source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement('a', { className: 'link linkFavourite', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, 'FAVOURITES')), _react2.default.createElement(_link2.default, { href: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement('a', { className: 'link linkPopular', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, 'POPULAR')), _react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true', onClick: this.handleSearch, 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}))), _react2.default.createElement('div', { className: 'headerBar', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _react2.default.createElement('select', { className: 'select select-filter', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, 'Rating: High'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, 'Rating: Low'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, 'Popularity: High'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, 'Popularity: Low')), _react2.default.createElement('select', { className: 'select select-year', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, '2010'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, '2011'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, '2012'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, '2013'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, '2014'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, '2015'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, '2016'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, '2017'))), _react2.default.createElement('div', { className: 'gallery', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, _react2.default.createElement('div', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, this.props.data.results.map(function (movie, i) {
				return _react2.default.createElement(_movieCard2.default, { movie: movie, key: i, __source: {
						fileName: _jsxFileName,
						lineNumber: 65
					}
				});
			}))), _react2.default.createElement(_style2.default, {
				styleId: 4017180641,
				css: '.filter[data-jsx="4017180641"]{padding:10px}.year[data-jsx="4017180641"]{padding:10px}.appHeader[data-jsx="4017180641"]{background:#1C1C2D;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px}.headerLinks[data-jsx="4017180641"]{padding:5px;position:absolute;right:5px}.link[data-jsx="4017180641"]{padding:15px;color:white;font-size:16px}.fa[data-jsx="4017180641"]{font-size:18px;color:white;padding:15px}.headerBar[data-jsx="4017180641"]{padding:10px}.select[data-jsx="4017180641"]{margin:21px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFZ0IsQUFHb0IsQUFJQSxBQUlNLEFBT1AsQUFNQyxBQU1FLEFBTUYsQUFJRCxZQXJCTSxBQXNCbkIsQ0FyQ0EsQUFJQSxBQWlCYSxBQVliLEVBTmEsSUFuQkEsTUFjRyxFQU1GLEdBWGYsQ0FSZSxTQVFkLEFBTUEsQUFNQSxpRUFuQmMsYUFDZCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcHVydi9EZXNrdG9wL0JNREIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXG5pbXBvcnQge2luaXRTdG9yZX0gZnJvbSAnLi4vc3RvcmUuanMnXG5pbXBvcnQge2ZldGNoRGF0YX0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9tb3ZpZUNhcmQnXG5cbmNsYXNzIEZpcnN0UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PWQxMTVmYmE5MjU3NjM3ZTdjYWYxZGJjN2E3NWExMWQ2Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9JHsxfScpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRhOiByZXMuZGF0YVxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+Qk1EQjwvdGl0bGU+XG5cdFx0XHRcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpbnRlZ3JpdHk9XCJzaGEzODQtd3ZmWHBxcFpaVlFHSzZUQWg1UFZsR09mUU5IU29EMnhiRStRa1B4Q0FGbE5FZXZvRUgzU2wwc2liVmNPUVZuTlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcEhlYWRlclwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiPjwvaW1nPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyTGlua3NcIj5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvZmF2b3VyaXRlc1wiPjxhIGNsYXNzTmFtZT1cImxpbmsgbGlua0Zhdm91cml0ZVwiPkZBVk9VUklURVM8L2E+PC9MaW5rPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJsaW5rIGxpbmtQb3B1bGFyXCI+UE9QVUxBUjwvYT48L0xpbms+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH0+PC9pPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJCYXJcIj5cblx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZT1cInNlbGVjdCBzZWxlY3QtZmlsdGVyXCI+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPlJhdGluZzogSGlnaDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj5SYXRpbmc6IExvdzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj5Qb3B1bGFyaXR5OiBIaWdoPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPlBvcHVsYXJpdHk6IExvdzwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwic2VsZWN0IHNlbGVjdC15ZWFyXCI+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjIwMTA8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+MjAxMTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj4yMDEyPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjIwMTM8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+MjAxNDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj4yMDE1PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjIwMTY8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+MjAxNzwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5XCI+IFxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5kYXRhLnJlc3VsdHMubWFwKChtb3ZpZSwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxNb3ZpZUNhcmQgbW92aWU9e21vdmllfSBrZXk9e2l9Lz5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmZpbHRlciB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC55ZWFyIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmFwcEhlYWRlciB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMUMxQzJEO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmhlYWRlckxpbmtzIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHJpZ2h0OiA1cHhcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubGluayB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5mYSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5oZWFkZXJCYXIge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuc2VsZWN0IHtcblx0XHRcdFx0XHRcdG1hcmdpbjogMjFweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGZldGNoRGF0YTogYmluZEFjdGlvbkNyZWF0b3JzKGZldGNoRGF0YSwgZGlzcGF0Y2gpXHRcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlLCBudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEZpcnN0UGFnZSlcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
			}));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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
				return _ref2.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return FirstPage;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		fetchData: (0, _redux.bindActionCreators)(_index.fetchData, dispatch)
	};
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(FirstPage);