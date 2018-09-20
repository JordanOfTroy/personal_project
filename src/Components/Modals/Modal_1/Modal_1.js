import React, { Component } from 'react'
import './Modal_1.css'

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
          <section>
            <div>
              <input
                onChange={handleInputFn}
                value={firstName}
                name='firstName'
                placeholder='First Name'
                type="text" />
            </div>
            <div>
              <input
                onChange={handleInputFn}
                value={lastName}
                name='lastName'
                placeholder='Last Name'
                type="text" />
            </div>
            <div>
              <input
                onChange={handleInputFn}
                value={email}
                name='email'
                placeholder='Email'
                type="text" />
            </div>
            <div>
              <input
                onChange={handleInputFn}
                value={image}
                name='image'
                placeholder='Image URL'
                type="text" />
            </div>
          </section>
          <section>
            <button
              onClick={loginFn}
            >Login</button>
            <button
              onClick={registerFn}
            >Register</button>
          </section>
          <button
            className='xButton'
            onClick={modalToggleFn}
          >X</button>
        </div>
      </div>
    )
  }
}

export default Modal_1