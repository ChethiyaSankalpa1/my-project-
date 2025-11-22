# ⚠️ Firebase Hosting Limitation

## Problem
Firebase Hosting only supports **static websites** and cannot run Next.js API routes.

Your email notification system uses `/api/send-booking` which requires a server.

## Your Choices:

### ✅ Choice 1: Deploy to Vercel (Keep Email System)
**Recommended** - Your email notifications will work perfectly.

**Steps:**
```bash
cd c:\Users\ACER\Desktop\rent\Dream-tour
npm i -g vercel
vercel login
vercel
```

Add environment variables in Vercel dashboard:
- GMAIL_USER=j.tours.rent@gmail.com
- GMAIL_APP_PASSWORD=nkrwueklbqhhvpgy

Then:
```bash
vercel --prod
```

**Result:** Full website with working email notifications ✅

---

### ❌ Choice 2: Deploy to Firebase (Lose Email System)
If you must use Firebase, you'll need to:

1. Remove the email API route
2. Use a contact form service (like FormSubmit, EmailJS)
3. Or manually collect emails without automation

**This means:**
- ❌ No automatic confirmation emails to customers
- ❌ No automatic booking notifications to admin
- ❌ Manual email sending required

---

## Recommended Solution: Use Vercel

**Why Vercel?**
- ✅ Free for personal projects
- ✅ Supports Next.js API routes perfectly
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Easy environment variable management
- ✅ Your email system works out of the box
- ✅ Deploy in under 2 minutes

**Firebase is great for:** Static sites, mobile apps, authentication
**Vercel is great for:** Next.js apps with API routes (like yours)

---

## Quick Deploy to Vercel Now:

```bash
cd c:\Users\ACER\Desktop\rent\Dream-tour
vercel
```

Follow the prompts, then add your environment variables in the dashboard!
