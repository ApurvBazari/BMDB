export const getFavourite = (state=null, action) => {
	switch (action.type) {
		case 'FAVOURITE_MOVIES':
			return Object.assign({}, state, {movies: action.movies, isLiked: true})
			
		case 'DISLIKE_MOVIE':
			let movieIdDislike = action.id;
			return Object.assign({}, state, {id: movieIdDislike, isLiked: false})

		default:
			return state;
	}
}