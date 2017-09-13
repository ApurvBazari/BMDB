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
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, BMDBHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BMDBHeader.__proto__ || (0, _getPrototypeOf2.default)(BMDBHeader)).call.apply(_ref, [this].concat(args))), _this), _this.handleSearch = function (e) {
      console.log(e.target.value);
      var value = e.target.value;
      var url = 'https://api.themoviedb.org/3/search/movie?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&query=' + value + '&page=1&include_adult=false';
      _this.props.itemsFetchData(url);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(BMDBHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('title', {
        'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'BMDB'), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', 'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), _react2.default.createElement('div', { className: 'appHeader', 'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('img', { src: '/static/logo.png', 'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('div', { className: 'headerLinks', 'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_link2.default, { href: '/favourites', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('a', { className: 'link linkFavourite', 'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'FAVOURITES')), _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('a', { className: 'link linkPopular', 'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'POPULAR')), _react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true', onClick: this.handleSearch, 'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }))), _react2.default.createElement(_style2.default, {
        styleId: 1542217768,
        css: '.filter[data-jsx="1542217768"]{padding:10px}.year[data-jsx="1542217768"]{padding:10px}.appHeader[data-jsx="1542217768"]{background:#1C1C2D;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px}.headerLinks[data-jsx="1542217768"]{padding:5px;position:absolute;right:5px}.link[data-jsx="1542217768"]{padding:15px;color:white;font-size:16px}.fa[data-jsx="1542217768"]{font-size:18px;color:white;padding:15px}.headerBar[data-jsx="1542217768"]{padding:10px}.select[data-jsx="1542217768"]{margin:21px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCc0IsQUFHNkIsQUFJQSxBQUlNLEFBT1AsQUFNQyxBQU1FLEFBTUYsQUFJRCxZQXJCTSxBQXNCcEIsQ0FyQ0EsQUFJQSxBQWlCYyxBQVlkLEVBTmMsSUFuQkEsTUFjRyxFQU1GLEdBWGhCLENBUmdCLFNBUWYsQUFNQSxBQU1ELGlFQW5CZ0IsYUFDZiIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcHVydi9EZXNrdG9wL0JNREIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCB7aXRlbXNGZXRjaERhdGF9IGZyb20gJy4uL2FjdGlvbnMvaXRlbXMnXG5cbmNsYXNzIEJNREJIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9zZWFyY2gvbW92aWU/YXBpX2tleT1kMTE1ZmJhOTI1NzYzN2U3Y2FmMWRiYzdhNzVhMTFkNiZsYW5ndWFnZT1lbi1VUyZxdWVyeT0ke3ZhbHVlfSZwYWdlPTEmaW5jbHVkZV9hZHVsdD1mYWxzZWA7XG4gICAgdGhpcy5wcm9wcy5pdGVtc0ZldGNoRGF0YSh1cmwpO1xuICB9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVhZD5cbiAgICAgICAgICBcdFx0XHQ8dGl0bGU+Qk1EQjwvdGl0bGU+XG4gICAgICAgICAgXHRcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICBcdFx0PC9IZWFkPlxuICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJhcHBIZWFkZXJcIj5cbiAgICAgICAgICBcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIj48L2ltZz5cbiAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckxpbmtzXCI+XG4gICAgICAgICAgICBcdFx0XHQ8TGluayBocmVmPVwiL2Zhdm91cml0ZXNcIj48YSBjbGFzc05hbWU9XCJsaW5rIGxpbmtGYXZvdXJpdGVcIj5GQVZPVVJJVEVTPC9hPjwvTGluaz5cbiAgICBcdFx0XHQgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwibGluayBsaW5rUG9wdWxhclwiPlBPUFVMQVI8L2E+PC9MaW5rPlxuICAgICAgICAgICAgXHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PjwvaT5cbiAgICAgICAgICBcdFx0XHQ8L2Rpdj5cbiAgICAgICAgXHRcdDwvZGl2PlxuICAgICAgICBcdFx0PHN0eWxlIGpzeD57YFxuICAgICAgICAgIFx0XHRcdC5maWx0ZXIge1xuICAgICAgICAgICAgXHRcdFx0cGFkZGluZzogMTBweDtcbiAgICAgICAgICBcdFx0XHR9XG5cbiAgICAgICAgICBcdFx0XHQueWVhciB7XG4gICAgICAgICAgICBcdFx0XHRwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIFx0XHRcdH1cblxuICAgICAgICAgIFx0XHRcdC5hcHBIZWFkZXIge1xuICAgICAgICAgICAgXHRcdFx0YmFja2dyb3VuZDogIzFDMUMyRDtcbiAgICAgICAgICAgIFx0XHRcdGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIFx0XHRcdGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBcdFx0XHRwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIFx0XHRcdH1cblxuICAgICAgICAgIFx0XHRcdC5oZWFkZXJMaW5rcyB7XG4gICAgICAgICAgICBcdFx0XHRwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBcdFx0XHRyaWdodDogNXB4XG4gICAgICAgICAgXHRcdFx0fVxuXG4gICAgICAgICAgXHRcdFx0Lmxpbmsge1xuICAgICAgICAgICAgXHRcdFx0cGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIFx0XHRcdGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBcdFx0XHR9XG5cbiAgICAgICAgICBcdFx0XHQuZmEge1xuICAgICAgICAgICAgXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgXHRcdFx0Y29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgXHRcdFx0cGFkZGluZzogMTVweDtcbiAgICAgICAgIFx0XHRcdH1cblxuICAgICAgICAgIFx0XHRcdC5oZWFkZXJCYXIge1xuICAgICAgICAgICAgXHRcdFx0cGFkZGluZzogMTBweDtcbiAgICAgICAgICBcdFx0XHR9XG5cbiAgICAgICAgICBcdFx0XHQuc2VsZWN0IHtcbiAgICAgICAgICAgIFx0XHRcdG1hcmdpbjogMjFweDtcbiAgICAgICAgICBcdFx0XHR9XG4gICAgICAgIFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaXRlbXNGZXRjaERhdGE6IGJpbmRBY3Rpb25DcmVhdG9ycyhpdGVtc0ZldGNoRGF0YSwgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEJNREJIZWFkZXIpOyJdfQ== */\n/*@ sourceURL=components/header.js */'
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