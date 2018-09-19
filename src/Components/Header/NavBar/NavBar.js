import React from  'react'
import {Link} from 'react-router-dom'

export default function Logo () {
  return (
    <div>
      <Link to = '/'> Home </Link>
      <Link to = '/login'> login </Link>
      <Link to = '/faq'> FAQ's </Link>
      <Link to = '/clearance'> Clearance </Link>
      <Link to = '/login'> Login</Link>
    </div>
  )
}