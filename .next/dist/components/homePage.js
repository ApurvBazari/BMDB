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
		}, _this.onDateChange = function (e) {
			var value = e.target.value;
			var url = 'https://api.themoviedb.org/3/search/movie?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&query=m&year=' + value;
			_this.props.itemsFetchData(url);
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
					lineNumber: 43
				}
			}, _react2.default.createElement('div', { className: 'headerBar', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement('select', { className: 'select select-filter', onChange: this.onFilterChange, value: 'filter', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, _react2.default.createElement('option', { value: 'filter', disabled: true, 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, 'Filter By'), _react2.default.createElement('option', { value: 'popularity', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, 'Popularity'), _react2.default.createElement('option', { value: 'rating', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, 'Rating'), _react2.default.createElement('option', { value: 'upcoming', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, 'Upcoming'), _react2.default.createElement('option', { value: 'nowPlaying', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, 'Now Playing')), _react2.default.createElement('select', { className: 'select select-year', onChange: this.onDateChange, value: 'dateFilter', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement('option', { value: 'dateFilter', disabled: true, 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, 'Filter By Year'), _react2.default.createElement('option', { value: '2010', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, '2010'), _react2.default.createElement('option', { value: '2011', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, '2011'), _react2.default.createElement('option', { value: '2012', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, '2012'), _react2.default.createElement('option', { value: '2013', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, '2013'), _react2.default.createElement('option', { value: '2014', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, '2014'), _react2.default.createElement('option', { value: '2015', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, '2015'), _react2.default.createElement('option', { value: '2016', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, '2016'), _react2.default.createElement('option', { value: '2017', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, '2017'))), _react2.default.createElement('div', { className: 'gallery', 'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, _react2.default.createElement('div', {
				'data-jsx': 4017180641,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, this.props.items.results.map(function (movie, i) {
				return _react2.default.createElement(_movieCard2.default, { movie: movie, key: i, __source: {
						fileName: _jsxFileName,
						lineNumber: 68
					}
				});
			}))), _react2.default.createElement(_style2.default, {
				styleId: 4017180641,
				css: '.filter[data-jsx="4017180641"]{padding:10px}.year[data-jsx="4017180641"]{padding:10px}.appHeader[data-jsx="4017180641"]{background:#1C1C2D;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px}.headerLinks[data-jsx="4017180641"]{padding:5px;position:absolute;right:5px}.link[data-jsx="4017180641"]{padding:15px;color:white;font-size:16px}.fa[data-jsx="4017180641"]{font-size:18px;color:white;padding:15px}.headerBar[data-jsx="4017180641"]{padding:10px}.select[data-jsx="4017180641"]{margin:21px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZVBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VnQixBQUdvQixBQUlBLEFBSU0sQUFPUCxBQU1DLEFBTUUsQUFNRixBQUlELFlBckJNLEFBc0JuQixDQXJDQSxBQUlBLEFBaUJhLEFBWWIsRUFOYSxJQW5CQSxNQWNHLEVBTUYsR0FYZixDQVJlLFNBUWQsQUFNQSxBQU1BLGlFQW5CYyxhQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXB1cnYvRGVza3RvcC9CTURCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtpdGVtc0ZldGNoRGF0YX0gZnJvbSAnLi4vYWN0aW9ucy9pdGVtcydcblxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvbW92aWVDYXJkJ1xuXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdG9uRmlsdGVyQ2hhbmdlID0gKGUpID0+IHtcblx0XHRsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHRjb25zb2xlLmxvZygnVmFsdWU6JywgdmFsdWUpO1xuXHRcdGxldCB1cmw7XG5cdFx0aWYgKHZhbHVlID09PSAncmF0aW5nJykge1xuXHRcdFx0dXJsID0gJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvdG9wX3JhdGVkP2FwaV9rZXk9ZDExNWZiYTkyNTc2MzdlN2NhZjFkYmM3YTc1YTExZDYmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xJztcblx0XHR9IGVsc2UgaWYgKHZhbHVlID09PSAncG9wdWxhcml0eScpIHtcblx0XHRcdHVybCA9ICdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/YXBpX2tleT1kMTE1ZmJhOTI1NzYzN2U3Y2FmMWRiYzdhNzVhMTFkNiZsYW5ndWFnZT1lbi1VUyZwYWdlPSR7MX0nO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPT09ICd1cGNvbWluZycpIHtcblx0XHRcdHVybCA9ICdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3VwY29taW5nP2FwaV9rZXk9ZDExNWZiYTkyNTc2MzdlN2NhZjFkYmM3YTc1YTExZDYmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xJztcblx0XHR9IGVsc2UgaWYgKHZhbHVlID09PSAnbm93UGxheWluZycpIHtcblx0XHRcdHVybCA9ICdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL25vd19wbGF5aW5nP2FwaV9rZXk9ZDExNWZiYTkyNTc2MzdlN2NhZjFkYmM3YTc1YTExZDYmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xJztcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5pdGVtc0ZldGNoRGF0YSh1cmwpO1xuXHR9XG5cblx0b25EYXRlQ2hhbmdlID0gKGUpID0+IHtcblx0XHRsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHRsZXQgdXJsID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoL21vdmllP2FwaV9rZXk9ZDExNWZiYTkyNTc2MzdlN2NhZjFkYmM3YTc1YTExZDYmbGFuZ3VhZ2U9ZW4tVVMmcXVlcnk9bSZ5ZWFyPSR7dmFsdWV9YDtcblx0XHR0aGlzLnByb3BzLml0ZW1zRmV0Y2hEYXRhKHVybCk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZiAoIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21vdmllTGlzdCcpKSB7XG5cdFx0XHRzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdtb3ZpZUxpc3QnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmRhdGEpKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJCYXJcIj5cblx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZT1cInNlbGVjdCBzZWxlY3QtZmlsdGVyXCIgb25DaGFuZ2U9e3RoaXMub25GaWx0ZXJDaGFuZ2V9IHZhbHVlPSdmaWx0ZXInPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImZpbHRlclwiIGRpc2FibGVkPkZpbHRlciBCeTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cInBvcHVsYXJpdHlcIj5Qb3B1bGFyaXR5PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwicmF0aW5nXCI+UmF0aW5nPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwidXBjb21pbmdcIj5VcGNvbWluZzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIm5vd1BsYXlpbmdcIj5Ob3cgUGxheWluZzwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwic2VsZWN0IHNlbGVjdC15ZWFyXCIgb25DaGFuZ2U9e3RoaXMub25EYXRlQ2hhbmdlfSB2YWx1ZT0nZGF0ZUZpbHRlcic+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiZGF0ZUZpbHRlclwiIGRpc2FibGVkPkZpbHRlciBCeSBZZWFyPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMjAxMFwiPjIwMTA8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyMDExXCI+MjAxMTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjIwMTJcIj4yMDEyPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMjAxM1wiPjIwMTM8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyMDE0XCI+MjAxNDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjIwMTVcIj4yMDE1PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMjAxNlwiPjIwMTY8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyMDE3XCI+MjAxNzwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5XCI+IFxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5pdGVtcy5yZXN1bHRzLm1hcCgobW92aWUsIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8TW92aWVDYXJkIG1vdmllPXttb3ZpZX0ga2V5PXtpfS8+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5maWx0ZXIge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQueWVhciB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5hcHBIZWFkZXIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzFDMUMyRDtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5oZWFkZXJMaW5rcyB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRyaWdodDogNXB4XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Lmxpbmsge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTVweDtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZmEge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTVweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuaGVhZGVyQmFyIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnNlbGVjdCB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDIxcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMsXG4gICAgICAgIGhhc0Vycm9yZWQ6IHN0YXRlLml0ZW1zSGFzRXJyb3JlZCxcbiAgICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5pdGVtc0lzTG9hZGluZ1xuICAgIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblx0cmV0dXJuIHtcblx0XHRpdGVtc0ZldGNoRGF0YTogYmluZEFjdGlvbkNyZWF0b3JzKGl0ZW1zRmV0Y2hEYXRhLCBkaXNwYXRjaClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lUGFnZSk7Il19 */\n/*@ sourceURL=components/homePage.js */'
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