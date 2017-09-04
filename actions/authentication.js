export const requestToken = (url) => dispatch => {
	return fetch('https://api.themoviedb.org/3/authentication/token/new?api_key=d115fba9257637e7caf1dbc7a75a11d6')
		.then((response) => response.json())
		.then((status) => dispatch(tokenSuccess(status)))
		.catch(() => dispatch(tokenError(true)))
}

export const tokenSuccess = (status) => {
	return dispatch({
		type: 'TOKEN_FETCH_SUCCESS',
		status: status
	});
}

export const tokenError = (bool) => {
	return dispatch({
		type: 'TOKEN_FETCH_ERROR',
		status: bool
	});
}