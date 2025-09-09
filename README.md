# Denys Ohorodnik - Senior Java Developer Portfolio

A blazing fast, performance-optimized portfolio website built with Next.js 14 and Tailwind CSS.

## 🚀 Performance Features

- **Server-Side Rendering (SSR)** - Lightning fast initial load
- **Minimal JavaScript** - Only essential interactions
- **Optimized Images** - WebP format with lazy loading
- **CSS Optimizations** - Purged and minified Tailwind
- **SEO Optimized** - Structured data and meta tags

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
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main portfolio page
├── public/
│   └── favicon.ico         # Site favicon
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
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

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the 'out' folder
```

### Static Hosting
```bash
npm run export
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

Monitor your site's performance with:
- Google PageSpeed Insights
- Lighthouse audits
- Core Web Vitals
- Real User Monitoring (RUM)

---

Built with ❤️ by Denys Ohorodnik | © 2024