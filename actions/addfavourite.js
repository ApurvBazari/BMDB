import {LIKE_MOVIE} from '../actionTypes.js'

export const addFavourite = (id) => dispatch => {
	return dispatch({
		type: LIKE_MOVIE
	})
}