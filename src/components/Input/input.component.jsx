import React from 'react'
import List from '../List/list.component'
import Button from '../Button/button.component'

class Input extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [
                {
                    id: 0,
                    name: "item1",
                },
                {
                    id: 1,
                    name: "item2",
                },
                {
                    id: 2,
                    name: "item3",
                },
                {
                    id: 3,
                    name: "item4",
                }
            ],
            userInput: ""
        }
    }

    handleDelete = (todo) => {
        let todolist = this.state.list.filter((item) => todo.id !== item.id)
        this.setState({
            list: todolist
        })
    }

    // handleChange = function (event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     }, () => console.log(this.state))
    // }

    handleClick = () => {
        this.setState({
            list: [...this.state.list, {
                id: this.state.list.length - 1,
                name: this.state.userInput
            }]
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state))
    }

    render() {
        return (
            <div>
                <form>
                    <input type='text' name='userInput' className='form-control input' onChange={this.handleChange} />
                </form>
                <Button handleClick={this.handleClick} />
                <ul className='list-group' style={{ margin: "3vh" }}>
                    <List items={this.state.list} handleDelete={this.handleDelete} />
                </ul>
            </div>
        )
    }
}

export default Input