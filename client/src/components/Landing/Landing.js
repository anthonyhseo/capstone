import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='landing-overlay landing-content'>
        <h1>Amenity Detector</h1>
        <p>Seamlessly detect amenities with the click of a button</p>
        <LinkContainer to='/login'>
          <button className='btn btn-primary'>Login</button>
        </LinkContainer>
      </div>
    </div>
  );
};

export default Landing;
