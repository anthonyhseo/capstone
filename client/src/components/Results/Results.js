import React, { Component } from 'react'
import ResultsList from '../ResultsList/ResultsList'
import ResultImage from '../ResultImage/ResultImage'
import './Results.css'

export default class Results extends Component {
  render() {
    // return a resultlist component with classified object name 
    const resultItems = this.props.classification.map((item) => {
      var probability = item.probability * 100
      var isDetected
      probability >= 50 ? isDetected = true : isDetected = false
      return <ResultsList key={item.className} className={item.className} checked={isDetected}/>
    })

    return (
      <div className="results-page">
        
          <h1>Results</h1>
          <div className="container">
            <div className="results-list">
              {resultItems}
            </div>
            <div className="results-image">
              <ResultImage image={this.props.image} />
            </div>
          </div>
          {/* <h3>Were objects correctly labeled?</h3>
          <button style={{ margin: '25px' }} className="btn btn-primary">
            Yes
          </button>
          <button className="btn btn-primary">No</button> */}
        


        <button 
          className="btn btn-primary"
          onClick={() => this.props.reset()}>
            Upload New Picture
        </button>
      </div>
    )
  }
}
