import React, {Component} from  'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {initialGrab} from '../../../ducks/reducer'
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

  }

  render () {
  let {username, numOfCartItems} = this.props
  return (
    <div>
      <Link to = '/'> Shop </Link>
      {
        username 
        ?
        <a 
          onClick = {this.logout}
          href = 'http://localhost:3000/#/'
        > Logout </a>     
        :
        <Link to = '/login'> login </Link>
      }
      <Link to = '/faq'> FAQ's </Link>
      <Link to = '/clearance'> Clearance </Link>
      {
        username
        &&
        <Link to = '/account'> Account </Link>
      }
      
        
        
      <Link to = '/cart'>
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

export default connect (mapStateToProps, {initialGrab})(NavBar)