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
        <div class='row'>
          <div class='col-5'>
            <input class='form-control' value = {this.state.name} onChange = {this.handleNameChange.bind(this)}/>
          </div>
          <div class='col-7'>
            <button class='btn btn-outline-danger float-right'onClick={this.props.toggleEdit.bind(this)}>Cancel</button>
            <button class='btn btn-outline-success float-right mr-3' onClick={this.addItem.bind(this)}>Save</button>
          </div>
        </div>
   	)
   }
}

export default EditToDoItem;
