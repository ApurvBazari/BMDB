import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const exampleInitialState = {
  items: [],
  itemsHasErrored: false,
  itemsIsLoading: true
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}