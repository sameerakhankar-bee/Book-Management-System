const express = require('express');
const router = express.Router();

const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

// Create Book
router.post('/', createBook);

// Get All Books
router.get('/', getAllBooks);

// Get Book By ID
router.get('/:id', getBookById);

// Update Book
router.put('/:id', updateBook);

// Delete Book
router.delete('/:id', deleteBook);

module.exports = router;