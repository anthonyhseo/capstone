const express = require('express')
const router = express.Router()
const uploadToS3 = require('../services/file-upload')

// Testing the route
router.get('/image-upload', (req, res) => {
    return res.json({msg: 'I work'})
})


// Route to take in form (contains file and username) and passes that data to 
// uploadToS3 function to then upload the data to S3
router.post('/image-upload', async (req, res) => {
    uploadToS3(req, res, (err) => {
        console.log(`username is ${req.body.username}`)
        if (err) {
            console.log(err)
            return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}]})
        } else {
            if (req.file === undefined) {
                console.log('Error: No File Selected')
                return res.json('Error: No File Selected')
            }
        }
        return res.send(req.file.location)
        // return res.json({'imageUrl' : req.file.location})
    })
})

module.exports = router