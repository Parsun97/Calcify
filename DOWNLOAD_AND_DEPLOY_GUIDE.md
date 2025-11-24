# 📥 How to Download, Update & Redeploy Your Project

## The files are currently on Emergent's server. Here's how to get them on your computer!

---

## 🎯 Option 1: Download via GitHub (RECOMMENDED)

This is the best way to manage your project!

### Step 1: Push to GitHub from Emergent

Run these commands in the Emergent terminal:

```bash
cd /app/frontend

# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Calcify Calculator Website"

# Create repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 2: Download to Your Computer

```bash
# On your local computer, open terminal/command prompt
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

cd YOUR_REPO_NAME

# Install dependencies
yarn install
# or
npm install
```

### Step 3: Edit Files Locally

- Open project in VS Code or any editor
- Edit files in `src/` folder
- Test locally: `yarn start`

### Step 4: Push Changes Back to GitHub

```bash
# After editing
git add .
git commit -m "Updated colors and content"
git push
```

### Step 5: Deploy from GitHub to Vercel

**First time setup:**
1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Done! Auto-deploys on every push

**After setup:**
- Just `git push` to GitHub
- Vercel automatically deploys! 🎉

---

## 🎯 Option 2: Download ZIP File

If you don't want to use GitHub:

### From Emergent Terminal:

```bash
# Create a ZIP of the frontend folder
cd /app
tar -czf calcify-project.tar.gz frontend/

# This creates: calcify-project.tar.gz
```

### Download the ZIP:

Unfortunately, you'll need to manually copy files or use a file transfer method provided by Emergent.

**Better alternative:** Use GitHub (Option 1) - it's much easier!

---

## 🎯 Option 3: Deploy Directly from Emergent to Vercel

You can deploy from Emergent without downloading!

### Step 1: Install Vercel CLI on Emergent

```bash
cd /app/frontend
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
# Follow the prompts - it will open browser for authentication
```

### Step 3: Deploy

```bash
vercel --prod
```

### Step 4: To Update Later

If you make changes in Emergent, just run:
```bash
cd /app/frontend
vercel --prod
```

**Limitation:** You'll need to edit files on Emergent each time, which is not convenient for long-term development.

---

## 📝 RECOMMENDED WORKFLOW

Here's the BEST way to work with your project:

### One-Time Setup (Do Once):

1. **On Emergent Server:**
   ```bash
   cd /app/frontend
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository:**
   - Go to https://github.com
   - Click "New Repository"
   - Name it: `calcify-calculator`
   - Don't initialize with README
   - Copy the repository URL

