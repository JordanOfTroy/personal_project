import React from 'react' 
import {Link} from 'react-router-dom'
import '../../../src/App.css'
import Carousel from 'nuka-carousel'
import axios from 'axios';



export default function Dashboard () {
  return (
    <div className = 'wrapper'>
      <section>
        <Carousel>
        <div>
          <Link to = {`/type/${1}`} >
            <img 
            className = ' testImage testImageOnCarousel carousel_image'
            src={require('../../Assets/default_img.png')} alt=""/>
          </Link>
          <h1>Snakes</h1>
        </div>
        <div>
          <Link to = {`/type/${2}`} >
            <img 
            className = 'testImage testImageOnCarousel carousel_image'
            src={require('../../Assets/default_img.png')} alt=""/>
          </Link>
          <h1>Lizards</h1>
        </div>
        <div>
          <Link to = {`/type/${3}`}>
            <img 
            className = 'testImage testImageOnCarousel carousel_image'
            src={require('../../Assets/default_img.png')} alt=""/>
          </Link>
          <h1>Turtles</h1>
        </div>
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
      {/* <button
        onClick = {
          () => axios.post('/api/sendemail')
        }
      >SEND EMAIL!!!</button> */}
    </div>
  )
}
