import React, { Component } from 'react'
import axios from 'axios'

import './Register.css'

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }
  // state =

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // TODO: we should probably include all the fields in the request. do password verification
  async onSubmit(e) {
    e.preventDefault()

    // Destructure state to build body to send with Axios post
    const { username, password } = this.state

    // Create a newUser object to pass as the body
    const newUser = {
      username,
      password
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      // const res = await axios.post('http://ec2-34-210-193-105.us-west-2.compute.amazonaws.com:3001/api/v1/users/register', body, config)
      const res = await axios.post(
        'http://localhost:3001/api/v1/users/register',
        // 'http://ec2-34-210-193-105.us-west-2.compute.amazonaws.com:3001/api/v1/users/register',
        newUser,
        config
      )
      console.log(res.data)
    } catch (err) {
      console.error(err.response.data)
    }
  }

  render() {
    return (
      <div className='main-registration-container'>
        <div className='register'>
          <h2>Registration Form</h2>
          <form onSubmit={e => this.onSubmit(e)}>
            <input
              placeholder='First Name'
              type='text'
              name='firstName'
              value={this.state.firstName}
              onChange={e => this.handleChange(e)}
              required
            />
            <input
              placeholder='Last Name'
              type='text'
              name='lastName'
              value={this.state.lastName}
              onChange={e => this.handleChange(e)}
              required
            />
            <input
              placeholder='Username'
              type='text'
              name='username'
              value={this.state.username}
              onChange={e => this.handleChange(e)}
              required
            />
            <input
              placeholder='Email'
              type='email'
              name='email'
              value={this.state.email}
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
            <input
              placeholder='Confirm Password'
              type='password'
              name='passwordConfirm'
              value={this.state.passwordConfirm}
              onChange={e => this.handleChange(e)}
              required
            />
            <button type='submit' className='btn btn-primary register-btn'>
              Register
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Register
