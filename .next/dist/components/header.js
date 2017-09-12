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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/apurv/Desktop/BMDB/components/header.js';


var BMDBHeader = function (_React$Component) {
  (0, _inherits3.default)(BMDBHeader, _React$Component);

  function BMDBHeader() {
    (0, _classCallCheck3.default)(this, BMDBHeader);

    return (0, _possibleConstructorReturn3.default)(this, (BMDBHeader.__proto__ || (0, _getPrototypeOf2.default)(BMDBHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(BMDBHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('title', {
        'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, 'BMDB'), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', 'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      })), _react2.default.createElement('div', { className: 'appHeader', 'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('img', { src: '/static/logo.png', 'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement('div', { className: 'headerLinks', 'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_link2.default, { href: '/favourites', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('a', { className: 'link linkFavourite', 'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, 'FAVOURITES')), _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('a', { className: 'link linkPopular', 'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'POPULAR')), _react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true', onClick: this.handleSearch, 'data-jsx': 1542217768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }))), _react2.default.createElement(_style2.default, {
        styleId: 1542217768,
        css: '.filter[data-jsx="1542217768"]{padding:10px}.year[data-jsx="1542217768"]{padding:10px}.appHeader[data-jsx="1542217768"]{background:#1C1C2D;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px}.headerLinks[data-jsx="1542217768"]{padding:5px;position:absolute;right:5px}.link[data-jsx="1542217768"]{padding:15px;color:white;font-size:16px}.fa[data-jsx="1542217768"]{font-size:18px;color:white;padding:15px}.headerBar[data-jsx="1542217768"]{padding:10px}.select[data-jsx="1542217768"]{margin:21px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cc0IsQUFHNkIsQUFJQSxBQUlNLEFBT1AsQUFNQyxBQU1FLEFBTUYsQUFJRCxZQXJCTSxBQXNCcEIsQ0FyQ0EsQUFJQSxBQWlCYyxBQVlkLEVBTmMsSUFuQkEsTUFjRyxFQU1GLEdBWGhCLENBUmdCLFNBUWYsQUFNQSxBQU1ELGlFQW5CZ0IsYUFDZiIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXB1cnYvRGVza3RvcC9CTURCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jbGFzcyBCTURCSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuICAgICAgICAgIFx0XHRcdDx0aXRsZT5CTURCPC90aXRsZT5cbiAgICAgICAgICBcdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIFx0XHQ8L0hlYWQ+XG4gICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcEhlYWRlclwiPlxuICAgICAgICAgIFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiPjwvaW1nPlxuICAgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyTGlua3NcIj5cbiAgICAgICAgICAgIFx0XHRcdDxMaW5rIGhyZWY9XCIvZmF2b3VyaXRlc1wiPjxhIGNsYXNzTmFtZT1cImxpbmsgbGlua0Zhdm91cml0ZVwiPkZBVk9VUklURVM8L2E+PC9MaW5rPlxuICAgIFx0XHRcdCAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJsaW5rIGxpbmtQb3B1bGFyXCI+UE9QVUxBUjwvYT48L0xpbms+XG4gICAgICAgICAgICBcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH0+PC9pPlxuICAgICAgICAgIFx0XHRcdDwvZGl2PlxuICAgICAgICBcdFx0PC9kaXY+XG4gICAgICAgIFx0XHQ8c3R5bGUganN4PntgXG4gICAgICAgICAgXHRcdFx0LmZpbHRlciB7XG4gICAgICAgICAgICBcdFx0XHRwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIFx0XHRcdH1cblxuICAgICAgICAgIFx0XHRcdC55ZWFyIHtcbiAgICAgICAgICAgIFx0XHRcdHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgXHRcdFx0fVxuXG4gICAgICAgICAgXHRcdFx0LmFwcEhlYWRlciB7XG4gICAgICAgICAgICBcdFx0XHRiYWNrZ3JvdW5kOiAjMUMxQzJEO1xuICAgICAgICAgICAgXHRcdFx0Y29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgXHRcdFx0ZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIFx0XHRcdHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgXHRcdFx0fVxuXG4gICAgICAgICAgXHRcdFx0LmhlYWRlckxpbmtzIHtcbiAgICAgICAgICAgIFx0XHRcdHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIFx0XHRcdHJpZ2h0OiA1cHhcbiAgICAgICAgICBcdFx0XHR9XG5cbiAgICAgICAgICBcdFx0XHQubGluayB7XG4gICAgICAgICAgICBcdFx0XHRwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgXHRcdFx0Y29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIFx0XHRcdH1cblxuICAgICAgICAgIFx0XHRcdC5mYSB7XG4gICAgICAgICAgICBcdFx0XHRmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBcdFx0XHRjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBcdFx0XHRwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgXHRcdFx0fVxuXG4gICAgICAgICAgXHRcdFx0LmhlYWRlckJhciB7XG4gICAgICAgICAgICBcdFx0XHRwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIFx0XHRcdH1cblxuICAgICAgICAgIFx0XHRcdC5zZWxlY3Qge1xuICAgICAgICAgICAgXHRcdFx0bWFyZ2luOiAyMXB4O1xuICAgICAgICAgIFx0XHRcdH1cbiAgICAgICAgXHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCTURCSGVhZGVyOyJdfQ== */\n/*@ sourceURL=components/header.js */'
      }));
    }
  }]);

  return BMDBHeader;
}(_react2.default.Component);

exports.default = BMDBHeader;