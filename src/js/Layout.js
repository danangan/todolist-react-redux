// Libraries
import React from 'react'

const Layout = (props) => {
  return (
      <div class='container'>
        <div class='jumbotron'>
          <h1 class='display-3'>To Do App</h1>
          { props.children }
        </div>
      </div>
    );
}

export default Layout;
