'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.itemsFetchData = exports.itemsFetchDataSuccess = exports.itemsIsLoading = exports.itemsHasErrored = undefined;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var itemsHasErrored = exports.itemsHasErrored = function itemsHasErrored(bool) {
    return function (dispatch) {
        return dispatch({
            type: 'ITEMS_HAS_ERRORED',
            hasErrored: bool
        });
    };
};

var itemsIsLoading = exports.itemsIsLoading = function itemsIsLoading(bool) {
    return function (dispatch) {
        console.log('Items is laoding!!', bool);
        return dispatch({
            type: 'ITEMS_IS_LOADING',
            isLoading: bool
        });
    };
};

var itemsFetchDataSuccess = exports.itemsFetchDataSuccess = function itemsFetchDataSuccess(items) {
    return function (dispatch) {
        return dispatch({
            type: 'ITEMS_FETCH_DATA_SUCCESS',
            items: items
        });
    };
};

var itemsFetchData = exports.itemsFetchData = function itemsFetchData(url) {
    return function (dispatch) {
        dispatch(itemsIsLoading(true));
        return (0, _isomorphicFetch2.default)(url).then(function (response) {
            dispatch(itemsIsLoading(false));
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }).then(function (response) {
            return response.json();
        }).then(function (items) {
            return dispatch(itemsFetchDataSuccess(items));
        }).catch(function () {
            return dispatch(itemsHasErrored(true));
        });
    };
};