webpackHotUpdate(5,{

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _style = __webpack_require__(598);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/apurv/Desktop/nextjs/pages/movieCard.js";


var MovieCard = function (_React$Component) {
  (0, _inherits3.default)(MovieCard, _React$Component);

  // static async getInitialProps() {
  //   const res = await axios.get(`https://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`);
  //   return {
  //     image: res.data
  //   }
  // }

  function MovieCard(props) {
    (0, _classCallCheck3.default)(this, MovieCard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MovieCard.__proto__ || (0, _getPrototypeOf2.default)(MovieCard)).call(this, props));

    _this.getImage = _this.getImage.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(MovieCard, [{
    key: "getImage",
    value: function getImage(imagePath) {
      return "https://image.tmdb.org/t/p/w300" + imagePath;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: "movieCard", "data-jsx": 3513594575,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement("img", { className: "movieImage", alt: this.props.movie.title, src: this.getImage(this.props.movie.poster_path), "data-jsx": 3513594575,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement("div", { className: "imageTitle", "data-jsx": 3513594575,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement("p", { className: "title", "data-jsx": 3513594575,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, this.props.movie.title)), _react2.default.createElement(_style2.default, {
        styleId: 3513594575,
        css: ".movieCard[data-jsx=\"3513594575\"]{display:block;margin:10px;border:1px solid #ccc;float:left;width:301px;height:345px;position:relative}.movieImage[data-jsx=\"3513594575\"]{position:relative;width:100%;height:100%}.movieCard[data-jsx=\"3513594575\"]:hover{border:1px solid #777}.imageTitle[data-jsx=\"3513594575\"]{position:absolute;bottom:0px;left:0px;width:100%;color:white;opacity:0.6}.title[data-jsx=\"3513594575\"]{padding:10px;margin:0px;font-size:30px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL21vdmllQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQm9CLEFBRzJCLEFBVUksQUFLSSxBQUlMLEFBUUwsYUFDRixDQTNCRSxJQVVELEFBU0QsSUFKWixFQWFpQixFQTNCTyxHQVVWLEFBU0osU0FDRSxDQVFaLEVBakJBLE9BVmEsQ0FvQkEsVUFuQkMsRUFvQkQsVUFuQkUsRUFvQmYsV0FuQm9CLGtCQUNwQiIsImZpbGUiOiJwYWdlcy9tb3ZpZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FwdXJ2L0Rlc2t0b3AvbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBNb3ZpZUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyBcbiAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgLy8gICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAke3RoaXMucHJvcHMubW92aWUucG9zdGVyX3BhdGh9YCk7XG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIGltYWdlOiByZXMuZGF0YVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZ2V0SW1hZ2UgPSB0aGlzLmdldEltYWdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRJbWFnZShpbWFnZVBhdGgpIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAke2ltYWdlUGF0aH1gO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZUNhcmRcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtb3ZpZUltYWdlXCIgYWx0PXt0aGlzLnByb3BzLm1vdmllLnRpdGxlfSBzcmM9e3RoaXMuZ2V0SW1hZ2UodGhpcy5wcm9wcy5tb3ZpZS5wb3N0ZXJfcGF0aCl9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VUaXRsZVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMubW92aWUudGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tb3ZpZUNhcmQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMzAxcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM0NXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tb3ZpZUltYWdlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW92aWVDYXJkOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltYWdlVGl0bGUge1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7IC8qIGFic29sdXRlIHBvc2l0aW9uIChzbyB3ZSBjYW4gcG9zaXRpb24gaXQgd2hlcmUgd2Ugd2FudCkqL1xuICAgICAgICAgICAgYm90dG9tOjBweDtcbiAgICAgICAgICAgIGxlZnQ6MHB4O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgb3BhY2l0eTowLjY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7IFxuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICB9ICBcbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNb3ZpZUNhcmQ7Il19 */\n/*@ sourceURL=pages/movieCard.js */"
      }));
    }
  }]);

  return MovieCard;
}(_react2.default.Component);

exports.default = MovieCard;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/apurv/Desktop/nextjs/pages/movieCard.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/apurv/Desktop/nextjs/pages/movieCard.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(108)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/movieCard")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45MTBiZWU5ZWY3MmFhYTA5YTczOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbW92aWVDYXJkLmpzPzMxZjc5M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBNb3ZpZUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyBcbiAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgLy8gICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAke3RoaXMucHJvcHMubW92aWUucG9zdGVyX3BhdGh9YCk7XG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIGltYWdlOiByZXMuZGF0YVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZ2V0SW1hZ2UgPSB0aGlzLmdldEltYWdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRJbWFnZShpbWFnZVBhdGgpIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAke2ltYWdlUGF0aH1gO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZUNhcmRcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtb3ZpZUltYWdlXCIgYWx0PXt0aGlzLnByb3BzLm1vdmllLnRpdGxlfSBzcmM9e3RoaXMuZ2V0SW1hZ2UodGhpcy5wcm9wcy5tb3ZpZS5wb3N0ZXJfcGF0aCl9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VUaXRsZVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMubW92aWUudGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tb3ZpZUNhcmQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMzAxcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM0NXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tb3ZpZUltYWdlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW92aWVDYXJkOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltYWdlVGl0bGUge1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7IC8qIGFic29sdXRlIHBvc2l0aW9uIChzbyB3ZSBjYW4gcG9zaXRpb24gaXQgd2hlcmUgd2Ugd2FudCkqL1xuICAgICAgICAgICAgYm90dG9tOjBweDtcbiAgICAgICAgICAgIGxlZnQ6MHB4O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgb3BhY2l0eTowLjY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7IFxuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICB9ICBcbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNb3ZpZUNhcmQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvbW92aWVDYXJkLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQTBDQTtBQTFDQTs7Ozs7QUFuQkE7QUFDQTtBQThEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9