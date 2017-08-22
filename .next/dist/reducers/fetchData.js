"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _actionTypes = require("../actionTypes");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        isFetchSuccess: null,
        moviesData: null,
        error: {
            code: null,
            text: null
        }
    };
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.FETCH_SUCCESS:
            var moviesData = [];
            _lodash2.default.forEach(action.payload.results, function (o) {
                moviesData[o.id] = (0, _extends3.default)({}, o, {
                    favorite: false
                });
            });
            moviesData = moviesData.filter(function (x) {
                return !!x;
            });
            return (0, _extends3.default)({}, state, {
                isFetchSuccess: true,
                moviesData: moviesData
            });
        case _actionTypes.FETCH_FALIURE:
            return (0, _extends3.default)({}, state, {
                isFetchSuccess: false,
                error: {
                    code: 404,
                    text: "Something went wrong!"
                }
            });
        default:
            return state;
    }
}

exports.default = fetchReducer;