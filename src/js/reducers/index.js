import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import app from './appReducer'
import todo from './toDoListReducer'

export default combineReducers({
  app,todo,routing : routerReducer,
})