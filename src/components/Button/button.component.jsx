import React from 'react'

const Button = (props) => (
    <div>
        <button style={{ marginLeft: "5vh" }} className='btn btn-success' onClick={props.handleClick}>Add To List</button>
    </div>
)

export default Button