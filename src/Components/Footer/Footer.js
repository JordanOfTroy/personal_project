import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer () {
  return (
    <div className = 'footer'>
      <div>
        {/* <h4>Contact</h4> */}
        <ul className = 'contact_info'>
          <li>Local: 801-555-1234</li>
          <li>Collect: 800-555-1234</li>
          <li>Email: customer_support@serpentsedge.com</li>
          <li>Snail Mail: PO BOX 0000, Prove Utah, 84601</li>
        </ul>
      </div>
      <div>
        <ul className = 'link_list'>
          <li className = 'link'><Link to = {`/subtype/${1}`} >Snakes</Link></li>
          <li className = 'link'><Link to = {`/subtype/${2}`} >Lizards</Link></li>
          <li className = 'link'><Link to = {`/subtype/${3}`} >Turtles</Link></li>
          <li className = 'link'><Link to = '/about'>About</Link></li>
        </ul>
      </div>
    </div>
  )
}