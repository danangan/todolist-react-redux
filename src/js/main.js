import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { applyRouterMiddleware, Router, Route, IndexRoute, browserHistory, IndexRedirect} from 'react-router'
import { syncHistoryWithStore, routerReducer, push } from 'react-router-redux'
import Layout from "./Layout"
import store from "./store"

import ToDoPage from './ToDoPage'
import LoginPage from './LoginPage'
import NewTodoItem from './ToDoPage/NewToDoItem'
import EditToDoItem from './ToDoPage/EditTodoItem'

const app = document.getElementById('app')

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
	    <Router history 	= { history } >
			<Route path='/'component={ Layout }>
				<Route path ='login' component={LoginPage} />
				<Route path ='todolist' component={ToDoPage} />
			</Route>
    	</Router>
	</Provider>, app);
