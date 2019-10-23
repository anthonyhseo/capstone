import React from 'react';

import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>This is the dashboard.</h1>
      <h2>Upload an image:</h2>
      <div className="container">
        <div className="row">
          <div className="col">
            Filename:
            <br/>
            <form action="POST">
              <input type="file" accept="image/*"/>
              <button type="submit">Upload</button>
            </form>
            
          </div>

          <div className="col">
            This is where the image will be.
            <img src="https://i.redd.it/8hgdbg4dr5u31.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
