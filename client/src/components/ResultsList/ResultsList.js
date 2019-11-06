import React, { Component } from 'react'
import './ResultsList.css'

export default class ResultsList extends Component {
    render() {
        return (
            <div>
                <ul className="results-ul">
                    <li className="results-li">Chair 95%</li>
                    <li className="results-li">Stove 78%</li>
                    <li className="results-li">Oven 73%</li>
                    <li className="results-li">Sink 99%</li>
                </ul>
            </div>
        )
    }
}
