import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Dashboard from './components/Dashboard/Dashboard'
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';



import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />

        <Route exact path="/dashboard" component={Dashboard} />

      </Router>
    </div>
  );
}

export default App;
