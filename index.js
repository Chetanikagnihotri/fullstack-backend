const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
    origin: '*', // For development, allows requests from any origin. Be cautious in production.
}));
app.use(express.json());

app.post('/api/submit', (req, res) => {
    const { text } = req.body;
    console.log('Received text:', text);
    res.json({ message: `Received: ${text}` });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
