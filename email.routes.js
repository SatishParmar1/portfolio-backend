const { sendEmail, sendOwnerEmail } = require('./sendEmail');
require('dotenv').config();

const router = require('express').Router();

router.post('/send-email', async (req, res) => {
    console.info('Received request to send email:', req.body);
  const { from, to, body, name, phone, email } = req.body;
  if (!from || !to || !body || !name || !phone || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    // Send to visitor (dark theme)
    await sendEmail({ from, to, body, name, phone, email });
    // Send to owner (light theme)
    await sendOwnerEmail({
      from,
      to: process.env.OWNER_EMAIL, // owner's email from .env
      body: `A new visitor received an email.\n\nVisitor email: Message: ${body}`,
      visitorEmail: to,
      name,
      phone,
      email
    });
    res.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;