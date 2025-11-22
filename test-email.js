// Quick test to verify Gmail credentials locally
// Run with: node test-email.js

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('GMAIL_USER:', process.env.GMAIL_USER);
  console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? '***' + process.env.GMAIL_APP_PASSWORD.slice(-4) : 'NOT SET');

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    console.log('\nVerifying transporter...');
    await transporter.verify();
    console.log('✅ Transporter verified successfully!');

    console.log('\nSending test email...');
    const info = await transporter.sendMail({
      from: `"J Tours Test" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: 'Test Email - J Tours',
      text: 'This is a test email to verify the email system is working.',
      html: '<b>This is a test email to verify the email system is working.</b>'
    });

    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('\nCheck your inbox at:', process.env.GMAIL_USER);
  } catch (error) {
    console.error('❌ Email test failed:');
    console.error('Error:', error.message);
    
    if (error.message.includes('Invalid login')) {
      console.error('\n🔍 Possible causes:');
      console.error('1. Gmail App Password is incorrect');
      console.error('2. 2-Factor Authentication not enabled');
      console.error('3. App Password was regenerated/deleted');
      console.error('\nSolution: Generate a new App Password at:');
      console.error('https://myaccount.google.com/apppasswords');
    }
  }
}

testEmail();
