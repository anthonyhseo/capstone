import React, { Component } from 'react';

import './Register.css';

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className='main-registration-container'>
        <div className='register'>
          <h2>Registration Form</h2>
          <form onSubmit={e => this.onSubmit(e)}>
            <label>First Name</label>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={this.state.firstName}
              onChange={e => this.handleChange(e)}
            />
            <label>Last Name</label>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={this.state.lastName}
              onChange={e => this.handleChange(e)}
            />
            <label>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
            <label>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
            <input type='submit' className='btn-primary' value='Register' />
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
