import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import Results from '../Results/Results';
import './UploadPhoto.css';
import LoadingOverlay from 'react-loading-overlay';

class UploadPhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: '',
      imagePreviewUrl: '',
      classification: [],
      returnedResults: false,
      isLoading: false
    };
  }

  handleChange(e) {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        ...this.state,
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  handleClear(e) {
    this.setState({
      file: '',
      imagePreviewUrl: ''
    });

    console.log(this.state);
  }

  handleUploadImage(e) {
    e.preventDefault();
    const form = new FormData();
    form.append('myFile', this.state.file);
    axios
      .post('http://localhost:3001/api/v1/classify', form)
      .then(response => {
        this.setState({
          ...this.state,
          returnedResults: true,
          classification: response.data
        });
      })
      .catch(error => console.log(error));
  }

  // Resetting page back to upload photo
  handleReset(e) {
    this.setState({
      returnedResults: false,
      imagePreviewUrl: null,
      isLoading: false
    });
  }

  displayLoadingSpinner = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
  };

  render() {
    const { imagePreviewUrl, file, returnedResults } = this.state;
    let _imagePreview = null;
    let loadingSpinner = null;
    // Set properties of loading overlay
    if (this.state.isLoading) {
      loadingSpinner = (
        <div className={`overlay ${this.state.isLoading ? 'appear' : ''}`}>
          <div className={'overlay-text'}>
            <LoadingOverlay
              active={true}
              spinner={true}
              text='Doing smart stuff...'
            />
          </div>
        </div>
      );
    }
    if (imagePreviewUrl) {
      _imagePreview = (
        <img className='img-fluid' src={imagePreviewUrl} alt={file} />
      );
    } else {
      _imagePreview = <p>Please select an image for preview</p>;
    }
    return !returnedResults ? (
      <div className='upload-photo'>
        {loadingSpinner}
        <h1 className='textHeading'> Upload a photo.</h1>

        <div className='upload-container'>
          <form onSubmit={e => this.handleUploadImage(e)}>
            <div className='choose-file'>
              <input
                type='file'
                className='form-control-file'
                onChange={e => this.handleChange(e)}
                accept='image/*'
              />
            </div>
            <div className='buttons'>
              <div className='upload-btn'>
                <button
                  className='btn btn-primary'
                  type='submit'
                  onClick={this.displayLoadingSpinner}
                >
                  Upload
                </button>
              </div>
              <div className='clear-btn'>
                <input
                  type='button'
                  value='Clear'
                  className='btn btn-danger'
                  onClick={e => this.handleClear(e)}
                />
              </div>
            </div>
          </form>
          <div className='image-preview'>{_imagePreview}</div>
        </div>
      </div>
    ) : (
      <Results
        image={this.state.imagePreviewUrl}
        classification={this.state.classification}
        reset={() => this.handleReset()}
      />
    );
  }
}

export default withRouter(UploadPhoto);
