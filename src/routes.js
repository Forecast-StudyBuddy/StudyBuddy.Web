import React from 'react'
import { Switch, Route } from 'react-router'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'

const Routes = () =>
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/Profile" component={Profile} />
  </Switch>

export default Routes
