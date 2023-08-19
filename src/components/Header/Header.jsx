import React from 'react'
import { AuthNav } from 'components/AuthNav/AuthNav'

function Header() {
  return (
      <header>
          <div>
              <span className='logo'>Your pet</span>
          </div>
          <AuthNav/>
    </header>
  )
}

export default Header
