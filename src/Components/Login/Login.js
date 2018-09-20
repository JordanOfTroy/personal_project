import React, {Component} from 'react'
import axios from 'axios'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      image: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login () {
    let {username, password} = this.state
    axios.post(`/api/login`, {username:username.toLocaleLowerCase(), password:password})
    .then((res) => {
      console.log(res.data)
      if (res.data[0]) {
        this.props.history.push(`/account`)
      }
    })
  }

  register () {
    let {username, password, firstName, lastName, email, image} = this.state
    axios.post(`/api/register`, {
      username: username.toLocaleLowerCase(),
      password: password,
      firstname: firstName,
      lastname: lastName,
      email: email,
      image: image
    })
  }

  render () {
    return (
      <div>
        <section>
          <div>
            <input
              onChange = {this.handleInput}
              name = 'username'
              value = {this.state.username}
              placeholder = 'Username'
              type="text"
            />
          </div>
          <div>
            <input
              onChange = {this.handleInput}
              name = 'password'
              value = {this.state.password}
              placeholder = 'Password'
              type="text"
            />
          </div>
        </section>
        <section>
          <div>
            <input
              onChange = {this.handleInput}
              value = {this.state.firstName}
              name = 'firstName'
              placeholder = 'First Name' 
              type="text"/>
          </div>
          <div>
            <input
              onChange = {this.handleInput}
              value = {this.state.lastName}
              name = 'lastName'
              placeholder = 'Last Name' 
              type="text"/>
          </div>
          <div>
            <input
              onChange = {this.handleInput}
              value = {this.state.email}
              name = 'email'
              placeholder = 'Email' 
              type="text"/>
          </div>
          <div>
            <input
              onChange = {this.handleInput}
              value = {this.state.image}
              name = 'image'
              placeholder = 'Image URL' 
              type="text"/>
          </div>
        </section>
        <section>
          <button
            onClick = {this.login}
          >Login</button>
          <button
            onClick = {this.register}
          >Register</button>
        </section>
      </div>
    )
  }
}