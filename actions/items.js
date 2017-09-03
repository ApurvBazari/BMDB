import fetch from 'isomorphic-fetch'

export const itemsHasErrored = (bool) => dispatch => {
    return dispatch({
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    });
}

export const itemsIsLoading = (bool) => dispatch => {
    return dispatch({
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    });
}

export const itemsFetchDataSuccess = (items) => dispatch => {
    return dispatch({
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: items
    });
}

export const errorAfterFiveSeconds = () => dispatch => {
    // We return a const instead =  of  =>an action object
    return (dispatch) => {
        setTimeout(() => {
            // This const is able =  to  =>dispatch other action creators
            dispatch(itemsHasErrored(true));
        }, 5000);
    };
}

export const itemsFetchData = (url) => dispatch => {
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}')
        .then((response) => response.json())
        .then((item) => dispatch({
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: item
    }));
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
}