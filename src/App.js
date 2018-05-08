import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Routes from './routes'

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
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Header />
        <Routes />
      </MuiThemeProvider>
    )
  }
}

export default App
