import fetch from 'isomorphic-fetch'

export const itemsHasErrored = (bool) => {
    return dispatch({
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    });
}

export const itemsIsLoading = (bool) => {
    return dispatch({
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    });
}

export const itemsFetchDataSuccess = (items) => {
    return dispatch({
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: items
    });
}

export const errorAfterFiveSeconds = () => {
    // We return a const instead =  of  =>an action object
    return (dispatch) => {
        setTimeout(() => {
            // This const is able =  to  =>dispatch other action creators
            dispatch(itemsHasErrored(true));
        }, 5000);
    };
}

export const itemsFetchData = (url) => {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}