# Tayyaba Awan - Personal Portfolio 🚀

A modern, responsive, and animated personal portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## 🌟 Features

✨ **Modern Design**
- Dark mode with blue (#6C63FF), purple (#A855F7), and cyan (#00E5FF) gradients
- Glassmorphism UI effects
- Responsive design (desktop, tablet, mobile)
- Professional layout inspired by Google and Microsoft engineer portfolios

🎨 **Smooth Animations**
- Fade-up animations on scroll
- Typing animation for job titles
- Hover effects and transitions
- Floating particle background
- Button ripple effects
- Card hover glow effects
- Smooth page transitions

📱 **Fully Responsive**
- Desktop, tablet, and mobile optimized
- Mobile-first design approach
- Touch-friendly interface
- Adaptive layouts

📚 **Complete Sections**
- Hero Section with typing animation
- About Me with stats
- Technical Skills by category
- Projects Showcase with GitHub links
- Education & Coursework
- Certifications
- Core Competencies
- Contact Form
- Social Media Links
- Professional Footer

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Tailwind CSS** - Utility-first CSS Framework
- **Framer Motion** - Advanced animation library
- **Lucide React** - Beautiful icon library
- **React Scripts** - Build tooling

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/tayyabaawan731-droid/CV.git
cd CV
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view in browser.

### 4. Build for production
```bash
npm run build
```

### 5. Deploy to GitHub Pages
```bash
npm run deploy
```

## 📁 Project Structure

```
CV/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation bar with mobile menu
│   │   ├── Particles.jsx           # Animated background particles
│   │   ├── AnimatedText.jsx        # Reusable fade animation
│   │   ├── SkillBadge.jsx          # Skill display component
│   │   └── ProjectCard.jsx         # Project card component
│   ├── sections/
│   │   ├── Hero.jsx                # Hero section with typing
│   │   ├── About.jsx               # About me section
│   │   ├── Skills.jsx              # Technical skills
│   │   ├── Projects.jsx            # Projects showcase
│   │   ├── Education.jsx           # Education section
│   │   ├── Certifications.jsx      # Certifications
│   │   ├── Competencies.jsx        # Core competencies
│   │   ├── Contact.jsx             # Contact form
│   │   └── Footer.jsx              # Footer
│   ├── App.jsx                     # Main app component
│   ├── index.js                    # React entry point
│   └── index.css                   # Global styles
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#6C63FF` | Main accent color |
| Secondary | `#00E5FF` | Cyan highlights |
| Accent | `#A855F7` | Purple highlights |
| Background | `#0F172A` | Dark background |
| Glass | `rgba(255,255,255,0.08)` | Glassmorphism effect |

## 📊 Portfolio Content

### Personal Information
- **Name**: Tayyaba Awan
- **Email**: tayyabaawan731@gmail.com
- **Phone**: +92 322 5728731
- **Location**: Pakistan
- **GitHub**: https://github.com/tayyabaawan731-droid

### Education
- **BS Computer Science** - National University of Pakistan (2024-Present)
  - Current CGPA: 3.7/4.0
  - 5th Semester
  - Relevant Coursework: Programming, DBMS, Computer Organization, Digital Logic, Security, Discrete Structures

- **Intermediate in Computer Science** - BISE Rawalpindi (2024)
  - Score: 827/1200

### Technical Skills
- **Programming**: Python, C, C++, Assembly, HTML, CSS
- **Database**: SQL, MySQL, Data Analysis
- **Tools**: Git, GitHub, VS Code, Microsoft Access, Excel, PowerPoint
- **Design & Automation**: Graphics Design, Video Editing, AI Image Generation, n8n, Chatbots

### Projects
1. **Weather Monitoring System** - C++ console application
2. **Online Food Ordering System** - C++ OOP project
3. **Ice Cream Ordering Management** - Microsoft Access database
4. **Blood Donation Website** - HTML/CSS responsive site

### Certifications
- N8N Chatbot Lab (Career Accelerator)
- English for Career Development (MOOC)

## 🚀 Deployment

### GitHub Pages
1. Update `homepage` in `package.json`:
   ```json
   "homepage": "https://tayyabaawan731-droid.github.io/CV"
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import the GitHub repository
4. Click "Deploy"

### Netlify
1. Go to https://netlify.com
2. Click "New site from Git"
3. Connect GitHub
4. Select repository
5. Deploy

## 📱 Live Links

- **GitHub Repository**: https://github.com/tayyabaawan731-droid/CV
- **Live Portfolio**: https://tayyabaawan731-droid.github.io/CV
- **GitHub Profile**: https://github.com/tayyabaawan731-droid

## 💡 Features Showcase

### Animations
- ✅ Typing effect (roles)
- ✅ Fade-up on scroll
- ✅ Hover glow effects
- ✅ Floating particles
- ✅ Smooth transitions
- ✅ Button ripple effects

### Responsive Design
- ✅ Mobile menu toggle
- ✅ Adaptive grid layouts
- ✅ Touch-friendly buttons
- ✅ Optimized images
- ✅ Flexible typography

### Performance
- ✅ Optimized images
- ✅ Lazy loading
- ✅ Code splitting
- ✅ SEO optimized
- ✅ Fast load times

## 🔧 Customization

### Update Personal Info
Edit the information in respective section components:
- `src/sections/Hero.jsx` - Name and tagline
- `src/sections/About.jsx` - About text
- `src/sections/Projects.jsx` - Project links
- `src/sections/Contact.jsx` - Contact information

### Change Colors
Modify `tailwind.config.js`:
```js
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
  accent: '#YOUR_COLOR',
  // ...
}
```

### Add New Sections
Create new files in `src/sections/` and import them in `src/App.jsx`

## 📄 License

MIT License - Feel free to use this portfolio as a template!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- Email: tayyabaawan731@gmail.com
- Phone: +92 322 5728731
- GitHub: https://github.com/tayyabaawan731-droid

---

**Made with ❤️ by Tayyaba Awan**

**Last Updated**: July 2026
