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

something () {
  let {typeid} = this.props.match.params
    axios.get(`/api/type/${typeid}`).then(res => {
      this.setState({displays: res.data})
    })
}

  componentDidMount () {
    this.something()
  }

  componentDidUpdate (prevProps) {
    // console.log(prevProps.match.params.typeid)
    if (prevProps.match.params.typeid !== this.props.match.params.typeid) {
      this.something()
    }
  }

  render () {
    
    let {displays} = this.state
    // console.log(displays)
    let typeCard= displays.map((display, index) => {
      let {common_name, image_url, id} = display
      // console.log('LOOK AT ME',id)
    
      return (
        <div className = 'type_main' key = {index}>
          <Link to = {`/subtype/${id}`} >
            <img src={image_url} alt={common_name}/>
          </Link>
          <h4>{common_name}</h4>
        </div>
      )
    })

    return (
      <div className = 'type_wrapper'>
        {typeCard}
      </div>
    )
  }
}


