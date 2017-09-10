import React from 'react'
import TodoName from './TodoName'
import TodoContent from './TodoContent'
import EditToDoItem from './EditToDoItem'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'


class ToDoItem extends React.Component {
  constructor(){
    super();
    this.state = {
      showedit : false,
    }
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
              <DeleteButton action = {()=>{this.props.deleteItem(this.props.index)}} />
              <EditButton action = {this.toggleEdit.bind(this)} />
            </div>
          </div>
        }
        { 
          this.state.showedit &&
          <EditToDoItem index       ={ this.props.index } 
                        content     ={ this.props.content} 
                        toggleEdit  ={ this.toggleEdit.bind(this)}
                        editItem    ={ this.props.editItem.bind(this)}/>
        }
    	</li>
   	)
   }
}

export default ToDoItem;
