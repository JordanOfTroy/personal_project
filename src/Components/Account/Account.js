import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {initialGrab} from '../../ducks/reducer'
import './Account.css'
import {Wrapper} from '../../styles'

class Account extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      username: '',
      editToggle: false,
      id: 0
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate (prevprops) {
    if (prevprops.username !== this.props.username) {
      console.log(this.props)
    } else if (prevprops.email !== this.props.email) {
      console.log('hi mom')
    }
  }

  componentDidMount() {
    let {initialGrab} = this.props
    axios.get(`/api/user`).then((res) => {
      console.log(res.data)
      let {email, first_name, last_name, username, id} = res.data
      this.setState({
       email: email,
       firstName: first_name,
       lastName: last_name,
       username: username,
       id: id
      })
      initialGrab(this.state)
    })
  }

  handleEdit () {
    this.setState({ editToggle: true})
  }

  handleSave () {
    let {initialGrab} = this.props
    let {email, firstName, lastName, username, id} = this.state

    axios.put('/edituserinfo',{email, firstName, lastName, username, id} ).then((res) => {
      let {email, first_name, last_name, image, username} = res.data
      this.setState({
       email: email,
       firstName: first_name,
       lastName: last_name,
       image: image,
       username: username,
      })
      // console.log('look at me',res.data.email, this.state.email)
      initialGrab(this.state)
    })

    this.setState({ editToggle: false})
  }

  handleChange (e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  
  render () {
  let {email, firstName, lastName, username, editToggle } = this.state
  console.log(this.state)
    return(
      <Wrapper>
        <section>
          <div>
            <h2>Name: {`${firstName} ${lastName}`}</h2>
          {
            editToggle 
            &&
            <input
              value = {firstName}
              placeholder = {firstName}
              onChange = {this.handleChange}
              name = 'firstName' 
              type="text"/>
          }
          {
            editToggle
            &&
            <input
              value = {lastName}
              placeholder = {lastName}
              onChange = {this.handleChange}
              name = 'lastName' 
              type="text"/>
          }
          </div>
          <div>
            <h2>Username: {username}</h2>
            {
              editToggle
              &&
              <input
                value = {username}
                placeholder = {username}
                onChange = {this.handleChange}
                name = 'username'
                type="text"/>
            }
          </div>
          <div>
            <h2>Email: {email}</h2>
            {
              editToggle
              &&
              <input
                value = {email}
                placeholder = {email}
                onChange = {this.handleChange}
                name = 'email' 
                type="text"/>
            }
          </div>
        </section>
        <section>
          <div>
            {
              !editToggle ? 
              <button
                onClick = {this.handleEdit}
              >Edit</button> 
              :
              <button
                onClick = {this.handleSave}
              >Save</button>
            }
          </div>
        </section>
        </Wrapper>
    )
  }
}
 function mapStateToProps (state) {
   let {username, email, firstName, lastName} = state

   return {
     username,
     email, 
     firstName,
     lastName
    }
 }

export default connect(mapStateToProps, {initialGrab})(Account)