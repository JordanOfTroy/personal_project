import React, {Component} from 'react'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <div>
        <div>
          <input
          placeholder = 'Please enter Username'
          type="text"/>
          <input
          placeholder = 'Please enter Password'
          type="text"/>
        </div>
        <div>
          <button>Login</button>
          <button>Create Account</button>
        </div>
      </div>
    )
  }
}