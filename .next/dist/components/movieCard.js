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
      return _react2.default.createElement('div', { className: 'movieCard', key: this.props.key, 'data-jsx': 1454830188,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('img', { className: 'movieImage', alt: this.props.movie.title, src: this.getImage(this.props.movie.poster_path), 'data-jsx': 1454830188,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('div', { className: 'imageTitle', 'data-jsx': 1454830188,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('p', { className: 'language', 'data-jsx': 1454830188,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, this.props.movie.original_language), _react2.default.createElement('p', { className: 'title', 'data-jsx': 1454830188,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, this.props.movie.title)), _react2.default.createElement('div', { className: 'imageHeader', 'data-jsx': 1454830188,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('i', { className: 'releaseDate', 'data-jsx': 1454830188,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, this.props.movie.release_date), _react2.default.createElement('div', { className: 'icons', 'data-jsx': 1454830188,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('i', { className: 'fa fa-heart', 'aria-hidden': 'true', onClick: this.handleLike, 'data-jsx': 1454830188,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement('i', { className: 'fa fa-comment', 'aria-hidden': 'true', 'data-jsx': 1454830188,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', 'data-jsx': 1454830188,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement('i', { className: 'vote_count', 'data-jsx': 1454830188,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, this.props.movie.vote_count))), _react2.default.createElement(_style2.default, {
        styleId: 1454830188,
        css: '.movieCard[data-jsx="1454830188"]{display:block;margin:10px;border:1px solid #ccc;float:left;width:301px;height:345px;position:relative}.movieImage[data-jsx="1454830188"]{position:relative;width:100%;height:100%}.movieCard[data-jsx="1454830188"]:hover{border:1px solid #777}.imageTitle[data-jsx="1454830188"]{position:absolute;bottom:0px;left:0px;width:100%;color:white;padding:5px}.icons[data-jsx="1454830188"]{position:absolute;top:0px;right:0px;padding:5px;font-size:12px}.releaseDate[data-jsx="1454830188"]{position:absolute;top:0px;left:0px;padding:5px}.fa[data-jsx="1454830188"]{padding:3px}.language[data-jsx="1454830188"]{font-size:14px;font-variant:small-caps}.title[data-jsx="1454830188"]{margin:0px;font-size:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92aWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDb0IsQUFHMkIsQUFVSSxBQUtJLEFBSUwsQUFTQyxBQVFBLEFBT1AsQUFJSSxBQUtMLFdBQ0ssQ0FUakIsRUEzQ2MsQ0FnRGYsR0F0Q2MsQUFTRCxBQVNGLEFBUUEsSUFyQlYsSUFkd0IsQUE0QlosQUFRRCxBQWdCWCxHQTFDYyxBQVNKLE1Ba0JJLENBUkEsRUFURixDQTJCWixFQXBDQSxNQTJCQSxDQXJDYSxBQTZCSSxDQVRKLFVBbkJDLEVBb0JELEVBU2IsUUE1QmUsRUFvQmYsV0FuQm9CLGtCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL21vdmllQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcHVydi9EZXNrdG9wL0JNREIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHthZGRGYXZvdXJpdGV9IGZyb20gJy4uL2FjdGlvbnMvYWRkZmF2b3VyaXRlJ1xuXG5jbGFzcyBNb3ZpZUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5nZXRJbWFnZSA9IHRoaXMuZ2V0SW1hZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldEltYWdlKGltYWdlUGF0aCkge1xuICAgIHJldHVybiBgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMCR7aW1hZ2VQYXRofWA7XG4gIH1cblxuICBoYW5kbGVMaWtlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gICAgdGhpcy5wcm9wcy5hZGRGYXZvdXJpdGUodGhpcy5wcm9wcy5tb3ZpZS5pZCk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllQ2FyZFwiIGtleT17dGhpcy5wcm9wcy5rZXl9PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vdmllSW1hZ2VcIiBhbHQ9e3RoaXMucHJvcHMubW92aWUudGl0bGV9IHNyYz17dGhpcy5nZXRJbWFnZSh0aGlzLnByb3BzLm1vdmllLnBvc3Rlcl9wYXRoKX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVRpdGxlXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFuZ3VhZ2VcIj57dGhpcy5wcm9wcy5tb3ZpZS5vcmlnaW5hbF9sYW5ndWFnZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlSGVhZGVyXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmVsZWFzZURhdGVcIj57dGhpcy5wcm9wcy5tb3ZpZS5yZWxlYXNlX2RhdGV9PC9pPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17dGhpcy5oYW5kbGVMaWtlfT48L2k+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb21tZW50XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInZvdGVfY291bnRcIj57dGhpcy5wcm9wcy5tb3ZpZS52b3RlX2NvdW50fTwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubW92aWVDYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDMwMXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNDVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW92aWVJbWFnZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vdmllQ2FyZDpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzc3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbWFnZVRpdGxlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlOyAvKiBhYnNvbHV0ZSBwb3NpdGlvbiAoc28gd2UgY2FuIHBvc2l0aW9uIGl0IHdoZXJlIHdlIHdhbnQpKi9cbiAgICAgICAgICAgIGJvdHRvbTowcHg7XG4gICAgICAgICAgICBsZWZ0OjBweDtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pY29ucyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlbGVhc2VEYXRlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mYSB7XG4gICAgICAgICAgICBwYWRkaW5nOjNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGFuZ3VhZ2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHsgXG4gICAgICAgICAgICBtYXJnaW46MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH0gIFxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkRmF2b3VyaXRlOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkRmF2b3VyaXRlLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1vdmllQ2FyZCk7Il19 */\n/*@ sourceURL=components/movieCard.js */'
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