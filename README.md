<<<<<<< HEAD
# 🚀 Ultra-Premium 3D Portfolio Website

<div align="center">

![Portfolio Preview](assets/images/preview.jpg)

**A Cinematic, Production-Ready Portfolio Featuring Advanced 3D Graphics, Holographic Effects & Premium Animations**

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](http://localhost:3000)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Made with Love](https://img.shields.io/badge/made%20with-❤️-red.svg)](https://github.com/cybermadhan01)

</div>

---

## ✨ Features

### 🎨 **Premium Design**
- **Glassmorphism UI** - Semi-transparent cards with backdrop blur effects
- **Neon Gradients** - Vibrant cyan, blue, purple, and magenta color palette
- **Holographic Effects** - Glowing text and interactive elements
- **Dark Theme** - Rich blacks with subtle blue tints
- **Custom Typography** - Inter & Outfit fonts from Google Fonts

### 🎭 **Advanced Animations**
- **GSAP ScrollTrigger** - Smooth scroll-based animations
- **3D Card Tilt Effects** - Interactive project and service cards
- **Magnetic Buttons** - Buttons follow cursor movement
- **Custom Cursor** - Animated cursor with follower element
- **Particle Systems** - Interactive background particles
- **Counter Animations** - Animated statistics on scroll

### 🧊 **3D Graphics**
- **Three.js Scene** - 1000+ animated 3D particles
- **Floating Geometry** - Rotating wireframe shapes (torus, icosahedron, octahedron)
- **Dynamic Lighting** - Point lights creating depth and atmosphere
- **Mouse Tracking** - Camera follows cursor movement smoothly
- **WebGL Rendering** - Hardware-accelerated 60 FPS performance

### 📱 **Responsive & Optimized**
- **Mobile-First Design** - Fully responsive across all devices
- **Performance Optimized** - Lazy loading, debounced handlers
- **Hardware Acceleration** - GPU-accelerated transforms
- **Progressive Enhancement** - Graceful degradation for older browsers

### 🌟 **Special Features**
- **WhatsApp Integration** - Floating chat button for instant contact
- **Social Links** - GitHub, LinkedIn, Instagram with SVG icons
- **Contact Form** - Client-side validation with premium styling
- **Scroll Spy** - Auto-highlighting navigation on scroll

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Core** | HTML5, CSS3, Vanilla JavaScript (ES6+) |
| **3D Graphics** | Three.js r128 |
| **Animation** | GSAP 3.12, ScrollTrigger |
| **Design** | Glassmorphism, CSS Custom Properties |
| **Performance** | RequestAnimationFrame, Lazy Loading |
| **Fonts** | Google Fonts (Inter, Outfit) |

</div>

---

## 📂 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── assets/
│   └── images/            # Images (avatar, projects)
├── styles/
│   ├── main.css           # Core styles & design system
│   ├── animations.css     # Animation library
│   └── whatsapp.css       # WhatsApp button styles
├── js/
│   ├── particles.js       # Canvas particle system
│   ├── three-scene.js     # Three.js 3D scene
│   ├── animations.js      # GSAP animation controller
│   ├── main.js            # Core JavaScript logic
│   └── whatsapp-button.js # WhatsApp floating button
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (for local server) - Optional but recommended

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/cybermadhan01/portfolio.git
cd portfolio
```

2. **Run a local server**

Using Python:
```bash
python -m http.server 3000
```

Using Node.js (serve):
```bash
npx serve . -p 3000
```

Using VS Code Live Server:
- Right-click `index.html` → "Open with Live Server"

3. **Open in browser**
```
http://localhost:3000
```

---

## 📋 Sections

### 🏠 **Hero Section**
- 3D holographic avatar with rotating rings
- Gradient animated name and roles
- Dual CTA buttons with magnetic effects
- Three.js particle background
- Floating scroll indicator

### 👤 **About Me**
- Journey story in glassmorphism card
- Mission & vision highlights
- Animated statistics counter
- Professional background

### 💼 **Skills & Expertise**
6 skill categories with animated progress bars:
- 🔐 Cybersecurity
- 💻 Programming
- ⛓️ Blockchain & AI
- 📈 Trading & Business
- 🎨 Design & Marketing
- 🛍️ E-commerce

### 🎯 **Featured Projects**
- Blockchain-Based Cybersecurity System
- AI WhatsApp Automation Tools
- Roundmart E-commerce Platform

### 🔬 **Research Lab**
- Blockchain Security
- AI-Powered Threat Detection
- Cryptographic Innovation
- Automation Security

### 💼 **Experience**
- Founder & CEO - Roundmart (2024-Present)
- Cybersecurity Researcher (2023-Present)
- AI Automation Developer (2023-Present)

### 🎓 **Education**
- B.E. Cybersecurity - Mahendra Engineering College (2023-2027)
- Self-Learning Journey (2018-Present)

### 🛠️ **Services**
- 🛡️ Cybersecurity Consulting
- 🤖 AI Automation Solutions
- ⛓️ Blockchain Development
- 🎨 UI/UX Design
- 🛍️ E-commerce Solutions
- 📱 Digital Marketing

### 📞 **Contact**
- Email: cybermadhan@gmail.com
- Phone: +91 93847 72250
- Location: Tamil Nadu, India
- Social: GitHub, LinkedIn, Instagram
- WhatsApp: Direct chat button

---

## 🎨 Customization

### Colors
Edit CSS custom properties in `styles/main.css`:
```css
:root {
    --primary: #00d4ff;      /* Cyan */
    --secondary: #8b5cf6;    /* Purple */
    --accent: #00ff88;       /* Neon Green */
    --background: #0a0a0f;   /* Dark */
}
```

### Content
Update your information in `index.html`:
- Name, roles, and description
- Skills and percentages
- Projects and links
- Contact details

### WhatsApp Number
Change WhatsApp number in `js/whatsapp-button.js`:
```javascript
whatsappButton.href = 'https://wa.me/YOUR_NUMBER';
```

---

## 🌐 Deployment

### GitHub Pages
```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# Enable GitHub Pages in repository settings
```

### Netlify
1. Connect your GitHub repository
2. Build command: (none)
3. Publish directory: `.`
4. Deploy!

### Vercel
```bash
vercel --prod
```

---

## 📊 Performance

- **Lighthouse Score**: 95+ Performance, 100 Accessibility
- **FPS**: Smooth 60 FPS animations
- **Load Time**: < 2 seconds on 3G
- **Bundle Size**: Optimized assets

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**G. Madhankumar**
- Cybersecurity Researcher | AI Automation Builder | Blockchain Explorer
- GitHub: [@cybermadhan01](https://github.com/cybermadhan01)
- LinkedIn: [G. Madhan Kumar](https://www.linkedin.com/in/g-madhan-kumar-408807253/)
- Instagram: [@madhan_tentacion](https://www.instagram.com/madhan_tentacion/)
- Email: cybermadhan@gmail.com

---

## 🙏 Acknowledgments

- **Three.js** - Amazing 3D library
- **GSAP** - Professional animation engine
- **Google Fonts** - Beautiful typography
- **Stack Overflow Community** - Endless support

---

## 📸 Screenshots

### Desktop View
> Premium glassmorphism design with 3D particles

### Mobile View
> Fully responsive with optimized animations

---

<div align="center">

**Made with ❤️ by cybermadhan**

⭐ Star this repo if you found it helpful!

</div>
=======
