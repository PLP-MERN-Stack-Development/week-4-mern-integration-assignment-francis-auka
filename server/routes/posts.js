const express = require('express');
const router = express.Router();
const { createPost, getAllPosts } = require('../controllers/postController');

// Create post
router.post('/', createPost);

// Get all posts (remove the duplicate route!)
router.get('/', getAllPosts);

module.exports = router;