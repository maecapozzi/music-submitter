import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () =>
  <nav>
    <ul>
      <li>
        <NavLink exact activeClassName= "active" to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to={{pathname: '/about'}}>About</NavLink>
      </li>
      <li>
        <NavLink to='/profile'>Profile</NavLink>
      </li>
    </ul>
  </nav>

export default Links
