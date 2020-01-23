import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../../actions/authActions'
import './LoginPage.css'

class LoginPage extends Component {
  

    state = {
      username: '',
      password: ''
    }

    
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

  onClick(e) {
    this.props.loginUser()
  }

  render() {
    return (
      <div className='login-container'>
        <div className='login'>
          <h2>Please Login</h2>
          <form >
            <input
              placeholder="Username"
              type='text'
              name='username'
              value={this.state.username}
              onChange={e => this.handleChange(e)}
              required
            />
            <input
              placeholder="Password"
              type='password'
              name='password'
              value={this.state.password}
              onChange={e => this.handleChange(e)}
              required
            />
          </form>
        <Link onClick={e => this.onClick(e)} to="/dashboard" className="btn btn-primary login-btn">
          Login
        </Link>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { loginUser }
)(LoginPage)
