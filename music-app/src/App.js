import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import UserProfileContainer from './UserProfileContainer'
import SongListContainer from './SongListContainer'
import Home from './Home'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/songs">Songs</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/profile" component={UserProfileContainer}/>
          <Route path="/songs" component={SongListContainer} />
      </div>
      </Router>
    )
  }
}

export default App;
