import React, {Component} from 'react'
import axios from 'axios'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.login = this.login.bind(this)
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login () {
    let {username, password} = this.state
    axios.post(`/api/login`, {username:username, password:password})
    .then((res) => {
      if (res.data[0]) {
        this.props.history.push(`/account`)
      }
    })
  }

  render () {
    return (
      <div>
        <div>
          <input
            onChange = {this.handleInput}
            name = 'username'
            value = {this.state.username}
            placeholder = 'Username'
            type="text"
          />
          <input
            onChange = {this.handleInput}
            name = 'password'
            value = {this.state.password}
            placeholder = 'Password'
            type="text"
          />
        </div>
        <div>
          <button
            onClick = {this.login}
          >Login</button>
          <button>Create Account</button>
        </div>
      </div>
    )
  }
}