import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UploadPhotoContainer from '../UploadPhotoContainer/UploadPhotoContainer'
import { LinkContainer } from 'react-router-bootstrap'

import './Dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      <div className='background-img-container'>
        <h2 className='dashboard-h2'>Dashboard</h2>

        {/* <Link to='/new-property'>Add New Property</Link> */}
        <UploadPhotoContainer />
        <LinkContainer to='/upload'>
          <button type='submit' className='btn btn-primary upload-btn'>
            Upload a Photo
          </button>
        </LinkContainer>
      </div>
    )
  }
}

export default Dashboard
