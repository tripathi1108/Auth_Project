const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors package
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  credentials: true, // Allow cookies and credentials
}));

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Protected route example
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));