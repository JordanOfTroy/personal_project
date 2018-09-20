import React, {Component} from 'react'
import './Modal_1.css'

class Modal_1 extends Component {
  render(props) {
    let {modalToggle} = this.props
    return (
      <div className = 'background'>
        <div className = 'modalBody'>
          <div className = 'modalHeader'>
            <h1>Modal_1</h1>
          </div>
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at libero! Quis, eveniet voluptate numquam beatae blanditiis ab ipsam pariatur, saepe exercitationem nesciunt magnam laboriosam sed iusto sunt excepturi rerum.</h3>
          </div>
          <button 
            className = 'xButton'
            onClick = {modalToggle}
          >X</button>
        </div>
      </div>
    )
  }
}

export default Modal_1