import React, { Component } from 'react'
import Photo from '../Photo/Photo'

import axios from 'axios'

import resultDataTest from '../../data_testing/resultDataTest.json'
import './UploadPhotoContainer.css'

export default class UploadPhotoContainer extends Component {
  state = {
    classifications: []
  }
  componentWillMount() {

    axios.defaults.headers['Authorization'] = localStorage.jwtToken
    axios
      .get('http://ec2-54-202-80-154.us-west-2.compute.amazonaws.com:3001/api/v1/classify/getClassifications')
      .then(res => {
        this.setState({ classifications: res.data })
      })
  }

  render() {
    /*
    const photoItem = resultDataTest.map(item => {
      return <Photo image={item.image} name={item.name} />
    })
    */
    const photoItem = this.state.classifications.map(item => (
      <Photo key={item._id} image={item.imageUrl} name={item._id} />
    ))

    return <div className='photo-container'>{photoItem}</div>
  }
}
