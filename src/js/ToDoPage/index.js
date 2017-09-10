// Libraries
import React from 'react'
import {connect} from 'react-redux'
import { push } from 'react-router-redux'
import { Link } from 'react-router'
import TodoItem from './TodoItem'
import NewTodoItem from './NewTodoItem'


@connect((store) => {
  return {
    todo : store.todo.todolist,
  };
})

class ToDoPage extends React.Component {
  constructor(){
    super();
    this.state = {
      email       : '',
      password    : '',
    }
  }

  handleEmailChange(e){
    let email = e.target.value;
    this.setState({email});
  }

  handlePasswordChange(e){
    let password = e.target.value;
    this.setState({password});
  }

  logout(){
    this.props.dispatch({type:'USER_LOGOUT'});
    this.props.dispatch(push('/login'));
  }

  render() {
      const {todo} = this.props;
      let list = [];
      for (var i = 0; i < todo.length; i++) {
        list.push(<TodoItem index={i} content={todo[i]}/>)
      }
    return (
      <div class='row'>
        <div class='col-6'>
          <p class='lead'>This is your to do list</p>
          <ul class="list-group">
            { list }
            <NewTodoItem />
          </ul>
          <button class='btn btn-danger float-right btn-lg btn-block mt-3' onClick={this.logout.bind(this)}>Logout</button>
        </div>
      </div>
    );
  }
}

export default ToDoPage;
