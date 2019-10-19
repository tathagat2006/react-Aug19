import React from 'react'
import List from '../List/list.component'

class Input extends React.Component {
    constructor() {
        super()
        this.state = {
            userInput: [
                {
                    userInput: ""
                }
            ]
        }
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
                <ul className='list-group'>
                    <List data={this.state.userInput} />
                </ul>
            </div>
        )
    }
}

export default Input