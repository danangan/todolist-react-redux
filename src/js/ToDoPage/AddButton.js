import React from 'react';

const AddButton = (props) => {
    return (
        <button class='btn btn-primary'onClick={props.action.bind(this)}>Add</button>
    );
}

export default AddButton;
