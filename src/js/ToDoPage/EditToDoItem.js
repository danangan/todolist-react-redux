import React from 'react'
import {connect} from 'react-redux'

@connect((store) => {
    return {

    };
})


class EditToDoItem extends React.Component {
  constructor(){
    super();
    this.state = {
      name : '',
    }
  }

  componentDidMount(){
    this.setState({name : this.props.content})
  }

  handleNameChange(e){
    let name = e.target.value;
    this.setState({name});
  }

  addItem (){
  	this.props.dispatch({type : 'EDIT_TODO_ITEM', payload : {index : this.props.index, content : this.state.name}})    
    this.props.toggleEdit();
  }

   render() {
   	return (
    	<div id='not-found-page' class='container'>
        New To Do Item : <input value = {this.state.name} onChange = {this.handleNameChange.bind(this)}/>

        <button onClick={this.addItem.bind(this)}>Save</button>
        <button onClick={this.props.toggleEdit.bind(this)}>Cancel</button>
    	</div>
   	)
   }
}

export default EditToDoItem;
