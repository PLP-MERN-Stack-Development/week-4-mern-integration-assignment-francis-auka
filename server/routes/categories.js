// routes/categories.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Categories route placeholder' });
});

module.exports = router;
