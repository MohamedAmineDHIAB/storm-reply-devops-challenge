const AWS = require("aws-sdk");
require("dotenv").config();
const date = require("date-and-time");

// define AWS credentials using environment variables
var credentials = new AWS.Credentials({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
});
AWS.config.credentials = credentials;

const s3 = new AWS.S3();
const now = new Date();
// current UTC date
const currentDate = date.format(now, "HH_mm_ss-DD_MM_YYYY");

// function to upload files to s3
const UploadFileToS3 = async (bucketName) => {
    console.log(`Using S3 bucket ${bucketName} `);
    const res = await s3
        .putObject({
            Body: "Storm Reply",
            Bucket: bucketName,
            Key: `${currentDate}.txt`,
        })
        .promise();
    console.log(`[${currentDate}] File Created successfully`);
};

// get bucketname from environment variable BUCKET_NAME
const BucketName = process.env.BUCKET_NAME;

// executing function
UploadFileToS3(BucketName);
