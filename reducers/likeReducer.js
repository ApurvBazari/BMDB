import { LIKE_MOVIE, DISLIKE_MOVIE } from "../actionTypes";
import _ from "lodash";

export const addFavourite = (state=null, action) => {
	switch (action.type) {
		case LIKE_MOVIE:
			let movieIdLike = action.id;
			return Object.assign({}, state, {id: movieIdLike, isLiked: true})
			
		case DISLIKE_MOVIE:
			let movieIdDislike = action.id;
			return Object.assign({}, state, {id: movieIdDislike, isLiked: false})

		default:
			return state;
	}
}

export default addFavourite;