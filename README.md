# 🔐 CyberPath Explorer

> Your Complete Roadmap to a Cybersecurity Career - From Zero to Hero

A comprehensive, interactive web application that guides aspiring cybersecurity professionals through education, skills, certifications, hands-on labs, career paths, and industry events.

![CyberPath Explorer](https://img.shields.io/badge/Cybersecurity-Career%20Guide-00d9ff?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-6c5ce7?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🌟 Features

### 📚 Education Paths
- **Bachelor's Degree** guidance with recommended programs and subjects
- **Master's Degree** specializations and advanced topics
- **Self-Taught/Bootcamp** resources for alternative learning paths
- Pros, cons, and career outcomes for each path

### 🛠️ Skills & Tools
- **Core IT Fundamentals**: Networking, Operating Systems, Programming
- **Security Fundamentals**: Security concepts, Web/Network security
- **Specialized Skills**: Pentesting, Forensics, Malware Analysis, Cloud Security
- **Essential Tools**: Reconnaissance, Scanning, Exploitation, Monitoring
- Learning resources and time estimates for each skill

### 🎓 Certification Roadmap
- **Entry Level**: CompTIA Security+, Network+, (ISC)² CC
- **Intermediate**: CEH, CySA+, SSCP
- **Advanced**: OSCP, CISSP, GPEN
- **Specialist**: GCIH, AWS Security, OSWE, CREST
- Cost, difficulty, and career impact for each certification

### 🧪 Hands-On Practice
- **HackTheBox**: Real-world pentesting machines and CTF challenges
- **TryHackMe**: Structured learning paths for beginners
- **OverTheWire**: Linux fundamentals and command-line mastery
- **PortSwigger Academy**: Web application security (FREE)
- **Blue Team Labs**: Defensive security and SOC skills
- 10+ platforms with detailed comparisons

### 💼 Career Roles
- **12+ Detailed Career Paths** including:
  - SOC Analyst
  - Penetration Tester
  - Security Engineer
  - Incident Responder
  - Security Architect
  - CISO
- Responsibilities, required skills, certifications, and salary ranges
- Career progression roadmaps

### 🏆 Events & CTFs
- **Major CTFs**: DEF CON CTF, Google CTF, PicoCTF, HackTheBox Cyber Apocalypse
- **Conferences**: DEF CON, Black Hat, RSA, BSides
- **Professional Organizations**: OWASP, (ISC)², ISACA, SANS
- Networking opportunities and community resources

## 🚀 Quick Start

### Option 1: Clone and Run Locally

```bash
# Clone the repository
git clone https://github.com/ayeshasq/cyberpath-explorer.git

# Navigate to the project directory
cd cyberpath-explorer

# Open in your browser
open index.html
# or
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Option 2: Deploy to Vercel

1. **Fork this repository** to your GitHub account

2. **Deploy to Vercel** (recommended):
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" (no configuration needed!)
   - Your site will be live at `https://your-project.vercel.app`

### Option 3: Deploy to Netlify

1. **Fork this repository** to your GitHub account

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Click "Deploy" (no configuration needed!)
   - Your site will be live at `https://your-site.netlify.app`

### Option 4: Deploy to GitHub Pages

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/cyberpath-explorer.git
git push -u origin main
```

2. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at `https://yourusername.github.io/cyberpath-explorer`

## 📁 Project Structure

```
cyberpath-explorer/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
├── app.js             # Application logic and navigation
├── data.js            # Comprehensive cybersecurity data
├── README.md          # This file
└── .gitignore        # Git ignore file
```

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #00d9ff;      /* Main accent color */
    --secondary-color: #6c5ce7;    /* Secondary accent */
    --dark-bg: #0a0e27;           /* Background */
    --card-bg: #1a1f3a;           /* Card background */
    /* ... other variables ... */
}
```

### Adding New Content

All content is stored in `data.js`. You can easily add:
- New career roles
- Additional certifications
- More labs and platforms
- Extra CTFs and conferences

Example - Adding a new career role:

```javascript
{
    title: "Cloud Security Architect",
    level: "Senior",
    salary: "$140k-$220k",
    description: "Design and implement cloud security strategies...",
    // ... other fields
}
```

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📱 Responsive Design

Fully responsive design that works beautifully on:
- 💻 Desktop computers
- 📱 Tablets
- 📱 Mobile phones

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit your changes**: `git commit -m 'Add some AmazingFeature'`
4. **Push to the branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

### Ideas for Contributions:
- Add more career roles
- Include additional certifications
- Expand the labs section
- Add video resources
- Create a dark/light mode toggle
- Add internationalization (i18n)
- Include job board integrations

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 Ayesha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- Inspired by the cybersecurity community
- Built for students and aspiring professionals
- Special thanks to all the platforms and organizations making cybersecurity education accessible

## 📞 Contact & Support

- **GitHub**: [@ayeshasq](https://github.com/ayeshasq)
- **Issues**: [Report bugs or request features](https://github.com/ayeshasq/cyberpath-explorer/issues)

## 🗺️ Roadmap

Future enhancements planned:
- [ ] Interactive career path visualizer
- [ ] Progress tracking system
- [ ] Resource bookmarking
- [ ] Community forum integration
- [ ] Job board integration
- [ ] Mentor matching system
- [ ] Video tutorials integration
- [ ] Gamification elements

## 💡 Usage Tips

1. **Start with Overview** to understand the cybersecurity landscape
2. **Choose your Education Path** based on your current situation
3. **Build Skills progressively** from Foundation to Advanced
4. **Practice on Labs** while learning theory
5. **Get Certified** to validate your knowledge
6. **Network at Events** to build professional connections
7. **Target Career Roles** that match your interests and skills

## 🔥 Why Use CyberPath Explorer?

- ✅ **Comprehensive**: Everything you need in one place
- ✅ **Up-to-date**: Current industry standards and trends
- ✅ **Beginner-friendly**: Clear paths for complete beginners
- ✅ **Structured**: Logical progression from basics to advanced
- ✅ **Practical**: Focus on hands-on skills and real-world application
- ✅ **Free**: Open-source and completely free to use

---

**Made with ❤️ for the cybersecurity community**

⭐ **Star this repo** if you find it helpful!
