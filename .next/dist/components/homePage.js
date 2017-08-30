'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _items = require('../actions/items');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _reactRedux = require('react-redux');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _movieCard = require('../components/movieCard');

var _movieCard2 = _interopRequireDefault(_movieCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/apurv/Desktop/BMDB/components/homePage.js';


var HomePage = function (_React$Component) {
	(0, _inherits3.default)(HomePage, _React$Component);

	function HomePage() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, HomePage);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HomePage.__proto__ || (0, _getPrototypeOf2.default)(HomePage)).call.apply(_ref, [this].concat(args))), _this), _this.handleSearch = function () {
			console.log(_this.props);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(HomePage, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (!sessionStorage.getItem('movieList')) {
				sessionStorage.setItem('movieList', (0, _stringify2.default)(this.props.data));
			}
		}
	}, {
		key: 'render',
		value: function render() {
			console.log(this.props);
			console.log(this.state);
			return _react2.default.createElement('div', { className: 'app', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement('title', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, 'BMDB'), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			})), _react2.default.createElement('div', { className: 'appHeader', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement('img', { src: '/static/logo.png', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}), _react2.default.createElement('div', { className: 'headerLinks', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, _react2.default.createElement(_link2.default, { href: '/favourites', __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement('a', { className: 'link linkFavourite', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, 'FAVOURITES')), _react2.default.createElement(_link2.default, { href: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement('a', { className: 'link linkPopular', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, 'POPULAR')), _react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true', onClick: this.handleSearch, 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}))), _react2.default.createElement('div', { className: 'headerBar', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, _react2.default.createElement('select', { className: 'select select-filter', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, 'Rating: High'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, 'Rating: Low'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, 'Popularity: High'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, 'Popularity: Low')), _react2.default.createElement('select', { className: 'select select-year', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, '2010'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, '2011'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, '2012'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, '2013'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, '2014'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, '2015'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}, '2016'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, '2017'))), _react2.default.createElement('div', { className: 'gallery', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}, _react2.default.createElement('div', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, this.props.items.map(function (movie, i) {
				return _react2.default.createElement(_movieCard2.default, { movie: movie, key: i, __source: {
						fileName: _jsxFileName,
						lineNumber: 84
					}
				});
			}))), _react2.default.createElement(_style2.default, {
				styleId: 4017180641,
				css: '.filter[data-jsx="4017180641"]{padding:10px}.year[data-jsx="4017180641"]{padding:10px}.appHeader[data-jsx="4017180641"]{background:#1C1C2D;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px}.headerLinks[data-jsx="4017180641"]{padding:5px;position:absolute;right:5px}.link[data-jsx="4017180641"]{padding:15px;color:white;font-size:16px}.fa[data-jsx="4017180641"]{font-size:18px;color:white;padding:15px}.headerBar[data-jsx="4017180641"]{padding:10px}.select[data-jsx="4017180641"]{margin:21px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0ZnQixBQUdvQixBQUlBLEFBSU0sQUFPUCxBQU1DLEFBTUUsQUFNRixBQUlELFlBckJNLEFBc0JuQixDQXJDQSxBQUlBLEFBaUJhLEFBWWIsRUFOYSxJQW5CQSxNQWNHLEVBTUYsR0FYZixDQVJlLFNBUWQsQUFNQSxBQU1BLGlFQW5CYyxhQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXB1cnYvRGVza3RvcC9CTURCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHtpbml0U3RvcmV9IGZyb20gJy4uL3N0b3JlLmpzJ1xuaW1wb3J0IHtpdGVtc2ZldGNoRGF0YX0gZnJvbSAnLi4vYWN0aW9ucy9pdGVtcydcblxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvbW92aWVDYXJkJ1xuXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHN0b3JlLCBpc1NlcnZlciB9KSB7XG5cdFx0c3RvcmUuZGlzcGF0Y2goZmV0Y2hEYXRhKCdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/YXBpX2tleT1kMTE1ZmJhOTI1NzYzN2U3Y2FmMWRiYzdhNzVhMTFkNiZsYW5ndWFnZT1lbi1VUyZwYWdlPSR7MX0nKSk7XG5cdFx0aWYoIXByb2Nlc3MuYnJvd3Nlcikge1xuXHRcdFx0Ly9jb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PWQxMTVmYmE5MjU3NjM3ZTdjYWYxZGJjN2E3NWExMWQ2Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9JHsxfScpO1xuXHRcdFx0c3RvcmUuZGlzcGF0Y2goZmV0Y2hEYXRhKCdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/YXBpX2tleT1kMTE1ZmJhOTI1NzYzN2U3Y2FmMWRiYzdhNzVhMTFkNiZsYW5ndWFnZT1lbi1VUyZwYWdlPSR7MX0nKSk7XG5cdFx0XHQvL2NvbnN0IHJlcyA9IHRoaXMucHJvcHMuZmV0Y2hEYXRhKCdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/YXBpX2tleT1kMTE1ZmJhOTI1NzYzN2U3Y2FmMWRiYzdhNzVhMTFkNiZsYW5ndWFnZT1lbi1VUyZwYWdlPSR7MX0nKVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogcmVzLFxuXHRcdFx0XHRzZXJ2aW5nRnJvbTogJ3NlcnZlcidcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbW92aWVMaXN0JykpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdFx0c2VydmluZ0Zyb206ICdzZXNzaW9uU3RvcmFnZSdcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcyk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZiAoIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21vdmllTGlzdCcpKSB7XG5cdFx0XHRzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdtb3ZpZUxpc3QnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmRhdGEpKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPkJNREI8L3RpdGxlPlxuXHRcdFx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcEhlYWRlclwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiPjwvaW1nPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyTGlua3NcIj5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvZmF2b3VyaXRlc1wiPjxhIGNsYXNzTmFtZT1cImxpbmsgbGlua0Zhdm91cml0ZVwiPkZBVk9VUklURVM8L2E+PC9MaW5rPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJsaW5rIGxpbmtQb3B1bGFyXCI+UE9QVUxBUjwvYT48L0xpbms+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH0+PC9pPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJCYXJcIj5cblx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZT1cInNlbGVjdCBzZWxlY3QtZmlsdGVyXCI+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPlJhdGluZzogSGlnaDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj5SYXRpbmc6IExvdzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj5Qb3B1bGFyaXR5OiBIaWdoPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPlBvcHVsYXJpdHk6IExvdzwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwic2VsZWN0IHNlbGVjdC15ZWFyXCI+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjIwMTA8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+MjAxMTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj4yMDEyPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjIwMTM8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+MjAxNDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj4yMDE1PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjIwMTY8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+MjAxNzwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5XCI+IFxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5pdGVtcy5tYXAoKG1vdmllLCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PE1vdmllQ2FyZCBtb3ZpZT17bW92aWV9IGtleT17aX0vPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuZmlsdGVyIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnllYXIge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYXBwSGVhZGVyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMxQzFDMkQ7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuaGVhZGVyTGlua3Mge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDVweFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5saW5rIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmZhIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmhlYWRlckJhciB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zZWxlY3Qge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAyMXB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLFxuICAgICAgICBoYXNFcnJvcmVkOiBzdGF0ZS5pdGVtc0hhc0Vycm9yZWQsXG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUuaXRlbXNJc0xvYWRpbmdcbiAgICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0ZmV0Y2hEYXRhOiAodXJsKSA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoaXRlbXNmZXRjaERhdGEsIGRpc3BhdGNoKVx0XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZVBhZ2UpOyJdfQ== */\n/*@ sourceURL=components/homePage.js */'
			}));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
				var store = _ref2.store,
				    isServer = _ref2.isServer;
				var data;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								store.dispatch(fetchData('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}'));

								if (process.browser) {
									_context.next = 6;
									break;
								}

								//const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}');
								store.dispatch(fetchData('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}'));
								//const res = this.props.fetchData('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}')
								return _context.abrupt('return', {
									data: res,
									servingFrom: 'server'
								});

							case 6:
								data = JSON.parse(sessionStorage.getItem('movieList'));
								return _context.abrupt('return', {
									data: data,
									servingFrom: 'sessionStorage'
								});

							case 8:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref3.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return HomePage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		items: state.items,
		hasErrored: state.itemsHasErrored,
		isLoading: state.itemsIsLoading
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		fetchData: function fetchData(url) {
			return (0, _redux.bindActionCreators)(_items.itemsfetchData, dispatch);
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomePage);