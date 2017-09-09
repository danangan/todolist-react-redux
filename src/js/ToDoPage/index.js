// Libraries
import React from 'react'
import {connect} from 'react-redux'
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

  render() {
      const {todo} = this.props;
      let array = [];
      for (var i = 0; i < todo.length; i++) {
        let content = [];
        for (var j = 0; j < todo[i].content; j++) {
          content.push(todo[i.content[j]]);
        }
        array.push(<TodoItem index={i} content={todo[i]}/>)
      }
    return (
      <div>
        {array}
        <NewTodoItem />
      </div>
    );
  }
}

export default ToDoPage;
