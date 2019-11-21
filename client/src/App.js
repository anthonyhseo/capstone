import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import UploadPhoto from './components/UploadPhoto/UploadPhoto'
import Landing from './components/Landing/Landing'
import Navbar from './components/Navbar/Navbar'
import LoginPage from './components/LoginPage/LoginPage'
import Register from './components/Register/Register'
import Results from './components/Results/Results'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={UploadPhoto} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/results" component={Results} />
      </Router>
    </div>
  )
}

export default App
