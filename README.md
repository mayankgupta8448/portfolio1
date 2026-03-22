# Mayank Gupta - Developer Portfolio

A sleek, premium, highly responsive developer portfolio built with modern web technologies. This project is configured to be automatically deployed to GitHub Pages via GitHub Actions.

## 🚀 Live Demo
[https://mayankgupta8448.github.io/portfolio1](https://mayankgupta8448.github.io/portfolio1)

## ✨ Features
- **Hyper-Modern UI**: Glassmorphism, deep dark mode (Zinc/Indigo scheme), animated borders.
- **Responsive Layout**: Adjusts beautifully from mobile to ultra-wide desktop monitors.
- **Framer Motion**: Smooth page loads, scroll animations, and satisfying hover states.
- **Dark/Light Mode**: Seamless theme switching utilizing `next-themes`.
- **Reusable Components**: Separated into easy-to-manage `.jsx` components for modularity.

## 💻 Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router format)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utility**: `clsx` & `tailwind-merge`

## 📁 Project Structure
```bash
portfolio/
├── app/                  # Next.js App Router (layout, global CSS, page)
├── components/           # Reusable UI Components
│   ├── Navbar.jsx        
│   ├── Hero.jsx          
│   ├── About.jsx         
│   ├── Skills.jsx        
│   ├── Projects.jsx      
│   ├── Contact.jsx       
│   └── Footer.jsx        
├── lib/                  # Utilities (Tailwind class merging)
├── public/               # Static assets
└── .github/workflows/    # CI/CD pipelines (GitHub Pages deployment)
```

## 🛠️ Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/mayankgupta8448/portfolio1.git
   cd portfolio1
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

## 🚀 Deployment (GitHub Pages)
This repository is configured with a GitHub Actions workflow that automatically deploys the application when you push to the `main` branch. 

To enable this on GitHub:
1. Go to your Repository **Settings**.
2. Navigate to **Pages** (under the Code and automation sidebar).
3. Under **Build and deployment Source**, select **GitHub Actions**.
4. The workflow will run immediately, and your site will be live!

---
*Built with ❤️ by [Mayank Gupta](https://github.com/mayankgupta8448)*
