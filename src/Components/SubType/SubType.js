import React, {Component} from 'react' 
import axios from  'axios'
import {connect} from 'react-redux'
import {setNumOfCartItems} from '../../ducks/reducer'



class SubType extends Component {
  constructor(props) {
    super (props) 

    this.state = {
      displays: []
    }
    this.addToCart = this.addToCart.bind(this)
  }


  componentDidMount () {
    let {subid} = this.props.match.params
    axios.get(`/api/subtype/${subid}`).then(res => {
      // console.log(res.data)
      this.setState({displays: res.data})
    })
  }

  addToCart(id) {
    let {setNumOfCartItems} = this.props
  // console.log(id)
    axios.post('/api/addtocart', {id}).then(res => {
      // console.log(res.data.length)
      setNumOfCartItems(res.data.length)
    })
  }

  render (){
   let {displays} = this.state
  //  console.log(displays)
    let individual = displays.map((display, index) => {
      let {cost, hatch_date, unique_id, gender, image, id} = display
      return (
        <div className = 'type_main' key = {index}>
          <div>
            <img className = 'indi_img' src={image} alt="available individual"/>
          </div>
          <div>
            <h4>serial number: {unique_id}</h4>
            <h4>gender: {gender}</h4>
            <h4>hatch date: {hatch_date}</h4>
            <h4>cost: {cost}</h4>
          </div>
          <div>
            <button
              className = 'add_button'
              onClick = {() => this.addToCart(id)}
            >Add To Cart</button>
          </div>
        </div>
      )
    })


   return (
      <div class = 'dashboard_wrapper type_wrapper'>
        {individual}
      </div>
    ) 
  }
  
}

export default connect(null, {setNumOfCartItems})(SubType)