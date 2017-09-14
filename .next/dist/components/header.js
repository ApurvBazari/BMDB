'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _items = require('../actions/items');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/apurv/Desktop/BMDB/components/header.js';


var BMDBHeader = function (_React$Component) {
  (0, _inherits3.default)(BMDBHeader, _React$Component);

  function BMDBHeader() {
    (0, _classCallCheck3.default)(this, BMDBHeader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BMDBHeader.__proto__ || (0, _getPrototypeOf2.default)(BMDBHeader)).call(this));

    _this.toggleSearch = function (e) {
      _this.setState({
        search: _this.state.search === false ? true : false
      });
    };

    _this.handleInput = function (e) {
      var url = 'https://api.themoviedb.org/3/search/movie?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&query=' + e.target.value + '&page=1&include_adult=false';
      _this.setState({
        inputValue: e.target.value
      });
      _this.props.itemsFetchData(url);
    };

    _this.handleHomepage = function (e) {
      var url = 'https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}';
      _this.props.itemsFetchData(url);
    };

    _this.state = {
      search: false,
      inputValue: ''
    };
    return _this;
  }

  (0, _createClass3.default)(BMDBHeader, [{
    key: 'render',
    value: function render() {
      var normalHeader = _react2.default.createElement('div', { className: 'headerLinks', 'data-jsx': 1214619774,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_link2.default, { href: '/favourites', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('a', { className: 'link linkFavourite', 'data-jsx': 1214619774,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'FAVOURITES')), _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('a', { className: 'link linkPopular', 'data-jsx': 1214619774,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'POPULAR')), _react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true', onClick: this.toggleSearch, 'data-jsx': 1214619774,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 1214619774,
        css: '.headerLinks[data-jsx="1214619774"]{padding:5px;position:absolute;right:5px}.link[data-jsx="1214619774"]{padding:15px;color:white;font-size:16px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDb0IsQUFHK0IsQUFNQyxZQUxLLENBTU4sWUFDRyxLQUxsQixVQUFDLEFBTUEiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXB1cnYvRGVza3RvcC9CTURCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQge2l0ZW1zRmV0Y2hEYXRhfSBmcm9tICcuLi9hY3Rpb25zL2l0ZW1zJ1xuXG5jbGFzcyBCTURCSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaDogZmFsc2UsXG4gICAgICBpbnB1dFZhbHVlOiAnJ1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNlYXJjaCA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2g6IHRoaXMuc3RhdGUuc2VhcmNoPT09ZmFsc2UgPyB0cnVlIDogZmFsc2UgIFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlSW5wdXQgPSAoZSkgPT4ge1xuICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9zZWFyY2gvbW92aWU/YXBpX2tleT1kMTE1ZmJhOTI1NzYzN2U3Y2FmMWRiYzdhNzVhMTFkNiZsYW5ndWFnZT1lbi1VUyZxdWVyeT0ke2UudGFyZ2V0LnZhbHVlfSZwYWdlPTEmaW5jbHVkZV9hZHVsdD1mYWxzZWBcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0VmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5pdGVtc0ZldGNoRGF0YSh1cmwpO1xuICB9XG5cbiAgaGFuZGxlSG9tZXBhZ2UgPSAoZSkgPT4ge1xuICAgIGxldCB1cmwgPSAnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9ZDExNWZiYTkyNTc2MzdlN2NhZjFkYmM3YTc1YTExZDYmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0kezF9JztcbiAgICB0aGlzLnByb3BzLml0ZW1zRmV0Y2hEYXRhKHVybCk7ICAgIFxuICB9XG5cblx0cmVuZGVyICgpIHtcblx0XHRsZXQgbm9ybWFsSGVhZGVyID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJMaW5rc1wiPlxuICAgICAgICA8TGluayBocmVmPVwiL2Zhdm91cml0ZXNcIj48YSBjbGFzc05hbWU9XCJsaW5rIGxpbmtGYXZvdXJpdGVcIj5GQVZPVVJJVEVTPC9hPjwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJsaW5rIGxpbmtQb3B1bGFyXCI+UE9QVUxBUjwvYT48L0xpbms+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2VhcmNofT48L2k+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaGVhZGVyTGlua3Mge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBsZXQgc2VhcmNoSGVhZGVyID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJMaW5rc1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fT48L2lucHV0PlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2VhcmNofT48L2k+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaGVhZGVyTGlua3Mge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgbGV0IGhlYWRlckRhdGEgPSB0aGlzLnN0YXRlLnNlYXJjaCA/IHNlYXJjaEhlYWRlciA6IG5vcm1hbEhlYWRlcjtcbiAgICBcbiAgICByZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVhZD5cbiAgICAgICAgICBcdFx0XHQ8dGl0bGU+Qk1EQjwvdGl0bGU+XG4gICAgICAgICAgXHRcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICBcdFx0PC9IZWFkPlxuICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJhcHBIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSG9tZXBhZ2V9PjxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSG9tZXBhZ2V9PjwvaW1nPjwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAge2hlYWRlckRhdGF9XG4gICAgICAgIFx0XHQ8L2Rpdj5cbiAgICAgICAgXHRcdDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBcdFx0XHQuZmlsdGVyIHtcbiAgICAgICAgICAgIFx0XHRcdHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgXHRcdFx0fVxuXG4gICAgICAgICAgXHRcdFx0LnllYXIge1xuICAgICAgICAgICAgXHRcdFx0cGFkZGluZzogMTBweDtcbiAgICAgICAgICBcdFx0XHR9XG5cbiAgICAgICAgICBcdFx0XHQuYXBwSGVhZGVyIHtcbiAgICAgICAgICAgIFx0XHRcdGJhY2tncm91bmQ6ICMxQzFDMkQ7XG4gICAgICAgICAgICBcdFx0XHRjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBcdFx0XHRkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgXHRcdFx0cGFkZGluZzogMTBweDtcbiAgICAgICAgICBcdFx0XHR9XG5cbiAgICAgICAgICBcdFx0XHQuZmEge1xuICAgICAgICAgICAgXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgXHRcdFx0Y29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgXHRcdFx0cGFkZGluZzogMTVweDtcbiAgICAgICAgIFx0XHRcdH1cblxuICAgICAgICAgIFx0XHRcdC5oZWFkZXJCYXIge1xuICAgICAgICAgICAgXHRcdFx0cGFkZGluZzogMTBweDtcbiAgICAgICAgICBcdFx0XHR9XG5cbiAgICAgICAgICBcdFx0XHQuc2VsZWN0IHtcbiAgICAgICAgICAgIFx0XHRcdG1hcmdpbjogMjFweDtcbiAgICAgICAgICBcdFx0XHR9XG4gICAgICAgIFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaXRlbXNGZXRjaERhdGE6IGJpbmRBY3Rpb25DcmVhdG9ycyhpdGVtc0ZldGNoRGF0YSwgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEJNREJIZWFkZXIpOyJdfQ== */\n/*@ sourceURL=components/header.js */'
      }));

      var searchHeader = _react2.default.createElement('div', { className: 'headerLinks', 'data-jsx': 101992164,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('input', { type: 'text', value: this.state.inputValue, placeholder: 'Search...', onChange: this.handleInput, 'data-jsx': 101992164,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement('i', { className: 'fa fa-times', 'aria-hidden': 'true', onClick: this.toggleSearch, 'data-jsx': 101992164,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 101992164,
        css: '.headerLinks[data-jsx="101992164"]{padding:5px;position:absolute;right:5px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEb0IsQUFHK0IsWUFDTSxrQkFFckIsVUFBQyIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcHVydi9EZXNrdG9wL0JNREIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCB7aXRlbXNGZXRjaERhdGF9IGZyb20gJy4uL2FjdGlvbnMvaXRlbXMnXG5cbmNsYXNzIEJNREJIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoOiBmYWxzZSxcbiAgICAgIGlucHV0VmFsdWU6ICcnXG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlU2VhcmNoID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaDogdGhpcy5zdGF0ZS5zZWFyY2g9PT1mYWxzZSA/IHRydWUgOiBmYWxzZSAgXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVJbnB1dCA9IChlKSA9PiB7XG4gICAgbGV0IHVybCA9IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZT9hcGlfa2V5PWQxMTVmYmE5MjU3NjM3ZTdjYWYxZGJjN2E3NWExMWQ2Jmxhbmd1YWdlPWVuLVVTJnF1ZXJ5PSR7ZS50YXJnZXQudmFsdWV9JnBhZ2U9MSZpbmNsdWRlX2FkdWx0PWZhbHNlYFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXRWYWx1ZTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLml0ZW1zRmV0Y2hEYXRhKHVybCk7XG4gIH1cblxuICBoYW5kbGVIb21lcGFnZSA9IChlKSA9PiB7XG4gICAgbGV0IHVybCA9ICdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/YXBpX2tleT1kMTE1ZmJhOTI1NzYzN2U3Y2FmMWRiYzdhNzVhMTFkNiZsYW5ndWFnZT1lbi1VUyZwYWdlPSR7MX0nO1xuICAgIHRoaXMucHJvcHMuaXRlbXNGZXRjaERhdGEodXJsKTsgICAgXG4gIH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdGxldCBub3JtYWxIZWFkZXIgPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckxpbmtzXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZmF2b3VyaXRlc1wiPjxhIGNsYXNzTmFtZT1cImxpbmsgbGlua0Zhdm91cml0ZVwiPkZBVk9VUklURVM8L2E+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cImxpbmsgbGlua1BvcHVsYXJcIj5QT1BVTEFSPC9hPjwvTGluaz5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17dGhpcy50b2dnbGVTZWFyY2h9PjwvaT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZWFkZXJMaW5rcyB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICByaWdodDogNXB4XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGxldCBzZWFyY2hIZWFkZXIgPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckxpbmtzXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9IHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9PjwvaW5wdXQ+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17dGhpcy50b2dnbGVTZWFyY2h9PjwvaT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZWFkZXJMaW5rcyB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICByaWdodDogNXB4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBsZXQgaGVhZGVyRGF0YSA9IHRoaXMuc3RhdGUuc2VhcmNoID8gc2VhcmNoSGVhZGVyIDogbm9ybWFsSGVhZGVyO1xuICAgIFxuICAgIHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuICAgICAgICAgIFx0XHRcdDx0aXRsZT5CTURCPC90aXRsZT5cbiAgICAgICAgICBcdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIFx0XHQ8L0hlYWQ+XG4gICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcEhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgb25DbGljaz17dGhpcy5oYW5kbGVIb21lcGFnZX0+PGltZyBzcmM9XCIvc3RhdGljL2xvZ28ucG5nXCIgb25DbGljaz17dGhpcy5oYW5kbGVIb21lcGFnZX0+PC9pbWc+PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICB7aGVhZGVyRGF0YX1cbiAgICAgICAgXHRcdDwvZGl2PlxuICAgICAgICBcdFx0PHN0eWxlIGpzeD57YFxuICAgICAgICAgIFx0XHRcdC5maWx0ZXIge1xuICAgICAgICAgICAgXHRcdFx0cGFkZGluZzogMTBweDtcbiAgICAgICAgICBcdFx0XHR9XG5cbiAgICAgICAgICBcdFx0XHQueWVhciB7XG4gICAgICAgICAgICBcdFx0XHRwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIFx0XHRcdH1cblxuICAgICAgICAgIFx0XHRcdC5hcHBIZWFkZXIge1xuICAgICAgICAgICAgXHRcdFx0YmFja2dyb3VuZDogIzFDMUMyRDtcbiAgICAgICAgICAgIFx0XHRcdGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIFx0XHRcdGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBcdFx0XHRwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIFx0XHRcdH1cblxuICAgICAgICAgIFx0XHRcdC5mYSB7XG4gICAgICAgICAgICBcdFx0XHRmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBcdFx0XHRjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBcdFx0XHRwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgXHRcdFx0fVxuXG4gICAgICAgICAgXHRcdFx0LmhlYWRlckJhciB7XG4gICAgICAgICAgICBcdFx0XHRwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIFx0XHRcdH1cblxuICAgICAgICAgIFx0XHRcdC5zZWxlY3Qge1xuICAgICAgICAgICAgXHRcdFx0bWFyZ2luOiAyMXB4O1xuICAgICAgICAgIFx0XHRcdH1cbiAgICAgICAgXHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpdGVtc0ZldGNoRGF0YTogYmluZEFjdGlvbkNyZWF0b3JzKGl0ZW1zRmV0Y2hEYXRhLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoQk1EQkhlYWRlcik7Il19 */\n/*@ sourceURL=components/header.js */'
      }));

      var headerData = this.state.search ? searchHeader : normalHeader;

      return _react2.default.createElement('div', {
        'data-jsx': 733199379,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('title', {
        'data-jsx': 733199379,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'BMDB'), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', 'data-jsx': 733199379,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), _react2.default.createElement('div', { className: 'appHeader', 'data-jsx': 733199379,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('a', { onClick: this.handleHomepage, 'data-jsx': 733199379,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('img', { src: '/static/logo.png', onClick: this.handleHomepage, 'data-jsx': 733199379,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }))), headerData), _react2.default.createElement(_style2.default, {
        styleId: 733199379,
        css: '.filter[data-jsx="733199379"]{padding:10px}.year[data-jsx="733199379"]{padding:10px}.appHeader[data-jsx="733199379"]{background:#1C1C2D;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px}.fa[data-jsx="733199379"]{font-size:18px;color:white;padding:15px}.headerBar[data-jsx="733199379"]{padding:10px}.select[data-jsx="733199379"]{margin:21px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Gc0IsQUFHNkIsQUFJQSxBQUlNLEFBT0osQUFNRixBQUlELFlBQ2QsQ0F6QkEsQUFJQSxBQWlCQSxFQU5jLElBUEEsUUFRQyxJQVBBLFNBUWhCLGlFQVBnQixhQUNmIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FwdXJ2L0Rlc2t0b3AvQk1EQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IHtpdGVtc0ZldGNoRGF0YX0gZnJvbSAnLi4vYWN0aW9ucy9pdGVtcydcblxuY2xhc3MgQk1EQkhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2g6IGZhbHNlLFxuICAgICAgaW5wdXRWYWx1ZTogJydcbiAgICB9XG4gIH1cblxuICB0b2dnbGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoOiB0aGlzLnN0YXRlLnNlYXJjaD09PWZhbHNlID8gdHJ1ZSA6IGZhbHNlICBcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0ID0gKGUpID0+IHtcbiAgICBsZXQgdXJsID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoL21vdmllP2FwaV9rZXk9ZDExNWZiYTkyNTc2MzdlN2NhZjFkYmM3YTc1YTExZDYmbGFuZ3VhZ2U9ZW4tVVMmcXVlcnk9JHtlLnRhcmdldC52YWx1ZX0mcGFnZT0xJmluY2x1ZGVfYWR1bHQ9ZmFsc2VgXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dFZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMuaXRlbXNGZXRjaERhdGEodXJsKTtcbiAgfVxuXG4gIGhhbmRsZUhvbWVwYWdlID0gKGUpID0+IHtcbiAgICBsZXQgdXJsID0gJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PWQxMTVmYmE5MjU3NjM3ZTdjYWYxZGJjN2E3NWExMWQ2Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9JHsxfSc7XG4gICAgdGhpcy5wcm9wcy5pdGVtc0ZldGNoRGF0YSh1cmwpOyAgICBcbiAgfVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0bGV0IG5vcm1hbEhlYWRlciA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyTGlua3NcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9mYXZvdXJpdGVzXCI+PGEgY2xhc3NOYW1lPVwibGluayBsaW5rRmF2b3VyaXRlXCI+RkFWT1VSSVRFUzwvYT48L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwibGluayBsaW5rUG9wdWxhclwiPlBPUFVMQVI8L2E+PC9MaW5rPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNlYXJjaH0+PC9pPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmhlYWRlckxpbmtzIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHhcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgbGV0IHNlYXJjaEhlYWRlciA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyTGlua3NcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH0+PC9pbnB1dD5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNlYXJjaH0+PC9pPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmhlYWRlckxpbmtzIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGxldCBoZWFkZXJEYXRhID0gdGhpcy5zdGF0ZS5zZWFyY2ggPyBzZWFyY2hIZWFkZXIgOiBub3JtYWxIZWFkZXI7XG4gICAgXG4gICAgcmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlYWQ+XG4gICAgICAgICAgXHRcdFx0PHRpdGxlPkJNREI8L3RpdGxlPlxuICAgICAgICAgIFx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgXHRcdDwvSGVhZD5cbiAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUhvbWVwYWdlfT48aW1nIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUhvbWVwYWdlfT48L2ltZz48L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIHtoZWFkZXJEYXRhfVxuICAgICAgICBcdFx0PC9kaXY+XG4gICAgICAgIFx0XHQ8c3R5bGUganN4PntgXG4gICAgICAgICAgXHRcdFx0LmZpbHRlciB7XG4gICAgICAgICAgICBcdFx0XHRwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIFx0XHRcdH1cblxuICAgICAgICAgIFx0XHRcdC55ZWFyIHtcbiAgICAgICAgICAgIFx0XHRcdHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgXHRcdFx0fVxuXG4gICAgICAgICAgXHRcdFx0LmFwcEhlYWRlciB7XG4gICAgICAgICAgICBcdFx0XHRiYWNrZ3JvdW5kOiAjMUMxQzJEO1xuICAgICAgICAgICAgXHRcdFx0Y29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgXHRcdFx0ZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIFx0XHRcdHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgXHRcdFx0fVxuXG4gICAgICAgICAgXHRcdFx0LmZhIHtcbiAgICAgICAgICAgIFx0XHRcdGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIFx0XHRcdGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIFx0XHRcdHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICBcdFx0XHR9XG5cbiAgICAgICAgICBcdFx0XHQuaGVhZGVyQmFyIHtcbiAgICAgICAgICAgIFx0XHRcdHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgXHRcdFx0fVxuXG4gICAgICAgICAgXHRcdFx0LnNlbGVjdCB7XG4gICAgICAgICAgICBcdFx0XHRtYXJnaW46IDIxcHg7XG4gICAgICAgICAgXHRcdFx0fVxuICAgICAgICBcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGl0ZW1zRmV0Y2hEYXRhOiBiaW5kQWN0aW9uQ3JlYXRvcnMoaXRlbXNGZXRjaERhdGEsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShCTURCSGVhZGVyKTsiXX0= */\n/*@ sourceURL=components/header.js */'
      }));
    }
  }]);

  return BMDBHeader;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    itemsFetchData: (0, _redux.bindActionCreators)(_items.itemsFetchData, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(BMDBHeader);