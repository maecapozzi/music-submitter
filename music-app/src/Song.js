import React from 'react'

const Song = (props) => {
  return (
    <div>
      <p>{props.title}, by {props.artist}</p>
    </div>
  )
}

export default Song
