const bcrypt = require("bcrypt");
const nodeMailer = require("nodemailer");
const dotenv = require("dotenv");
//const s3 = require("../config/awsS3");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require('path');
const { v4: uuidv4 } = require('uuid');
dotenv.config();
const CryptoJS = require("crypto-js");
const AWS = require('aws-sdk');


const S3 = new AWS.S3({
  //region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

// bcrypt password
const validPassword = (dbPassword, passwordToMatch) => {
  return bcrypt.compareSync(passwordToMatch, dbPassword);
};

const safeModel = () => {
  return _.omit(this.toObject(), ["password", "__v"]);
};

const generatePassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// generateOTP
function generateOTP() {
  const digits = "123456789";
  let otp = "";
  for (let i = 1; i <= 6; i++) {
    let index = Math.floor(Math.random() * digits.length);
    otp = otp + digits[index];
  }
  return otp;
}

// send mail
let sendEmail = async (toEmail, subject, bodyHtml, attachments) => {
  const transporter = nodeMailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    to: toEmail,
    subject: subject,
    html: `${bodyHtml}`,
    attachments: attachments,
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};


// upload s3
// console.log("bucketName:--", process.env.BUCKET_NAME, process.env.ACCESS_KEY_ID, process.env.SECRET_ACCESS_KEY)
const uploadS3 = multer({
  storage: multerS3({
    s3: S3,
    bucket: "buser-lab-reports",
    //acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, `${req.body.userId + '/'}` + file.originalname.split('.').join('-' + Date.now() + '.'));
    },
    limits: { fileSize: 5000000000 }, // In bytes: 5000000000 bytes = 5 GB
    // contentType: multerS3.AUTO_CONTENT_TYPE,
    // key: function (req, file, cb) {

    //   console.log("file::--", file)
    //   const extname = path.extname(file.originalname);
    //   const key =
    //     path.basename(file.originalname, extname) + "-" + uuidv4() + extname;
    //   cb(null, key);
    // },
    // limits: { fileSize: 5000000000 }, // In bytes: 5000000000 bytes = 5 GB
  }),
});

// Encrypt
const encrypt = (message) => {
  return CryptoJS.AES.encrypt(message, process.env.CRYPTO_SECRET).toString();
}
// Decrypt
const decrypt = (ciphertext) => {
  var bytes = CryptoJS.AES.decrypt(ciphertext, process.env.CRYPTO_SECRET);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText
}

const sendSesEmail = async (toEmail, emailBody, title, fromEmail) => {
  AWS.config.update({ region: 'us-east-1' });

  const params = {
    Destination: {
      ToAddresses: [toEmail]
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: emailBody
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: title
      }
    },
    Source: fromEmail
  };

  const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();

  sendPromise.then((data) => {
    console.log("email send successfully...", data.MessageId);
  })
    .catch((e) => {
      console.log("err..", e);
    })
}


const AwsS3CreateFolderLabReport = (folder) => {
  const addPromise = S3.putObject({
    Bucket: "buser-lab-reports",
    Key: `${folder + '/'}`,
  }).promise();
  addPromise.then((data) => {
    console.log("create folder.");
  })
    .catch((e) => {
      console.log("err..", e);
    })
}

const AwsS3CreateFolderPhotosGallery = (folder) => {
  const addPromise = S3.putObject({
    Bucket: "buser-photos-gallery",
    Key: `${folder + '/'}`,
  }).promise();
  addPromise.then((data) => {
    console.log("create folder.");
  })
    .catch((e) => {
      console.log("err..", e);
    })
}

const AwsS3CreateFolderNutition = (folder) => {
  const addPromise = S3.putObject({
    Bucket: "buser-nutrition",
    Key: `${folder + '/'}`,
  }).promise();
  addPromise.then((data) => {
    console.log("create folder.");
  })
    .catch((e) => {
      console.log("err..", e);
    })
}

const AwsS3CreateFolderSequence = (folder) => {
  const addPromise = S3.putObject({
    Bucket: "buser-sequence",
    Key: `${folder + '/'}`,
  }).promise();
  addPromise.then((data) => {
    console.log("create folder.");
  })
    .catch((e) => {
      console.log("err..", e);
    })
}

