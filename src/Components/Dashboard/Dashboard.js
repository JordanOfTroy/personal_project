import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import '../../../src/App.css'
import Slider from 'react-slick'
import axios from 'axios';
let image = require('../../Assets/default_img.png')

// import Carousel from 'nuka-carousel'



export default class Dashboard extends Component {
  
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }

  render () {

    const settings = {
      dots: true,
      infinite: true,
      speed: 4500,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000

      }

      return (
        <div className = 'wrapper'>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={image} alt=""/>
          </div>
          <div>
            <img src={image} alt=""/>
          </div>
          <div>
            <img src={image} alt=""/>
          </div>
          <div>
            <img src={image} alt=""/>
          </div>
          <div>
            <img src={image} alt=""/>
          </div>
          <div>
            <img src={image} alt=""/>
          </div>
        </Slider>
      </div>
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
}

{/* <Carousel>
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
        </Carousel> */}
