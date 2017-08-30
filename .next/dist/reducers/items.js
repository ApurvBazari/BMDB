'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.items = exports.itemsIsLoading = exports.itemsHasErrored = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var itemsHasErrored = exports.itemsHasErrored = function itemsHasErrored() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments[1];

    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return (0, _assign2.default)({}, state, { action: action.hasErrored });
        default:
            return state;
    }
};

var itemsIsLoading = exports.itemsIsLoading = function itemsIsLoading() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments[1];

    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return (0, _assign2.default)({}, state, { action: action.isLoading });
        default:
            return state;
    }
};

var items = exports.items = function items() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return (0, _assign2.default)({}, state, { items: action.items });
        default:
            return state;
    }
};