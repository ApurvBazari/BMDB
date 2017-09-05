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

var _reactRedux = require('react-redux');

var _addfavourite = require('../actions/addfavourite');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/apurv/Desktop/BMDB/components/movieCard.js';


var MovieCard = function (_React$Component) {
  (0, _inherits3.default)(MovieCard, _React$Component);

  function MovieCard(props) {
    (0, _classCallCheck3.default)(this, MovieCard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MovieCard.__proto__ || (0, _getPrototypeOf2.default)(MovieCard)).call(this, props));

    _this.handleLike = function () {
      debugger;
      console.log(_this.props);
      var favouriteIds = localStorage.getItem("favouriteIds") ? JSON.parse(localStorage.getItem("favouriteIds")) : [];
      favouriteIds[favouriteIds ? favouriteIds.length : 0] = _this.props.movie.id;
      localStorage.setItem("favouriteIds", (0, _stringify2.default)(favouriteIds));
      _this.props.addFavourite(favouriteIds);
      console.log(localStorage);
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
      return _react2.default.createElement('div', { className: 'movieCard', key: this.props.key, 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('img', { className: 'movieImage', alt: this.props.movie.title, src: this.getImage(this.props.movie.poster_path), 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('div', { className: 'imageTitle', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('p', { className: 'language', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, this.props.movie.original_language), _react2.default.createElement('p', { className: 'title', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, this.props.movie.title)), _react2.default.createElement('div', { className: 'imageHeader', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('i', { className: 'releaseDate', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, this.props.movie.release_date), _react2.default.createElement('div', { className: 'icons', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('i', { className: 'fa fa-heart', 'aria-hidden': 'true', onClick: this.handleLike, 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement('i', { className: 'fa fa-comment', 'aria-hidden': 'true', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement('i', { className: 'vote_count', 'data-jsx': 1771419404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, this.props.movie.vote_count))), _react2.default.createElement(_style2.default, {
        styleId: 1771419404,
        css: '.movieCard[data-jsx="1771419404"]{display:block;margin:10px;border:1px solid #ccc;float:left;width:301px;height:345px;position:relative}.movieImage[data-jsx="1771419404"]{position:relative;width:100%;height:100%}.movieCard[data-jsx="1771419404"]:hover{border:1px solid #777}.imageTitle[data-jsx="1771419404"]{position:absolute;bottom:0px;left:0px;width:100%;color:white;padding:5px}.icons[data-jsx="1771419404"]{position:absolute;top:0px;right:0px;padding:5px;font-size:12px;color:white}.releaseDate[data-jsx="1771419404"]{position:absolute;top:0px;left:0px;padding:5px;color:white}.fa[data-jsx="1771419404"]{padding:3px}.language[data-jsx="1771419404"]{font-size:14px;font-variant:small-caps}.title[data-jsx="1771419404"]{margin:0px;font-size:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92aWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDb0IsQUFHMkIsQUFVSSxBQUtJLEFBSUwsQUFTQyxBQVNBLEFBUVAsQUFJSSxBQUtMLFdBQ0ssQ0FUakIsRUE3Q2MsQ0FrRGYsR0F4Q2MsQUFTRCxBQVNGLEFBU0EsSUF0QlYsSUFkd0IsQUE0QlosQUFTRCxBQWlCWCxHQTVDYyxBQVNKLE1BbUJJLENBVEEsRUFURixDQTZCWixFQXRDQSxNQTRCYyxDQXRDRCxBQTZCSSxDQVRKLFVBbkJDLEFBc0NkLEVBbEJhLEVBU0MsUUE1QkMsRUFvQmYsRUFTQSxTQTVCb0Isa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvbW92aWVDYXJkLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FwdXJ2L0Rlc2t0b3AvQk1EQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2FkZEZhdm91cml0ZX0gZnJvbSAnLi4vYWN0aW9ucy9hZGRmYXZvdXJpdGUnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcblxuY2xhc3MgTW92aWVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZ2V0SW1hZ2UgPSB0aGlzLmdldEltYWdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRJbWFnZShpbWFnZVBhdGgpIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAke2ltYWdlUGF0aH1gO1xuICB9XG5cbiAgaGFuZGxlTGlrZSA9ICgpID0+IHtcbiAgICBkZWJ1Z2dlclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgIGxldCBmYXZvdXJpdGVJZHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm91cml0ZUlkc1wiKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvdXJpdGVJZHNcIikpIDogW107XG4gICAgZmF2b3VyaXRlSWRzW2Zhdm91cml0ZUlkcyA/IGZhdm91cml0ZUlkcy5sZW5ndGggOiAwXSA9IHRoaXMucHJvcHMubW92aWUuaWQ7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZvdXJpdGVJZHNcIiwgSlNPTi5zdHJpbmdpZnkoZmF2b3VyaXRlSWRzKSk7XG4gICAgdGhpcy5wcm9wcy5hZGRGYXZvdXJpdGUoZmF2b3VyaXRlSWRzKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZUNhcmRcIiBrZXk9e3RoaXMucHJvcHMua2V5fT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtb3ZpZUltYWdlXCIgYWx0PXt0aGlzLnByb3BzLm1vdmllLnRpdGxlfSBzcmM9e3RoaXMuZ2V0SW1hZ2UodGhpcy5wcm9wcy5tb3ZpZS5wb3N0ZXJfcGF0aCl9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VUaXRsZVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhbmd1YWdlXCI+e3RoaXMucHJvcHMubW92aWUub3JpZ2luYWxfbGFuZ3VhZ2V9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMubW92aWUudGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZUhlYWRlclwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJlbGVhc2VEYXRlXCI+e3RoaXMucHJvcHMubW92aWUucmVsZWFzZV9kYXRlfTwvaT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGlrZX0+PC9pPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29tbWVudFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ2b3RlX2NvdW50XCI+e3RoaXMucHJvcHMubW92aWUudm90ZV9jb3VudH08L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1vdmllQ2FyZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAzMDFweDtcbiAgICAgICAgICAgIGhlaWdodDogMzQ1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1vdmllSW1hZ2Uge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb3ZpZUNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc3NztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW1hZ2VUaXRsZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTsgLyogYWJzb2x1dGUgcG9zaXRpb24gKHNvIHdlIGNhbiBwb3NpdGlvbiBpdCB3aGVyZSB3ZSB3YW50KSovXG4gICAgICAgICAgICBib3R0b206MHB4O1xuICAgICAgICAgICAgbGVmdDowcHg7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaWNvbnMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWxlYXNlRGF0ZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmEge1xuICAgICAgICAgICAgcGFkZGluZzozcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxhbmd1YWdlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2Fwc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSB7IFxuICAgICAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9ICBcbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZEZhdm91cml0ZTogYmluZEFjdGlvbkNyZWF0b3JzKGFkZEZhdm91cml0ZSwgZGlzcGF0Y2gpXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZhdm91cml0ZXM6IHN0YXRlLmFkZEZhdm91cml0ZVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1vdmllQ2FyZCk7Il19 */\n/*@ sourceURL=components/movieCard.js */'
      }));
    }
  }]);

  return MovieCard;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addFavourite: (0, _redux.bindActionCreators)(_addfavourite.addFavourite, dispatch)
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    favourites: state.addFavourite
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MovieCard);