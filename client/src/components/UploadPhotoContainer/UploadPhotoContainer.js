import React from 'react'
import Photo from '../Photo/Photo'
import resultDataTest from '../../data_testing/resultDataTest.json'
import './UploadPhotoContainer.css'

export default function UploadPhotoContainer() {
    const photoItem = resultDataTest.map((item) => {
        return <Photo image={item.image} name={item.name}/>
    })

    return (
        <div className="photo-container">
            {photoItem}
        </div>
    )
}
