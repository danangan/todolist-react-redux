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
      <div class='container'>
        <p class='lead'>Please login to continue</p>
        <div class='row'>
          <div class='col-4'>
            <div class="form-group">
              <label for="username">Username</label>
              <input  type          = 'text'
                      placeholder   ="Enter Username"
                      class         ="form-control"
                      value         = { this.state.username }
                      onChange      = { this.handleUsernameChange.bind(this) }
              />  
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
                <input  type        = 'password'
                        class="form-control"
                        value       = { this.state.password }
                        onChange    = { this.handlePasswordChange.bind(this) }
                        placeholder ="Password"
                  /> 
            </div>
            <button class='btn btn-primary btn-block' onClick={this.login.bind(this)}>Login</button>          
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
