# Deployment Guide - J Tours Website

## ✅ Current Status
Your website is built and ready to deploy!
- ✅ Development server running at http://localhost:3000
- ✅ Email notification system configured
- ✅ Production build successful
- ✅ API routes enabled

---

## 🚀 Option 1: Deploy to Vercel (RECOMMENDED)

Vercel is the easiest way to deploy Next.js with API routes and email functionality.

### Step 1: Install Vercel CLI
Open a new terminal and run:
```bash
npm i -g vercel
```

### Step 2: Deploy
In your project folder, run:
```bash
vercel
```

### Step 3: Follow the prompts
1. **Set up and deploy**: Press Enter (Yes)
2. **Which scope**: Select your account
3. **Link to existing project?**: N (No)
4. **Project name**: j-tours (or press Enter)
5. **Directory**: Press Enter (.)
6. **Override settings?**: N (No)

### Step 4: Add Environment Variables
After deployment, add your email credentials:

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project (j-tours)
3. Go to **Settings** → **Environment Variables**
4. Add these variables:
   - **Name**: `GMAIL_USER`
     **Value**: `j.tours.rent@gmail.com`
   - **Name**: `GMAIL_APP_PASSWORD`
     **Value**: `nkrwueklbqhhvpgy`
5. Click **Save**

### Step 5: Redeploy
Run this to deploy with environment variables:
```bash
vercel --prod
```

**Done! ✅** Your site will be live at: `https://j-tours.vercel.app` (or your custom domain)

---

## 🔥 Option 2: Deploy to Netlify

Netlify also supports Next.js with API routes.

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login
```bash
netlify login
```

### Step 3: Initialize and Deploy
```bash
netlify init
```

Follow the prompts:
1. Create a new site
2. Select your team
3. Site name: j-tours
4. Build command: `npm run build`
5. Publish directory: `.next`

### Step 4: Add Environment Variables
```bash
netlify env:set GMAIL_USER "j.tours.rent@gmail.com"
netlify env:set GMAIL_APP_PASSWORD "nkrwueklbqhhvpgy"
```

### Step 5: Deploy
```bash
netlify deploy --prod
```

---

## 🌐 Option 3: Deploy via GitHub (Recommended for Teams)

### For Vercel with GitHub:
1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Add environment variables (GMAIL_USER and GMAIL_APP_PASSWORD)
5. Deploy!

### For Netlify with GitHub:
1. Push your code to GitHub
2. Go to https://app.netlify.com/start
3. Connect your repository
4. Add environment variables in Site Settings
5. Deploy!

---

## ⚠️ Important Notes

### Before Deploying:
1. ✅ Make sure `.env.local` is in `.gitignore` (already done)
2. ✅ Never commit your Gmail App Password to GitHub
3. ✅ Add environment variables in your hosting platform

### After Deploying:
1. ✅ Test the booking form on the live site
2. ✅ Check that emails are being sent
3. ✅ Verify emails don't go to spam
4. ✅ Test on mobile devices

### Domain Setup (Optional):
Once deployed, you can:
1. Buy a custom domain (e.g., jtours.lk)
2. Connect it in Vercel/Netlify settings
3. Update your email templates with the new domain

---

## 🧪 Testing After Deployment

1. Visit your live site URL
2. Navigate to the booking page
3. Fill out the form with test data
4. Submit and verify:
   - Loading spinner appears
   - Success message shows
   - Customer receives confirmation email
   - Admin receives booking details at j.tours.rent@gmail.com

---

## 📊 Monitoring

### Check Deployment Logs:
- **Vercel**: https://vercel.com/dashboard → Your Project → Deployments
- **Netlify**: https://app.netlify.com → Your Site → Deploys

### Check Function Logs:
- **Vercel**: Project → Functions → Select function → Logs
- **Netlify**: Site → Functions → send-booking → Logs

---

## 🆘 Troubleshooting

### Build Fails?
- Check that `next.config.mjs` doesn't have `output: 'export'`
- Run `npm install` to ensure all dependencies are installed

### Emails Not Sending in Production?
1. Verify environment variables are set correctly
2. Check function logs for errors
3. Ensure Gmail App Password is correct
4. Check if Gmail account is blocked by Google

### 404 Errors on API Routes?
- Make sure you're deploying to Vercel or Netlify (not static hosting)
- API routes need a server to run

---

## 🎯 Quick Deploy Command

For fastest deployment to Vercel:
```bash
npm i -g vercel && vercel
```

Then add environment variables in the Vercel dashboard and redeploy:
```bash
vercel --prod
```

---

## ✨ Your Site is Ready!

**Current Status:**
- ✅ Development server: http://localhost:3000
- ⏳ Production: Ready to deploy!

**Next Step:** Choose a deployment option above and follow the steps.

**Need Help?** Check the logs in your hosting platform's dashboard.
