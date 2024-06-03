import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const User = () => {
    const { user } = useAuth0();
  return (
    <div>
      hi{user.name}
    </div>
  )
}

export default User
