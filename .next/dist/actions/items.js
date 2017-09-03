'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.itemsFetchData = exports.errorAfterFiveSeconds = exports.itemsFetchDataSuccess = exports.itemsIsLoading = exports.itemsHasErrored = undefined;

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

var errorAfterFiveSeconds = exports.errorAfterFiveSeconds = function errorAfterFiveSeconds() {
    return function (dispatch) {
        // We return a const instead =  of  =>an action object
        return function (dispatch) {
            setTimeout(function () {
                // This const is able =  to  =>dispatch other action creators
                dispatch(itemsHasErrored(true));
            }, 5000);
        };
    };
};

var itemsFetchData = exports.itemsFetchData = function itemsFetchData(url) {
    return function (dispatch) {
        return (0, _isomorphicFetch2.default)('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}').then(function (response) {
            return response.json();
        }).then(function (item) {
            return dispatch({
                type: 'ITEMS_FETCH_DATA_SUCCESS',
                items: item
            });
        });
        /*return (dispatch) => {
            dispatch(itemsIsLoading(true));
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}')
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    dispatch(itemsIsLoading(false));
                    return response;
                })
                .then((response) => response.json())
                .then((items) => dispatch(itemsFetchDataSuccess(items)))
                .catch(() => dispatch(itemsHasErrored(true)))
        };*/
    };
};