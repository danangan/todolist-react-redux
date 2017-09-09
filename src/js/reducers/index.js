import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import app from './appReducer'
import user from './userReducer'
import todo from './toDoListReducer'

export default combineReducers({
  app,user,todo,routing : routerReducer,
})