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

var _jsxFileName = '/Users/apurv/Desktop/nextjs/pages/index.js?entry';


var FirstPage = function (_React$Component) {
	(0, _inherits3.default)(FirstPage, _React$Component);

	function FirstPage() {
		(0, _classCallCheck3.default)(this, FirstPage);

		return (0, _possibleConstructorReturn3.default)(this, (FirstPage.__proto__ || (0, _getPrototypeOf2.default)(FirstPage)).apply(this, arguments));
	}

	(0, _createClass3.default)(FirstPage, [{
		key: 'render',
		value: function render() {
			console.log(this.props);
			return _react2.default.createElement('div', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, _react2.default.createElement('title', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, 'BMDB'), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN', crossorigin: 'anonymous', 'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			})), _react2.default.createElement('div', { className: 'appHeader', 'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement('h1', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, 'BMDB'), _react2.default.createElement('div', { className: 'headerLinks', 'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _react2.default.createElement(_link2.default, { href: '/favourites', __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement('a', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, 'FAVOURITES')), _react2.default.createElement(_link2.default, { href: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement('a', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, 'POPULAR')))), _react2.default.createElement('div', { className: 'headerBar', 'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, _react2.default.createElement('select', { className: 'filter', 'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, _react2.default.createElement('option', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, 'Rating: High'), _react2.default.createElement('option', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, 'Rating: Low'), _react2.default.createElement('option', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, 'Popularity: High'), _react2.default.createElement('option', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, 'Popularity: Low')), _react2.default.createElement('select', { className: 'year', 'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement('option', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, '2010'), _react2.default.createElement('option', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, '2011'), _react2.default.createElement('option', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, '2012'), _react2.default.createElement('option', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, '2013'), _react2.default.createElement('option', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, '2014'), _react2.default.createElement('option', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, '2015'), _react2.default.createElement('option', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, '2016'), _react2.default.createElement('option', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, '2017'))), _react2.default.createElement('div', { className: 'gallery', 'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, _react2.default.createElement('div', {
				'data-jsx': 478024196,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, this.props.data.results.map(function (movie, i) {
				return _react2.default.createElement(_movieCard2.default, { movie: movie, key: i, __source: {
						fileName: _jsxFileName,
						lineNumber: 63
					}
				});
			}))), _react2.default.createElement(_style2.default, {
				styleId: 478024196,
				css: '.filter[data-jsx="478024196"]{padding:10px}.year[data-jsx="478024196"]{padding:10px}.appHeader[data-jsx="478024196"]{background:blue}.headerLinks[data-jsx="478024196"]{padding:5px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FZ0IsQUFHb0IsQUFJQSxBQUlHLEFBSUosWUFDYixDQVpBLEFBSUEsR0FJQSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXB1cnYvRGVza3RvcC9uZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXG5pbXBvcnQge2luaXRTdG9yZX0gZnJvbSAnLi4vc3RvcmUuanMnXG5pbXBvcnQge2ZldGNoRGF0YX0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9tb3ZpZUNhcmQnXG5cbmNsYXNzIEZpcnN0UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdC8vIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3N0b3JlfSkge1xuXHQvLyBcdGxldCB1cmwgPSAnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9ZDExNWZiYTkyNTc2MzdlN2NhZjFkYmM3YTc1YTExZDYmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0kezF9Jztcblx0Ly8gXHRzdG9yZS5kaXNwYXRjaChmZXRjaERhdGEodXJsKSk7XG5cdC8vIH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9ZDExNWZiYTkyNTc2MzdlN2NhZjFkYmM3YTc1YTExZDYmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0kezF9Jyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGE6IHJlcy5kYXRhXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+Qk1EQjwvdGl0bGU+XG5cdFx0XHRcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpbnRlZ3JpdHk9XCJzaGEzODQtd3ZmWHBxcFpaVlFHSzZUQWg1UFZsR09mUU5IU29EMnhiRStRa1B4Q0FGbE5FZXZvRUgzU2wwc2liVmNPUVZuTlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcEhlYWRlclwiPlxuXHRcdFx0XHRcdDxoMT5CTURCPC9oMT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckxpbmtzXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Zhdm91cml0ZXNcIj48YT5GQVZPVVJJVEVTPC9hPjwvTGluaz5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+PGE+UE9QVUxBUjwvYT48L0xpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckJhclwiPlxuXHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwiZmlsdGVyXCI+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPlJhdGluZzogSGlnaDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj5SYXRpbmc6IExvdzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj5Qb3B1bGFyaXR5OiBIaWdoPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPlBvcHVsYXJpdHk6IExvdzwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwieWVhclwiPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj4yMDEwPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjIwMTE8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+MjAxMjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj4yMDEzPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjIwMTQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+MjAxNTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj4yMDE2PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjIwMTc8L29wdGlvbj5cblx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVwiPiBcblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZGF0YS5yZXN1bHRzLm1hcCgobW92aWUsIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8TW92aWVDYXJkIG1vdmllPXttb3ZpZX0ga2V5PXtpfS8+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5maWx0ZXIge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQueWVhciB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5hcHBIZWFkZXIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogYmx1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuaGVhZGVyTGlua3Mge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0ZmV0Y2hEYXRhOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZmV0Y2hEYXRhLCBkaXNwYXRjaClcdFxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUsIG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoRmlyc3RQYWdlKVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
			}));
		}
	}], [{
		key: 'getInitialProps',

		// static async getInitialProps({store}) {
		// 	let url = 'https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}';
		// 	store.dispatch(fetchData(url));
		// }

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

	return FirstPage;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		fetchData: (0, _redux.bindActionCreators)(_index.fetchData, dispatch)
	};
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(FirstPage);