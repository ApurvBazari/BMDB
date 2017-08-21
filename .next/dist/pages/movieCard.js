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
      return _react2.default.createElement("div", { className: "movieCard", "data-jsx": 3467855277
      }, _react2.default.createElement("img", { className: "movieImage", alt: this.props.movie.title, src: this.getImage(this.props.movie.poster_path), "data-jsx": 3467855277
      }), _react2.default.createElement("div", { className: "imageTitle", "data-jsx": 3467855277
      }, _react2.default.createElement("p", { className: "language", "data-jsx": 3467855277
      }, this.props.movie.original_language), _react2.default.createElement("p", { className: "title", "data-jsx": 3467855277
      }, this.props.movie.title)), _react2.default.createElement("div", { className: "imageHeader", "data-jsx": 3467855277
      }, _react2.default.createElement("i", { className: "releaseDate", "data-jsx": 3467855277
      }, this.props.movie.release_date), _react2.default.createElement("div", { className: "icons", "data-jsx": 3467855277
      }, _react2.default.createElement("i", { className: "fa fa-heart", "aria-hidden": "true", "data-jsx": 3467855277
      }), _react2.default.createElement("i", { className: "fa fa-comment", "aria-hidden": "true", "data-jsx": 3467855277
      }), _react2.default.createElement("i", { className: "fa fa-star", "aria-hidden": "true", "data-jsx": 3467855277
      }), _react2.default.createElement("i", { className: "vote_count", "data-jsx": 3467855277
      }, this.props.movie.vote_count))), _react2.default.createElement(_style2.default, {
        styleId: 3467855277,
        css: ".movieCard[data-jsx=\"3467855277\"]{display:block;margin:10px;border:1px solid #ccc;float:left;width:301px;height:345px;position:relative}.movieImage[data-jsx=\"3467855277\"]{position:relative;width:100%;height:100%}.movieCard[data-jsx=\"3467855277\"]:hover{border:1px solid #777}.imageTitle[data-jsx=\"3467855277\"]{position:absolute;bottom:0px;left:0px;width:100%;color:white;opacity:0.6;padding:5px}.icons[data-jsx=\"3467855277\"]{position:absolute;top:0px;right:0px;padding:5px}.releaseDate[data-jsx=\"3467855277\"]{position:absolute;top:0px;left:0px;padding:5px}.fa[data-jsx=\"3467855277\"]{padding:3px}.language[data-jsx=\"3467855277\"]{font-size:14px;font-variant:small-caps}.title[data-jsx=\"3467855277\"]{margin:0px;font-size:20px}"
      }));
    }
  }]);

  return MovieCard;
}(_react2.default.Component);

exports.default = MovieCard;