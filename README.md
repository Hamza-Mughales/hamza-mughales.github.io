<div align="center">

# 🚀 Hamza Mughales - Portfolio Website

[![Live Demo](https://img.shields.io/badge/demo-online-success?style=for-the-badge&logo=github)](https://hamza-mughales.github.io/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**A modern, responsive, and bilingual portfolio website showcasing 6+ years of software engineering expertise**

[View Live Demo](https://hamza-mughales.github.io/) • [Report Bug](https://github.com/Hamza-Mughales/hamza-mughales.github.io/issues) • [Request Feature](https://github.com/Hamza-Mughales/hamza-mughales.github.io/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [SEO Optimization](#-seo-optimization)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

This is a **modern, professional portfolio website** built for Hamza Mughales, a Senior Software Engineer specializing in full-stack development with Laravel and Vue.js. The website features a clean, responsive design with smooth animations, bilingual support (English/Arabic), and comprehensive SEO optimization.

### ✨ Highlights

- 🌐 **Bilingual Support** - Seamless switching between English and Arabic with RTL support
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Performance Optimized** - Fast loading times with lazy loading and optimized assets
- 🎨 **Modern UI/UX** - Clean design with smooth animations and micro-interactions
- 🔍 **SEO Ready** - Comprehensive meta tags, structured data, and semantic HTML
- ♿ **Accessible** - ARIA labels and semantic markup for better accessibility
- 🎭 **Dark Theme** - Eye-friendly dark color scheme with vibrant accents

---

## 🌟 Features

### Core Sections

- **🏠 Hero Section** - Eye-catching introduction with call-to-action buttons
- **👨‍💻 About Me** - Professional summary with statistics and highlights
- **⚡ Skills** - Categorized technical skills (Backend, Frontend, Database & Tools)
- **💼 Portfolio** - Showcase of 9+ projects across various domains
- **📚 Education** - Academic background with visual timeline
- **💼 Experience** - Professional journey with 6 companies (2019-Present)
- **📞 Contact** - Multiple contact methods with social media integration

### Technical Features

- ✅ Smooth scroll navigation
- ✅ Animated hamburger menu
- ✅ Language switcher with localStorage persistence
- ✅ Lazy loading for images
- ✅ Downloadable CV functionality
- ✅ WhatsApp integration
- ✅ Schema.org structured data
- ✅ Open Graph meta tags
- ✅ Twitter Card support
- ✅ Google Fonts integration
- ✅ Custom icon fonts (Themify Icons)

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling with modern features (Grid, Flexbox, Animations) |
| **JavaScript (ES6+)** | Interactive functionality and DOM manipulation |

### Assets & Resources

- **Fonts**: Google Fonts (Preconnected for performance)
- **Icons**: Themify Icons
- **Images**: Optimized portfolio screenshots and company logos

### Development Tools

- **Git** - Version control
- **GitHub Pages** - Hosting and deployment
- **VS Code** - Development environment

---

## 📁 Project Structure

```
hamza-mughales.github.io/
│
├── index.html                 # Main HTML file
│
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   │
│   ├── js/
│   │   ├── main.js           # Core JavaScript functionality
│   │   └── lang.js           # Internationalization (i18n)
│   │
│   ├── imgs/
│   │   ├── mee.png           # Profile picture
│   │   ├── portfolio/        # Project screenshots
│   │   └── experience/       # Company logos
│   │
│   ├── fonts/                # Custom icon fonts
│   │
│   └── cv/                   # Downloadable CV files
│       └── Hamza-CV.pdf
│
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hamza-Mughales/hamza-mughales.github.io.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd hamza-mughales.github.io
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server (recommended)
   python -m http.server 8000
   # OR
   npx serve
   ```

4. **View the website**
   - Open `http://localhost:8000` in your browser

---

## 🎨 Customization

### Updating Personal Information

1. **Edit HTML Content** (`index.html`)
   - Update name, title, and descriptions
   - Modify portfolio projects
   - Update experience timeline
   - Change contact information

2. **Update Translations** (`assets/js/lang.js`)
   - Edit English translations in `translations.en`
   - Edit Arabic translations in `translations.ar`

3. **Replace Images**
   - Profile picture: `assets/imgs/mee.png`
   - Portfolio screenshots: `assets/imgs/portfolio/`
   - Company logos: `assets/imgs/experience/`

4. **Update CV**
   - Replace `assets/cv/Hamza-CV.pdf` with your CV
   - Update both English and Arabic versions

### Styling Customization

Edit `assets/css/style.css` to customize:
- Color scheme
- Typography
- Spacing and layout
- Animations and transitions

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `style.css`
3. Add translations in `lang.js`
4. Update navigation links

---

## 🌐 Deployment

### GitHub Pages (Current Deployment)

The website is automatically deployed via GitHub Pages:

1. **Push changes to main branch**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **GitHub Pages will automatically deploy**
   - Live URL: `https://hamza-mughales.github.io/`

### Alternative Deployment Options

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Custom Server
Upload all files to your web server's public directory via FTP/SFTP.

---

## ⚡ Performance

### Optimization Techniques

- ✅ **Lazy Loading** - Images load only when visible
- ✅ **Preconnect** - DNS prefetching for Google Fonts
- ✅ **Deferred Scripts** - JavaScript loads after HTML parsing
- ✅ **Optimized Images** - Compressed portfolio screenshots
- ✅ **Minification Ready** - CSS and JS can be minified for production
- ✅ **Caching** - Browser caching for static assets

### Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)

---

## 🌍 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| Opera | Latest 2 versions |

**Mobile Browsers**: Fully supported on iOS Safari and Android Chrome

---

## 🔍 SEO Optimization

### Implemented Features

- ✅ **Meta Tags** - Comprehensive title, description, and keywords
- ✅ **Open Graph** - Social media preview optimization
- ✅ **Twitter Cards** - Enhanced Twitter sharing
- ✅ **Schema.org** - Structured data for rich snippets
- ✅ **Semantic HTML** - Proper heading hierarchy and landmarks
- ✅ **Canonical URL** - Prevents duplicate content issues
- ✅ **Alt Text** - All images have descriptive alt attributes
- ✅ **Mobile-Friendly** - Responsive design with viewport meta tag
- ✅ **Fast Loading** - Optimized performance for better rankings

### Structured Data

The website includes JSON-LD structured data for:
- Person schema
- Job title and description
- Contact information
- Social profiles
- Education

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Hamza Mughales** - Senior Software Engineer

- 📧 Email: [hamzawemughales@gmail.com](mailto:hamzawemughales@gmail.com)
- 📱 Phone/WhatsApp: [+967 77 179 6968](https://wa.me/967771796968)
- 💼 LinkedIn: [Hamza Saeed](https://www.linkedin.com/in/hamza-saeed-8a44b7319/)
- 🐙 GitHub: [@Hamza-Mughales](https://github.com/Hamza-Mughales)
- 💬 Telegram: [@Hamza_Mughales](https://t.me/Hamza_Mughales)

**Portfolio**: [https://hamza-mughales.github.io/](https://hamza-mughales.github.io/)

---

<div align="center">

### 🌟 If you like this project, please give it a star! ⭐

**Made with ❤️ by Hamza Mughales**

</div>
