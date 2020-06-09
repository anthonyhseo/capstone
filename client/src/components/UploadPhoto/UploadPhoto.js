import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'

import Results from '../Results/Results'
import LoadingOverlay from 'react-loading-overlay'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'



import './UploadPhoto.css'

class UploadPhoto extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: '',
      imagePreviewUrl: '',
      classification: [],
      returnedResults: false,
      isLoading: false,
      hotels: [],
      selectedHotel: ''
    }
  }

  componentDidMount() {
    axios.defaults.headers['Authorization'] = localStorage.jwtToken
    axios
      .get('http://localhost:3001/api/v1/hotel')
      // .get('http://ec2-34-210-193-105.us-west-2.compute.amazonaws.com:3001/api/v1/hotel')
      .then(response => {
        console.log(response)
        this.setState({ ...this.state, hotels: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange(e) {
    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        ...this.state,
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

  async handleUploadImage(e) {
    e.preventDefault()
    const form = new FormData()

    // Append the username to the form
    form.append('username', this.props.auth.username)
    form.append('myFile', this.state.file)
    form.append(
      'hotel',
      this.state.selectedHotel === null ? null : this.state.selectedHotel
    )

    console.log(form)

    axios.defaults.headers['Authorization'] = localStorage.jwtToken

    // POST request to retrieve S3URL 
    const S3URL = await axios.post('http://localhost:3001/api/v1/s3/image-upload', form, {
    // const S3URL = await axios.post('http://ec2-34-210-193-105.us-west-2.compute.amazonaws.com:3001/api/v1/s3/image-upload', form, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US, en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${form._boundary}`
      }
    })

    // Append the S3 URL to the form 
    form.append('s3URL', S3URL.data)

    axios
      .post('http://localhost:3001/api/v1/classify/authClassify', form)
      // .post('ec2-34-210-193-105.us-west-2.compute.amazonaws.com:3001/api/v1/classify/authClassify', form)
      .then(response => {
        console.log(response)
        this.setState({
          ...this.state,
          returnedResults: true,
          classification: response.data.classification
        })
      })
      .catch (error => {
        console.log(error)
      })
  }

  changeHotel(value) {
    this.setState({
      ...this.state,
      selectedHotel: value
    })
  }

  // Resetting page back to upload photo
  handleReset(e) {
    this.setState({
      returnedResults: false,
      imagePreviewUrl: null,
      isLoading: false
    })
  }

  displayLoadingSpinner = () => {
    this.setState({
      isLoading: !this.state.isLoading
    })
  }

  render() {
    const { imagePreviewUrl, file, returnedResults } = this.state
    let _imagePreview = null
    let loadingSpinner = null
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
      )
    }
    if (imagePreviewUrl) {
      _imagePreview = (
        <img className='preview-img' src={imagePreviewUrl} alt={file} />
      )
    } else {
      _imagePreview = <p>Please select an image for preview</p>
    }
    return !returnedResults ? (
      <div className='upload-photo'>
        {loadingSpinner}
        <h1 className='textHeading'> Upload a photo.</h1>

        <div className='upload-container'>
          <div className='row'>
            <div className='col-md-4'>
              <form onSubmit={e => this.handleUploadImage(e)} encType='multipart/form-data'>
                <div className='form-group'>
                  <label htmlFor='hotelSelect'>Select Hotel</label>
                  <select
                    className='form-control'
                    id='hotelSelect'
                    value={this.state.selectedHotel}
                    onChange={e => this.changeHotel(e.target.value)}
                  >
                    <option value='' defaultValue>
                      Select a Hotel
                    </option>
                    {this.state.hotels.map(hotel => (
                      <option value={hotel._id} key={hotel._id}>
                        {hotel.hotel}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor='uploadInput'>Image</label>
                  <input
                    type='file'
                    className='form-control-file'
                    id='uploadInput'
                    onChange={e => this.handleChange(e)}
                    accept='image/*'
                  />
                </div>
                <div>
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
                    <button
                      type='submit'
                      className='btn btn-danger'
                      onClick={e => this.handleClear(e)}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </form>

            </div>
            <div className='image-preview col-md-8'>{_imagePreview}</div>
          </div>
        </div>
      </div>
    ) : (
      <Results
        image={this.state.imagePreviewUrl}
        classification={this.state.classification}
        reset={() => this.handleReset()}
      />
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(withRouter(UploadPhoto))

