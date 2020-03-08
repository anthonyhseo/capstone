import React, { useState, useEffect } from 'react'
import Photo from '../Photo/Photo'

import axios from 'axios'

import resultDataTest from '../../data_testing/resultDataTest.json'
import './UploadPhotoContainer.css'

export default function UploadPhotoContainer() {
  const [classifications, setClassifications] = useState([])
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      axios.defaults.headers['Authorization'] = localStorage.jwtToken
      try {
        const result = await axios.get(
          'http://localhost:3001/api/v1/classify/getClassifications'
        )
        setClassifications(result.data)
      } catch (err) {
        console.log(err)
      }
    }

    const fetchProperties = async () => {
      axios.defaults.headers['Authorization'] = localStorage.jwtToken
      try {
        const result = await axios.get('http://localhost:3001/api/v1/hotel')
        // console.log(result.data)
        setProperties(result.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
    fetchProperties()
  }, [])

  // console.log(properties)

  const photoItem = classifications.map(item => (
    <Photo key={item._id} properties={properties} item={item} />
  ))

  return <div className='photo-container'>{photoItem}</div>

}
