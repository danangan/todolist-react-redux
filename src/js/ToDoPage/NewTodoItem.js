import React from 'react'
import AddButton from './AddButton'

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
        <AddButton action={()=>{this.props.addItem(this.state.name);this.setState({name:''})}}/>
      </li>
   	)
   }
}

export default NewTodoItem;
