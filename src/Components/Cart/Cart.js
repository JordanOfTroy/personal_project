import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import {connect} from 'react-redux'
import {setNumOfCartItems} from '../../ducks/reducer'

class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 0,
      subTotal: 0,
      displays: []

    }
  }

  componentDidMount () {
    axios.get('api/cartcontent').then(res => {
      // console.log(res.data)
      this.setState({displays: res.data})
      let {displays} = this.state
      let sub = 0
      displays.forEach(display => {
        // console.log(display)
        let costVal = Number(display.cost)
        sub += costVal
        this.setState({ subTotal: sub})
        this.setState({amount: sub })
      })
    })
  }

  order66 (id) {
    let{setNumOfCartItems} = this.props
    axios.delete(`/api/order66/${id}`).then(res => {
      this.setState({displays: res.data})
      setNumOfCartItems(res.data.length)
      this.componentDidMount()

    })
  }

  onToken = (token) => {
    let{setNumOfCartItems} = this.props
    token.card = void 0
    axios.post('/api/payment', {token, amount: (this.state.amount + 75)*100}).then(res => {
        console.log(res)
    })
    axios.delete('/api/emptycart').then(res => {
      if (!res.data[0]) {
        setNumOfCartItems(0)
        this.componentDidMount()
      }
      
    })

}

  render () {
    let {displays, amount, subTotal} = this.state
    // console.log(displays)
    let cartItem = displays.map((display, index) => {
      let {cost, unique_id, image, id} = display
      return (
        <div key = {index} >
          <img src={image} alt=""/>
          <button
            onClick = {() => this.order66(id)}
          >X</button>
          <h4>Product ID: {unique_id}</h4>
          <h4>Price: ${cost}</h4>
        </div>
      )
    })
    return (
      <div>
        <section>
          {cartItem}
        </section>
        <section>
          <h2>Sub Total: ${subTotal.toFixed(2)}</h2>
          <h2>Shipping: $75.00</h2>
          <h2>Total: ${(amount +75).toFixed(2)}</h2>
        </section>
        <StripeCheckout
                name="Stripe Demo inc."
                description="Dolla Dolla Bills"
                image="http://via.placeholder.com/100x100"
                token= {this.onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                amount={((this.state.amount +75)*100)}
            />
      </div>
    )
  }
}

export default connect(null, {setNumOfCartItems})(Cart)