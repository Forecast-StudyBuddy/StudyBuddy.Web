import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  height: 340,
  width: 600,
  margin: 'auto',
  marginTop: 50,
  textAlign: 'center',
  display: 'block'
}

class Signup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      passwordAgain: ''
    }
  }

  setEmail = (event, email) => this.setState({ email })

  setPassword = (event, password) => this.setState({ password })

  setPasswordAgain = (event, passwordAgain) => this.setState({ passwordAgain })

  onClickSignup = () => {

  }

  render () {
    return <Paper style={style} zDepth={1}>
      <br/>
      <TextField
        hintText="Purdue Email"
        floatingLabelText="Purdue Email"
        onChange={this.setEmail}
      />
      <br/>
      <TextField
        hintText="Password"
        floatingLabelText="Password"
        type="password"
        onChange={this.setPassword}
      />
      <br/>
      <TextField
        hintText="Password Again"
        floatingLabelText="Password Again"
        type="password"
        onChange={this.setPasswordAgain}
      />
      <br/><br/>
      <RaisedButton label="Sign Up" primary style={{
        margin: 12
      }}
      onClick={this.onClickSignup} />
    </Paper>
  }
}

export default Signup
