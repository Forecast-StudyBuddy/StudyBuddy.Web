import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  height: 280,
  width: 600,
  margin: 'auto',
  marginTop: 50,
  textAlign: 'center',
  display: 'block'
}

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  setEmail = (event, email) => this.setState({ email })

  setPassword = (event, password) => this.setState({ password })

  onClickLogin = () => {
		const body = {
			email: this.state.email,
			password: this.state.password
		}

		const init = {
		  method: "POST",
		  headers: { 'content-type': 'application/json' },
		  body: JSON.stringify(body)
		}

		fetch("http://localhost:48480/api/login", init)
			.then(res => {
        if (res.status === 200) {
          window.localStorage.setItem("email", this.state.email)
          window.location = "/dashboard"
        } else {

        }
			})
			.catch(err => {
				console.log(err)
			})
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
      <br/><br/>
      <RaisedButton label="Sign Up" style={{
        margin: 12
      }} href={'/signup'}/>
      <RaisedButton label="Login" primary style={{ margin: 12 }} onClick={this.onClickLogin}/>
    </Paper>
  }
}

export default Login
