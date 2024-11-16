// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const contactModel=require('./models/Contact');

// Initialize dotenv to load environment variables
dotenv.config();

// Initialize and configure the app
const app = express();
app.use(cors());  // Enable CORS for cross-origin requests
app.use(bodyParser.json());  // Parse incoming JSON payloads

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', contactRoutes);

// Start the server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});