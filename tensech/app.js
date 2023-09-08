// app.js

const express = require('express');
const mongoose = require('mongoose');
const pantryRoutes = require('./routes/pantry');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware setup (body parser, CORS, etc.)

// Use pantry routes
app.use('/api/pantry', pantryRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
