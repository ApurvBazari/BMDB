import { combineReducers } from 'redux'
import {fetchReducer} from './fetchData'
import {addFavourite} from './likeReducer'

export default combineReducers({
	fetchReducer,
	addFavourite
});