const AwsS3CreateFolderChatMedia = (folder) => {
  const addPromise = S3.putObject({
    Bucket: "buser-chat-media",
    Key: `${folder + '/'}`,
  }).promise();
  addPromise.then((data) => {
    console.log("create folder.");
  })
    .catch((e) => {
      console.log("err..", e);
    })
}

const AwsS3CreateFolderUserRecords = (folder) => {
  const addPromise = S3.putObject({
    Bucket: "user-records",
    Key: `${folder + '/'}`,
  }).promise();
  addPromise.then((data) => {
    console.log("create folder.");
  })
    .catch((e) => {
      console.log("err..", e);
    })
}

const AwsDeleteImage = (imageUrl) => {
  const image = imageUrl.split('/');
  const imageData = image[3] + "/" + image[4].split('_');
  S3.deleteObject({
    Bucket: "buser-lab-reports",
    Key: `${imageData}`
  }, (err, data) => {
    console.error("Error::--", err);
    console.log("data::----", data);
  });
}

const AwsGalleryDeleteImage = (imageUrl) => {
  const image = imageUrl.split('/');
  const imageData = image[3] + "/" + image[4].split('_');
  S3.deleteObject({
    Bucket: "buser-photos-gallery",
    Key: `${imageData}`
  }, (err, data) => {
    console.error("Error::--", err);
    console.log("data::----", data);
  });
}

const AwsNutitionDeleteImage = (imageUrl) => {
  const image = imageUrl.split('/');
  const imageData = image[3] + "/" + image[4].split('_');
  S3.deleteObject({
    Bucket: "buser-nutrition",
    Key: `${imageData}`
  }, (err, data) => {
    console.error("Error::--", err);
    console.log("data::----", data);
  });
}


const AwsSequenceDeleteImage = (imageUrl) => {
  const image = imageUrl.split('/');
  const imageData = image[3] + "/" + image[4].split('_');
  S3.deleteObject({
    Bucket: "buser-sequence",
    Key: `${imageData}`
  }, (err, data) => {
    console.error("Error::--", err);
    console.log("data::----", data);
  });
}


const uploadDocumentS3 = multer({
  storage: multerS3({
    s3: S3,
    bucket: function (req, file, cb) {
      cb(null, `${req.body.bucketName}`);
    },
    //acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, `${req.params.id + '/'}` + file.originalname.split('.').join('-' + Date.now() + '.'));
    },
    limits: { fileSize: 5000000000 }, // In bytes: 5000000000 bytes = 5 GB
  }),
});

const uploadPhotos = multer({
  storage: multerS3({
    s3: S3,
    bucket: "buser-photos-gallery",
    //acl: 'public-read',
    contentLength: 50000000000,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, `${req.body.userId + '/'}` + file.originalname.split('.').join('-' + Date.now() + '.'));
    },
  }),
  limits: { fileSize: 5000000000 },  // In bytes: 5000000000 bytes = 5 GB
});

const uploadNutrition = multer({
  storage: multerS3({
    s3: S3,
    bucket: "buser-nutrition",
    //acl: 'public-read',
    contentLength: 50000000000,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, `${req.body.userId + '/'}` + file.originalname.split('.').join('-' + Date.now() + '.'));
    },
  }),
  limits: { fileSize: 5000000000 },  // In bytes: 5000000000 bytes = 5 GB
});


const uploadSequence = multer({
  storage: multerS3({
    s3: S3,
    bucket: "buser-sequence",
    //acl: 'public-read',
    contentLength: 50000000000,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, `${req.body.userId + '/'}` + file.originalname.split('.').join('-' + Date.now() + '.'));
    },
  }),
  limits: { fileSize: 5000000000 },  // In bytes: 5000000000 bytes = 5 GB
});


module.exports = {
  validPassword,
  safeModel,
  generatePassword,
  // generateToken,
  generateOTP,
  sendEmail,
  uploadS3,
  encrypt,
  decrypt,
  sendSesEmail,
  AwsS3CreateFolderLabReport,
  AwsS3CreateFolderChatMedia,
  AwsS3CreateFolderUserRecords,
  AwsS3CreateFolderPhotosGallery,
  AwsDeleteImage,
  uploadDocumentS3,
  uploadPhotos,
  AwsGalleryDeleteImage,
  AwsS3CreateFolderNutition,
  AwsNutitionDeleteImage,
  uploadNutrition,
  AwsS3CreateFolderSequence,
  uploadSequence,
  AwsSequenceDeleteImage
};