const express = require('express')
const router = express.Router()
const upload = require('../services/file-upload')

const singleUpload = upload.single('image')

// Testing the route
router.get('/image-upload', (req, res) => {
    return res.json({msg: 'I work'})
})



router.post('/image-upload', (req, res) => {
    singleUpload(req, res, (err) => {
        if (err) {
            return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}]})
        }
        return res.json({'imageUrl' : req.file.location, file: req.file})
    })
})

module.exports = router