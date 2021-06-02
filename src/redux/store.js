import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import CursesReducer from './CursesReducer'

let reducers = combineReducers({ CursesReducer })
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store