const aws = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();
aws.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
});
// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = new aws.Endpoint('');
const s3 = new aws.S3({
    endpoint: spacesEndpoint
});

module.exports = s3;