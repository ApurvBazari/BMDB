import { combineReducers } from 'redux'
import {items, itemsHasErrored, itemsIsLoading} from './items'
import {getFavourite} from './fetchFavourites.js'

export default combineReducers({
	items,
	itemsHasErrored,
	itemsIsLoading,
	getFavourite
});

