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
    	<li class="list-group-item">
        {
          !this.state.showedit && 
          <div class='row'>
            <div class='col-7'>
              <TodoContent content={this.props.content}/>
            </div>
            <div class='col-5'>
              <button class='btn btn-outline-danger float-right' onClick = {this.deleteItem.bind(this)}>Delete</button>
              <button class='btn btn-outline-success float-right mr-3' onClick= {this.toggleEdit.bind(this)}>Edit</button>
            </div>
          </div>
        }
        { 
          this.state.showedit &&
          <EditToDoItem index={ this.props.index } content={ this.props.content} toggleEdit={this.toggleEdit.bind(this)}/>
        }
    	</li>
   	)
   }
}

export default ToDoItem;
