export const getFavourite = (state=null, action) => {
	debugger
	switch (action.type) {
		case 'FAVOURITE_MOVIES':
			return Object.assign({}, state, {ids: action.ids, isLiked: true})
			
		case 'DISLIKE_MOVIE':
			let movieIdDislike = action.id;
			return Object.assign({}, state, {id: movieIdDislike, isLiked: false})

		default:
			return state;
	}
}