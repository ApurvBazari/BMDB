import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers/index.js'

const exampleInitialState = {
  items: [],
  itemsHasErrored: false,
  itemsIsLoading: true
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}