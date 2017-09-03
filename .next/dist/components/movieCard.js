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

var _reactRedux = require('react-redux');

var _addfavourite = require('../actions/addfavourite');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/apurv/Desktop/BMDB/components/movieCard.js';


var MovieCard = function (_React$Component) {
  (0, _inherits3.default)(MovieCard, _React$Component);

  function MovieCard(props) {
    (0, _classCallCheck3.default)(this, MovieCard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MovieCard.__proto__ || (0, _getPrototypeOf2.default)(MovieCard)).call(this, props));

    _this.handleLike = function () {
      console.log(_this.props);
      _this.props.addFavourite(_this.props.movie.id);
    };

    _this.getImage = _this.getImage.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(MovieCard, [{
    key: 'getImage',
    value: function getImage(imagePath) {
      return 'https://image.tmdb.org/t/p/w300' + imagePath;
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props);
      return _react2.default.createElement('div', { className: 'movieCard', key: this.props.key, 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('img', { className: 'movieImage', alt: this.props.movie.title, src: this.getImage(this.props.movie.poster_path), 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('div', { className: 'imageTitle', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('p', { className: 'language', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.props.movie.original_language), _react2.default.createElement('p', { className: 'title', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, this.props.movie.title)), _react2.default.createElement('div', { className: 'imageHeader', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('i', { className: 'releaseDate', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, this.props.movie.release_date), _react2.default.createElement('div', { className: 'icons', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('i', { className: 'fa fa-heart', 'aria-hidden': 'true', onClick: this.handleLike, 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement('i', { className: 'fa fa-comment', 'aria-hidden': 'true', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement('i', { className: 'vote_count', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, this.props.movie.vote_count))), _react2.default.createElement(_style2.default, {
        styleId: 1771419404,
        css: '.movieCard[data-jsx="1771419404"]{display:block;margin:10px;border:1px solid #ccc;float:left;width:301px;height:345px;position:relative}.movieImage[data-jsx="1771419404"]{position:relative;width:100%;height:100%}.movieCard[data-jsx="1771419404"]:hover{border:1px solid #777}.imageTitle[data-jsx="1771419404"]{position:absolute;bottom:0px;left:0px;width:100%;color:white;padding:5px}.icons[data-jsx="1771419404"]{position:absolute;top:0px;right:0px;padding:5px;font-size:12px;color:white}.releaseDate[data-jsx="1771419404"]{position:absolute;top:0px;left:0px;padding:5px;color:white}.fa[data-jsx="1771419404"]{padding:3px}.language[data-jsx="1771419404"]{font-size:14px;font-variant:small-caps}.title[data-jsx="1771419404"]{margin:0px;font-size:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92aWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDb0IsQUFHMkIsQUFVSSxBQUtJLEFBSUwsQUFTQyxBQVNBLEFBUVAsQUFJSSxBQUtMLFdBQ0ssQ0FUakIsRUE3Q2MsQ0FrRGYsR0F4Q2MsQUFTRCxBQVNGLEFBU0EsSUF0QlYsSUFkd0IsQUE0QlosQUFTRCxBQWlCWCxHQTVDYyxBQVNKLE1BbUJJLENBVEEsRUFURixDQTZCWixFQXRDQSxNQTRCYyxDQXRDRCxBQTZCSSxDQVRKLFVBbkJDLEFBc0NkLEVBbEJhLEVBU0MsUUE1QkMsRUFvQmYsRUFTQSxTQTVCb0Isa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvbW92aWVDYXJkLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FwdXJ2L0Rlc2t0b3AvQk1EQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2FkZEZhdm91cml0ZX0gZnJvbSAnLi4vYWN0aW9ucy9hZGRmYXZvdXJpdGUnXG5cbmNsYXNzIE1vdmllQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmdldEltYWdlID0gdGhpcy5nZXRJbWFnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0SW1hZ2UoaW1hZ2VQYXRoKSB7XG4gICAgcmV0dXJuIGBodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzAwJHtpbWFnZVBhdGh9YDtcbiAgfVxuXG4gIGhhbmRsZUxpa2UgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcylcbiAgICB0aGlzLnByb3BzLmFkZEZhdm91cml0ZSh0aGlzLnByb3BzLm1vdmllLmlkKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVDYXJkXCIga2V5PXt0aGlzLnByb3BzLmtleX0+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW92aWVJbWFnZVwiIGFsdD17dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX0gc3JjPXt0aGlzLmdldEltYWdlKHRoaXMucHJvcHMubW92aWUucG9zdGVyX3BhdGgpfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlVGl0bGVcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYW5ndWFnZVwiPnt0aGlzLnByb3BzLm1vdmllLm9yaWdpbmFsX2xhbmd1YWdlfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLm1vdmllLnRpdGxlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VIZWFkZXJcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyZWxlYXNlRGF0ZVwiPnt0aGlzLnByb3BzLm1vdmllLnJlbGVhc2VfZGF0ZX08L2k+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxpa2V9PjwvaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvbW1lbnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidm90ZV9jb3VudFwiPnt0aGlzLnByb3BzLm1vdmllLnZvdGVfY291bnR9PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tb3ZpZUNhcmQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMzAxcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM0NXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tb3ZpZUltYWdlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW92aWVDYXJkOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltYWdlVGl0bGUge1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7IC8qIGFic29sdXRlIHBvc2l0aW9uIChzbyB3ZSBjYW4gcG9zaXRpb24gaXQgd2hlcmUgd2Ugd2FudCkqL1xuICAgICAgICAgICAgYm90dG9tOjBweDtcbiAgICAgICAgICAgIGxlZnQ6MHB4O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzo1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmljb25zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVsZWFzZURhdGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6M3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sYW5ndWFnZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0bGUgeyBcbiAgICAgICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfSAgXG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUsIG51bGwpKE1vdmllQ2FyZCk7Il19 */\n/*@ sourceURL=components/movieCard.js */'
      }));
    }
  }]);

  return MovieCard;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
}, null)(MovieCard);