const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// para conectarse a la data base a futuro
//connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
//app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
