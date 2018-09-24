import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Type.css'

export default class Type extends Component{
  constructor(props) {
    super(props)

    this.state = {
      displays: []
    }
  }


  componentDidMount () {
    let {typeid} = this.props.match.params
    axios.get(`/api/type/${typeid}`).then(res => {
      this.setState({displays: res.data})
    })
  }

  render () {
    
    let {displays} = this.state
    // console.log(displays)
    let typeCard= displays.map((display, index) => {
      let {common_name, image_url, id} = display
      // console.log('LOOK AT ME',id)
    
      return (
        <div key = {index}>
          <Link to = {`/subtype/${id}`} >
            <img src={image_url} alt={common_name}/>
          </Link>
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


