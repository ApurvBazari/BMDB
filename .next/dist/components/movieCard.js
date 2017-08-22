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

var _redux = require('redux');

var _addfavourite = require('../actions/addfavourite');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/apurv/Desktop/nextjs/components/movieCard.js';


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
      return _react2.default.createElement('div', { className: 'movieCard', key: this.props.key, 'data-jsx': 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('img', { className: 'movieImage', alt: this.props.movie.title, src: this.getImage(this.props.movie.poster_path), 'data-jsx': 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('div', { className: 'imageTitle', 'data-jsx': 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('p', { className: 'language', 'data-jsx': 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, this.props.movie.original_language), _react2.default.createElement('p', { className: 'title', 'data-jsx': 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, this.props.movie.title)), _react2.default.createElement('div', { className: 'imageHeader', 'data-jsx': 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('i', { className: 'releaseDate', 'data-jsx': 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, this.props.movie.release_date), _react2.default.createElement('div', { className: 'icons', 'data-jsx': 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('i', { className: 'fa fa-heart', 'aria-hidden': 'true', onClick: this.handleLike, 'data-jsx': 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement('i', { className: 'fa fa-comment', 'aria-hidden': 'true', 'data-jsx': 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', 'data-jsx': 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement('i', { className: 'vote_count', 'data-jsx': 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, this.props.movie.vote_count))), _react2.default.createElement(_style2.default, {
        styleId: 3467855277,
        css: '.movieCard[data-jsx="3467855277"]{display:block;margin:10px;border:1px solid #ccc;float:left;width:301px;height:345px;position:relative}.movieImage[data-jsx="3467855277"]{position:relative;width:100%;height:100%}.movieCard[data-jsx="3467855277"]:hover{border:1px solid #777}.imageTitle[data-jsx="3467855277"]{position:absolute;bottom:0px;left:0px;width:100%;color:white;opacity:0.6;padding:5px}.icons[data-jsx="3467855277"]{position:absolute;top:0px;right:0px;padding:5px}.releaseDate[data-jsx="3467855277"]{position:absolute;top:0px;left:0px;padding:5px}.fa[data-jsx="3467855277"]{padding:3px}.language[data-jsx="3467855277"]{font-size:14px;font-variant:small-caps}.title[data-jsx="3467855277"]{margin:0px;font-size:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92aWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDb0IsQUFHMkIsQUFVSSxBQUtJLEFBSUwsQUFVQyxBQU9BLEFBT1AsQUFJSSxBQUtMLFdBQ0ssQ0FUakIsRUEzQ2MsQ0FnRGYsR0F0Q2MsQUFTRCxBQVVGLEFBT0EsSUFyQlYsSUFkd0IsQUE2QlosQUFPRCxBQWdCWCxHQTFDYyxBQVNKLE1Ba0JJLENBUEEsRUFWRixDQTJCWixFQXBDQSxNQTJCQSxDQXJDYSxBQThCYixDQVZhLFVBbkJDLEVBb0JELFVBbkJFLEVBb0JGLFdBbkJPLENBb0JwQixpQkFuQkEiLCJmaWxlIjoiY29tcG9uZW50cy9tb3ZpZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FwdXJ2L0Rlc2t0b3AvbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7YWRkRmF2b3VyaXRlfSBmcm9tICcuLi9hY3Rpb25zL2FkZGZhdm91cml0ZSdcblxuY2xhc3MgTW92aWVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZ2V0SW1hZ2UgPSB0aGlzLmdldEltYWdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRJbWFnZShpbWFnZVBhdGgpIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAke2ltYWdlUGF0aH1gO1xuICB9XG5cbiAgaGFuZGxlTGlrZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuICAgIHRoaXMucHJvcHMuYWRkRmF2b3VyaXRlKHRoaXMucHJvcHMubW92aWUuaWQpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZUNhcmRcIiBrZXk9e3RoaXMucHJvcHMua2V5fT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtb3ZpZUltYWdlXCIgYWx0PXt0aGlzLnByb3BzLm1vdmllLnRpdGxlfSBzcmM9e3RoaXMuZ2V0SW1hZ2UodGhpcy5wcm9wcy5tb3ZpZS5wb3N0ZXJfcGF0aCl9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VUaXRsZVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhbmd1YWdlXCI+e3RoaXMucHJvcHMubW92aWUub3JpZ2luYWxfbGFuZ3VhZ2V9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMubW92aWUudGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZUhlYWRlclwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJlbGVhc2VEYXRlXCI+e3RoaXMucHJvcHMubW92aWUucmVsZWFzZV9kYXRlfTwvaT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGlrZX0+PC9pPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29tbWVudFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ2b3RlX2NvdW50XCI+e3RoaXMucHJvcHMubW92aWUudm90ZV9jb3VudH08L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1vdmllQ2FyZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAzMDFweDtcbiAgICAgICAgICAgIGhlaWdodDogMzQ1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1vdmllSW1hZ2Uge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb3ZpZUNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc3NztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW1hZ2VUaXRsZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTsgLyogYWJzb2x1dGUgcG9zaXRpb24gKHNvIHdlIGNhbiBwb3NpdGlvbiBpdCB3aGVyZSB3ZSB3YW50KSovXG4gICAgICAgICAgICBib3R0b206MHB4O1xuICAgICAgICAgICAgbGVmdDowcHg7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICBvcGFjaXR5OjAuNjtcbiAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pY29ucyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlbGVhc2VEYXRlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mYSB7XG4gICAgICAgICAgICBwYWRkaW5nOjNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGFuZ3VhZ2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHsgXG4gICAgICAgICAgICBtYXJnaW46MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH0gIFxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkRmF2b3VyaXRlOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkRmF2b3VyaXRlLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1vdmllQ2FyZCk7Il19 */\n/*@ sourceURL=components/movieCard.js */'
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

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
}, mapDispatchToProps)(MovieCard);