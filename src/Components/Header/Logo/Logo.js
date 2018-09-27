import React from  'react'
import logo from '../../../Assets/se_logo.png'
import {Link} from 'react-router-dom'

export default function Logo () {
  return (
    <div >
      <Link to = '/'>
        <img id = 'SE_Logo' src={logo} alt=""/>
      </Link>
    </div>
  )
}