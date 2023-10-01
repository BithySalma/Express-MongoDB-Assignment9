const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');

const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');



// Middleware 

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(mongoSanitize());
app.use(helmet());
app.use(hpp());



const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
  const apiRouter = require('./src/Routes/api'); 
  
  app.use('/api', apiRouter); 

   app.use((req, res,) => {
    res.status(404).json('404 Not Founded');
  });

module.exports = app;
