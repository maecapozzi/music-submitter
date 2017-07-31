import React from 'react'
import Home from './Home'
import UsersContainer from './UsersContainer'
import UserContainer from './UserContainer'
import ProfileContainer from './ProfileContainer'

import {
  Switch,
  Route
} from 'react-router-dom'

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/users' component={UsersContainer} />
    <Route path='/users/:id' component={UserContainer} />
    <Route path='/profile' component={ProfileContainer} />
  </Switch>
)

export default Main
