const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const bookRoutes = require('./models/book');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);

// Start server
const MONGO_URI = process.env.MONGO_URI;  // Use the MongoDB URI from .env
const PORT = 3000; 

mongoose.connect(MONGO_URI).then(()=> {
  app.listen(3000, () => {
      console.log('connected to db and Listening on port',3000);
  });
}).catch((error)=>{
  console.log(error);
});
