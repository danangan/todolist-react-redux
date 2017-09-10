import React from 'react';

const EditButton = (props) => {
    return (
        <button class='btn btn-outline-success float-right mr-3' onClick = {props.action.bind(this)}>Edit</button>
    );
}

export default EditButton;
