import React, { useState } from 'react'
import axios from 'axios'

export default function CreateProperty(props) {
  const [hotelName, setHotelName] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    const payload = {
      hotel: hotelName
    }

    try {
      axios.defaults.headers['Authorization'] = localStorage.jwtToken
      const result = await axios.post(
        'http://localhost:3001/api/v1/hotel',
        // 'ec2-34-220-221-99.us-west-2.compute.amazonaws.com:3001/api/v1/hotel',
        payload
      )
      console.log(result)
    } catch (err) {
      console.log(err)
    }
    console.log('submitted hotel')
  }
  return (
    <div className='container'>
      <h1>Create a new Property</h1>
      <p>Hello world</p>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='hotelId'>Hotel Name</label>
          <input
            type='text'
            className='form-control'
            id='hotelId'
            aria-describedby='emailHelp'
            placeholder='Hotel Name'
            value={hotelName}
            onChange={e => setHotelName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-primary register-btn'>
          Add Hotel
        </button>
      </form>
    </div>
  )
}
