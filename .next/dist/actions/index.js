'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchData = exports.errorAfterFiveSeconds = exports.itemsFetchDataSuccess = exports.itemsIsLoading = exports.itemsHasErrored = exports.addCount = exports.startClock = exports.serverRenderClock = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverRenderClock = exports.serverRenderClock = function serverRenderClock(isServer) {
    return function (dispatch) {
        return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
    };
};

var startClock = exports.startClock = function startClock() {
    return function (dispatch) {
        return setInterval(function () {
            return dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() });
        }, 800);
    };
};

var addCount = exports.addCount = function addCount() {
    return function (dispatch) {
        return dispatch({ type: actionTypes.ADD });
    };
};

var itemsHasErrored = exports.itemsHasErrored = function itemsHasErrored(bool) {
    return function (dispatch) {
        return {
            type: 'ITEMS_HAS_ERRORED',
            hasErrored: bool
        };
    };
};

var itemsIsLoading = exports.itemsIsLoading = function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
};

var itemsFetchDataSuccess = exports.itemsFetchDataSuccess = function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: items
    };
};

var errorAfterFiveSeconds = exports.errorAfterFiveSeconds = function errorAfterFiveSeconds() {
    // We return a const instead of an action object
    return function (dispatch) {
        setTimeout(function () {
            // This const is able to dispatch other action creators
            dispatch(itemsHasErrored(true));
        }, 5000);
    };
};

// export async function fetchData() {
//  	const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}');
//  	const body = await res.json();
//  	console.log(body);
//  	return dispatch({
//  		type: 'ITEMS_FETCH_DATA_SUCCESS',
//  	})
// }

var fetchData = exports.fetchData = function fetchData() {
    return function (dispatch) {
        var url = 'https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}';
        return function (dispatch) {
            fetch(url).then(function (response) {
                return response.json();
            }).then(function (items) {
                return dispatch({ type: 'itemsFetchDataSuccess', items: items });
            }).catch(function (err) {
                return err;
            });
        };
    };
};