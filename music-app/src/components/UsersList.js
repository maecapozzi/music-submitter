import React from 'react'

const UsersList = props => (
  <div>
    {props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>
    })}
  </div>
)

export default UsersList
