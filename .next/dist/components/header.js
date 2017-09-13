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

var _jsxFileName = '/Users/apurv/Desktop/BMDB/components/header.js';


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
        css: '.filter[data-jsx="1542217768"]{padding:10px}.year[data-jsx="1542217768"]{padding:10px}.appHeader[data-jsx="1542217768"]{background:#1C1C2D;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px}.headerLinks[data-jsx="1542217768"]{padding:5px;position:absolute;right:5px}.link[data-jsx="1542217768"]{padding:15px;color:white;font-size:16px}.fa[data-jsx="1542217768"]{font-size:18px;color:white;padding:15px}.headerBar[data-jsx="1542217768"]{padding:10px}.select[data-jsx="1542217768"]{margin:21px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCc0IsQUFHNkIsQUFJQSxBQUlNLEFBT1AsQUFNQyxBQU1FLEFBTUYsQUFJRCxZQXJCTSxBQXNCcEIsQ0FyQ0EsQUFJQSxBQWlCYyxBQVlkLEVBTmMsSUFuQkEsTUFjRyxFQU1GLEdBWGhCLENBUmdCLFNBUWYsQUFNQSxBQU1ELGlFQW5CZ0IsYUFDZiIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXB1cnYvRGVza3RvcC9CTURCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQge2l0ZW1zRmV0Y2hEYXRhfSBmcm9tICcuLi9hY3Rpb25zL2l0ZW1zJ1xuXG5jbGFzcyBCTURCSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBsZXQgdXJsID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoL21vdmllP2FwaV9rZXk9ZDExNWZiYTkyNTc2MzdlN2NhZjFkYmM3YTc1YTExZDYmbGFuZ3VhZ2U9ZW4tVVMmcXVlcnk9JHt2YWx1ZX0mcGFnZT0xJmluY2x1ZGVfYWR1bHQ9ZmFsc2VgO1xuICAgIHRoaXMucHJvcHMuaXRlbXNGZXRjaERhdGEodXJsKTtcbiAgfVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlYWQ+XG4gICAgICAgICAgXHRcdFx0PHRpdGxlPkJNREI8L3RpdGxlPlxuICAgICAgICAgIFx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgXHRcdDwvSGVhZD5cbiAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwSGVhZGVyXCI+XG4gICAgICAgICAgXHRcdFx0PGltZyBzcmM9XCIvc3RhdGljL2xvZ28ucG5nXCI+PC9pbWc+XG4gICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJMaW5rc1wiPlxuICAgICAgICAgICAgXHRcdFx0PExpbmsgaHJlZj1cIi9mYXZvdXJpdGVzXCI+PGEgY2xhc3NOYW1lPVwibGluayBsaW5rRmF2b3VyaXRlXCI+RkFWT1VSSVRFUzwvYT48L0xpbms+XG4gICAgXHRcdFx0ICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cImxpbmsgbGlua1BvcHVsYXJcIj5QT1BVTEFSPC9hPjwvTGluaz5cbiAgICAgICAgICAgIFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNofT48L2k+XG4gICAgICAgICAgXHRcdFx0PC9kaXY+XG4gICAgICAgIFx0XHQ8L2Rpdj5cbiAgICAgICAgXHRcdDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBcdFx0XHQuZmlsdGVyIHtcbiAgICAgICAgICAgIFx0XHRcdHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgXHRcdFx0fVxuXG4gICAgICAgICAgXHRcdFx0LnllYXIge1xuICAgICAgICAgICAgXHRcdFx0cGFkZGluZzogMTBweDtcbiAgICAgICAgICBcdFx0XHR9XG5cbiAgICAgICAgICBcdFx0XHQuYXBwSGVhZGVyIHtcbiAgICAgICAgICAgIFx0XHRcdGJhY2tncm91bmQ6ICMxQzFDMkQ7XG4gICAgICAgICAgICBcdFx0XHRjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBcdFx0XHRkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgXHRcdFx0cGFkZGluZzogMTBweDtcbiAgICAgICAgICBcdFx0XHR9XG5cbiAgICAgICAgICBcdFx0XHQuaGVhZGVyTGlua3Mge1xuICAgICAgICAgICAgXHRcdFx0cGFkZGluZzogNXB4O1xuICAgICAgICAgICAgXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgXHRcdFx0cmlnaHQ6IDVweFxuICAgICAgICAgIFx0XHRcdH1cblxuICAgICAgICAgIFx0XHRcdC5saW5rIHtcbiAgICAgICAgICAgIFx0XHRcdHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBcdFx0XHRjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBcdFx0XHRmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgXHRcdFx0fVxuXG4gICAgICAgICAgXHRcdFx0LmZhIHtcbiAgICAgICAgICAgIFx0XHRcdGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIFx0XHRcdGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIFx0XHRcdHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICBcdFx0XHR9XG5cbiAgICAgICAgICBcdFx0XHQuaGVhZGVyQmFyIHtcbiAgICAgICAgICAgIFx0XHRcdHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgXHRcdFx0fVxuXG4gICAgICAgICAgXHRcdFx0LnNlbGVjdCB7XG4gICAgICAgICAgICBcdFx0XHRtYXJnaW46IDIxcHg7XG4gICAgICAgICAgXHRcdFx0fVxuICAgICAgICBcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGl0ZW1zRmV0Y2hEYXRhOiBiaW5kQWN0aW9uQ3JlYXRvcnMoaXRlbXNGZXRjaERhdGEsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShCTURCSGVhZGVyKTsiXX0= */\n/*@ sourceURL=components/header.js */'
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