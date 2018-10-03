import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer () {
  return (
    <div className = 'footer'>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>Local: 801-555-1234</li>
          <li>Collect: 800-555-1234</li>
          <li>Email: customer_support@serpentsedge.com</li>
          <li>Snail Mail: PO BOX 0000, Prove Utah, 84601</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><Link to = {`/subtype/${1}`} >Snakes</Link></li>
          <li><Link to = {`/subtype/${2}`} >Lizards</Link></li>
          <li><Link to = {`/subtype/${3}`} >Turtles</Link></li>
          <li><Link to = '/about'>About</Link></li>
        </ul>
      </div>
    </div>
  )
}