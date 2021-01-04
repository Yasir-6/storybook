const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// load config
dotenv.config({ path: './config/config.env' });

// connect with database
connectDB();

// initialize the app
const app = express();

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// set server port
const PORT = process.env.PORT || 3000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
