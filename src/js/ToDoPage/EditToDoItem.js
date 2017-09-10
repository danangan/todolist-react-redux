import React from 'react'

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

   render() {
   	return (
        <div class='row'>
          <div class='col-5'>
            <input class='form-control' value = {this.state.name} onChange = {this.handleNameChange.bind(this)}/>
          </div>
          <div class='col-7'>
            <button class='btn btn-outline-danger float-right'onClick={this.props.toggleEdit.bind(this)}>Cancel</button>
            <button class='btn btn-outline-success float-right mr-3' onClick={()=>{this.props.editItem(this.props.index, this.state.name);this.props.toggleEdit()}}>Save</button>
          </div>
        </div>
   	)
   }
}

export default EditToDoItem;
