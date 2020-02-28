// Function to create S3 buckets with the naming convention of the username
// Return bucket name to the registuerUser route to post the bucket name to the DB
// AWS documentation https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-creating-buckets.html#s3-example-creating-buckets-new-bucket
const aws = require('aws-sdk')

// Setup AWS config
// Credential documentation: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-nodejs.html#getting-started-nodejs-credentials
// Crednetials located: C:\Users\<username>\.aws\credentials
aws.config.update({
    secretAccessKey: aws.config.credentials.secretAccessKey,
    accessKeyId: aws.config.credentials.accessKeyId,
    region: 'us-west-2'
})


// Create S3 instance
const s3 = new aws.S3()

const createS3Bucket = async (username) =>{
    // Parameters for the bucket to pass in to the createBucket function
    var bucketParams = {
        Bucket : username,
        ACL : 'public-read'
      };
      
      // call S3 to create the bucket
      s3.createBucket(bucketParams, (err, data) => {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data.Location);
        }
      });
 }


module.exports = createS3Bucket