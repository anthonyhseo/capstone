import React, { Component } from 'react'
import UploadPhotoContainer from '../UploadPhotoContainer/UploadPhotoContainer';
import { LinkContainer } from 'react-router-bootstrap';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
    <div className="background-img-container">
      <UploadPhotoContainer />
      <LinkContainer to='/upload'>
        <button
          type='submit'
          className='btn btn-primary upload-btn'
          >
            Upload a Photo
        </button>
      </LinkContainer>
    </div>
    )
  }
}

export default Dashboard
