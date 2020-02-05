import React from 'react'
import './Photo.css'

export default function Photo(props) {
  return (
    <div className="photo-card">
      <p>{props.name}</p>
      <img src={`http://localhost:3001/api/v1/image/${props.image}`} />
    </div>
  )
}
