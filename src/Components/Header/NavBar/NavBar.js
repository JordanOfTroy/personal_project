import React, {Component} from  'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {initialGrab} from '../../../ducks/reducer'

class NavBar extends Component {

  order66 = () => {
    axios.get('/logout')
    this.props.initialGrab({})
  }

  

  render () {
  let {username} = this.props
  return (
    <div>
      <Link to = '/'> Home </Link>
      {
        username 
        ?
        <a 
          onClick = {this.order66}
          href = 'http://localhost:3000/#/'
        > Logout </a>     
        :
        <Link to = '/login'> login </Link>
      }
      {
        username
        &&
        <Link to = '/account'> Account </Link>
      }
      {
        username
        &&
        <Link to = '/cart'> Cart </Link>
      }
      <Link to = '/faq'> FAQ's </Link>
      <Link to = '/clearance'> Clearance </Link>
    </div>
  )
}
}

function mapStateToProps (state) {
  let {username} = state

  return {
    username
  }
}

export default connect (mapStateToProps, {initialGrab})(NavBar)