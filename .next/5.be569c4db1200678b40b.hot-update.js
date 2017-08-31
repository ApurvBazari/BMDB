webpackHotUpdate(5,{

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = __webpack_require__(569);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(67);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(68);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(69);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(570);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__(563);

var _items = __webpack_require__(571);

var _nextReduxWrapper = __webpack_require__(564);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _reactRedux = __webpack_require__(555);

var _head = __webpack_require__(248);

var _head2 = _interopRequireDefault(_head);

var _axios = __webpack_require__(616);

var _axios2 = _interopRequireDefault(_axios);

var _link = __webpack_require__(635);

var _link2 = _interopRequireDefault(_link);

var _movieCard = __webpack_require__(645);

var _movieCard2 = _interopRequireDefault(_movieCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/apurv/Desktop/BMDB/components/homePage.js';


var HomePage = function (_React$Component) {
	(0, _inherits3.default)(HomePage, _React$Component);

	function HomePage(props) {
		(0, _classCallCheck3.default)(this, HomePage);

		var _this = (0, _possibleConstructorReturn3.default)(this, (HomePage.__proto__ || (0, _getPrototypeOf2.default)(HomePage)).call(this, props));

		_this.handleSearch = function () {
			console.log(_this.props);
		};

		return _this;
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
			return _react2.default.createElement('div', { className: 'app', 'data-jsx': 4017180641,
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
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, 'BMDB'), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			})), _react2.default.createElement('div', { className: 'appHeader', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement('img', { src: '/static/logo.png', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}), _react2.default.createElement('div', { className: 'headerLinks', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement(_link2.default, { href: '/favourites', __source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, _react2.default.createElement('a', { className: 'link linkFavourite', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, 'FAVOURITES')), _react2.default.createElement(_link2.default, { href: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, _react2.default.createElement('a', { className: 'link linkPopular', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, 'POPULAR')), _react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true', onClick: this.handleSearch, 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}))), _react2.default.createElement('div', { className: 'headerBar', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, _react2.default.createElement('select', { className: 'select select-filter', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, 'Rating: High'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, 'Rating: Low'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, 'Popularity: High'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, 'Popularity: Low')), _react2.default.createElement('select', { className: 'select select-year', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, '2010'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, '2011'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, '2012'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, '2013'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, '2014'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, '2015'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, '2016'), _react2.default.createElement('option', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, '2017'))), _react2.default.createElement('div', { className: 'gallery', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement('div', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, this.props.items.items.results.map(function (movie, i) {
				return _react2.default.createElement(_movieCard2.default, { movie: movie, key: i, __source: {
						fileName: _jsxFileName,
						lineNumber: 67
					}
				});
			}))), _react2.default.createElement(_style2.default, {
				styleId: 4017180641,
				css: '.filter[data-jsx="4017180641"]{padding:10px}.year[data-jsx="4017180641"]{padding:10px}.appHeader[data-jsx="4017180641"]{background:#1C1C2D;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px}.headerLinks[data-jsx="4017180641"]{padding:5px;position:absolute;right:5px}.link[data-jsx="4017180641"]{padding:15px;color:white;font-size:16px}.fa[data-jsx="4017180641"]{font-size:18px;color:white;padding:15px}.headerBar[data-jsx="4017180641"]{padding:10px}.select[data-jsx="4017180641"]{margin:21px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVnQixBQUdvQixBQUlBLEFBSU0sQUFPUCxBQU1DLEFBTUUsQUFNRixBQUlELFlBckJNLEFBc0JuQixDQXJDQSxBQUlBLEFBaUJhLEFBWWIsRUFOYSxJQW5CQSxNQWNHLEVBTUYsR0FYZixDQVJlLFNBUWQsQUFNQSxBQU1BLGlFQW5CYyxhQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXB1cnYvRGVza3RvcC9CTURCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtpbml0U3RvcmV9IGZyb20gJy4uL3N0b3JlLmpzJ1xuaW1wb3J0IHtpdGVtc0ZldGNoRGF0YX0gZnJvbSAnLi4vYWN0aW9ucy9pdGVtcydcblxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvbW92aWVDYXJkJ1xuXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IgKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0aGFuZGxlU2VhcmNoID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtb3ZpZUxpc3QnKSkge1xuXHRcdFx0c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbW92aWVMaXN0JywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5kYXRhKSlcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5CTURCPC90aXRsZT5cblx0XHRcdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcHBIZWFkZXJcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIj48L2ltZz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckxpbmtzXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Zhdm91cml0ZXNcIj48YSBjbGFzc05hbWU9XCJsaW5rIGxpbmtGYXZvdXJpdGVcIj5GQVZPVVJJVEVTPC9hPjwvTGluaz5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwibGluayBsaW5rUG9wdWxhclwiPlBPUFVMQVI8L2E+PC9MaW5rPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PjwvaT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyQmFyXCI+XG5cdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWU9XCJzZWxlY3Qgc2VsZWN0LWZpbHRlclwiPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj5SYXRpbmc6IEhpZ2g8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+UmF0aW5nOiBMb3c8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+UG9wdWxhcml0eTogSGlnaDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj5Qb3B1bGFyaXR5OiBMb3c8L29wdGlvbj5cblx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZT1cInNlbGVjdCBzZWxlY3QteWVhclwiPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj4yMDEwPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjIwMTE8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+MjAxMjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj4yMDEzPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjIwMTQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+MjAxNTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj4yMDE2PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjIwMTc8L29wdGlvbj5cblx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVwiPiBcblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaXRlbXMuaXRlbXMucmVzdWx0cy5tYXAoKG1vdmllLCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PE1vdmllQ2FyZCBtb3ZpZT17bW92aWV9IGtleT17aX0vPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuZmlsdGVyIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnllYXIge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYXBwSGVhZGVyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMxQzFDMkQ7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuaGVhZGVyTGlua3Mge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDVweFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5saW5rIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmZhIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmhlYWRlckJhciB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zZWxlY3Qge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAyMXB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLFxuICAgICAgICBoYXNFcnJvcmVkOiBzdGF0ZS5pdGVtc0hhc0Vycm9yZWQsXG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUuaXRlbXNJc0xvYWRpbmdcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKEhvbWVQYWdlKTsiXX0= */\n/*@ sourceURL=components/homePage.js */'
			}));
		}
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(HomePage);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/apurv/Desktop/BMDB/components/homePage.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/apurv/Desktop/BMDB/components/homePage.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iZTU2OWM0ZGIxMjAwNjc4YjQwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lUGFnZS5qcz82YTkzNzZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7aW5pdFN0b3JlfSBmcm9tICcuLi9zdG9yZS5qcydcbmltcG9ydCB7aXRlbXNGZXRjaERhdGF9IGZyb20gJy4uL2FjdGlvbnMvaXRlbXMnXG5cbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL21vdmllQ2FyZCdcblxuY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yIChwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGlmICghc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbW92aWVMaXN0JykpIHtcblx0XHRcdHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ21vdmllTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSkpXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+Qk1EQjwvdGl0bGU+XG5cdFx0XHRcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwSGVhZGVyXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIvc3RhdGljL2xvZ28ucG5nXCI+PC9pbWc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJMaW5rc1wiPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9mYXZvdXJpdGVzXCI+PGEgY2xhc3NOYW1lPVwibGluayBsaW5rRmF2b3VyaXRlXCI+RkFWT1VSSVRFUzwvYT48L0xpbms+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cImxpbmsgbGlua1BvcHVsYXJcIj5QT1BVTEFSPC9hPjwvTGluaz5cblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNofT48L2k+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckJhclwiPlxuXHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwic2VsZWN0IHNlbGVjdC1maWx0ZXJcIj5cblx0XHRcdFx0XHRcdDxvcHRpb24+UmF0aW5nOiBIaWdoPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPlJhdGluZzogTG93PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPlBvcHVsYXJpdHk6IEhpZ2g8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+UG9wdWxhcml0eTogTG93PC9vcHRpb24+XG5cdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWU9XCJzZWxlY3Qgc2VsZWN0LXllYXJcIj5cblx0XHRcdFx0XHRcdDxvcHRpb24+MjAxMDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj4yMDExPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjIwMTI8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+MjAxMzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj4yMDE0PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjIwMTU8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24+MjAxNjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbj4yMDE3PC9vcHRpb24+XG5cdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlcIj4gXG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLml0ZW1zLml0ZW1zLnJlc3VsdHMubWFwKChtb3ZpZSwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxNb3ZpZUNhcmQgbW92aWU9e21vdmllfSBrZXk9e2l9Lz5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmZpbHRlciB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC55ZWFyIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmFwcEhlYWRlciB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMUMxQzJEO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmhlYWRlckxpbmtzIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHJpZ2h0OiA1cHhcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubGluayB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5mYSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5oZWFkZXJCYXIge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuc2VsZWN0IHtcblx0XHRcdFx0XHRcdG1hcmdpbjogMjFweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcyxcbiAgICAgICAgaGFzRXJyb3JlZDogc3RhdGUuaXRlbXNIYXNFcnJvcmVkLFxuICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLml0ZW1zSXNMb2FkaW5nXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShIb21lUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9ob21lUGFnZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFMQTtBQUNBO0FBQ0E7Ozs7O0FBT0E7QUFBQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFGQTtBQWpDQTtBQW9GQTtBQXBGQTs7Ozs7QUFuQkE7QUFDQTtBQXlHQTs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9