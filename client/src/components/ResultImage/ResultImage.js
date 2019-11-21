import React, { Component } from 'react'
import './ResultImage.css'

export default class ResultImage extends Component {
  render() {
    return <img className="img-fluid" src={this.props.image}></img>
  }
}
