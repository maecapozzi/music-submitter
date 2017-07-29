import React from 'react'

const SongList = props =>
  <ul>
    {props.songs.map(s => (
      <li key={s.id}>{s.title}</li>
    ))}
  </ul>

export default SongList
