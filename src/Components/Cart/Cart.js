import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 7523

    }
  }

  onToken = (token) => {
    token.card = void 0
    axios.post('/api/payment', {token, amount: this.state.amount}).then(res => {
        console.log(res)
    })
}

/*Cart should display info based off the cart table in the DB*/

  render () {
    return (
      <div>
        <h1>Cart.js</h1>
        <StripeCheckout
                name="Stripe Demo inc."
                description="Dolla Dolla Bills"
                image="http://via.placeholder.com/100x100"
                token= {this.onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                amount={this.state.amount}
            />
      </div>
    )
  }
}

export default Cart