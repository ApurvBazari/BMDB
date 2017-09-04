export const addFavourite = (id) => dispatch => {
	debugger
	return dispatch({
		type: 'LIKE_MOVIE',
		id: id
	});
}