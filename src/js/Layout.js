// Libraries
import React from 'react'

class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      email       : '',
      password    : '',
    }
  }

  render() {

    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default Layout;
