import React from 'react' 
import {Link} from 'react-router-dom'
import '../../../src/App.css'
import Carousel from 'nuka-carousel'


export default function Dashboard () {
  return (
    <div className = 'wrapper'>
      <section>
        <Carousel>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
        </Carousel>
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
