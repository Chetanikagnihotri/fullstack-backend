const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Correct usage of CORS
app.use(bodyParser.json());

// Route to handle POST request
app.post('/api/submit', (req, res) => {
  const text = req.body.text;
  console.log(`Received text: ${text}`);

  // Respond back with a message
  res.json({ message: `Text '${text}' received successfully!` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
