// commentRoutes.js
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const router = express.Router();

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let commentsCollection;
let db;

client.connect(err => {
  if (err) throw err;
  const db = client.db('blogapp');
  commentsCollection = db.collection('comments');
  console.log('Connected to MongoDB');
});

// Route to fetch comments for a specific blog post
router.get('/:blogId', async (req, res) => {
  const { blogId } = req.params;
  try {
    commentsCollection = req.db.collection('comments');
    const comments = await commentsCollection.find({ blogId: new ObjectId(blogId) }).toArray();
    res.status(200).json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).send('Error fetching comments');
  }
});

// Route to add a new comment to a specific blog post
router.post('/:blogId', async (req, res) => {
  const { blogId } = req.params;
  const { username, content } = req.body;
  const newComment = {
    blogId: new ObjectId(blogId),
    username,
    content,
    createdAt: new Date()
  };

  try {
    commentsCollection = req.db.collection('comments');
    await commentsCollection.insertOne(newComment);
    res.status(201).send('Comment added successfully');
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).send('Error adding comment');
  }
});

module.exports = router;
