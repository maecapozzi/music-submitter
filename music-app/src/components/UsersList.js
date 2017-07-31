import React from 'react'

const UsersList = props => (
  <div>
    <ul>
      {props.users.map((user) => {
        return <li key={user.id}>{user.name}</li>
      })}
    </ul>
  </div>
)

export default UsersList
