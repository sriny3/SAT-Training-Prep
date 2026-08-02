# 🔧 Quick Fix Guide - SAT Prep Platform

## Issue: "vite is not recognized" or "npm run dev" doesn't work

### ⚡ Quickest Fix (Try First)

**Double-click this file:**
```
DIAGNOSE_AND_FIX.bat
```

This will:
1. ✓ Check Node.js/npm installation
2. ✓ Clean and reinstall dependencies
3. ✓ Verify Vite is working
4. ✓ Tell you what to do next

---

## If That Doesn't Work

### Step 1: Verify Node.js is Installed
Open **Command Prompt** and type:
```bash
node --version
npm --version
```

You should see version numbers like:
- `v18.x.x` or higher
- `9.x.x` or higher

**If not:** Download Node.js from https://nodejs.org/

### Step 2: Manual Clean Install
1. Open **Command Prompt**
2. Navigate to project folder:
   ```bash
   cd C:\development\claude\SATPreparation\SAT\ Training\ Prep
   ```
3. Delete old dependencies:
   ```bash
   rmdir /s /q node_modules
   ```
4. Reinstall everything:
   ```bash
   npm install
   ```
5. Start the app:
   ```bash
   npm run dev
   ```

### Step 3: Verify It's Working
You should see in the terminal:
```
VITE vX.X.X ready in XXX ms
  ➜  Local:   http://localhost:5173/
```

### Step 4: Open in Browser
Go to: **http://localhost:5173**

---

## Common Issues & Solutions

### ❌ "npm is not recognized"
**Solution:** Node.js is not installed or not in PATH
- Download: https://nodejs.org/
- Install and restart your terminal

### ❌ "vite is not recognized" (after npm install)
**Solution:** Dependencies didn't install properly
- Run: `npm install` again
- If it still fails, delete node_modules and try again

### ❌ "Cannot find module" error
**Solution:** Run `npm install` again

### ❌ Port 5173 is already in use
**Solution:** 
- Close other apps using port 5173, OR
- Kill the existing process:
  ```bash
  netstat -ano | findstr :5173
  taskkill /PID [PID_NUMBER] /F
  ```

### ❌ Browser won't open
**Solution:** Open manually at http://localhost:5173

### ❌ Still blank page at localhost:5173
**Solution:** 
1. Open DevTools (F12)
2. Look at Console tab for errors
3. Hard refresh: Ctrl+Shift+R
4. Clear browser cache

---

## The Easy Way 🎯

Just **double-click** → `RUN_APP.bat`

This does everything automatically:
- ✓ Checks npm
- ✓ Installs dependencies
- ✓ Starts dev server
- ✓ Opens browser

Done! 🚀

---

## Still Need Help?

**Check these files for more info:**
- `START_HERE.md` - Quick 30-second startup
- `LOCAL_TESTING_GUIDE.md` - What to test
- `PROJECT_REVIEW.md` - Full project overview

---

**Questions?** The app should work at **http://localhost:5173** once the dev server starts.
