import React, { Component } from 'react'
import './ResultsList.css'

export default class ResultsList extends Component {
    
  render() {
      const objects = this.props.results
    return (
      <div>
        <ul className="results-ul">
            {objects.map(object => (<li className="results-li" key={object.className}>{object.className}</li>))}
        {/*
            <li>{this.props.results}</li>
          <li className="results-li">Chair</li>
          <li className="results-li">Stove</li>
          <li className="results-li">Oven</li>
          <li className="results-li">Sink</li>
        */}
        </ul>
      </div>
    )
  }
}
