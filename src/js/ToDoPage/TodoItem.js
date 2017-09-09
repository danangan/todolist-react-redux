import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import TodoName from './TodoName'
import TodoContent from './TodoContent'
import EditToDoItem from './EditToDoItem'

@connect((store) => {
    return {

    };
})

class ToDoItem extends React.Component {
  constructor(){
    super();
    this.state = {
      showedit : false,
    }
  }

  deleteItem (){
  	this.props.dispatch({type : 'DELETE_TODO_ITEM', payload : this.props.index})
  }

  toggleEdit(){
    this.setState({showedit : !this.state.showedit});
  }

   render() {
   	return (
    	<div id='not-found-page' class='container'>
    		<TodoContent content={this.props.content}/>
    		<button class='btn' onClick= {this.toggleEdit.bind(this)}>Edit</button>
    		<button class='btn' onClick = {this.deleteItem.bind(this)}>Delete</button>
        { 
          this.state.showedit &&
          <EditToDoItem index={ this.props.index } content={ this.props.content} toggleEdit={this.toggleEdit.bind(this)}/>
        }
    	</div>
   	)
   }
}

export default ToDoItem;
