export const getFavourite = () => dispatch => {
	debugger
	let movies = localStorage.getItem('favouriteMovies');
	return dispatch({
		type: 'FAVOURITE_MOVIES',
		movies: movies
	});
}