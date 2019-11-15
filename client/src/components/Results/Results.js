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
          {console.log(this.props.classification)}
            <ResultsList results={this.props.classification} />
          </div>
          <div className="results-image">
            {/*<ResultImage image={"https://i.redd.it/8hgdbg4dr5u31.png"} /> */}
            {/*console.log(this.props.location)*/}
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
