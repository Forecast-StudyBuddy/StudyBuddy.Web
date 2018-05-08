import React from 'react'
import { Switch, Route } from 'react-router'
import Login from './components/Login'
import Signup from './components/Signup'

const Routes = () =>
  <Switch>
    {/* <Route exact path="/" component={Dashboard} /> */}
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    {/* <Route path="/courses/:groupId" component={GroupRoutes} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/cache-admin" component={CacheAdmin} />
        <Route path="/help" component={HelpRoutes} />
        <Route exact path="/error" component={ErrorScreen} /> */}
  </Switch>

export default Routes
