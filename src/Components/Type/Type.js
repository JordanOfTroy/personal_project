import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Type extends Component{
  constructor(props) {
    super(props)

    this.state = {
      display: []
    }
  }


  componentDidMount () {
    let {id} = this.props.match.params
    axios.get(`/api/type/${id}`).then(res => {
      this.setState({display: res.data})
    })
  }

  render () {
    console.log('state on typs.js', this.state.display)

    this.state.display.forEach((element) => {
      console.log(element)
    })

    return (
      <div>
        <h1>type.js</h1>
        
      </div>
    )
  }
}