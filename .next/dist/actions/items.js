'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.itemsFetchData = exports.errorAfterFiveSeconds = exports.itemsFetchDataSuccess = exports.itemsIsLoading = exports.itemsHasErrored = undefined;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var itemsHasErrored = exports.itemsHasErrored = function itemsHasErrored(bool) {
    return dispatch({
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    });
};

var itemsIsLoading = exports.itemsIsLoading = function itemsIsLoading(bool) {
    return dispatch({
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    });
};

var itemsFetchDataSuccess = exports.itemsFetchDataSuccess = function itemsFetchDataSuccess(items) {
    return dispatch({
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: items
    });
};

var errorAfterFiveSeconds = exports.errorAfterFiveSeconds = function errorAfterFiveSeconds() {
    // We return a const instead =  of  =>an action object
    return function (dispatch) {
        setTimeout(function () {
            // This const is able =  to  =>dispatch other action creators
            dispatch(itemsHasErrored(true));
        }, 5000);
    };
};

var itemsFetchData = exports.itemsFetchData = function itemsFetchData(url) {
    return function (dispatch) {
        dispatch(itemsIsLoading(true));
        (0, _isomorphicFetch2.default)(url).then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(itemsIsLoading(false));
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