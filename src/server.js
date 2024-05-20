const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const path = require('path');
const blogRoutes = require('./blogRoutes'); // Import the blog routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

let db; // MongoDB database instance

// MongoDB connection
async function connectToDatabase() {
  const mongoURI = 'mongodb://127.0.0.1:27017';
  const dbName = 'blogapp';
  
  try {
    const client = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

// Connect to the database once when the server starts
connectToDatabase();

// Handle POST request to /signup
app.post('/signup', async (req, res) => {
  const { fname, lname, username, email, password } = req.body;

  try {
    console.log(`received:${fname},${username},${password}`);
    const collection = db.collection('users');

    // Insert new user into the database
    await collection.insertOne({ fname, lname, username, email, password });
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Failed to create user:', error);
    res.status(500).json({ message: 'Failed to create user' });
  }
});

// Handle POST request to /login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log(`received:${username},${password}`);
    console.log(`credentials:${username},${password}`);
    const collection = db.collection('users');
    
    // Find user by username
    const user = await collection.findOne({ username });

    if (user) {
      return res.status(200).json({ message: 'Login successful' });
    }

    res.status(401).json({ message: 'Invalid credentials' });
    
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Use the blog routes
app.use('/api', (req, res, next) => {
  req.db = db;
  next();
}, blogRoutes);

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Cleanup MongoDB connection on process exit
process.on('SIGINT', () => {
  console.log('Closing MongoDB connection...');
  if (db) {
    db.client.close();
    console.log('MongoDB connection closed');
  }
  process.exit(0);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
