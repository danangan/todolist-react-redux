// Libraries
import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import { push } from 'react-router-redux'

@connect((store) => {
    return {

    };
})

class LoginPage extends React.Component {
  constructor(){
    super();
    this.state = {
      username       : '',
      password    : '',
    }
  }

  handleUsernameChange(e){
    let username = e.target.value;
    this.setState({username});
  }

  handlePasswordChange(e){
    let password = e.target.value;
    this.setState({password});
  }

  login(){
    if ((this.state.username == 'danang') && (this.state.password == '12345')) {
      this.props.dispatch({ type : 'USER_LOGIN'});
      axios({
        method: 'get',
        url : 'http://localhost:3000/todolist',
      }).then((res)=>{
        this.props.dispatch({type:'USER_LOGIN', payload:res.data})
        this.props.dispatch(push('todolist'));
      }).catch((err)=>{
      
      })

    }
  }

  render() {
    return (
      <div>
        <input  type    = 'username'
                value     = { this.state.username }
                onChange  = { this.handleUsernameChange.bind(this) }
        />  

        <input  type      = 'password'
                value     = { this.state.password }
                onChange  = { this.handlePasswordChange.bind(this) }
        /> 

        <button class='btn' onClick={this.login.bind(this)}>Login</button>
      </div>
    );
  }
}

export default LoginPage;
