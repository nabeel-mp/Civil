import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// Route imports
import authRoutes from './routes/authRoutes.js';
import workRoutes from './routes/workRoutes.js';
import clientRoutes from './routes/clientRoutes.js';

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to accept JSON data in the body

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/works', workRoutes);
app.use('/api/clients', clientRoutes);

// Base route test
app.get('/', (req, res) => {
  res.send('Civil Portfolio Backend API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});