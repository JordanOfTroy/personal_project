import React from 'react'
import Logo from './Logo/Logo'
import NavBar from './NavBar/NavBar'

export default function Header () {
  return (
    <div className = 'header_display'>
      <Logo/>
      <NavBar/>      
    </div>
  )
}