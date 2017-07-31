import React, {Component} from 'react'
import axios from 'axios'
import User from './User'

class UserContainer extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    axios.get('http://localhost:3001/users', {
      params: {
        id: this.props.match.params.id
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
    return <User name={this.state.name}/>
  }
}

export default UserContainer
