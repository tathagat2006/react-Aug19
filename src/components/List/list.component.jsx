import React from 'react'
// import Button from '../Button/button.component'

const List = (props) => (
    <div>
        {
            props.items.map(item => {
                return (
                    <div>

                        <li style={{ margin: "2vh", display: "inline-block", width: '50vh' }} className='list-group-item'>{item.name}</li>
                        <button className='btn btn-danger' onClick={() => props.handleDelete(item)}>Delete Item</button>
                    </div>
                )
            })
        }

    </div>
)

export default List