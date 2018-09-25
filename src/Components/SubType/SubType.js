import React, {Component} from 'react' 
import axios from  'axios'



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
  console.log(id)
    axios.post('/api/addtocart', {id})
  }

  render (){
   let {displays} = this.state
   console.log(displays)
    let individual = displays.map((display, index) => {
      let {cost, hatch_date, unique_id, gender, image, id} = display

      return (
        <div key = {index}>
          <div>
            <img src={image} alt="available individual"/>
          </div>
          <div>
            <h4>serial number: {unique_id}</h4>
            <h4>gender: {gender}</h4>
            <h4>hatch date: {hatch_date}</h4>
            <h4>cost: {cost}</h4>
          </div>
          <div>
            <button
              onClick = {() => this.addToCart(id)}
            >Add To Cart</button>
          </div>
        </div>
      )
    })


   return (
      <div>
        {individual}
      </div>
    ) 
  }
  
}

export default SubType