import React from 'react'

const List = (props) => (
    <div>
        {
            props.data.map(item => {
                return (

                    <li className='list-group-item'>{item.userInput}</li>

                )
            })
        }
    </div>
)

export default List