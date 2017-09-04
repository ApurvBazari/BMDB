import { combineReducers } from 'redux'
import {items, itemsHasErrored, itemsIsLoading} from './items'
import {addFavourite} from './likeReducer.js'

export default combineReducers({
	items,
	itemsHasErrored,
	itemsIsLoading,
	addFavourite
});

