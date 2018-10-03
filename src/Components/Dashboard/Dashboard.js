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
      dots: false,
      infinite: true,
      speed: 2500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: '41.5vw',
      pauseOnDotsHover: true,
      pauseOnHover: true,
      arrows: true,
      adaptiveHeight: true,
      className: 'carouselImage'

      }

      return (
        <section className = 'dashboard_wrapper'>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <div>
        <Slider {...settings} className = 'carousel'>
         
          <div>
            <Link to = {`/type/${1}`} >
              <img 
              className = 'testImage'
              src='https://s3-us-west-1.amazonaws.com/serpents-edge.images/main+images/Snake_Main.jpg' alt=""/>
            </Link>
            <h1>Snakes</h1>
          </div>
          <div>
            <Link to = {`/type/${2}`} >
              <img 
              className = 'testImage'
              src='https://s3-us-west-1.amazonaws.com/serpents-edge.images/main+images/Lizard_Main.jpg' alt=""/>
            </Link>
            <h1>Lizards</h1>
          </div>
          <div>
            <Link to = {`/type/${3}`}>
              <img 
              className = 'testImage'
              src='https://s3-us-west-1.amazonaws.com/serpents-edge.images/main+images/Turtle_Main.jpg' alt=""/>
            </Link>
            <h1>Turtles</h1>
          </div>
          <div>
            <Link to = {`/type/${1}`} >
              <img 
              className = 'testImage'
              src='https://s3-us-west-1.amazonaws.com/serpents-edge.images/main+images/Snake_Main.jpg' alt=""/>
            </Link>
            <h1>Snakes</h1>
          </div>
          <div>
            <Link to = {`/type/${2}`} >
              <img 
              className = 'testImage'
              src='https://s3-us-west-1.amazonaws.com/serpents-edge.images/main+images/Lizard_Main.jpg' alt=""/>
            </Link>
            <h1>Lizards</h1>
          </div>
          <div>
            <Link to = {`/type/${3}`}>
              <img 
              className = 'testImage'
              src='https://s3-us-west-1.amazonaws.com/serpents-edge.images/main+images/Turtle_Main.jpg' alt=""/>
            </Link>
            <h1>Turtles</h1>
          </div>
        </Slider>
      </div>
        <section className = 'dashboard'>
          <div className = 'dashboard_text_column'>
            <h1>
              Why Reptiles Make The Best Pets.
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam neque quidem nesciunt optio a nihil perspiciatis rerum repellendus natus. Consequuntur maiores quia eligendi ea ratione velit animi iure porro. Laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea, quibusdam veniam qui vitae quo, soluta alias dignissimos at architecto ipsa quasi? Nihil totam, sunt ea eius quibusdam quis beatae.Provident natus reiciendis tempore iure vero necessitatibus aliquid possimus sapiente quis, earum incidunt laudantium culpa quo magnam quaerat, dolores, recusandae voluptatem! Nam id, temporibus cumque est aperiam adipisci itaque. Eligendi!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et rem cumque illo earum recusandae, omnis deleniti quidem quod corrupti accusantium. Corporis harum earum suscipit veniam quasi aspernatur deserunt, quidem repudiandae?
            </p>
          </div>
          <div className = 'dashboard_text_column'>
            <h1>
              What Pet Reptile Is Right For Me?
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam neque quidem nesciunt optio a nihil perspiciatis rerum repellendus natus. Consequuntur maiores quia eligendi ea ratione velit animi iure porro. Laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea, quibusdam veniam qui vitae quo, soluta alias dignissimos at architecto ipsa quasi? Nihil totam, sunt ea eius quibusdam quis beatae.Provident natus reiciendis tempore iure vero necessitatibus aliquid possimus sapiente quis, earum incidunt laudantium culpa quo magnam quaerat, dolores, recusandae voluptatem! Nam id, temporibus cumque est aperiam adipisci itaque. Eligendi!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et rem cumque illo earum recusandae, omnis deleniti quidem quod corrupti accusantium. Corporis harum earum suscipit veniam quasi aspernatur deserunt, quidem repudiandae?
            </p>
          </div>
          <div className = 'dashboard_text_column'>
            <h1>
              Responsible Pet Ownership.
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam neque quidem nesciunt optio a nihil perspiciatis rerum repellendus natus. Consequuntur maiores quia eligendi ea ratione velit animi iure porro. Laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea, quibusdam veniam qui vitae quo, soluta alias dignissimos at architecto ipsa quasi? Nihil totam, sunt ea eius quibusdam quis beatae.Provident natus reiciendis tempore iure vero necessitatibus aliquid possimus sapiente quis, earum incidunt laudantium culpa quo magnam quaerat, dolores, recusandae voluptatem! Nam id, temporibus cumque est aperiam adipisci itaque. Eligendi!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et rem cumque illo earum recusandae, omnis deleniti quidem quod corrupti accusantium. Corporis harum earum suscipit veniam quasi aspernatur deserunt, quidem repudiandae?
            </p>
          </div>
          {/* <div>
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
          </div> */}
        </section>
      </section>
    )
  }
}

