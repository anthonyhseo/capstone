import React, { Component } from 'react'

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
  }


  handleUploadImage(e) {

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
              Filename:
              <br />
              <form onSubmit={this.handleUploadImage}>
                <input
                  type="file"
                  class="form-control-file"
                  onChange={e => this.handleChange(e)}
                  accept="image/*"
                />
                <button type="submit">Upload</button>
                <input
                  type="button"
                  value="Clear"
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
