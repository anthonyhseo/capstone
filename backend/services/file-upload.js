const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

// Setup AWS config
aws.config.update({
    secretAccessKey: '<>',
    accessKeyId: '<>',
    region: 'us-west-2'
})


// Create S3 instance
const s3 = new aws.S3()

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error('Inavlid file format, only JPEG and PNG allowed'), false)
    }
}

// Create upload object
var upload = multer({
    fileFilter: fileFilter,
    storage: multerS3({
        s3: s3,
        bucket: 'classify-images',
        acl: 'public-read',
        metadata: function(req, file, cb){
            cb(null, {fileName: 'TESTING META DATA'})
        },
        key: function(req, file, cb){
            console.log(file)
            cb(null, Date.now().toString())
        }
    })
})


module.exports = upload