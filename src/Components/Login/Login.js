import React, {Component} from 'react'
import axios from 'axios'
import Modal_1 from '../Modals/Modal_1/Modal_1'

export default class Login extends Component {
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
    this.login = this.login.bind(this)
    this.modalToggle = this.modalToggle.bind(this)
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
      if (res.data === 'Invalid Password') {
        alert(res.data)
      } else if (res.data === 'Username does not exist') {
        alert(res.data)
      } else {
        this.props.history.push(`/account`)
      }
    })
  }

  modalToggle () {
    let{modalToggle} = this.state
    if (!modalToggle) {
      this.setState({
        modalToggle: true
      })
    } else if (modalToggle) {
      this.setState({
        modalToggle: false
      })
    }
  }

  render () {
    console.log('toggle',this.state.modalToggle)
    let {username, password, firstName, lastName, email, image, modalToggle} = this.state
    return (
      <div>
       
        {
          (this.state.modalToggle)
          ?
            <Modal_1
              modalToggleFn = {this.modalToggle}
              handleInputFn = {this.handleInput}
              loginFn = {this.login}
              registerFn = {this.register}
              username = {username}
              password = {password}
              firstName = {firstName}
              lastName = {lastName}
              email = {email}
              image = {image}
              modalToggle = {modalToggle}
            />
          :
            <p></p>
        }
      </div>
    )
  }
}