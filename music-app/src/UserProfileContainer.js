import React from 'react'
import axios from 'axios'
import UserProfile from './UserProfile'

class UserProfileContainer extends React.Component {
  state = {}

  componentDidMount() {
    axios.get('http://localhost:3001/users', {
      params: {
        id: 1
      }
    })
    .then(response => {
      const user = response.data[0]
      this.setState({id: user.id, name: user.name })
    })
    .catch(error => {
    	console.log(error)
    })
  }
  render() {
    return <UserProfile name={this.state.name}/>
  }
}

export default UserProfileContainer
