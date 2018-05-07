import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    const init = {
      method: 'GET'
    }
    fetch('http://localhost:3000/api/login', init)
      .then(res => {
        console.log('We are good to go!')
      })
      .catch(err => {
        console.log(err)
      })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
