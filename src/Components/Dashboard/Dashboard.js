import React from 'react' 
import {Link} from 'react-router-dom'
import '../../../src/App.css'


export default function Dashboard () {
  return (
    <div>
      <section>
        <h1>this is going ot be an AWESOME carousel of sweet images</h1>
        <h4>Use your imagination!</h4>
      </section>
      <section className = 'selection'>
        <div>
          <Link to = {`/type/${1}`} >
            <img 
            className = 'testImage'
            src={require('../../Assets/default_img.png')} alt=""/>
          </Link>
          <h1>Snakes</h1>
        </div>
        <div>
          <Link to = {`/type/${2}`} >
            <img 
            className = 'testImage'
            src={require('../../Assets/default_img.png')} alt=""/>
          </Link>
          <h1>Lizards</h1>
        </div>
        <div>
          <Link to = {`/type/${3}`}>
            <img 
            className = 'testImage'
            src={require('../../Assets/default_img.png')} alt=""/>
          </Link>
          <h1>Turtles</h1>
        </div>
      </section>
    </div>
  )
}
