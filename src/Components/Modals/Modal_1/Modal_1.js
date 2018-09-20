import React, { Component } from 'react'
import './Modal_1.css'
import {Link} from 'react-router-dom'

class Modal_1 extends Component {
  render(props) {
    let { modalToggleFn, handleInputFn, loginFn, registerFn, username, password, firstName, lastName, email, image, modalToggle
     } = this.props
    return (
      <div className='background'>
        <div className='modalBody'>
          <div className='modalHeader'>
            <h1>Modal_1</h1>
          </div>
          <section>
            <div>
              <input
                onChange={handleInputFn}
                name='username'
                value={username}
                placeholder='Username'
                type="text"
              />
            </div>
            <div>
              <input
                onChange={handleInputFn}
                name='password'
                value={password}
                placeholder='Password'
                type="text"
              />
            </div>
          </section>
          
          <section className = 'logOrReg'>
            <button
              className = 'button'
              onClick={loginFn}
            >Login</button>
            <h4>Or</h4>
            <Link to = '/register'>
              <button
                className = 'button'
              >Register</button>
            </Link>
          </section>
          <button
            className='button xButton'
            onClick={modalToggleFn}
          >X</button>
        </div>
      </div>
    )
  }
}

export default Modal_1