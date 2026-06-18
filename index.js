const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
dotenv.config();

const connectDB = require('./config/db');

// Connect Database and start server
(async () => {
  await connectDB();
  
  const authRoutes = require('./routes/authRoutes');
  
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/books', bookRoutes);
  // Home Route
  app.get('/', (req, res) => {
    res.json({
      message: 'Book Management System API Running',
    });
  });

  // Server
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();