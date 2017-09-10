import React from 'react'
import {connect} from 'react-redux'

@connect((store) => {
    return {

    };
})

class NewTodoItem extends React.Component {
  constructor(){
    super();
    this.state = {
      name : '',
    }
  }

  handleNameChange(e){
    let name = e.target.value;
    this.setState({name});
  }

  addItem (){
  	this.props.dispatch({type : 'ADD_TODO_ITEM', payload : this.state.name});
    this.setState({name : ''});
  }

   render() {
   	return (
      <li class="list-group-item">
        <div class="form-group">
          <label for="newtodoitem">New To Do Item</label>
          <input  type          = 'text'
                  placeholder   ="Enter New To Do Item"
                  value         = {this.state.name} 
                  class         ="form-control"
                  onChange      = {this.handleNameChange.bind(this)}/>
        </div>
        <button class='btn btn-primary'onClick={this.addItem.bind(this)}>Add</button>
      </li>
   	)
   }
}

export default NewTodoItem;
