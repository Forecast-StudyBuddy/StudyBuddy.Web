import React, { Component } from "react"
import Paper from "material-ui/Paper"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

const style = {
	height: 400,
	width: 600,
	margin: "auto",
	marginTop: 50,
	textAlign: "center"
}

class Signup extends Component {
	constructor (props) {
		super(props)

		this.state = {
      name: "",
			email: "",
			password: "",
			passwordAgain: ""
		}
  }
  
    setName = (event, name) => this.setState({ name })

	setEmail = (event, email) => this.setState({ email })

	setPassword = (event, password) => this.setState({ password })

	setPasswordAgain = (event, passwordAgain) => this.setState({ passwordAgain })

	onClickSignup = () => {
    // temp
		const body = {
      name: this.state.name,
			email: this.state.email,
			password: this.state.password
		}

		const init = {
		  method: "POST",
		  headers: { 'content-type': 'application/json' },
		  body: JSON.stringify(body)
		}

		fetch("http://localhost:48480/api/createUser", init)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log(err)
			})
	}

	render () {
		return <Paper style={style} zDepth={1}>
      <br/>
			<TextField
				hintText="Name"
				floatingLabelText="Name"
				onChange={this.setName}
			/>
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
