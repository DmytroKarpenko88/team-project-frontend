import React from 'react'
import logo from '../../images/logo/logo.svg'
import { Link } from 'react-router-dom'
import { LogoIcon } from './Logo.styled'

function Logo(onClick) {
  return (
      <Link to='/' onClick={onClick}>
          <LogoIcon src={logo} alt="Logo"></LogoIcon>
      </Link>
  )
}

export default Logo
