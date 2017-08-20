"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

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
      return _react2.default.createElement("div", { className: "movieCard", "data-jsx": 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement("img", { className: "movieImage", alt: this.props.movie.title, src: this.getImage(this.props.movie.poster_path), "data-jsx": 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement("div", { className: "imageTitle", "data-jsx": 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement("p", { className: "language", "data-jsx": 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, this.props.movie.original_language), _react2.default.createElement("p", { className: "title", "data-jsx": 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.props.movie.title)), _react2.default.createElement("div", { className: "imageHeader", "data-jsx": 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement("i", { className: "releaseDate", "data-jsx": 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, this.props.movie.release_date), _react2.default.createElement("div", { className: "icons", "data-jsx": 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement("i", { className: "fa fa-heart", "aria-hidden": "true", "data-jsx": 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement("i", { className: "fa fa-star", "aria-hidden": "true", "data-jsx": 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement("i", { className: "fa fa-comment", "aria-hidden": "true", "data-jsx": 3467855277,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }))), _react2.default.createElement(_style2.default, {
        styleId: 3467855277,
        css: ".movieCard[data-jsx=\"3467855277\"]{display:block;margin:10px;border:1px solid #ccc;float:left;width:301px;height:345px;position:relative}.movieImage[data-jsx=\"3467855277\"]{position:relative;width:100%;height:100%}.movieCard[data-jsx=\"3467855277\"]:hover{border:1px solid #777}.imageTitle[data-jsx=\"3467855277\"]{position:absolute;bottom:0px;left:0px;width:100%;color:white;opacity:0.6;padding:5px}.icons[data-jsx=\"3467855277\"]{position:absolute;top:0px;right:0px;padding:5px}.releaseDate[data-jsx=\"3467855277\"]{position:absolute;top:0px;left:0px;padding:5px}.fa[data-jsx=\"3467855277\"]{padding:3px}.language[data-jsx=\"3467855277\"]{font-size:14px;font-variant:small-caps}.title[data-jsx=\"3467855277\"]{margin:0px;font-size:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL21vdmllQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ29CLEFBRzJCLEFBVUksQUFLSSxBQUlMLEFBVUMsQUFPQSxBQU9QLEFBSUksQUFLTCxXQUNLLENBVGpCLEVBM0NjLENBZ0RmLEdBdENjLEFBU0QsQUFVRixBQU9BLElBckJWLElBZHdCLEFBNkJaLEFBT0QsQUFnQlgsR0ExQ2MsQUFTSixNQWtCSSxDQVBBLEVBVkYsQ0EyQlosRUFwQ0EsTUEyQkEsQ0FyQ2EsQUE4QmIsQ0FWYSxVQW5CQyxFQW9CRCxVQW5CRSxFQW9CRixXQW5CTyxDQW9CcEIsaUJBbkJBIiwiZmlsZSI6InBhZ2VzL21vdmllQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXB1cnYvRGVza3RvcC9uZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIE1vdmllQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxuICAvLyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAvLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMCR7dGhpcy5wcm9wcy5tb3ZpZS5wb3N0ZXJfcGF0aH1gKTtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgaW1hZ2U6IHJlcy5kYXRhXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5nZXRJbWFnZSA9IHRoaXMuZ2V0SW1hZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldEltYWdlKGltYWdlUGF0aCkge1xuICAgIHJldHVybiBgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMCR7aW1hZ2VQYXRofWA7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllQ2FyZFwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vdmllSW1hZ2VcIiBhbHQ9e3RoaXMucHJvcHMubW92aWUudGl0bGV9IHNyYz17dGhpcy5nZXRJbWFnZSh0aGlzLnByb3BzLm1vdmllLnBvc3Rlcl9wYXRoKX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVRpdGxlXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFuZ3VhZ2VcIj57dGhpcy5wcm9wcy5tb3ZpZS5vcmlnaW5hbF9sYW5ndWFnZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlSGVhZGVyXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmVsZWFzZURhdGVcIj57dGhpcy5wcm9wcy5tb3ZpZS5yZWxlYXNlX2RhdGV9PC9pPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvbW1lbnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1vdmllQ2FyZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAzMDFweDtcbiAgICAgICAgICAgIGhlaWdodDogMzQ1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1vdmllSW1hZ2Uge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb3ZpZUNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc3NztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW1hZ2VUaXRsZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTsgLyogYWJzb2x1dGUgcG9zaXRpb24gKHNvIHdlIGNhbiBwb3NpdGlvbiBpdCB3aGVyZSB3ZSB3YW50KSovXG4gICAgICAgICAgICBib3R0b206MHB4O1xuICAgICAgICAgICAgbGVmdDowcHg7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICBvcGFjaXR5OjAuNjtcbiAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pY29ucyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlbGVhc2VEYXRlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mYSB7XG4gICAgICAgICAgICBwYWRkaW5nOjNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGFuZ3VhZ2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHsgXG4gICAgICAgICAgICBtYXJnaW46MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH0gIFxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1vdmllQ2FyZDsiXX0= */\n/*@ sourceURL=pages/movieCard.js */"
      }));
    }
  }]);

  return MovieCard;
}(_react2.default.Component);

exports.default = MovieCard;