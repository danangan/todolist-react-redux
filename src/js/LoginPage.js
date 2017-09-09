// Libraries
import React from 'react'

class Loginpage extends React.Component {
  constructor(){
    super();
    this.state = {
      email       : '',
      password    : '',
    }
  }

  handleEmailChange(e){
    let email = e.target.value;
    this.setState({email});
  }

  handlePasswordChange(e){
    let password = e.target.value;
    this.setState({password});
  }

  render() {

    return (
      <div>
        <input  type    = 'email'
                value     = { this.state.email }
                onChange  = { this.handleEmailChange.bind(this) }
        />  

        <input  type      = 'password'
                value     = { this.state.password }
                onChange  = { this.handlePasswordChange.bind(this) }
        /> 
      </div>
    );
  }
}

export default Loginpage;
