import React, {Component} from  'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {initialGrab, setNumOfCartItems} from '../../../ducks/reducer'
import cartImage from '../../../Assets/online-shopping-cart.svg'

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  logout = () => {
    axios.get('/logout')
    this.props.initialGrab({})
  }

  componentDidMount () {
    let {setNumOfCartItems} = this.props
    axios.get('/api/cartcontent').then(res => {
    console.log(res.data.length)
    setNumOfCartItems(res.data.length)
    })
  }

  render () {
  let {username, numOfCartItems} = this.props
  return (
    <div className = 'nav_bar'>
      <Link
        className = 'nav_link'
        to = '/'> Shop </Link>
      {
        username 
        ?
        <a 
          onClick = {this.logout}
          href = 'http://localhost:3000/#/'
        > Logout </a>     
        :
        <Link
          className = 'nav_link'
          to = '/login'> login </Link>
      }
      <Link
        className = 'nav_link'
        to = '/faq'> FAQ's </Link>
      <Link
        className = 'nav_link'
        to = '/clearance'> Clearance </Link>
      {
        username
        &&
        <Link
          className = 'nav_link'
          to = '/account'> Account </Link>
      }
      
        
        
      <Link
        className = 'nav_link'
        to = '/cart'>
        <img 
          id = 'svgImg'
          src={cartImage} 
          alt=""
        /> 
     </Link>
     {numOfCartItems} 
      
    

      
    </div>
  )
}
}

function mapStateToProps (state) {
  let {username, numOfCartItems} = state

  return {
    username,
    numOfCartItems
  }
}

export default connect (mapStateToProps, {initialGrab, setNumOfCartItems})(NavBar)