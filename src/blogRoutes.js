const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let blogCollection;

client.connect(err => {
  if (err) throw err;
  const db = client.db('blogapp');
  blogCollection = db.collection('blogs');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/blogs', upload.single('thumbnail'), async (req, res) => {
  const { title, category, content,username } = req.body;
  const thumbnail = req.file ? `/uploads/${req.file.filename}` : '../defaultimg.webp';

  console.log('Request Body:', req.body);
  console.log('File:', req.file);

  const newBlog = {
    title,
    username,
    category,
    content,
    thumbnail,
    createdAt: new Date()
  };

  try {
    blogCollection = req.db.collection('blogs');
    await blogCollection.insertOne(newBlog);
    res.status(201).send('Blog published successfully');
  } catch (error) {
    console.error('Error publishing blog:', error);
    res.status(500).send('Error publishing blog');
  }
});

router.get('/blogs', async (req, res) => {
  try {
    blogCollection = req.db.collection('blogs');
    const blogs = await blogCollection.find({}).toArray();
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).send('Error fetching blogs');
  }
});

module.exports = router;
