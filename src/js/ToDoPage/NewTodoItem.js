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
    	<div id='not-found-page' class='container'>
        New To Do Item : <input value = {this.state.name} onChange = {this.handleNameChange.bind(this)}/>
        <button onClick={this.addItem.bind(this)}>Save</button>
    	</div>
   	)
   }
}

export default NewTodoItem;
