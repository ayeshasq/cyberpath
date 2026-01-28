# 🚀 Deployment Guide for CyberPath Explorer

This guide will walk you through deploying your CyberPath Explorer locally and on various platforms.

## 📋 Table of Contents
1. [Local Setup on MacBook](#local-setup-on-macbook)
2. [Push to GitHub](#push-to-github)
3. [Deploy to Vercel](#deploy-to-vercel)
4. [Deploy to Netlify](#deploy-to-netlify)
5. [Deploy to GitHub Pages](#deploy-to-github-pages)
6. [Deploy to Streamlit (Alternative)](#deploy-to-streamlit-alternative)

---

## 💻 Local Setup on MacBook

### Step 1: Verify Files

Open Terminal and navigate to your project:

```bash
cd path/to/cyberpath-explorer
ls -la
```

You should see:
```
index.html
styles.css
app.js
data.js
README.md
.gitignore
```

### Step 2: Test Locally

**Option A: Simple HTTP Server (Python)**

```bash
# Navigate to project directory
cd cyberpath-explorer

# Start a local server (Python 3)
python3 -m http.server 8000

# Or if you have Python 2
python -m SimpleHTTPServer 8000
```

Open your browser to: `http://localhost:8000`

**Option B: Using VS Code Live Server**

1. Install VS Code if you don't have it
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

### Step 3: Verify Everything Works

Check each section:
- ✅ Overview loads
- ✅ Education section shows all paths
- ✅ Skills section displays categories
- ✅ Certifications show all levels
- ✅ Labs platforms are listed
- ✅ Career roles are detailed
- ✅ Events section loads

---

## 🐙 Push to GitHub

### Step 1: Initialize Git Repository

```bash
# Navigate to project directory
cd cyberpath-explorer

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: CyberPath Explorer v1.0"

# Set main branch
git branch -M main
```

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "+" → "New repository"
3. Name it: `cyberpath-explorer`
4. Description: "Complete cybersecurity career roadmap and guide"
5. Set to **Public** (or Private if you prefer)
6. **Do NOT** initialize with README (we already have one)
7. Click "Create repository"

### Step 3: Connect and Push

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/cyberpath-explorer.git

# Push to GitHub
git push -u origin main
```

### Step 4: Verify on GitHub

Visit: `https://github.com/YOUR_USERNAME/cyberpath-explorer`

You should see all your files!

---

## ⚡ Deploy to Vercel (RECOMMENDED - Fastest & Easiest)

### Why Vercel?
- ✅ Instant deployment
- ✅ Automatic HTTPS
- ✅ CDN (fast globally)
- ✅ Free custom domain support
- ✅ Zero configuration needed

### Deployment Steps:

**Option A: Deploy via GitHub (Recommended)**

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project**
   - Click "Add New" → "Project"
   - Click "Import Git Repository"
   - Select `cyberpath-explorer` from your repositories
   - Click "Import"

3. **Configure (No changes needed!)**
   - Framework Preset: **Other** (auto-detected)
   - Build Command: Leave empty
   - Output Directory: Leave as default
   - Click **"Deploy"**

4. **Done! 🎉**
   - Your site will be live at: `https://cyberpath-explorer.vercel.app`
   - Or: `https://your-custom-name.vercel.app`

**Option B: Deploy via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Or using yarn
yarn global add vercel

# Navigate to project
cd cyberpath-explorer

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - What's your project's name? cyberpath-explorer
# - In which directory is your code located? ./
# - Want to override settings? No

# Your site is now live!
```

### Custom Domain on Vercel:

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

## 🌐 Deploy to Netlify

### Why Netlify?
- ✅ Easy drag-and-drop deployment
- ✅ Continuous deployment from Git
- ✅ Free SSL
- ✅ Great for static sites

### Deployment Steps:

**Option A: Deploy from GitHub**

1. **Sign up/Login to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Click "GitHub"
   - Select `cyberpath-explorer`

3. **Configure Build Settings**
   - Branch: `main`
   - Build command: (leave empty)
   - Publish directory: (leave empty or `.`)
   - Click **"Deploy site"**

4. **Done! 🎉**
   - Site live at: `https://random-name.netlify.app`
   - Change site name in: Site Settings → Site details → Change site name

**Option B: Drag and Drop (Super Easy!)**

1. Go to [netlify.com](https://netlify.com)
2. Login/Signup
3. Drag your entire `cyberpath-explorer` folder to the drop zone
4. Done! Site is live instantly!

### Custom Domain on Netlify:

1. Site Settings → Domain management
2. Click "Add custom domain"
3. Follow instructions to configure DNS

---

## 📄 Deploy to GitHub Pages

### Steps:

1. **Ensure your code is on GitHub** (see Push to GitHub section above)

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" (top right)
   - Scroll to "Pages" section (left sidebar)
   - Under "Source":
     - Branch: Select `main`
     - Folder: Select `/ (root)`
   - Click "Save"

3. **Wait 2-3 minutes** for deployment

4. **Access your site**
   - URL: `https://YOUR_USERNAME.github.io/cyberpath-explorer`
   - GitHub will show you the URL in the Pages section

### Custom Domain on GitHub Pages:

1. In Settings → Pages → Custom domain
2. Enter your domain: `www.yourdomain.com`
3. Click Save
4. Configure DNS with your domain provider:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or A records pointing to GitHub's IPs

---

## 🐍 Deploy to Streamlit (If You Want to Add Python Features)

**Note**: The current project is pure HTML/CSS/JS and doesn't need Streamlit. However, if you want to add backend features later:

### Convert to Streamlit App:

1. **Install Streamlit**
```bash
pip install streamlit
```

2. **Create `streamlit_app.py`**
```python
import streamlit as st
import streamlit.components.v1 as components

# Set page config
st.set_page_config(
    page_title="CyberPath Explorer",
    page_icon="🔐",
    layout="wide"
)

# Read the HTML file
with open('index.html', 'r') as f:
    html_content = f.read()

# Display
components.html(html_content, height=800, scrolling=True)
```

3. **Deploy to Streamlit Cloud**
   - Go to [share.streamlit.io](https://share.streamlit.io)
   - Connect your GitHub
   - Select your repository
   - Set main file: `streamlit_app.py`
   - Click "Deploy"

---

## 🔧 Troubleshooting

### Issue: Files not showing on GitHub
**Solution**: Make sure you committed and pushed all files
```bash
git add .
git commit -m "Add missing files"
git push origin main
```

### Issue: Site not loading on Vercel/Netlify
**Solution**: 
- Check deployment logs for errors
- Ensure `index.html` is in the root directory
- Verify all file paths are correct (case-sensitive!)

### Issue: Styles not loading
**Solution**: 
- Check browser console for errors (F12)
- Verify CSS file path in `index.html`
- Clear browser cache (Cmd+Shift+R on Mac)

### Issue: GitHub Pages shows 404
**Solution**:
- Wait a few minutes after enabling
- Ensure repository is public (for free GitHub Pages)
- Check branch name is correct in settings

---

## 📊 Monitoring & Analytics

### Add Google Analytics (Optional):

1. Create a Google Analytics account
2. Get your tracking ID
3. Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

---

## 🎯 Quick Command Reference

### Git Commands:
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature-name
```

### Local Server:
```bash
# Python 3
python3 -m http.server 8000

# Access at: http://localhost:8000
```

### Vercel CLI:
```bash
# Deploy
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls
```

---

## ✅ Deployment Checklist

Before deploying, verify:

- [ ] All files are present (index.html, styles.css, app.js, data.js)
- [ ] Site works locally
- [ ] All sections load correctly
- [ ] Images/icons display properly
- [ ] Links work
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] README is updated
- [ ] Git repository is clean
- [ ] Code is committed and pushed

---

## 🌟 Post-Deployment

After successful deployment:

1. **Test on different devices**: Desktop, tablet, mobile
2. **Test on different browsers**: Chrome, Firefox, Safari
3. **Share with friends** for feedback
4. **Add to your resume/portfolio**
5. **Share on social media** with hashtag #CyberPathExplorer
6. **Consider adding**:
   - Contact form
   - Newsletter signup
   - Blog section
   - Resources page

---

## 📞 Need Help?

- Create an issue on GitHub: `https://github.com/YOUR_USERNAME/cyberpath-explorer/issues`
- Check Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Check Netlify docs: [docs.netlify.com](https://docs.netlify.com)

---

**Congratulations! Your CyberPath Explorer is now live! 🎉**
