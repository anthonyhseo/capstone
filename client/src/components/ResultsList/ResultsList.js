import React, { Component } from 'react'
import './ResultsList.css'

export default class ResultsList extends Component {
    render() {
        return (
            <div>
                <ul className="results-ul">
                    <li className="results-li">Chair</li>
                    <li className="results-li">Stove</li>
                    <li className="results-li">Oven</li>
                    <li className="results-li">Sink</li>
                </ul>
            </div>
        )
    }
}
