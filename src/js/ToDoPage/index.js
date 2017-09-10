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
  }

  addItem (value){
    this.props.dispatch({type : 'ADD_TODO_ITEM', payload : value});
  }

  deleteItem (index){
    this.props.dispatch({type : 'DELETE_TODO_ITEM', payload : index})
  }

  editItem(index, value){
    this.props.dispatch({type : 'EDIT_TODO_ITEM', payload : {index : index, content : value}})    
  }

  logout(){
    this.props.dispatch({type:'USER_LOGOUT'});
    this.props.dispatch(push('/login'));
  }

  render() {
      const {todo} = this.props;
      let list = [];
      for (var i = 0; i < todo.length; i++) {
        list.push(<TodoItem index={i} content={todo[i]} deleteItem={this.deleteItem.bind(this) } editItem={this.editItem.bind(this)} />)
      }
    return (
      <div class='row'>
        <div class='col-6'>
          <p class='lead'>This is your to do list</p>
          <ul class="list-group">
            { list }
            <NewTodoItem addItem={this.addItem.bind(this)}/>
          </ul>
          <button class='btn btn-danger float-right btn-lg btn-block mt-3' onClick={this.logout.bind(this)}>Logout</button>
        </div>
      </div>
    );
  }
}

export default ToDoPage;
