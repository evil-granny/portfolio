# Denys Ohorodnik - Senior Java Developer Portfolio

A blazing fast, performance-optimized portfolio website built with Next.js 14 and Tailwind CSS.

🌐 **Live Website**: https://portfolio-delta-gilt-84.vercel.app/

## 🚀 Performance Features

- **Server-Side Rendering (SSR)** - Lightning fast initial load
- **Speed Insights** - Real-time performance monitoring with Vercel Analytics
- **Web Analytics** - Comprehensive page view and user behavior tracking
- **Custom Favicon** - Professional branding with "DO" initials
- **Minimal JavaScript** - Only essential interactions
- **Optimized Images** - WebP format with lazy loading
- **CSS Optimizations** - Purged and minified Tailwind
- **SEO Optimized** - Structured data and meta tags
- **PWA Ready** - Progressive Web App with installable icons

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS 3.3
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)
- **Deployment**: Ready for Vercel, Netlify, or static export

## 📊 Key Metrics Highlighted

- 70% database load reduction with Hazelcast
- 99.9% uptime handling 10K+ daily transactions
- 30% query performance improvement
- Deployment time reduced from days to hours

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export static files
npm run export
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles with animations
│   │   ├── layout.tsx       # Root layout with SEO metadata
│   │   └── page.tsx         # Main portfolio page
│   └── components/          # Portfolio components
│       ├── Navigation.tsx   # Fixed navigation with smooth scroll
│       ├── Hero.tsx         # Hero section with intro
│       ├── About.tsx        # Experience and career highlights
│       ├── Skills.tsx       # Technical skills with progress bars
│       ├── Projects.tsx     # Professional project showcase
│       ├── Contact.tsx      # Contact information and availability
│       └── Footer.tsx       # Footer with social links
├── public/
│   ├── favicon.ico          # Main browser favicon
│   ├── favicon.svg          # Vector favicon (32x32)
│   ├── icon-192.svg         # PWA icon (192x192)
│   ├── icon-512.svg         # PWA icon (512x512)
│   ├── manifest.json        # PWA manifest with icons
│   ├── robots.txt          # SEO robots file
│   ├── sitemap.xml         # XML sitemap
│   └── resume.pdf          # Downloadable resume
├── next.config.js          # Next.js static export configuration
├── tailwind.config.js      # Custom animations and theme
├── tsconfig.json           # TypeScript with path aliases
├── CLAUDE.md               # Development guidance for Claude Code
└── package.json            # Dependencies and build scripts
```

## 🔧 Configuration

### Performance Optimizations
- Static export enabled for maximum speed
- Automatic CSS optimization
- Console removal in production
- Compression enabled
- ETag generation disabled for faster builds

### SEO Features
- Comprehensive meta tags
- OpenGraph and Twitter cards
- Structured data markup
- Semantic HTML structure
- Accessibility-first design

## 🌐 Deployment

### Live Deployment ✅
- **Current URL**: https://portfolio-delta-gilt-84.vercel.app/
- **Platform**: Vercel with automatic deployments
- **Build Status**: ✅ Successfully deployed
- **Repository**: https://github.com/evil-granny/portfolio

### Vercel Configuration
```bash
# Vercel Build Settings
Build Command: npm run build
Output Directory: (Next.js default - auto-detected)
Install Command: npm install
Development Command: npm run dev
```

### Build Process
```bash
# Next.js build with static export
npm run build
# Automatically runs postbuild script to generate routes-manifest.json
```

### Alternative Deployments

#### Netlify
```bash
npm run build
# Deploy the 'out' folder
```

#### Static Hosting
```bash
npm run build
# Upload the 'out' folder to any static host
```

## 📞 Contact Information

- **Email**: den.ohorodnik@gmail.com
- **LinkedIn**: [denys-ohorodnik-a82041154](https://linkedin.com/in/denys-ohorodnik-a82041154)
- **Telegram**: [@denys.ohorodnik](https://t.me/denys.ohorodnik)

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Content
Edit the content in `app/page.tsx` to update:
- Personal information
- Work experience
- Technical skills
- Contact details

### Fonts
Change fonts in `app/layout.tsx`:
```javascript
import { YourFont } from 'next/font/google'
const yourFont = YourFont({ subsets: ['latin'] })
```

## 📱 Mobile Responsiveness

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized typography scaling
- Efficient image loading

## ⚡ Performance Monitoring

### Analytics & Performance Integration
- **Vercel Web Analytics** - Page views, unique visitors, and user behavior tracking
- **Vercel Speed Insights** - Real-time performance data collection
- **Core Web Vitals** - LCP, FID, CLS metrics tracking
- **Device Performance** - Mobile vs Desktop analytics
- **Geographic Analytics** - Performance and visitor data by region

Monitor your site's performance with:
- Google PageSpeed Insights
- Lighthouse audits
- Core Web Vitals
- Real User Monitoring (RUM)

## 📦 Key Dependencies

```json
{
  "@vercel/analytics": "^1.5.0",
  "@vercel/speed-insights": "^1.2.0",
  "next": "14.2.0",
  "tailwindcss": "^3.3.0",
  "typescript": "^5.x.x"
}
```

---

Built with ❤️ by Denys Ohorodnik | © 2024
