const nodemailer = require('nodemailer');
const emailConfig = require('./emailConfig');
const { visitorTemplate, ownerTemplate } = require('./emailTemplates');

// Create a reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport(emailConfig);

async function sendEmail({ from, to, body, name, phone, email, html }) {
  const mailOptions = {
    from,
    to,
    subject: 'Thank you for visiting my portfolio!',
    text: body,
    html: html || visitorTemplate({ subject: 'Thank you for visiting my portfolio!', body, name, phone, to })
  };
  return transporter.sendMail(mailOptions);
}

async function sendOwnerEmail({ from, to, body, visitorEmail, name, phone, email }) {
  const mailOptions = {
    from,
    to,
    subject: `Portfolio Visitor ${name} Notification`,
    text: body,
    html: ownerTemplate({ subject: 'Portfolio Visitor Notification', body, visitorEmail, name, phone, email })
  };
  return transporter.sendMail(mailOptions);
}

module.exports = { sendEmail, sendOwnerEmail };
