import React from 'react'
import './Photo.css'

export default function Photo(props) {
    return (
        <div className='photo-card'>
            <p>{props.name}</p>
            <img src={`${props.image}.jpg`}/>
        </div>
    )
}
 