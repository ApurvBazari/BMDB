import axios from 'axios'
import 'isomorphic-fetch'

export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 800)
}

export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD })
}

export const itemsHasErrored = (bool) => dispatch => {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export const itemsIsLoading = (bool) => {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export const itemsFetchDataSuccess = (items) => {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export const errorAfterFiveSeconds = () => {
    // We return a const instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This const is able to dispatch other action creators
            dispatch(itemsHasErrored(true));
        }, 5000);
    };
}

// export async function fetchData() {
//  	const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}');
//  	const body = await res.json();
//  	console.log(body);
//  	return dispatch({
//  		type: 'ITEMS_FETCH_DATA_SUCCESS',
//  	})
// }

export const fetchData = () => dispatch => {
    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}';
    return (dispatch) => {
    	fetch(url)
    	.then(response => {
    		return response.json();
    	})
    	.then(items => dispatch({type: 'itemsFetchDataSuccess', items: items}))
    	.catch(err => {
      		return err;
    	})
    }
}