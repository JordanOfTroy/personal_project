import React from 'react'
import Logo from './Logo/Logo'
import NavBar from './NavBar/NavBar'
import {Link} from 'react-router-dom'

export default function Header () {
  return (
    <div className = 'header_display'>
      <Logo/>
      <h1 id = "top_logo">Serpents Edge</h1>
      <NavBar/>      
    </div>
  )
}