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
    axios.defaults.headers['Authorization'] =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIzIiwiaWQiOiI1ZTI4ZTEwMDkwMmVmOTFhMjk0ZTBjNjIiLCJpYXQiOjE1ODA3MTI2ODcsImV4cCI6MTU4MDc5OTA4N30.F5iQT1um-LzJcmkx-QtNHOi8CFL6wOBcMhYjwU7_Dz4'
    axios
      .get('http://localhost:3001/api/v1/classify/getClassifications')
      .then(res => {
        console.log(res.data)
        this.setState({ classifications: res.data })
      })
  }

  render() {
    /*
    const photoItem = resultDataTest.map(item => {
      return <Photo image={item.image} name={item.name} />
    })
    */
    const photoItem = this.state.classifications.map(item => {
      console.log(item.imageUrl)
      return <Photo image={item.imageUrl} name={item._id} />
    })

    return <div className="photo-container">{photoItem}</div>
  }
}
