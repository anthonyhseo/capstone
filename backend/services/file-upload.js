const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

// Setup AWS config
aws.config.update({
    // secretAccessKey: aws.config.credentials.secretAccessKey,
    // accessKeyId: aws.config.credentials.accessKeyId,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID,
    region: 'us-west-2'
})


// Create S3 instance
const s3 = new aws.S3()

// Define a filter to only accept jpeg and png formats
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error('Inavlid file format, only JPEG and PNG allowed'), false)
    }
}


// Create upload object
var uploadToS3 = multer({
    fileFilter: fileFilter,
    storage: multerS3({
        s3: s3,
        // BucketName defined by username passed in through the route and form
        bucket: function (req, file, cb) {
            console.log(req.body.username)
            cb(null, req.body.username)
        },
        acl: 'public-read',
        metadata: function(req, file, cb){
            console.log(file.fieldname)
            cb(null, {fileName: 'TESTING META DATA'})
        },
        key: function(req, file, cb){
            cb(null, Date.now().toString())
        }
    })
    // Defines which field in the form to find the file from
}).single('myFile')


module.exports = uploadToS3
