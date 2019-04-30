import React from 'react'

const LogIn = ({ authenticate}) => {
  return (
    <nav className="login">
      <h2>Inventory Login</h2>
      <p>Sign in to manage your store's inventory.</p>
      <button className='github' onClick={() => authenticate('Google')}>Log In WIth Google</button>
    </nav>
  )
}

export default LogIn
