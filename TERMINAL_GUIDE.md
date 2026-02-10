# 🚀 Quick Start Terminal Commands for MacBook

## Complete Setup & Deployment in 5 Minutes

### Step 1: Initial Setup (Run these commands in Terminal)

```bash
# Navigate to Desktop (or wherever you want the project)
cd ~/Desktop

# Clone or copy the cyberpath-explorer folder here
# If you have the folder already, skip this and navigate to it:
cd cyberpath-explorer

# Verify all files are present
ls -la
# You should see: index.html, styles.css, app.js, data.js, README.md, etc.
```

---

### Step 2: Test Locally (Optional but Recommended)

```bash
# Start a local web server (Python 3 is pre-installed on macOS)
python3 -m http.server 8000

# Open your browser to: http://localhost:8000
# Press Ctrl+C to stop the server when done testing
```

---

### Step 3: Initialize Git Repository

```bash
# Make sure you're in the project directory
cd cyberpath-explorer

# Initialize git repository
git init

# Add all files to git
git add .

# Commit the files
git commit -m "Initial commit: CyberPath Explorer - Complete cybersecurity career roadmap"

# Rename branch to main (modern standard)
git branch -M main
```

---

### Step 4: Create GitHub Repository

**Before running the next commands, you need to:**

1. Go to [github.com](https://github.com) in your browser
2. Click the "+" icon (top right) → "New repository"
3. Repository name: `cyberpath-explorer`
4. Description: "Complete cybersecurity career roadmap and resource guide"
5. Choose **Public** (or Private)
6. **DO NOT** check "Initialize with README" (we already have one)
7. Click "Create repository"

**GitHub will show you commands - ignore those and use the ones below:**

---

### Step 5: Push to GitHub

```bash
# Add your GitHub repository as remote
# REPLACE 'yourusername' with your actual GitHub username!
git remote add origin https://github.com/yourusername/cyberpath-explorer.git

# Push your code to GitHub
git push -u origin main

# You may be prompted for your GitHub credentials:
# - Username: your GitHub username
# - Password: use a Personal Access Token (not your actual password)
```

---

### 🔑 If You Need a GitHub Personal Access Token:

If git asks for a password and your regular password doesn't work:

1. Go to GitHub.com → Settings (your profile icon)
2. Developer settings (bottom left)
3. Personal access tokens → Tokens (classic)
4. Generate new token (classic)
5. Give it a name: "CyberPath Deployment"
6. Select scopes: `repo` (check all repo boxes)
7. Generate token
8. **COPY IT** (you won't see it again!)
9. Use this token as your "password" when git asks

---

### Step 6: Verify on GitHub

```bash
# Open your repository in browser
# REPLACE 'yourusername' with your actual GitHub username
open https://github.com/yourusername/cyberpath-explorer

# Or just visit it manually in your browser
```

You should see all your files on GitHub! 

---

### Step 7: Deploy to Vercel (Easiest & Free!)

**Option A: Deploy via Vercel Website (Recommended for beginners)**

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account (click "Continue with GitHub")
3. Click "Add New" → "Project"
4. Click "Import" next to your `cyberpath-explorer` repository
5. Click "Deploy" (no configuration needed!)
6. Wait 30 seconds...
7. Done! Your site is live! 🎉

**Option B: Deploy via Vercel CLI (For advanced users)**

```bash
# Install Vercel CLI globally
npm install -g vercel

# If you don't have npm, install it with Homebrew first:
# /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# brew install node

# Login to Vercel
vercel login

# Deploy your project
vercel

# Follow the prompts:
# ? Set up and deploy "~/Desktop/cyberpath-explorer"? [Y/n] y
# ? Which scope do you want to deploy to? [Use your account]
# ? Link to existing project? [y/N] n
# ? What's your project's name? cyberpath-explorer
# ? In which directory is your code located? ./
# ? Want to override the settings? [y/N] n

# Your site is now live!
# Vercel will give you a URL like: https://cyberpath-explorer-abc123.vercel.app
```

---

### 🔄 Making Updates Later

```bash
# After making changes to your files:

# 1. Check what changed
git status

# 2. Add all changes
git add .

# 3. Commit with a message describing what you changed
git commit -m "Updated certifications section with new OSCP pricing"

# 4. Push to GitHub
git push origin main

# If deployed on Vercel/Netlify, they'll automatically redeploy!
```

---

### 🎨 Common Update Commands

```bash
# See your git history
git log --oneline

# Undo last commit (keeps changes)
git reset --soft HEAD~1

# Discard all local changes (BE CAREFUL!)
git reset --hard HEAD

# Create a new feature branch
git checkout -b feature/add-new-certs

# Switch back to main branch
git checkout main

# Merge feature branch into main
git merge feature/add-new-certs

# Delete a branch
git branch -d feature/add-new-certs
```

---

### 🔍 Troubleshooting Commands

```bash
# Check git remote is set correctly
git remote -v
# Should show: origin  https://github.com/yourusername/cyberpath-explorer.git

# If you need to change the remote URL:
git remote set-url origin https://github.com/yourusername/cyberpath-explorer.git

# Force push (use carefully!)
git push -f origin main

# Pull latest changes from GitHub
git pull origin main

# Check git status anytime
git status

# See what's different in files
git diff
```

---

### 📊 Check Your Site Status

```bash
# Open your live Vercel site
open https://your-project-name.vercel.app

# Open your GitHub repository
open https://github.com/yourusername/cyberpath-explorer

# Test locally
python3 -m http.server 8000
open http://localhost:8000
```

---

### 🎯 Complete Fresh Start (If Something Goes Wrong)

If you mess up and want to start over:

```bash
# Navigate to your project
cd ~/Desktop/cyberpath-explorer

# Remove git history
rm -rf .git

# Re-initialize
git init
git add .
git commit -m "Fresh start"
git branch -M main

# Re-add remote (use YOUR username!)
git remote add origin https://github.com/yourusername/cyberpath-explorer.git

# Force push
git push -f origin main
```

---

### 💡 Pro Tips

```bash
# Create a global git alias for common commands
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit

# Now you can use:
git st  # instead of git status
git co main  # instead of git checkout main

# Set your git identity (if not set already)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Always pull before pushing (good practice)
git pull origin main
git push origin main
```

---

### ✅ Success Checklist

After running all commands, verify:

- [ ] All files visible on GitHub
- [ ] Site deploys successfully on Vercel
- [ ] Site loads in browser
- [ ] All sections work (Overview, Education, Skills, etc.)
- [ ] Mobile responsive (test on phone)
- [ ] No console errors (Press F12 in browser)

---

### 🆘 Getting Help

If you get stuck:

```bash
# Check git documentation
git help
git help push
git help commit

# Check what version of git you have
git --version

# Check if Python is installed
python3 --version

# Check if Node/npm is installed (for Vercel CLI)
node --version
npm --version
```

---

### 🎉 You're Done!

Your CyberPath Explorer is now:
- ✅ Version controlled with Git
- ✅ Backed up on GitHub  
- ✅ Live on the internet via Vercel
- ✅ Ready to share with the world!

Share your link on:
- LinkedIn
- Twitter/X with #CyberSecurity #CyberPathExplorer
- Reddit (r/cybersecurity, r/netsec)
- Discord communities

---

**Next Steps:**
- Add Google Analytics
- Create a custom domain
- Share with cybersecurity communities
- Add to your resume/portfolio
- Get feedback and improve!

Good luck with your cybersecurity journey! 🔐🚀
