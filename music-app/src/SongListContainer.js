import React from 'react'
import axios from 'axios'
import SongList from './SongList'

class SongListContainer extends React.Component {
  state = { songs: [] }

  componentDidMount() {
    axios.get(`http://localhost:3001/songs`)
    	.then(response => {
				const songs = []
				response.data.map(song => {
          return songs.push(song)
        })
				this.setState({songs})
			})
			.catch(error => {
    		console.log(error)
  		})
  }
  render() {
    return <SongList songs={this.state.songs} />
  }
}

export default SongListContainer
