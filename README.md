# OM VIVEK MALLIKANTI - Personal Portfolio

A modern, responsive personal portfolio website for OM VIVEK MALLIKANTI, an AI & ML Student and aspiring Software Developer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with colorful but minimal aesthetics
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Smooth Animations**: Scroll-reveal animations and micro-interactions
- **Interactive Elements**: Hover effects, animated project cards, and smooth scrolling
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Intersection Observer**: React Intersection Observer

## � About Me

Motivated B.Tech student specializing in Artificial Intelligence and Machine Learning with strong Python, data science, and machine learning skills. Hands-on experience through internships and projects in data preprocessing, feature engineering, and model development, seeking entry-level role to build practical AI solutions.

## �📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Certificates.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in `dist` directory.

## 📱 Sections

1. **Hero Section**: Profile photo, introduction, and CTA buttons
2. **About Me**: Personal bio and interests
3. **Skills**: Categorized technical skills with progress bars
4. **Projects**: Featured projects with filtering and animations
5. **Education**: Academic background and achievements
6. **Certificates & Internships**: Professional certifications and work experience
7. **Contact**: Contact form and social links

## 🎨 Customization

### Personal Information

Update following files with your personal information:

- **Hero.jsx**: Update name, title, and introduction
- **About.jsx**: Update personal bio and interests
- **Skills.jsx**: Update technical skills and proficiency levels
- **Projects.jsx**: Update project details and links
- **Education.jsx**: Update educational background
- **Certificates.jsx**: Update certifications and internships
- **Contact.jsx**: Update contact information

### Styling

The project uses Tailwind CSS with custom color schemes. You can customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your primary colors */ },
      secondary: { /* your secondary colors */ },
      accent: { /* your accent colors */ }
    }
  }
}
```

## 🚀 Deployment

### GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

2. Build project:
```bash
npm run build
```

3. Deploy to `dist` folder to GitHub Pages

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy your site

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📧 Contact

- Email: omvivek0506@gmail.com
- Phone: +91 63019 27332
- Location: Hyderabad, India
- GitHub: https://github.com
- LinkedIn: https://linkedin.com

## 📄 License

This project is licensed under MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

---

Made with ❤️ by OM VIVEK MALLIKANTI