3. **Push from Emergent to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/calcify-calculator.git
   git push -u origin main
   ```

4. **Clone to Your Computer:**
   ```bash
   # On your local machine
   git clone https://github.com/YOUR_USERNAME/calcify-calculator.git
   cd calcify-calculator
   yarn install
   ```

5. **Connect to Vercel:**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Click Deploy

### Daily Workflow (Ongoing):

1. **Edit on Your Computer:**
   - Open project in VS Code
   - Edit any file you want
   - Test: `yarn start` (opens http://localhost:3000)

2. **Save Changes to GitHub:**
   ```bash
   git add .
   git commit -m "Updated homepage colors"
   git push
   ```

3. **Vercel Auto-Deploys:**
   - Vercel sees your GitHub push
   - Automatically builds and deploys
   - Your site updates in ~2 minutes!

---

## 🖥️ How to Edit Files on Your Computer

### Tools You Need:

1. **Code Editor** (choose one):
   - VS Code (recommended) - https://code.visualstudio.com
   - Sublime Text
   - Atom
   - Even Notepad++ works!

2. **Terminal/Command Prompt:**
   - Mac: Terminal (built-in)
   - Windows: Command Prompt or PowerShell
   - Or use VS Code's integrated terminal

3. **Node.js & Yarn:**
   ```bash
   # Install Node.js from: https://nodejs.org
   # Then install Yarn:
   npm install -g yarn
   ```

### Editing Process:

1. **Open in VS Code:**
   ```bash
   cd calcify-calculator
   code .
   # This opens VS Code
   ```

2. **Navigate to files:**
   ```
   calcify-calculator/
   ├── src/
   │   ├── App.css          ← Edit colors here
   │   ├── pages/
   │   │   ├── HomePage.jsx ← Edit homepage here
   │   │   └── ...
   ```

3. **Make changes and save** (Ctrl+S / Cmd+S)

4. **Test locally:**
   ```bash
   yarn start
   ```
   Opens http://localhost:3000

5. **If looks good, push to GitHub:**
   ```bash
   git add .
   git commit -m "Changed color to green"
   git push
   ```

6. **Vercel deploys automatically!**

---

## 🔄 Complete Update & Redeploy Process

### Scenario: You want to change the website name from "Calcify" to "MyCalc"

**Step 1: Edit locally**
```bash
# On your computer
cd calcify-calculator
code .  # Opens VS Code
```

**Step 2: Find and edit the file**
- Open `src/pages/HomePage.jsx`
- Find line 53: `<span className="gradient-text logo-text">Calcify</span>`
- Change to: `<span className="gradient-text logo-text">MyCalc</span>`
- Save file (Ctrl+S)

**Step 3: Test**
```bash
yarn start
# Check http://localhost:3000
# See if "MyCalc" appears
```

**Step 4: Push to GitHub**
```bash
git add .
git commit -m "Changed website name to MyCalc"
git push
```

**Step 5: Automatic Deployment**
- Vercel sees your push
- Builds your project
- Deploys automatically
- Visit your Vercel URL to see changes!

**That's it!** 🎉

---

## 📋 Quick Commands Cheat Sheet

```bash
# DOWNLOAD PROJECT (First time)
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
yarn install

# TEST LOCALLY
yarn start
# Visit: http://localhost:3000

# SAVE CHANGES
git add .
git commit -m "Description of changes"
git push

# BUILD FOR PRODUCTION (Optional - Vercel does this)
yarn build

# DEPLOY MANUALLY (If not using GitHub auto-deploy)
cd /path/to/project
vercel --prod
```

---

## 🆘 Common Issues & Solutions

### Issue: "git command not found"
**Solution:** Install Git
- Windows: https://git-scm.com/download/win
- Mac: `xcode-select --install`

### Issue: "yarn command not found"
**Solution:** Install Yarn
```bash
npm install -g yarn
```

### Issue: "Cannot find module"
**Solution:** Install dependencies
```bash
yarn install
```

### Issue: "Port 3000 already in use"
**Solution:** 
```bash
# Kill the process on port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill -9
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

### Issue: "Build failed"
**Solution:** Check error message
- Usually a typo in code
- Fix the file mentioned in error
- Push again

---

## 📁 Where Are Files After Download?

After cloning from GitHub, your files are in:

```
calcify-calculator/          ← Your project folder
├── public/
│   └── index.html          ← SEO tags
├── src/
│   ├── App.js              ← Routes
│   ├── App.css             ← Colors & styles
│   ├── components/
│   ├── pages/              ← 16 pages here
│   │   ├── HomePage.jsx
│   │   ├── BMICalculator.jsx
│   │   └── ...
│   └── styles/
├── package.json
└── README.md
```

**Edit any file in `src/` folder!**

---

## 🎯 Summary: Complete Process

1. ✅ **Push to GitHub** (from Emergent)
2. ✅ **Clone to your computer** (download)
3. ✅ **Install dependencies** (`yarn install`)
4. ✅ **Connect Vercel to GitHub** (one-time setup)
5. ✅ **Edit files locally** (VS Code)
6. ✅ **Test** (`yarn start`)
7. ✅ **Push changes** (`git push`)
8. ✅ **Vercel auto-deploys** (automatic!)

**After initial setup, you just:**
- Edit → Test → Push → Auto-deploy! 🚀

---

## 📧 Need Help?

Common questions:
- How to use VS Code: https://code.visualstudio.com/docs
- Git basics: https://try.github.io
- Vercel docs: https://vercel.com/docs

---

**You now have a complete workflow to manage your calculator website!** 🎉
