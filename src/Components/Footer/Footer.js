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
          <li>Snail Mail: PO BOX 0000, Provo Utah, 84601</li>
        </ul>
      </div>
      <div>
        <ul className = 'link_list'>
          <li ><Link className = 'link' to = {`/type/${1}`} >Snakes</Link></li>
          <li ><Link className = 'link' to = {`/type/${2}`} >Lizards</Link></li>
          <li ><Link className = 'link' to = {`/type/${3}`} >Turtles</Link></li>
          <li ><Link className = 'link' to = '/about'>About</Link></li>
        </ul>
      </div>
    </div>
  )
}