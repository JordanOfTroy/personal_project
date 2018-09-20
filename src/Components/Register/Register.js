import React, {Component} from 'react'
import axios from 'axios'

class Register extends Component {

  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      image: '',
      modalToggle: true
    }
    this.handleInput = this.handleInput.bind(this)
    this.register = this.register.bind(this)
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  register () {
    // console.log('i werk')
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
    let {username, password, firstName, lastName, email, image} = this.state
    return (
      <div>
        <h1>Register.js</h1>
        <section>
          <div>
            <input
              onChange={this.handleInput}
              name='username'
              value={username}
              placeholder='Username'
              type="text"
            />
          </div>
          <div>
            <input
              onChange={this.handleInput}
              name='password'
              value={password}
              placeholder='Password'
              type="text"
            />
          </div>
          <div>
            <input
              onChange={this.handleInput}
              value={firstName}
              name='firstName'
              placeholder='First Name'
              type="text" />
          </div>
          <div>
            <input
              onChange={this.handleInput}
              value={lastName}
              name='lastName'
              placeholder='Last Name'
              type="text" />
          </div>
          <div>
            <input
              onChange={this.handleInput}
              value={email}
              name='email'
              placeholder='Email'
              type="text" />
          </div>
          <div>
            <input
              onChange={this.handleInput}
              value={image}
              name='image'
              placeholder='Image URL'
              type="text" />
          </div>
        </section>
        <section>
          <button
            onClick = {this.register}
          >Register</button>
        </section>
      </div>
    )
  }
}

export default Register