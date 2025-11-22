# Update Vercel Environment Variable - Step by Step

## The Problem:
Your new Gmail App Password works locally, but Vercel still has the OLD password.

## Solution: Update in Vercel Dashboard

### Step 1: Open Vercel Settings
Click this link: https://vercel.com/chethiyasankalpa456-gmailcoms-projects/dream-tour/settings/environment-variables

### Step 2: Find GMAIL_APP_PASSWORD
Scroll down and find the row that says:
```
GMAIL_APP_PASSWORD    Encrypted    Production, Preview
```

### Step 3: Edit the Variable
1. Click the **3-dot menu (⋮)** on the right side of that row
2. Click **"Edit"**
3. You'll see a popup with the variable details

### Step 4: Update the Value
1. **Clear the old value** (don't worry, it's just dots/encrypted)
2. **Paste the new password:** `moqkvvtmgwhonwoy`
3. **Important:** Make sure only these are checked:
   - ✅ Production
   - ✅ Preview
   - ❌ Development (UNCHECKED)

### Step 5: Save
Click **"Save"** button

### Step 6: Redeploy
The environment variable update won't take effect until you redeploy.

**Option A - Automatic (Recommended):**
Just push any small change to GitHub and it auto-deploys

**Option B - Manual:**
Run this command in terminal:
```bash
cd c:\Users\ACER\Desktop\rent\Dream-tour
vercel --prod
```

### Step 7: Wait for Deployment
Wait about 30-60 seconds for the deployment to complete.

### Step 8: Test
1. Go to: https://dream-tour-p4cbcwtwu-chethiyasankalpa456-gmailcoms-projects.vercel.app/book
2. Fill out the booking form
3. Submit it
4. Check your email!

## Quick Verification:
After redeploying, emails should work. If they don't:
1. Check browser console (F12) for errors
2. Look at the `/api/send-booking` response
3. Share the error message with me

---

## Current Passwords:
- ✅ **Local (.env.local)**: `moqkvvtmgwhonwoy` (WORKING)
- ⚠️ **Vercel**: Needs manual update to `moqkvvtmgwhonwoy`

Once you update Vercel, both will match and emails will work! 🎉
