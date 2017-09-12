export const getFavourite = () => dispatch => {
	debugger
	let ids = localStorage.getItem('favouriteIds');
	console.log(ids);
	return dispatch({
		type: 'FAVOURITE_MOVIES',
		ids: ids
	});
}