import React from 'react' 
import {Link} from 'react-router-dom'


export default function Dashboard () {
  return (
    <div>
      <section>
        <h1>this is going ot be an AWESOME carousel of sweet images</h1>
        <h4>Use your imagination!</h4>
      </section>
      <section>
        <div>
          <Link to = '/allthesnakes'>
            <img src={require('../../Assets/default_img.png')} alt=""/>
          </Link>
          <h1>Snakes</h1>
        </div>
        <div>
          <Link to = '/allthelizards'>
            <img src={require('../../Assets/default_img.png')} alt=""/>
          </Link>
          <h1>Lizards</h1>
        </div>
        <div>
          <Link to = '/alltheturtles'>
            <img src={require('../../Assets/default_img.png')} alt=""/>
          </Link>
          <h1>Turtles</h1>
        </div>
      </section>
    </div>
  )
}
