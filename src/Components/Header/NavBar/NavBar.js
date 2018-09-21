import React from  'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

function NavBar (props) {

  let order66 = () => {
    axios.get('/logout')
  }

  let {username} = props
  return (
    <div>
      <Link to = '/'> Home </Link>
      {
        username 
        ?
        <div>
          <Link 
            to = '/logout'
            onClick = {order66()}
          > logout </Link>     
          <Link to = '/account'> Account </Link>
        </div>
        :
        <Link to = '/login'> login </Link>
      }
      <Link to = '/faq'> FAQ's </Link>
      <Link to = '/clearance'> Clearance </Link>
    </div>
  )
}

function mapStateToProps (state) {
  let {username} = state

  return {
    username
  }
}

export default connect (mapStateToProps)(NavBar)