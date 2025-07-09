const Post = require('../models/Post');

const createPost = async (req, res) => {
  try {
    const { title, content, author, category } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required.' });
    }

    const post = await Post.create({ 
      title, 
      content, 
      author: author || 'Anonymous',
      category: category || 'General'
    });
    
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error creating post' });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    console.error('Error fetching posts:', err);
    res.status(500).json({ error: 'Server error fetching posts' });
  }
};

module.exports = {
  createPost,
  getAllPosts
};