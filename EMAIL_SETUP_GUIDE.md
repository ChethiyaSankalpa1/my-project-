# Email Notification System - Setup Guide

## Overview
Your tour booking website now has a complete email notification system that sends:
1. **Confirmation email** to customers from j.tours.rent@gmail.com
2. **Booking details** to admin with all submitted information

## Features ✨
- ✅ Automatic email delivery using NodeMailer
- ✅ Professional HTML email templates
- ✅ Form validation (frontend & backend)
- ✅ Loading states and error handling
- ✅ Spam prevention configuration
- ✅ Reply-to headers for easy customer response
- ✅ All booking fields included (name, email, phone, date, travelers, package, vehicle, pickup location, notes)

## Setup Instructions

### Step 1: Create Gmail App Password

1. **Go to your Google Account**: https://myaccount.google.com/
2. **Enable 2-Factor Authentication** (if not already enabled):
   - Go to Security → 2-Step Verification
   - Follow the prompts to enable it

3. **Create an App Password**:
   - Go to Security → 2-Step Verification → App passwords
   - Or directly visit: https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select "Other" as the device and name it "Tour Booking Website"
   - Click "Generate"
   - **Copy the 16-character password** (you won't see it again)

### Step 2: Create Environment File

1. In your project root folder (`Dream-tour`), create a file named `.env.local`

2. Add the following content to `.env.local`:

```env
# Gmail Configuration for Email Notifications
GMAIL_USER=j.tours.rent@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
```

3. Replace `your_16_character_app_password_here` with the app password you generated in Step 1

**Important**: The `.env.local` file is already in `.gitignore`, so it won't be committed to version control (this keeps your password secure).

### Step 3: Test the System

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to the booking form** on your website

3. **Submit a test booking** with valid information

4. **Check for**:
   - Loading spinner appears during submission
   - Success message appears after submission
   - Customer receives confirmation email
   - Admin receives booking details email at j.tours.rent@gmail.com

## Email Templates

### Customer Confirmation Email
- **Subject**: ✅ Booking Confirmation - J Tours
- **From**: J Tours <j.tours.rent@gmail.com>
- **Content**: 
  - Thank you message
  - Booking details summary
  - Contact information
  - Professional branding

### Admin Notification Email
- **Subject**: 🔔 New Booking Received - J Tours
- **From**: J Tours <j.tours.rent@gmail.com>
- **Reply-To**: Customer's email (for easy response)
- **Priority**: High
- **Content**: 
  - Complete customer details
  - All booking information
  - Special requests (if any)

## Spam Prevention Features

The system includes several anti-spam measures:

1. **Secure Connection**: Uses TLS encryption
2. **Proper Headers**: Includes List-Unsubscribe and other standard headers
3. **Professional Formatting**: Clean HTML templates
4. **Sender Verification**: Uses verified Gmail account
5. **Reply-To Headers**: Configured for legitimate two-way communication

## Troubleshooting

### Emails Not Sending?

**Check 1**: Verify `.env.local` file exists and contains correct credentials
```bash
# In Dream-tour folder, check if file exists
ls .env.local
```

**Check 2**: Ensure Gmail App Password is correct (16 characters, no spaces)

**Check 3**: Check console logs in terminal for error messages

**Check 4**: Verify Gmail account has:
- 2-Factor Authentication enabled
- App passwords feature available
- Not blocked by Google security

### Emails Going to Spam?

**Solution 1**: Ask customers to add j.tours.rent@gmail.com to their contacts

**Solution 2**: In Gmail settings:
- Go to Settings → Filters and Blocked Addresses
- Create filter for "from:j.tours.rent@gmail.com"
- Mark as "Never send to Spam"

**Solution 3**: For professional setup, consider:
- Setting up custom domain email (e.g., booking@yourdomain.com)
- Using SendGrid, AWS SES, or similar service for higher deliverability

### Form Validation Errors?

The system validates:
- ✅ All required fields (name, email, phone, date, travelers, pickup location)
- ✅ Email format
- ✅ Phone number (minimum 8 characters)
- ✅ Number of travelers (minimum 1)

If validation fails, users see a clear error message above the form.

## API Route Details

**Endpoint**: `/api/send-booking`
**Method**: POST
**Content-Type**: application/json

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+94 123 456 789",
  "travelDate": "2024-12-25",
  "travelers": "2",
  "packageType": "7d6n",
  "vehicleType": "van",
  "pickupLocation": "Colombo",
  "message": "Optional special requests"
}
```

**Success Response** (200):
```json
{
  "success": true,
  "message": "Booking received successfully",
  "emailsSent": true,
  "emailError": null,
  "emails": {
    "admin": {
      "to": "j.tours.rent@gmail.com",
      "subject": "New Booking Received - J Tours",
      "preview": "New booking from John Doe for 7d6n"
    },
    "customer": {
      "to": "john@example.com",
      "subject": "Booking Confirmation - J Tours",
      "preview": "Thank you for your booking with J Tours"
    }
  }
}
```

**Error Response** (400/500):
```json
{
  "success": false,
  "message": "Error description"
}
```

## Security Best Practices

1. ✅ **Never commit `.env.local`** to version control
2. ✅ **Use App Passwords** instead of your actual Gmail password
3. ✅ **Enable 2FA** on your Gmail account
4. ✅ **Validate all inputs** (already implemented)
5. ✅ **Use HTTPS** in production
6. ✅ **Rate limiting** - Consider adding if you get spam submissions

## Production Deployment

When deploying to production (Netlify, Vercel, etc.):

1. **Add environment variables** in your hosting platform:
   - Go to Site Settings → Environment Variables
   - Add `GMAIL_USER` and `GMAIL_APP_PASSWORD`

2. **Verify emails work** after deployment

3. **Monitor email delivery** for the first few bookings

## Alternative Email Services (Optional)

If you need higher email deliverability or volume:

### SendGrid (Recommended)
- Free tier: 100 emails/day
- Better deliverability
- Email analytics

### AWS SES
- Very cost-effective
- Scalable
- Requires AWS account

### Firebase Functions + SendGrid
- Serverless
- Automatic scaling
- Good for high traffic

## Support

If you encounter issues:

1. Check the browser console for errors
2. Check the terminal/server logs
3. Verify `.env.local` configuration
4. Test Gmail credentials manually
5. Check Gmail account security settings

## Files Modified/Created

- ✅ `app/api/send-booking/route.js` - API endpoint with validation and email logic
- ✅ `app/components/TourBookingForm.js` - Enhanced form with error handling
- ✅ `EMAIL_SETUP_GUIDE.md` - This guide
- ⚠️ `.env.local` - You need to create this file (see Step 2)

---

**Your email notification system is now ready to use! 🎉**

Just complete the setup steps above and test with a booking submission.
