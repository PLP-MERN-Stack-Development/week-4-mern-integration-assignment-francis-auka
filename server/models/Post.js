const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    unique: true,
    required: false
  },
  author: {
    type: String,  // Changed from ObjectId to String
    default: 'Anonymous'
  },
  category: {
    type: String,  // Changed from ObjectId to String
    default: 'General'
  }
}, {
  timestamps: true
});

// Auto-generate slug from title if not provided
postSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  next();
});

module.exports = mongoose.model('Post', postSchema);