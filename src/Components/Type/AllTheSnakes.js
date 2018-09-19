import React from 'react' 
import {Link} from 'react-router-dom'

export default function AllTheSnakes () {
  return (
    <div>
      <section>
        <div>
          <Link to = '/cornsnakes'>
            <img src={require('../../Assets/default_img.png')} alt=""/>
          </Link>
          <h1>Corn Snakes</h1>
        </div>
        <div>
          <Link to = '/ballpythons'>
            <img src={require('../../Assets/default_img.png')} alt=""/>
          </Link>
          <h1>Ball Pythons</h1>
        </div>
      </section>
    </div>
  )
}