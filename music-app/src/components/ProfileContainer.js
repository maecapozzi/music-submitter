import React, {Component} from 'react'
import axios from 'axios'
import Profile from './Profile'

class ProfileContainer extends Component {
  state = {
    id: "",
    name: ""
  }

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
    return <Profile name={this.state.name} />
  }
}

export default ProfileContainer
