import React, { Component } from 'react'
import './ResultsList.css'

export default class ResultsList extends Component {
  // State holds value for checkbox being checked
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.checked
    }
  }

  // Sets the value for checkbox
  handleCheckBoxChange = (event) => {
    this.setState({checked: event.target.checked})
  }

  render() {
    const objects = this.props.className
    return (
      <div>
        <p className="results-p">
          <input 
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckBoxChange}
          />
          {objects}
        </p>
      </div>
    )
  }
}
