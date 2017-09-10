import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, browserHistory, IndexRedirect} from 'react-router'
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

function requireAuth (store) {
	return (nextState, replace) => {
		let {login_status} = store.getState().app;
		if (!login_status) {
			replace('/login');
		}
	}
}

ReactDOM.render(
	<Provider store={store}>
	    <Router history 	= { history } >
			<Route path='/'component={ Layout }>
				<IndexRedirect to='/login' />
				<Route path ='login' component={LoginPage} />
				<Route path ='todolist' component={ToDoPage} onEnter={ requireAuth(store) }/>
			</Route>
    	</Router>
	</Provider>, app);
