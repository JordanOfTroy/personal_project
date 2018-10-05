import React, {Component} from  'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {initialGrab, setNumOfCartItems} from '../../../ducks/reducer'
import cartImage from '../../../Assets/online-shopping-cart.svg'
import Modal from 'react-modal'

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
      registerToggle: false,
      username: '',
      password:'',
      firstName: '',
      lastName: '',
      email: ''
      
    }
    this.openModal = this.openModal.bind(this);
    this.afterModalOpen = this.afterModalOpen.bind(this)
    this.closeModal = this.closeModal.bind(this);
    this.handleInputFn = this.handleInputFn.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.register = this.register.bind(this)
    this.createAccount = this.createAccount.bind(this)
  }

  componentDidMount () {
    let {setNumOfCartItems} = this.props
    axios.get('/api/cartcontent').then(res => {
    console.log(res.data.length)
    setNumOfCartItems(res.data.length)
    })
  }

  logout = () => {
    axios.get('/logout')
    this.props.initialGrab({})
    this.props.history.push('/')
  }

  register () {
    if (this.state.register) {
      this.setState({registerToggle: false})
    } else {
      this.setState({registerToggle: true})
    }
  }

  createAccount () {
     // console.log('i werk')
     let {username, password, firstName, lastName, email, image} = this.state
     axios.post(`/api/register`, {
       username: username.toLocaleLowerCase(),
       password: password,
       firstname: firstName,
       lastname: lastName,
       firstname: firstName,
       lastname: lastName,
       email: email,
       image: image
     }).then((res) => {
       // console.log(res.data)
       if (res.data === 'Username taken. Please try again.') {
         alert(res.data)
       } else {
         this.props.history.push(`/account`)
         this.closeModal()
       }
     })
  }

  openModal () {
    this.setState({ modalIsOpen: true })
  }

  afterModalOpen () {
    this.subtitle.style.color = '#f00'
  }


  handleInputFn (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  login () {
    let {username, password} = this.state
    axios.post(`/api/login`, {username:username.toLocaleLowerCase(), password:password})
    .then((res) => {
      // console.log(res.data)
      if (res.data === 'Invalid Password') {
        alert(res.data)
      } else if (res.data === 'Username does not exist') {
        alert(res.data)
      } else {
        // console.log(this.props)
        this.closeModal()
        this.props.history.push(`/account`)
      }
    })
  }

  render () {
  let {username, numOfCartItems} = this.props

  const customStyles = {
    
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '300px',
      width: '600px',
      button: {
        backgroundColor: 'blue'
      }
      // display: 'flex'
    },
    
  }
  return (
    <div className = 'nav_bar'>
      <Link
        className = 'nav_link'
        to = '/'> Shop </Link>
    
      {
        username
        ?
        <button
          className = 'nav_button'
          onClick = {this.logout}
        >Logout</button>
        :
        <button
          className = 'nav_button'
          onClick = {this.openModal}
        >Login</button>
      }
      
      <Link
        className = 'nav_link'
        to = '/faq'> FAQ's </Link>
      <Link
        className = 'nav_link'
        to = '/about'> About </Link>
      {
        username
        &&
        <Link
          className = 'nav_link'
          to = '/account'> Account </Link>
      }
      {
        username
        &&
      <Link
        id = 'cart_svg'
        to = '/cart'>
        <img 
          id = 'svgImg'
          src={cartImage} 
          alt=""
        />
      </Link>
    } 
    {
      username
      &&
     <h6
      className = 'cart_indicator'
     >{numOfCartItems}</h6>
    }
    <Modal
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="Modal"
      // overlayClassName="Overlay"
      >
      <button
        id = 'close'
        onClick={this.closeModal}>cancel
      </button>
      <div className = 'inputs'>
        <input
        placeholder = 'Username'
        name = 'username'
        value = {this.state.username}
        onChange = {this.handleInputFn}
        type="text"/>
      <input
        placeholder = 'password'
        name = 'password'
        value = {this.state.password}
        onChange = {this.handleInputFn}
        type="text"/>
        
        {
          this.state.registerToggle
          &&
          <input
            placeholder = 'firstName'
            name = 'firstName'
            value = {this.state.firstName}
            onChange = {this.handleInputFn}
            type="text"/>
        }
         {
          this.state.registerToggle
          &&
          <input
            placeholder = 'lastName'
            name = 'lastName'
            value = {this.state.lastName}
            onChange = {this.handleInputFn}
            type="text"/>
        }
         {
          this.state.registerToggle
          &&
          <input
            placeholder = 'email'
            name = 'email'
            value = {this.state.email}
            onChange = {this.handleInputFn}
            type="text"/>
        }
      </div>
      
      <button id = 'login'
        className = 'button'
        onClick = {this.login}
      >Login</button>
      {
        this.state.registerToggle
        ?
        <button id = 'create'
          className = 'button'
          onClick = {this.createAccount}
        >Create Account</button>
        :
        <button id = 'register'
          className = 'button'
          onClick = {this.register}
        >Register</button>
      }
    </Modal>
      
    </div>
  )
}
}

function mapStateToProps (state) {
  let {username, numOfCartItems} = state

  return {
    username,
    numOfCartItems
  }
}

export default withRouter(connect (mapStateToProps, {initialGrab, setNumOfCartItems})(NavBar))


