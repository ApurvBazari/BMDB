'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _items = require('../actions/items');

var _reactRedux = require('react-redux');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _redux = require('redux');

var _movieCard = require('../components/movieCard');

var _movieCard2 = _interopRequireDefault(_movieCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/apurv/Desktop/BMDB/components/homePage.js';


var HomePage = function (_React$Component) {
	(0, _inherits3.default)(HomePage, _React$Component);

	function HomePage() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, HomePage);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HomePage.__proto__ || (0, _getPrototypeOf2.default)(HomePage)).call.apply(_ref, [this].concat(args))), _this), _this.onFilterChange = function (e) {
			var value = e.target.value;
			console.log('Value:', value);
			var url = void 0;
			if (value === 'rating') {
				url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
			} else if (value === 'popularity') {
				url = 'https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}';
			} else if (value === 'upcoming') {
				url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
			} else if (value === 'nowPlaying') {
				url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
			}
			_this.props.itemsFetchData(url);
			_this.setState({
				filterValue: value,
				dateValue: 'dateFilter'
			});
		}, _this.onDateChange = function (e) {
			var value = e.target.value;
			var url = 'https://api.themoviedb.org/3/search/movie?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&query=m&year=' + value;
			_this.props.itemsFetchData(url);
			_this.setState({
				dateValue: value,
				filterValue: 'filter'
			});
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
			return _react2.default.createElement('div', { className: 'app', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, _react2.default.createElement('div', { className: 'headerBar', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement('select', { className: 'select select-filter', onChange: this.onFilterChange, value: this.state ? this.state.filterValue : 'filter', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement('option', { value: 'filter', disabled: true, 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, 'Filter By'), _react2.default.createElement('option', { value: 'popularity', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, 'Popularity'), _react2.default.createElement('option', { value: 'rating', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, 'Rating'), _react2.default.createElement('option', { value: 'upcoming', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, 'Upcoming'), _react2.default.createElement('option', { value: 'nowPlaying', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, 'Now Playing')), _react2.default.createElement('select', { className: 'select select-year', onChange: this.onDateChange, value: this.state ? this.state.dateValue : 'dateFilter', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, _react2.default.createElement('option', { value: 'dateFilter', disabled: true, 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, 'Filter By Year'), _react2.default.createElement('option', { value: '2010', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, '2010'), _react2.default.createElement('option', { value: '2011', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, '2011'), _react2.default.createElement('option', { value: '2012', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, '2012'), _react2.default.createElement('option', { value: '2013', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, '2013'), _react2.default.createElement('option', { value: '2014', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, '2014'), _react2.default.createElement('option', { value: '2015', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, '2015'), _react2.default.createElement('option', { value: '2016', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}, '2016'), _react2.default.createElement('option', { value: '2017', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, '2017'))), _react2.default.createElement('div', { className: 'gallery', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, _react2.default.createElement('div', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, this.props.items.results.map(function (movie, i) {
				return _react2.default.createElement(_movieCard2.default, { movie: movie, key: i, __source: {
						fileName: _jsxFileName,
						lineNumber: 76
					}
				});
			}))), _react2.default.createElement(_style2.default, {
				styleId: 4017180641,
				css: '.filter[data-jsx="4017180641"]{padding:10px}.year[data-jsx="4017180641"]{padding:10px}.appHeader[data-jsx="4017180641"]{background:#1C1C2D;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px}.headerLinks[data-jsx="4017180641"]{padding:5px;position:absolute;right:5px}.link[data-jsx="4017180641"]{padding:15px;color:white;font-size:16px}.fa[data-jsx="4017180641"]{font-size:18px;color:white;padding:15px}.headerBar[data-jsx="4017180641"]{padding:10px}.select[data-jsx="4017180641"]{margin:21px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0ZnQixBQUdvQixBQUlBLEFBSU0sQUFPUCxBQU1DLEFBTUUsQUFNRixBQUlELFlBckJNLEFBc0JuQixDQXJDQSxBQUlBLEFBaUJhLEFBWWIsRUFOYSxJQW5CQSxNQWNHLEVBTUYsR0FYZixDQVJlLFNBUWQsQUFNQSxBQU1BLGlFQW5CYyxhQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FwdXJ2L0Rlc2t0b3AvQk1EQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7aXRlbXNGZXRjaERhdGF9IGZyb20gJy4uL2FjdGlvbnMvaXRlbXMnXG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL21vdmllQ2FyZCdcblxuY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRvbkZpbHRlckNoYW5nZSA9IChlKSA9PiB7XG5cdFx0bGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG5cdFx0Y29uc29sZS5sb2coJ1ZhbHVlOicsIHZhbHVlKTtcblx0XHRsZXQgdXJsO1xuXHRcdGlmICh2YWx1ZSA9PT0gJ3JhdGluZycpIHtcblx0XHRcdHVybCA9ICdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3RvcF9yYXRlZD9hcGlfa2V5PWQxMTVmYmE5MjU3NjM3ZTdjYWYxZGJjN2E3NWExMWQ2Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MSc7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3BvcHVsYXJpdHknKSB7XG5cdFx0XHR1cmwgPSAnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9ZDExNWZiYTkyNTc2MzdlN2NhZjFkYmM3YTc1YTExZDYmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0kezF9Jztcblx0XHR9IGVsc2UgaWYgKHZhbHVlID09PSAndXBjb21pbmcnKSB7XG5cdFx0XHR1cmwgPSAnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS91cGNvbWluZz9hcGlfa2V5PWQxMTVmYmE5MjU3NjM3ZTdjYWYxZGJjN2E3NWExMWQ2Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MSc7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA9PT0gJ25vd1BsYXlpbmcnKSB7XG5cdFx0XHR1cmwgPSAnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9ub3dfcGxheWluZz9hcGlfa2V5PWQxMTVmYmE5MjU3NjM3ZTdjYWYxZGJjN2E3NWExMWQ2Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MSc7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMuaXRlbXNGZXRjaERhdGEodXJsKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGZpbHRlclZhbHVlOiB2YWx1ZSxcblx0XHRcdGRhdGVWYWx1ZTogJ2RhdGVGaWx0ZXInXG5cdFx0fSk7XG5cdH1cblxuXHRvbkRhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuXHRcdGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9zZWFyY2gvbW92aWU/YXBpX2tleT1kMTE1ZmJhOTI1NzYzN2U3Y2FmMWRiYzdhNzVhMTFkNiZsYW5ndWFnZT1lbi1VUyZxdWVyeT1tJnllYXI9JHt2YWx1ZX1gO1xuXHRcdHRoaXMucHJvcHMuaXRlbXNGZXRjaERhdGEodXJsKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGRhdGVWYWx1ZTogdmFsdWUsXG5cdFx0XHRmaWx0ZXJWYWx1ZTogJ2ZpbHRlcidcblx0XHR9KTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGlmICghc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbW92aWVMaXN0JykpIHtcblx0XHRcdHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ21vdmllTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSkpXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckJhclwiPlxuXHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwic2VsZWN0IHNlbGVjdC1maWx0ZXJcIiBvbkNoYW5nZT17dGhpcy5vbkZpbHRlckNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUgPyB0aGlzLnN0YXRlLmZpbHRlclZhbHVlIDogJ2ZpbHRlcid9PlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImZpbHRlclwiIGRpc2FibGVkPkZpbHRlciBCeTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cInBvcHVsYXJpdHlcIj5Qb3B1bGFyaXR5PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwicmF0aW5nXCI+UmF0aW5nPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwidXBjb21pbmdcIj5VcGNvbWluZzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIm5vd1BsYXlpbmdcIj5Ob3cgUGxheWluZzwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwic2VsZWN0IHNlbGVjdC15ZWFyXCIgb25DaGFuZ2U9e3RoaXMub25EYXRlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZSA/IHRoaXMuc3RhdGUuZGF0ZVZhbHVlOiAnZGF0ZUZpbHRlcid9PlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImRhdGVGaWx0ZXJcIiBkaXNhYmxlZD5GaWx0ZXIgQnkgWWVhcjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjIwMTBcIj4yMDEwPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMjAxMVwiPjIwMTE8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyMDEyXCI+MjAxMjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjIwMTNcIj4yMDEzPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMjAxNFwiPjIwMTQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyMDE1XCI+MjAxNTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjIwMTZcIj4yMDE2PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMjAxN1wiPjIwMTc8L29wdGlvbj5cblx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVwiPiBcblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaXRlbXMucmVzdWx0cy5tYXAoKG1vdmllLCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PE1vdmllQ2FyZCBtb3ZpZT17bW92aWV9IGtleT17aX0vPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuZmlsdGVyIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnllYXIge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYXBwSGVhZGVyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMxQzFDMkQ7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuaGVhZGVyTGlua3Mge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDVweFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5saW5rIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmZhIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmhlYWRlckJhciB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zZWxlY3Qge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAyMXB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLFxuICAgICAgICBoYXNFcnJvcmVkOiBzdGF0ZS5pdGVtc0hhc0Vycm9yZWQsXG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUuaXRlbXNJc0xvYWRpbmdcbiAgICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0aXRlbXNGZXRjaERhdGE6IGJpbmRBY3Rpb25DcmVhdG9ycyhpdGVtc0ZldGNoRGF0YSwgZGlzcGF0Y2gpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZVBhZ2UpOyJdfQ== */\n/*@ sourceURL=components/homePage.js */'
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

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		itemsFetchData: (0, _redux.bindActionCreators)(_items.itemsFetchData, dispatch)
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomePage);