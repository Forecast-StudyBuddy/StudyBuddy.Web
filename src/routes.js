import React from "react"
import { Switch, Route } from "react-router"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import Profile from "./components/Profile"
import AcceptRequest from "./components/AcceptRequest"

const Routes = () => {
	const isLoggedIn = window.localStorage.getItem("email") !== null
	return (
		<Switch>
			<Route exact path="/" component={isLoggedIn ? Dashboard : Login} />
			<Route path="/login" component={Login} />
			<Route path="/signup" component={Signup} />
			<Route path="/dashboard" component={isLoggedIn ? Dashboard : Login} />
			<Route path="/profile" component={isLoggedIn ? Profile : Login} />
			<Route path="/offerHelp" component={isLoggedIn ? AcceptRequest : Login} />
		</Switch>
	)
}


export default Routes
