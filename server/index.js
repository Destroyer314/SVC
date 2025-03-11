
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client')));

// Serve index.html for all routes for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT} - Access at http://0.0.0.0:${PORT}`);
});
