import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logoutUser } from '../../actions/authActions'

class Navbar extends Component {
  constructor() {
    super()

    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    this.props.logoutUser()
  }

  render() {
    const { isAuthenticated } = this.props.auth
    const loggedIn = (
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link className='nav-link' to='/new-property'>
            Add Property
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/upload'>
            Upload Photo
          </Link>
        </li>
        <li className='nav-item'>
          <Link onClick={this.onClick} className='nav-link' to='/'>
            Logout
          </Link>
        </li>
      </ul>
    )

    const loggedOut = (
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link className='nav-link' to='/register'>
            Register
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/login'>
            Login
          </Link>
        </li>
      </ul>
    )
    return (
      <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            Amenity Detector
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            {isAuthenticated ? loggedIn : loggedOut}
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Navbar)
