import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';

import './App.css';
function click() {
  console.log('hello');
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Landing />
      </Router>
    </div>
  );
}

export default App;
