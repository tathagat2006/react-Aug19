import React from 'react';
import './App.css';

import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  async componentWillMount() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(response)
    this.setState({
      users: response.data
    })
  }

  render() {
    return (
      <div className='parent'>
        {
          this.state.users.map(user => {
            return (
              <div>
                <h1>Name: {user.name}</h1>
                <h4>Email:{user.email} </h4>
              </div>
            )
          })
        }
      </div >
    )
  }
}

// const App = () => (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//         </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//         </a>
//     </header>
//   </div>
// )

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
