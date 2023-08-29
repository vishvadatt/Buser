const express = require('express');
const helmet = require('helmet');
const session = require("express-session")
const bodyParser = require('body-parser')
const db = require('./config/database');
const APIError = require('./helpers/APIError');
const httpStatus = require('http-status');
const expressValidation = require('express-validation');
const path = require("path")
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
var csrf = require('csurf');

const port = process.env.PORT || 8001

const app = express();
app.use(helmet());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(logger('dev'));

app.use(cookieParser());
var csrfProtection = csrf({ cookie: true });

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: process.env.SECRET_EXPREESESSION,
    resave: true,
    saveUninitialized: true
}));

db.connection().then((database) => {

    module.exports = database
    app.use('/api/auth', require('./routes/auth.route'));
    app.use('/api/user', require('./routes/user.route'));
    app.use('/api/stripe', require('./routes/stripe.route'));
    app.use('/api/plan', require('./routes/plans.route'));
    app.use('/api/pain', require('./routes/userPain.route'));
    app.use('/api/equipment', require('./routes/equipment.route'));
    app.use('/api/dailyUpdates', require('./routes/dailyUpdates.route'));
    app.use('/api/labReports', require('./routes/labReports.route'));
    app.use('/api/chatMedia', require('./routes/chatMedia.route'));
    app.use('/api/doctorSoap', require('./routes/doctorSoap.route'));
    app.use('/api/contactUs', require('./routes/enquiry.route'));
    app.use('/api/gallery', require('./routes/photosGallery.route'));
    app.use('/api/doctorIntakeForm', require('./routes/intakeForm.route'));
    app.use('/api/Nutrition', require('./routes/nutrition.route'));
    app.use('/api/Sequence', require('./routes/sequence.route'));
    app.use('/api/Chart', require('./routes/ProgressChart.route'));
    app.use('/api/Chat', require('./routes/chat.route'));
    app.use('/api/EducationMaterial', require('./routes/educationalMaterial.route'));
    app.use('/api/doctorAppointmentSlot', require('./routes/doctorAppointmentSlot.route'));
    app.use('/api/Appointment', require('./routes/bookAppointment.route'));
    app.use('/api/workHistory', require('./routes/workHistory.route'));
    


    app.use((err, req, res, next) => {
        if (err instanceof expressValidation.ValidationError) {
            console.log(err)
            // validation error contains errors which is an array of error each containing message[]
            const unifiedErrorMessage = err.errors.map(Error => Error.messages.join('. ')).join(' and ');
            const error = new APIError(unifiedErrorMessage, err.status, true);
            return next(error);
        } else if (!(err instanceof APIError)) {
            console.log(err)
            const apiError = new APIError(err.message, err.status, err.name === 'UnauthorizedError' ? true : err.isPublic);
            return next(apiError);
        }
        return next(err);
    });

    app.use((req, res, next) => {
        const err = new APIError('API Not Found', httpStatus.NOT_FOUND, true);
        return next(err);
    });

    app.use((err, req, res, next) => {
        res.status(err.status).json({
            error: {
                message: err.isPublic ? err.message : httpStatus[err.status],
            }
        });
    }
    );
    app.listen(port, () => {
        console.log(`The buser-institute app is up on port ${port}`);
    })
}).catch((e) => {
    const err = new APIError(`${e.message}`, httpStatus.NOT_FOUND, true);
    console.log("Error::----", e)
})
