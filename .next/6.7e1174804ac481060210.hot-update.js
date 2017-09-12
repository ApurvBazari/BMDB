webpackHotUpdate(6,{

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(568);

var _link2 = _interopRequireDefault(_link);

var _reactRedux = __webpack_require__(554);

var _movieCard = __webpack_require__(620);

var _movieCard2 = _interopRequireDefault(_movieCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/apurv/Desktop/BMDB/components/favourites.js',
    _this3 = undefined;

var Favourites = function (_React$Component) {
	(0, _inherits3.default)(Favourites, _React$Component);

	function Favourites() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Favourites);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Favourites.__proto__ || (0, _getPrototypeOf2.default)(Favourites)).call.apply(_ref, [this].concat(args))), _this), _this.handleDislike = function () {
			console.log('Disliked');
			_this.render();
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Favourites, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			console.log(this);
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, 'Favourite Movies'), this.props.favouriteMovies.map(function (movie, i) {
				return _react2.default.createElement(_movieCard2.default, { movie: movie, key: i, isLiked: _this2.props.isLiked, handleDislike: _this2.handleDislike, __source: {
						fileName: _jsxFileName,
						lineNumber: 19
					}
				});
			}));
		}
	}]);

	return Favourites;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
	debugger;
	console.log(_this3);
	return {
		favouriteMovies: JSON.parse(state.getFavourite.movies),
		isLiked: state.getFavourite.isLiked
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Favourites);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/apurv/Desktop/BMDB/components/favourites.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/apurv/Desktop/BMDB/components/favourites.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43ZTExNzQ4MDRhYzQ4MTA2MDIxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mYXZvdXJpdGVzLmpzPzQyNDg1ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9tb3ZpZUNhcmQnXG5cbmNsYXNzIEZhdm91cml0ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRoYW5kbGVEaXNsaWtlID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdEaXNsaWtlZCcpO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxwPkZhdm91cml0ZSBNb3ZpZXM8L3A+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmZhdm91cml0ZU1vdmllcy5tYXAoKG1vdmllLCBpKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxNb3ZpZUNhcmQgbW92aWU9e21vdmllfSBrZXk9e2l9IGlzTGlrZWQ9e3RoaXMucHJvcHMuaXNMaWtlZH0gaGFuZGxlRGlzbGlrZSA9IHt0aGlzLmhhbmRsZURpc2xpa2V9IC8+XHRcblx0XHRcdFx0XHQpXG5cdFx0XHRcdH0pfVx0XHRcdFx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cdGRlYnVnZ2VyXG5cdGNvbnNvbGUubG9nKHRoaXMpO1xuXHRyZXR1cm4ge1xuXHRcdGZhdm91cml0ZU1vdmllczogSlNPTi5wYXJzZShzdGF0ZS5nZXRGYXZvdXJpdGUubW92aWVzKSxcblx0XHRpc0xpa2VkOiBzdGF0ZS5nZXRGYXZvdXJpdGUuaXNMaWtlZFxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShGYXZvdXJpdGVzKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Zhdm91cml0ZXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUtBOzs7OztBQWxCQTtBQUNBO0FBb0JBO0FBRUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==