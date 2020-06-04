import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../../actions/authActions'
import axios from 'axios'
import './LoginPage.css'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onClick(e) {
    this.props.loginUser()
  }

  // Handles POST request to server to login
  async onSubmit(e) {
    e.preventDefault()
    console.log(this.state)

    // Destructure state
    const { username, password } = this.state

    // Create a user object to pass as the body in POST request
    const user = {
      username,
      password
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const res = await axios.post(
        'http://localhost:3001/api/v1/users/login',
        // 'http://ec2-34-220-221-99.us-west-2.compute.amazonaws.com:3001/api/v1/users/login',
        user,
        config
      )

      if (res.data.success) {
        localStorage.setItem('jwtToken', res.data.token)
        console.log(res.data)
        this.props.loginUser(res.data.token)
        this.props.history.push('/dashboard')
      } else {
        console.log('username or password is incorrect')
      }
    } catch (err) {
      console.error(err.response.data)
    }
  }

  render() {
    return (
      <div className='login-container'>
        <div className='login'>
          <h2>Please Login</h2>
          <form onSubmit={e => this.onSubmit(e)}>
            <input
              placeholder='Username'
              type='text'
              name='username'
              value={this.state.username}
              onChange={e => this.handleChange(e)}
              required
            />
            <input
              placeholder='Password'
              type='password'
              name='password'
              value={this.state.password}
              onChange={e => this.handleChange(e)}
              required
            />

            <button type='submit'>Login</button>
          </form>
          {/* The Link is used to go straight to the dashboard */}
          {/* <Link onClick={e => this.onClick(e)} to="/dashboard" className="btn btn-primary login-btn">
          Login
        </Link> */}
        </div>
      </div>
    )
  }
}

export default connect(null, { loginUser })(LoginPage)
