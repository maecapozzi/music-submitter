import React from 'react'
import axios from 'axios'
import UsersList from './UsersList'

class UsersListContainer extends React.Component {
  state = { users: [] }

  componentDidMount() {
    axios.get(`http://localhost:3001/users`)
    .then(response => {
      const users = []
      response.data.map(song => {
        return users.push(song)
      })
      this.setState({users})
    })
    .catch(error => {
      console.log(error)
    })
  }
  render() {
    return <UsersList users={this.state.users} />
  }
}

export default UsersListContainer
