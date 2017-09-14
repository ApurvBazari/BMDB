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

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/apurv/Desktop/BMDB/components/movieCard.js';


var MovieCard = function (_React$Component) {
  (0, _inherits3.default)(MovieCard, _React$Component);

  function MovieCard(props) {
    (0, _classCallCheck3.default)(this, MovieCard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MovieCard.__proto__ || (0, _getPrototypeOf2.default)(MovieCard)).call(this, props));

    _this.getImage = function (imagePath) {
      return 'https://image.tmdb.org/t/p/w300' + imagePath;
    };

    _this.handleLike = function () {
      var favouriteMovies = localStorage.getItem("favouriteMovies") ? JSON.parse(localStorage.getItem("favouriteMovies")) : [];
      favouriteMovies[favouriteMovies ? favouriteMovies.length : 0] = _this.props.movie;
      localStorage.setItem("favouriteMovies", (0, _stringify2.default)(favouriteMovies));
    };

    _this.handleDisike = function () {
      var favouriteMovies = localStorage.getItem('favouriteMovies') ? JSON.parse(localStorage.getItem('favouriteMovies')) : [];
      var newList = [];
      if (favouriteMovies) {
        favouriteMovies.forEach(function (movie) {
          if (movie.id != _this.props.movie.id) {
            newList.push(movie);
          }
        });
      }
      localStorage.setItem("favouriteMovies", (0, _stringify2.default)(newList));
      _this.props.handleDislike(_this.props.movie);
    };

    _this.getImage = _this.getImage.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(MovieCard, [{
    key: 'render',
    value: function render() {
      var likeButton = void 0;
      if (this.props.isLiked) {
        likeButton = _react2.default.createElement('i', { className: 'fa fa-heart-o fa-heart-like', 'aria-hidden': 'true', onClick: this.handleDisike, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        });
      } else {
        likeButton = _react2.default.createElement('i', { className: 'fa fa-heart', 'aria-hidden': 'true', onClick: this.handleLike, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        });
      }
      return _react2.default.createElement('div', { className: 'movieCard', key: this.props.key, 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('img', { className: 'movieImage', alt: this.props.movie.title, src: this.getImage(this.props.movie.poster_path), 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement('div', { className: 'imageTitle', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('p', { className: 'language', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, this.props.movie.original_language), _react2.default.createElement('p', { className: 'title', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.props.movie.title)), _react2.default.createElement('div', { className: 'imageHeader', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('i', { className: 'releaseDate', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, this.props.movie.release_date), _react2.default.createElement('div', { className: 'icons', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, likeButton, _react2.default.createElement('i', { className: 'fa fa-comment', 'aria-hidden': 'true', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement('i', { className: 'vote_count', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, this.props.movie.vote_count))), _react2.default.createElement(_style2.default, {
        styleId: 1665400330,
        css: '.movieCard[data-jsx="1665400330"]{display:block;margin:10px;border:1px solid #ccc;float:left;width:301px;height:345px;position:relative}.movieImage[data-jsx="1665400330"]{position:relative;width:100%;height:100%}.movieCard[data-jsx="1665400330"]:hover{border:1px solid #777}.imageTitle[data-jsx="1665400330"]{position:absolute;bottom:0px;left:0px;width:100%;color:white;padding:5px}.icons[data-jsx="1665400330"]{position:absolute;top:0px;right:0px;padding:5px;font-size:12px;color:white}.releaseDate[data-jsx="1665400330"]{position:absolute;top:0px;left:0px;padding:5px;color:white}.fa[data-jsx="1665400330"]{padding:3px}.fa[data-jsx="1665400330"]>fa-heart[data-jsx="1665400330"]>fa-heart-like[data-jsx="1665400330"]{color:red}.language[data-jsx="1665400330"]{font-size:14px;font-variant:small-caps}.title[data-jsx="1665400330"]{margin:0px;font-size:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92aWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEb0IsQUFHMkIsQUFVSSxBQUtJLEFBSUwsQUFTQyxBQVNBLEFBUVAsQUFJRCxBQUlLLEFBS0wsVUFSWixDQVNpQixDQWJqQixFQTdDYyxDQXNEZixHQTVDYyxBQVNELEFBU0YsQUFTQSxJQXRCVixJQWR3QixBQTRCWixBQVNELEFBcUJYLEdBaERjLEFBU0osTUFtQkksQ0FUQSxFQVRGLENBaUNaLEVBMUNBLE1BNEJjLENBdENELEFBNkJJLENBVEosVUFuQkMsQUFzQ2QsRUFsQmEsRUFTQyxRQTVCQyxFQW9CZixFQVNBLFNBNUJvQixrQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9tb3ZpZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXB1cnYvRGVza3RvcC9CTURCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5jbGFzcyBNb3ZpZUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5nZXRJbWFnZSA9IHRoaXMuZ2V0SW1hZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldEltYWdlID0gKGltYWdlUGF0aCkgPT4ge1xuICAgIHJldHVybiBgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMCR7aW1hZ2VQYXRofWA7XG4gIH1cblxuICBoYW5kbGVMaWtlID0gKCkgPT4ge1xuICAgIGxldCBmYXZvdXJpdGVNb3ZpZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm91cml0ZU1vdmllc1wiKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvdXJpdGVNb3ZpZXNcIikpIDogW107XG4gICAgZmF2b3VyaXRlTW92aWVzW2Zhdm91cml0ZU1vdmllcyA/IGZhdm91cml0ZU1vdmllcy5sZW5ndGggOiAwXSA9IHRoaXMucHJvcHMubW92aWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZvdXJpdGVNb3ZpZXNcIiwgSlNPTi5zdHJpbmdpZnkoZmF2b3VyaXRlTW92aWVzKSk7XG4gIH1cblxuICBoYW5kbGVEaXNpa2UgPSAoKSA9PiB7XG4gICAgbGV0IGZhdm91cml0ZU1vdmllcyA9bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm91cml0ZU1vdmllcycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3VyaXRlTW92aWVzJykpIDogW107XG4gICAgbGV0IG5ld0xpc3QgPSBbXTtcbiAgICBpZiAoZmF2b3VyaXRlTW92aWVzKSB7XG4gICAgICBmYXZvdXJpdGVNb3ZpZXMuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICAgICAgaWYgKG1vdmllLmlkICE9IHRoaXMucHJvcHMubW92aWUuaWQpIHtcbiAgICAgICAgICBuZXdMaXN0LnB1c2gobW92aWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZvdXJpdGVNb3ZpZXNcIiwgSlNPTi5zdHJpbmdpZnkobmV3TGlzdCkpO1xuICAgIHRoaXMucHJvcHMuaGFuZGxlRGlzbGlrZSh0aGlzLnByb3BzLm1vdmllKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IGxpa2VCdXR0b247XG4gICAgICBpZiAodGhpcy5wcm9wcy5pc0xpa2VkKSB7XG4gICAgICAgIGxpa2VCdXR0b24gPSA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydC1vIGZhLWhlYXJ0LWxpa2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZURpc2lrZX0+PC9pPlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlrZUJ1dHRvbiA9IDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17dGhpcy5oYW5kbGVMaWtlfT48L2k+XG4gICAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVDYXJkXCIga2V5PXt0aGlzLnByb3BzLmtleX0+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW92aWVJbWFnZVwiIGFsdD17dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX0gc3JjPXt0aGlzLmdldEltYWdlKHRoaXMucHJvcHMubW92aWUucG9zdGVyX3BhdGgpfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlVGl0bGVcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYW5ndWFnZVwiPnt0aGlzLnByb3BzLm1vdmllLm9yaWdpbmFsX2xhbmd1YWdlfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLm1vdmllLnRpdGxlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VIZWFkZXJcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyZWxlYXNlRGF0ZVwiPnt0aGlzLnByb3BzLm1vdmllLnJlbGVhc2VfZGF0ZX08L2k+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPlxuICAgICAgICAgICAge2xpa2VCdXR0b259XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb21tZW50XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInZvdGVfY291bnRcIj57dGhpcy5wcm9wcy5tb3ZpZS52b3RlX2NvdW50fTwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubW92aWVDYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDMwMXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNDVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW92aWVJbWFnZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vdmllQ2FyZDpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzc3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbWFnZVRpdGxlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlOyAvKiBhYnNvbHV0ZSBwb3NpdGlvbiAoc28gd2UgY2FuIHBvc2l0aW9uIGl0IHdoZXJlIHdlIHdhbnQpKi9cbiAgICAgICAgICAgIGJvdHRvbTowcHg7XG4gICAgICAgICAgICBsZWZ0OjBweDtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pY29ucyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlbGVhc2VEYXRlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mYSB7XG4gICAgICAgICAgICBwYWRkaW5nOjNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmE+ZmEtaGVhcnQ+ZmEtaGVhcnQtbGlrZSB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sYW5ndWFnZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0bGUgeyBcbiAgICAgICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfSAgXG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmF2b3VyaXRlczogc3RhdGUuYWRkRmF2b3VyaXRlXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKE1vdmllQ2FyZCk7Il19 */\n/*@ sourceURL=components/movieCard.js */'
      }));
    }
  }]);

  return MovieCard;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    favourites: state.addFavourite
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(MovieCard);