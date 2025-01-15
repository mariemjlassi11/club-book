const express = require('express');
const BookRoutes = require('./models/books');
const User = require('../models/User');
const router = express.Router();

// Add a book
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const userId = req.headers['user-id'];

  if (!title || title.trim() === '') {
    return res.status(400).json({ message: "Title is required" });
  }

  if (!description || description.length < 5) {
    return res.status(400).json({ message: "Description must be at least 5 characters long" });
  }

  try {
    const book = new Book({ title, description, addedBy: userId, likedBy: [userId] });
    await book.save();
    const user = await User.findById(userId);
    user.favorites.push(book._id);
    await user.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().populate('addedBy', 'firstName lastName');
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add to favorites
router.post('/:id/favorite', async (req, res) => {
  const userId = req.headers['user-id'];
  const bookId = req.params.id;

  try {
    const book = await Book.findById(bookId);
    if (!book.likedBy.includes(userId)) {
      book.likedBy.push(userId);
      await book.save();
      const user = await User.findById(userId);
      user.favorites.push(bookId);
      await user.save();
      return res.status(200).json({ message: "Book added to favorites" });
    } else {
      return res.status(400).json({ message: "Book already in favorites" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remove from favorites
router.delete('/:id/favorite', async (req, res) => {
  const userId = req.headers['user-id'];
  const bookId = req.params.id;

  try {
    const book = await Book.findById(bookId);
    book.likedBy = book.likedBy.filter(id => id.toString() !== userId);
    await book.save();
    const user = await User.findById(userId);
    user.favorites = user.favorites.filter(id => id.toString() !== bookId);
    await user.save();
    res.status(200).json({ message: "Book removed from favorites" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
