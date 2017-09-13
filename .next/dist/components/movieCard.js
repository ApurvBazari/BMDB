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
      console.log(localStorage);
    };

    _this.handleDisike = function () {
      console.log('Dislike', _this.props);
      var favouriteMovies = localStorage.getItem('favouriteMovies') ? JSON.parse(localStorage.getItem('favouriteMovies')) : [];
      var newList = [];
      if (favouriteMovies) {
        favouriteMovies.forEach(function (movie) {
          if (movie.id != _this.props.movie.id) {
            newList.push(movie);
          }
        });
      }
      //console.log(newList);
      localStorage.setItem("favouriteMovies", (0, _stringify2.default)(newList));
      _this.props.handleDisike;
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
            lineNumber: 41
          }
        });
      } else {
        likeButton = _react2.default.createElement('i', { className: 'fa fa-heart', 'aria-hidden': 'true', onClick: this.handleLike, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        });
      }
      return _react2.default.createElement('div', { className: 'movieCard', key: this.props.key, 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('img', { className: 'movieImage', alt: this.props.movie.title, src: this.getImage(this.props.movie.poster_path), 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement('div', { className: 'imageTitle', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('p', { className: 'language', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, this.props.movie.original_language), _react2.default.createElement('p', { className: 'title', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, this.props.movie.title)), _react2.default.createElement('div', { className: 'imageHeader', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('i', { className: 'releaseDate', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, this.props.movie.release_date), _react2.default.createElement('div', { className: 'icons', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, likeButton, _react2.default.createElement('i', { className: 'fa fa-comment', 'aria-hidden': 'true', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement('i', { className: 'vote_count', 'data-jsx': 1665400330,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, this.props.movie.vote_count))), _react2.default.createElement(_style2.default, {
        styleId: 1665400330,
        css: '.movieCard[data-jsx="1665400330"]{display:block;margin:10px;border:1px solid #ccc;float:left;width:301px;height:345px;position:relative}.movieImage[data-jsx="1665400330"]{position:relative;width:100%;height:100%}.movieCard[data-jsx="1665400330"]:hover{border:1px solid #777}.imageTitle[data-jsx="1665400330"]{position:absolute;bottom:0px;left:0px;width:100%;color:white;padding:5px}.icons[data-jsx="1665400330"]{position:absolute;top:0px;right:0px;padding:5px;font-size:12px;color:white}.releaseDate[data-jsx="1665400330"]{position:absolute;top:0px;left:0px;padding:5px;color:white}.fa[data-jsx="1665400330"]{padding:3px}.fa[data-jsx="1665400330"]>fa-heart[data-jsx="1665400330"]>fa-heart-like[data-jsx="1665400330"]{color:red}.language[data-jsx="1665400330"]{font-size:14px;font-variant:small-caps}.title[data-jsx="1665400330"]{margin:0px;font-size:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92aWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREb0IsQUFHMkIsQUFVSSxBQUtJLEFBSUwsQUFTQyxBQVNBLEFBUVAsQUFJRCxBQUlLLEFBS0wsVUFSWixDQVNpQixDQWJqQixFQTdDYyxDQXNEZixHQTVDYyxBQVNELEFBU0YsQUFTQSxJQXRCVixJQWR3QixBQTRCWixBQVNELEFBcUJYLEdBaERjLEFBU0osTUFtQkksQ0FUQSxFQVRGLENBaUNaLEVBMUNBLE1BNEJjLENBdENELEFBNkJJLENBVEosVUFuQkMsQUFzQ2QsRUFsQmEsRUFTQyxRQTVCQyxFQW9CZixFQVNBLFNBNUJvQixrQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9tb3ZpZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXB1cnYvRGVza3RvcC9CTURCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5jbGFzcyBNb3ZpZUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5nZXRJbWFnZSA9IHRoaXMuZ2V0SW1hZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldEltYWdlID0gKGltYWdlUGF0aCkgPT4ge1xuICAgIHJldHVybiBgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMCR7aW1hZ2VQYXRofWA7XG4gIH1cblxuICBoYW5kbGVMaWtlID0gKCkgPT4ge1xuICAgIGxldCBmYXZvdXJpdGVNb3ZpZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm91cml0ZU1vdmllc1wiKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvdXJpdGVNb3ZpZXNcIikpIDogW107XG4gICAgZmF2b3VyaXRlTW92aWVzW2Zhdm91cml0ZU1vdmllcyA/IGZhdm91cml0ZU1vdmllcy5sZW5ndGggOiAwXSA9IHRoaXMucHJvcHMubW92aWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZvdXJpdGVNb3ZpZXNcIiwgSlNPTi5zdHJpbmdpZnkoZmF2b3VyaXRlTW92aWVzKSk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbiAgfVxuXG4gIGhhbmRsZURpc2lrZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRGlzbGlrZScsIHRoaXMucHJvcHMpO1xuICAgIGxldCBmYXZvdXJpdGVNb3ZpZXMgPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvdXJpdGVNb3ZpZXMnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm91cml0ZU1vdmllcycpKSA6IFtdO1xuICAgIGxldCBuZXdMaXN0ID0gW107XG4gICAgaWYgKGZhdm91cml0ZU1vdmllcykge1xuICAgICAgZmF2b3VyaXRlTW92aWVzLmZvckVhY2goKG1vdmllKSA9PiB7XG4gICAgICAgIGlmIChtb3ZpZS5pZCAhPSB0aGlzLnByb3BzLm1vdmllLmlkKSB7XG4gICAgICAgICAgbmV3TGlzdC5wdXNoKG1vdmllKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2cobmV3TGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZvdXJpdGVNb3ZpZXNcIiwgSlNPTi5zdHJpbmdpZnkobmV3TGlzdCkpO1xuICAgIHRoaXMucHJvcHMuaGFuZGxlRGlzaWtlO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBsZXQgbGlrZUJ1dHRvbjtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlzTGlrZWQpIHtcbiAgICAgICAgbGlrZUJ1dHRvbiA9IDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0LW8gZmEtaGVhcnQtbGlrZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGlzaWtlfT48L2k+XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWtlQnV0dG9uID0gPGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxpa2V9PjwvaT5cbiAgICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZUNhcmRcIiBrZXk9e3RoaXMucHJvcHMua2V5fT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtb3ZpZUltYWdlXCIgYWx0PXt0aGlzLnByb3BzLm1vdmllLnRpdGxlfSBzcmM9e3RoaXMuZ2V0SW1hZ2UodGhpcy5wcm9wcy5tb3ZpZS5wb3N0ZXJfcGF0aCl9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VUaXRsZVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhbmd1YWdlXCI+e3RoaXMucHJvcHMubW92aWUub3JpZ2luYWxfbGFuZ3VhZ2V9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMubW92aWUudGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZUhlYWRlclwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJlbGVhc2VEYXRlXCI+e3RoaXMucHJvcHMubW92aWUucmVsZWFzZV9kYXRlfTwvaT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XG4gICAgICAgICAgICB7bGlrZUJ1dHRvbn1cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvbW1lbnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidm90ZV9jb3VudFwiPnt0aGlzLnByb3BzLm1vdmllLnZvdGVfY291bnR9PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tb3ZpZUNhcmQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMzAxcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM0NXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tb3ZpZUltYWdlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW92aWVDYXJkOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltYWdlVGl0bGUge1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7IC8qIGFic29sdXRlIHBvc2l0aW9uIChzbyB3ZSBjYW4gcG9zaXRpb24gaXQgd2hlcmUgd2Ugd2FudCkqL1xuICAgICAgICAgICAgYm90dG9tOjBweDtcbiAgICAgICAgICAgIGxlZnQ6MHB4O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzo1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmljb25zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVsZWFzZURhdGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6M3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mYT5mYS1oZWFydD5mYS1oZWFydC1saWtlIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxhbmd1YWdlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2Fwc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSB7IFxuICAgICAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9ICBcbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBmYXZvdXJpdGVzOiBzdGF0ZS5hZGRGYXZvdXJpdGVcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoTW92aWVDYXJkKTsiXX0= */\n/*@ sourceURL=components/movieCard.js */'
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