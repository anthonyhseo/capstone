import React from 'react'
import jwt_decode from 'jwt-decode'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { loginUser } from './actions/authActions'

import UploadPhoto from './components/UploadPhoto/UploadPhoto'
import Landing from './components/Landing/Landing'
import Navbar from './components/Navbar/Navbar'
import LoginPage from './components/LoginPage/LoginPage'
import Register from './components/Register/Register'
import Results from './components/Results/Results'
import Dashboard from './components/Dashboard/Dashboard'
import CreateProperty from './components/CreateProperty/CreateProperty'

import './App.css'

function App(props) {
  if (localStorage.jwtToken) {
    console.log('we have a webtoken. Yay!!!')
    const user = jwt_decode(localStorage.jwtToken)
    const currentTime = Date.now() / 1000
    props.loginUser(user)
    // props.history.push('/dashboard')
    if (user.exp < currentTime) {
      console.log('token expired')
    }
  }

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Route exact path='/upload' component={UploadPhoto} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/results' component={Results} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/new-property' component={CreateProperty} />
      </Router>
    </div>
  )
}

export default connect(null, { loginUser })(App)
