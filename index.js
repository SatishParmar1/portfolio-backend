// index.js
const express = require('express');
const cors = require('cors');
const sendEmail = require('./sendEmail');
const app = express();
const PORT = process.env.PORT || 3000;
const emailRoutes = require('./email.routes');

app.use(cors({
  origin: '*', // Allow all origins for simplicity, adjust as needed
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Render + GitHub!');
});

app.post('/send-email', emailRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
