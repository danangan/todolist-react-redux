import React from 'react';

const DeleteButton = (props) => {
    return (
        <button class='btn btn-outline-danger float-right' onClick = {props.action.bind(this)}>Delete</button>
    );
}

export default DeleteButton;
