import React from 'react';

import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>This is the dashboard.</h1>
      <h2>Upload an image:</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            Filename:
            <br/>
            <form action="POST">
              <input type="file" class="form-control-file" accept="image/*"/>
              <button type="submit">Upload</button>
            </form>
            
          </div>

          <div className="col-md-8">
            This is where the image will be.
            <img class="img-fluid" src="https://i.redd.it/ta4o0gwjmdu31.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
