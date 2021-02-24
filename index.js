const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const Users = require("./models/users.models");

// Connect to .env file for config
require("dotenv").config();

// set up express
const app = express();
app.use(express.json());
app.use(cors());

//Establish Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// Connecting mongoDB Database
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// Import Routes
const authRoutes = require('./routes/auths');
const userRoutes = require('./routes/users');
const todoRoutes = require('./routes/todo');
const vigilRoutes = require('./routes/vigil');

// Use Routes middlewear
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', todoRoutes);
app.use('/api', vigilRoutes);