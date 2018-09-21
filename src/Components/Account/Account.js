import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {initialGrab} from '../../ducks/reducer'

class Account extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      image: '',
      username: ''
    }
  }

  componentDidUpdate (prevprops) {
    if (prevprops.username !== this.props.username) {
      console.log('fired')
    }
  }

  componentDidMount() {
    let {initialGrab} = this.props
    axios.get(`/api/user`).then((res) => {
      console.log(res.data)
      let {email, first_name, last_name, image, username} = res.data
      this.setState({
       email: email,
       firstName: first_name,
       lastName: last_name,
       image: image,
       username: username 
      })
      initialGrab(this.state)
    })
  }
  
  render () {
  let {email, firstName, lastName, image, username } = this.state
  console.log(this.props.match.params)
    return(
      <div>
        <h1>Account.js</h1>
        <img src={image} alt="profile pic"/>
        <h2>Name: {`${firstName} ${lastName}`}</h2>
        <h2>Username: {username}</h2>
        <h2>Email: {email}</h2>
      </div>
    )
  }
}
 function mapStateToProps (state) {
   let {username} = state

   return {username}
 }

export default connect(mapStateToProps, {initialGrab})(Account)