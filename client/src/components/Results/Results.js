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
                        <ResultsList />
                    </div>
                    <div className="results-image">
                        <ResultImage />
                    </div>
                </div>
                <h3>Were objects correctly labeled?</h3>
                <button style={{ margin: '25px' }} class="btn btn-primary">Yes</button>
                <button class="btn btn-primary">No</button>
            </div>
        )
    }
}
