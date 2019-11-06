import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginUser } from '../../actions/authActions'

class LoginPage extends Component {
  constructor() {
    super()

    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    this.props.loginUser()
  }

  render() {
    return (
      <Link onClick={this.onClick} to="/dashboard" className="btn btn-primary">
        Login
      </Link>
    )
  }
}

export default connect(
  null,
  { loginUser }
)(LoginPage)
