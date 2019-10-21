import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Amenity Detector
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
