import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  render() {
    return (
      <div className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={"#0F0"} />
        <Tier3 color={"#F00"} />
      </div>
    )
  }
}
