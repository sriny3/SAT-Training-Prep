# 🚀 Deploy to Vercel - Quick Guide

## **Step 1: Create Vercel Account** (2 minutes)
1. Go to: https://vercel.com/signup
2. Click "Sign up with GitHub" (easiest)
3. Authorize Vercel to access your GitHub

---

## **Step 2: Push Code to GitHub** (5 minutes)

### Option A - Using Git Bash/Command Line:
```bash
cd C:\development\claude\SATPreparation\SAT\ Training\ Prep

# Initialize git if not already done
git init
git add .
git commit -m "SAT Prep Platform - Complete"

# Create GitHub repo at https://github.com/new
# Then:
git remote add origin https://github.com/YOUR_USERNAME/sat-prep-platform.git
git branch -M main
git push -u origin main
```

### Option B - Using GitHub Desktop:
1. Go to: https://github.com/new
2. Create new repository: `sat-prep-platform`
3. Open GitHub Desktop
4. Click "Clone a repository"
5. Select your new repo
6. Drag `SAT Training Prep` folder into GitHub Desktop
7. Commit and push

---

## **Step 3: Deploy to Vercel** (1 minute)

1. Go to: https://vercel.com/new
2. Click "Import Git Repository"
3. Paste: `https://github.com/YOUR_USERNAME/sat-prep-platform`
4. Click "Import"
5. Vercel will auto-detect Vite app ✓
6. Click "Deploy"
7. **Done!** 🎉

---

## **You'll Get:**
- ✅ Live URL: `https://sat-prep-platform.vercel.app`
- ✅ Auto-deploys on every push to main
- ✅ Custom domain support
- ✅ Automatic HTTPS

---

## **Test Your Deployment**
1. Open your Vercel URL
2. Click "Login" → "Beginner"
3. Try a lesson, quiz, or practice test
4. Everything should work! ✨

---

## **Troubleshooting**

**If build fails:**
- Vercel will show build logs
- Usually just needs `npm install` to work
- The `vercel.json` config is already set up

**If page is blank:**
- Check browser console (F12)
- Vercel auto-rewrites SPA routes
- Clear browser cache and hard refresh (Ctrl+Shift+R)

---

## **Next Steps**
- Share your Vercel URL with anyone!
- Connect custom domain (optional)
- Set up auto-deployments from GitHub

**Your app will be live in < 5 minutes!** 🚀
