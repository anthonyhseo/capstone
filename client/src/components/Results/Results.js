import React, { Component } from 'react'
import ResultsList from '../ResultsList/ResultsList'
import ResultImage from '../ResultImage/ResultImage'
import './Results.css'

export default class Results extends Component {
  render() {
    return (
      <div>
        <h1>Results</h1>
        <div className="container">
          <div className="results-list">
            <ResultsList results={this.props.classification} />
          </div>
          <div className="results-image">
            <ResultImage image={this.props.image} />
          </div>
        </div>
        <h3>Were objects correctly labeled?</h3>
        <button style={{ margin: '25px' }} className="btn btn-primary">
          Yes
        </button>
        <button className="btn btn-primary">No</button>
      </div>
    )
  }
}
