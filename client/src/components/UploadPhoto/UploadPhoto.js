import React, { Component } from 'react'
import axios from 'axios'

import './UploadPhoto.css'

class UploadPhoto extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: '',
      imagePreviewUrl: ''
    }
  }

  handleChange(e) {
    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }
    
    reader.readAsDataURL(file)
  }

  handleClear(e) {
    this.setState({
      file: '',
      imagePreviewUrl: ''
    })

    console.log(this.state)
  }

  handleUploadImage(e) {
    e.preventDefault()
    const form = new FormData()
    form.append('myFile', this.state.file)
    axios
      .post('http://localhost:3001/api/upload', form)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error))
  }

  render() {
    const { imagePreviewUrl, file } = this.state
    let _imagePreview = null
    if (imagePreviewUrl) {
      _imagePreview = (
        <img className="img-fluid" src={imagePreviewUrl} alt={file} />
      )
    } else {
      _imagePreview = <div>Please select an image for preview</div>
    }
    return (
      <div className="upload-photo">
        <h1>This is the upload photo page.</h1>
        <h2>Upload an image:</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <br />
              <form onSubmit={e => this.handleUploadImage(e)}>
                <input
                  type="file"
                  className="form-control-file"
                  onChange={e => this.handleChange(e)}
                  accept="image/*"
                />
                <button className="btn btn-primary" type="submit">
                  Upload
                </button>
                <input
                  type="button"
                  value="Clear"
                  className="btn btn-danger"
                  onClick={e => this.handleClear(e)}
                />
              </form>
            </div>

            <div className="col-md-8">{_imagePreview}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default UploadPhoto
