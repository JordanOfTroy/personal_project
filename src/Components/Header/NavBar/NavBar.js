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
      username: '',
      password:''
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputFn = this.handleInputFn.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
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


  openModal () {
    this.setState({ modalIsOpen: true })
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
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  }
  return (
    <div className = 'nav_bar'>
      <Link
        className = 'nav_link nav_text'
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
        className = 'nav_link nav_text'
        to = '/faq'> FAQ's </Link>
      <Link
        className = 'nav_link nav_text'
        to = '/clearance'> Clearance </Link>
      {
        username
        &&
        <Link
          className = 'nav_link nav_text'
          to = '/account'> Account </Link>
      }
        
      <Link
        id = 'cart_svg'
        // className = 'nav_link'
        to = '/cart'>
        <img 
          id = 'svgImg'
          src={cartImage} 
          alt=""
        /> 

     </Link>
     <h6
      className = 'cart_indicator'
     >{numOfCartItems}</h6>
    
    <Modal
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={this.closeModal}>cancel</button>
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
      <button
        onClick = {this.login}
      >Login</button>
      <button>Register</button>
          
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


// {
//   username 
//   ?
//   <a
//     className = 'nav_link nav_text' 
//     onClick = {this.logout}
//     href = 'http://localhost:3000/#/'
//   > Logout </a>     
//   :
//   <Link
//     className = 'nav_link nav_text'
//     to = '/login'> login </Link>
// }