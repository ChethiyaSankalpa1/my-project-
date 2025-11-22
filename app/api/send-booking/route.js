import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const bookingData = await request.json();
    
    const { name, email, phone, travelDate, travelers, packageType, vehicleType, message, pickupLocation } = bookingData;

    // Validate required fields
    if (!name || !email || !phone || !travelDate || !travelers || !pickupLocation) {
      return NextResponse.json({
        success: false,
        message: 'Please fill in all required fields'
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: false,
        message: 'Please provide a valid email address'
      }, { status: 400 });
    }

    // Validate phone format (basic validation)
    if (phone.length < 8) {
      return NextResponse.json({
        success: false,
        message: 'Please provide a valid phone number'
      }, { status: 400 });
    }

    // Validate number of travelers
    if (travelers < 1) {
      return NextResponse.json({
        success: false,
        message: 'Number of travelers must be at least 1'
      }, { status: 400 });
    }

    // Admin email content
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;">
        <h2 style="color: #ff6600; border-bottom: 3px solid #ff6600; padding-bottom: 10px;">New Booking Received!</h2>
        <p style="font-size: 16px; color: #333;">You have received a new booking request.</p>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Customer Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td>
              <td style="padding: 8px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #333;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Travel Date:</td>
              <td style="padding: 8px 0; color: #333;">${travelDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Number of Travelers:</td>
              <td style="padding: 8px 0; color: #333;">${travelers}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Package:</td>
              <td style="padding: 8px 0; color: #333;">${packageType || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Vehicle Type:</td>
              <td style="padding: 8px 0; color: #333;">${vehicleType || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Pickup Location:</td>
              <td style="padding: 8px 0; color: #333;">${pickupLocation}</td>
            </tr>
            ${message ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Special Requests:</td><td style="padding: 8px 0; color: #333;">${message}</td></tr>` : ''}
          </table>
        </div>
        
        <p style="color: #666; font-size: 14px; margin-top: 20px;">Please respond to the customer as soon as possible.</p>
      </div>
    `;

    // Customer email content
    const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #ff6600; margin: 0;">J TOURS</h1>
          <p style="color: #666; margin: 5px 0;">Explore Sri Lanka</p>
        </div>
        
        <h2 style="color: #333; border-bottom: 3px solid #ff6600; padding-bottom: 10px;">Thank You for Joining Us!</h2>
        <p style="font-size: 16px; color: #333;">Dear ${name},</p>
        <p style="font-size: 16px; color: #333;">Thank you for choosing J Tours for your Sri Lanka adventure! We have received your booking request.</p>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Your Booking Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td>
              <td style="padding: 8px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #333;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Travel Date:</td>
              <td style="padding: 8px 0; color: #333;">${travelDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Number of Travelers:</td>
              <td style="padding: 8px 0; color: #333;">${travelers}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Package:</td>
              <td style="padding: 8px 0; color: #333;">${packageType || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Vehicle Type:</td>
              <td style="padding: 8px 0; color: #333;">${vehicleType || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Pickup Location:</td>
              <td style="padding: 8px 0; color: #333;">${pickupLocation}</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #e8f5e9; padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50; margin: 20px 0;">
          <h3 style="color: #2e7d32; margin-top: 0;">✅ Booking Confirmed!</h3>
          <p style="color: #333; margin: 5px 0;">Your booking request has been received and confirmed. Our team will contact you within 24 hours to finalize the details.</p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Contact Us:</h3>
          <p style="margin: 5px 0; color: #666;">📞 Phone: 0703206081</p>
          <p style="margin: 5px 0; color: #666;">📧 Email: j.tours.rent@gmail.com</p>
          <p style="margin: 5px 0; color: #666;">📱 WhatsApp: +94 703206081</p>
        </div>
        
        <p style="font-size: 14px; color: #666; margin-top: 20px;">We look forward to creating an unforgettable experience for you in beautiful Sri Lanka!</p>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p style="color: #999; font-size: 12px;">© 2024 J Tours. All rights reserved.</p>
          <p style="color: #999; font-size: 12px;">Powered by Gravital Marketing</p>
        </div>
      </div>
    `;

    // Send emails using Nodemailer
    let emailsSent = false;
    let emailError = null;

    // Check if email credentials are configured
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        // Create transporter with enhanced configuration to prevent spam
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD
          },
          secure: true,
          tls: {
            rejectUnauthorized: true
          }
        });

        // Verify transporter configuration
        await transporter.verify();

        // Send admin email
        await transporter.sendMail({
          from: `"J Tours" <${process.env.GMAIL_USER}>`,
          to: 'j.tours.rent@gmail.com',
          replyTo: email,
          subject: '🔔 New Booking Received - J Tours',
          html: adminEmailContent,
          headers: {
            'X-Priority': '1',
            'X-MSMail-Priority': 'High',
            'Importance': 'high'
          }
        });

        // Send customer confirmation email
        await transporter.sendMail({
          from: `"J Tours" <${process.env.GMAIL_USER}>`,
          to: email,
          replyTo: 'j.tours.rent@gmail.com',
          subject: '✅ Booking Confirmation - J Tours',
          html: customerEmailContent,
          headers: {
            'List-Unsubscribe': '<mailto:j.tours.rent@gmail.com?subject=unsubscribe>',
            'X-Auto-Response-Suppress': 'OOF, DR, RN, NRN, AutoReply'
          }
        });

        emailsSent = true;
        console.log('✅ Emails sent successfully!');
      } catch (error) {
        emailError = error.message;
        console.error('❌ Email sending failed:', error);
      }
    } else {
      emailError = 'Email credentials not configured. Please set up .env.local file.';
      console.warn('⚠️ Email not sent: Missing GMAIL_USER or GMAIL_APP_PASSWORD in .env.local');
    }

    return NextResponse.json({
      success: true,
      message: 'Booking received successfully',
      emailsSent,
      emailError,
      emails: {
        admin: {
          to: 'j.tours.rent@gmail.com',
          subject: 'New Booking Received - J Tours',
          preview: `New booking from ${name} for ${packageType || 'package'}`
        },
        customer: {
          to: email,
          subject: 'Booking Confirmation - J Tours',
          preview: 'Thank you for your booking with J Tours'
        }
      }
    });

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to process booking'
    }, { status: 500 });
  }
}
