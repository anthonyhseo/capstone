import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'

import './Photo.css'

export default function Photo(props) {
  const { _id, title, imageUrl, user, classification, hotel } = props.item

  const { properties } = props

  const [showModal, setShowModal] = useState(false)
  const [currentHotel, setCurrentHotel] = useState('')

  let hotelName
  for (let i = 0; i < properties.length; i++) {
    if (properties[i]._id === hotel) {
      hotelName = properties[i].hotel
      break
    }
  }

  console.log(properties.filter(item => item._id === hotel))

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleCardClick = e => {
    e.preventDefault()
    console.log('cardClicked')
    handleOpenModal()
  }

  const classificationArr = classification.map((item, index) => (
    <li key={index}>{item.className}</li>
  ))

  return (
    <>
      <a style={{ cursor: 'pointer' }} onClick={handleCardClick}>
        <div className='card photo-card' style={{ width: '18rem' }}>
          <img
            className='card-img-top'
            src={imageUrl}
          />
          <div className='card-body'>
            <h5>{title}</h5>
          </div>
        </div>
      </a>
      <Modal

style={{
  overlay: {
    padding: '100px'
  }
}}
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
      >
        <div className='row'>
          <div className='col-md-6'>
            <h2>summary</h2>
            <ul>
              <li>{title}</li>
              <li>classification ID: {_id}</li>
              <li>hotel ID: {hotel}</li>
              <li>hotel: {hotelName}</li>
              <li>hotel: {}</li>
            </ul>

            <h2>classification:</h2>
            <ul>{classificationArr}</ul>
          </div>
          <div className='col-md-6'>
            <img
              className='img-fluid'
              src={imageUrl}
            />
          </div>
        </div>
      </Modal>
    </>
  )
}
