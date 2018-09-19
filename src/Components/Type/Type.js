import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Type extends Component{
  constructor(props) {
    super(props)

    this.state = {
      displays: []
    }
  }


  componentDidMount () {
    let {id} = this.props.match.params
    axios.get(`/api/type/${id}`).then(res => {
      this.setState({displays: res.data})
    })
  }

  render () {
    
    let {displays} = this.state
    console.log(displays)
    let typeCard= displays.map((display, index) => {
      let {common_name, image_url} = display
      console.log(image_url)
      return (
        <div key = {index}>
          <img src={image_url} alt={common_name}/>
          <h4>{common_name}</h4>
        </div>
      )
    })

    return (
      <div>
        {typeCard}
      </div>
    )
  }
}


