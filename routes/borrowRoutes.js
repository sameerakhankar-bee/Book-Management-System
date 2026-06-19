const express = require('express');
const router = express.Router();

const {
  createBorrow,
  getAllBorrows,
  getBorrowById,
  updateBorrow,
  deleteBorrow,
} = require('../controllers/borrowController');

router.post('/', createBorrow);
router.get('/', getAllBorrows);
router.get('/:id', getBorrowById);
router.put('/:id', updateBorrow);
router.delete('/:id', deleteBorrow);

module.exports = router;