import React, { Component } from "react"
import "./App.css"
import Header from "./components/Header"
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import Routes from "./routes"

class App extends Component {
	render () {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
				<div>
					<Header />
					<Routes />
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App
