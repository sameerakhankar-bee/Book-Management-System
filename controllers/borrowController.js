const Borrow = require('../models/Borrow');

// Create Borrow
exports.createBorrow = async (req, res) => {
  try {
    const borrow = await Borrow.create(req.body);

    res.status(201).json({
      success: true,
      borrow,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Borrows
exports.getAllBorrows = async (req, res) => {
  try {
    const borrows = await Borrow.find();

    res.status(200).json({
      success: true,
      count: borrows.length,
      borrows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Borrow By ID
exports.getBorrowById = async (req, res) => {
  try {
    const borrow = await Borrow.findById(req.params.id);

    if (!borrow) {
      return res.status(404).json({
        success: false,
        message: 'Borrow not found',
      });
    }

    res.status(200).json({
      success: true,
      borrow,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Borrow
exports.updateBorrow = async (req, res) => {
  try {
    const borrow = await Borrow.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!borrow) {
      return res.status(404).json({
        success: false,
        message: 'Borrow not found',
      });
    }

    res.status(200).json({
      success: true,
      borrow,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Borrow
exports.deleteBorrow = async (req, res) => {
  try {
    const borrow = await Borrow.findByIdAndDelete(req.params.id);

    if (!borrow) {
      return res.status(404).json({
        success: false,
        message: 'Borrow not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Borrow deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};