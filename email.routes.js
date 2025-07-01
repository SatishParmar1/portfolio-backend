const { sendEmail, sendOwnerEmail } = require('./sendEmail');

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
      to: 'satishparmarparmar486@gmail.com', // your email
      body: `A new visitor received an email.\n\nVisitor email: ${to}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage: ${body}`,
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