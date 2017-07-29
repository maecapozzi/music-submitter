import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class Request extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: []
    }
  }

  componentDidMount() {
  	axios.get(`http://localhost:3001/songs`)
    	.then(response => {
				const songs = []
        console.log({response.data})
				response.data.forEach(function(song) {
					songs.push(song)
				})
				this.setState({songs})
			})
			.catch(error => {
    		console.log(error);
  		})
	}

  render() {
    return (
      <div>
				{this.state.songs.map(song =>
          <p key={song.id}>{song.title}</p>
        )}
      </div>
    )
  }
}

export default Request
