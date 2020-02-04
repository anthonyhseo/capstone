import React from 'react'
import './Photo.css'

export default function Photo(props) {
    return (
    <div className='photo-card'>
        <img src={`${props.image}.jpg`}/>
        <div className="container">
            <p>{props.name}</p>
        </div>
    </div>
    )
}
 