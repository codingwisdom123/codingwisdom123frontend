import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Data from './Data'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/Dashboard' component={Dashboard}/>
      <Route exact path='/Data' component={Data}/>
    </Switch>
  </main>
)

export default Main
