import React from 'react'

const List = (props) => (
    <div>
        {
            props.items.map(item => {
                return (

                    <li style={{ margin: "2vh" }} className='list-group-item'>{item.name}</li>

                )
            })
        }

    </div>
)

export default List