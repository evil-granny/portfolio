# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a high-performance portfolio website for Denys Ohorodnik, a Senior Java Developer. Built with Next.js 14 using static export for optimal performance and hosting flexibility. The architecture emphasizes SEO optimization, PWA capabilities, and smooth user experience with custom animations.

**Live Website**: https://portfolio-delta-gilt-84.vercel.app/
**Repository**: https://github.com/evil-granny/portfolio

## Build System and Commands

### Development Workflow
- **Development server**: `npm run dev`
- **Production build**: `npm run build` (generates static export in `/out` directory)
- **Type checking**: `npm run type-check` 
- **Linting**: `npm run lint`
- **Static export**: Automatically handled by `npm run build` (configured in next.config.js)

### Deployment
The project is configured for static hosting with `output: 'export'` in next.config.js. The build produces a `/out` directory ready for deployment to:
- Vercel: `vercel --prod`
- Netlify: Deploy the `/out` folder
- Any static host: Upload `/out` folder contents

## Architecture Overview

### Component Structure
The portfolio follows a single-page application pattern with 7 main sections imported in `src/app/page.tsx`:
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero**: Introduction with social links and call-to-action
- **About**: Professional experience and career highlights
- **Skills**: Technical skills with animated progress bars and metrics
- **Projects**: Professional project showcase with achievements
- **Contact**: Contact information and availability status
- **Footer**: Additional links and technology stack display

### Styling System
- **Framework**: Tailwind CSS 3.3 with custom extensions
- **Theme**: Dark theme optimized design with gradient accents
- **Animations**: Custom keyframe animations defined in tailwind.config.js:
  - `fade-in`, `slide-up`, `bounce-subtle`
  - Animation delay utilities (200ms, 400ms, 600ms, 800ms intervals)
- **Typography**: Inter font via Google Fonts
- **Colors**: Slate-based dark theme with blue/emerald accent gradients

### Data Architecture
Portfolio content is embedded within components rather than external data files:
- **Personal info**: Centralized in Hero component with real contact details
- **Professional experience**: Structured in About and Projects components based on actual resume
- **Technical skills**: Organized by categories with proficiency levels in Skills component
- **Contact methods**: Multiple communication channels with availability status

## SEO and PWA Configuration

### Metadata Strategy
Comprehensive SEO setup in `src/app/layout.tsx`:
- OpenGraph and Twitter card optimization
- Structured data for search engines
- Domain-specific configuration for `denysohorodnik.dev`
- Robot indexing permissions and sitemap integration

### PWA Features
- **Manifest**: `/public/manifest.json` with proper theme colors and offline capabilities
- **Service Worker**: Basic offline functionality
- **Installability**: Users can install as standalone app
- **Theme integration**: Matches dark design with slate color scheme

### Static Assets
- **Resume**: `/public/resume.pdf` linked from Hero section
- **SEO files**: `robots.txt`, `sitemap.xml` configured for production domain
- **Favicon System**: Complete favicon setup with multiple formats:
  - `/public/favicon.ico` - Main browser favicon (16x16, 32x32, 48x48)
  - `/public/favicon.svg` - Vector favicon (32x32) with "DO" branding
  - `/public/icon-192.svg` - PWA icon (192x192) for app installation
  - `/public/icon-512.svg` - PWA icon (512x512) for high-res displays
- **Icon Design**: Dark slate background (#1f2937) with blue accent (#60a5fa) "DO" initials

## Performance Optimizations

### Build Configuration
- Static export enabled for maximum loading speed
- Image optimization disabled for static hosting compatibility
- Trailing slashes enabled for consistent routing
- CSS purging and minification via Tailwind

### Loading Strategy
- Minimal JavaScript bundle with essential interactions only
- Custom scrollbar styling for consistent cross-browser experience
- Staggered animation entrance effects for visual appeal
- Focus management for accessibility compliance

### Performance Monitoring
- **Vercel Speed Insights**: Real-time performance monitoring integrated in `src/app/layout.tsx:60`
- **Analytics Collection**: Automatic Core Web Vitals tracking (LCP, FID, CLS)
- **Device Analytics**: Performance breakdowns by mobile vs desktop
- **Geographic Insights**: Performance data by region
- **Dependency**: `@vercel/speed-insights/next` package for Next.js integration

## Content Management

### Portfolio Updates
To update portfolio content:
- **Personal information**: Modify Hero and Contact components
- **Work experience**: Update About and Projects components with new roles/achievements
- **Technical skills**: Add new technologies in Skills component categories
- **Resume**: Replace `/public/resume.pdf` and update version date

### Styling Customization
- **Colors**: Update theme colors in tailwind.config.js
- **Animations**: Modify keyframes and timing in tailwind.config.js
- **Typography**: Change font imports in layout.tsx
- **Layout**: Adjust component order in page.tsx

## Key Technical Patterns

### Component Architecture
Each section component is self-contained with:
- TypeScript interfaces for props (where applicable)
- Responsive design with mobile-first approach
- Accessibility features (ARIA labels, semantic HTML)
- Hover states and smooth transitions

### Animation System
Custom CSS classes in globals.css provide:
- Animation delay utilities for staggered effects
- Smooth scroll behavior for navigation
- Dark theme scrollbar styling
- Print-friendly styles with `.no-print` class

### Import Structure
- Path aliases configured via `@/*` pointing to `src/*`
- Component imports use absolute paths from `@/components/`
- Lucide React icons for consistent iconography
- Next.js font optimization for Inter typeface

## Deployment Configuration

### Current Production Status
- **Live URL**: https://portfolio-delta-gilt-84.vercel.app/
- **Platform**: Vercel with automatic GitHub integration
- **Build Status**: ✅ Successfully deployed
- **Last Updated**: December 2024

### Vercel Build Settings
```
Build Command: npm run build
Output Directory: (Next.js default - auto-detected)
Install Command: npm install  
Development Command: next dev
Framework: Next.js (auto-detected)
```

### Critical Build Configuration
The project uses a custom postbuild script to resolve Vercel deployment issues:

```json
"scripts": {
  "build": "next build",
  "postbuild": "node -e \"const fs = require('fs'); const manifest = { version: 3, pages404: true, caseSensitive: false, basePath: '', redirects: [], headers: [], dynamicRoutes: [], staticRoutes: [{ page: '/', regex: '^/(?:/)?$', routeKeys: {}, namedRegex: '^/(?:/)?$' }], dataRoutes: [], rewrites: [] }; fs.writeFileSync('out/routes-manifest.json', JSON.stringify(manifest));\""
}
```

This automatically generates the required `routes-manifest.json` file in the `out/` directory after Next.js build.

### Deployment Troubleshooting

#### Common Issues Resolved:
1. **Routes-manifest.json error**: Fixed by using Next.js default output directory detection and custom postbuild script
2. **ESLint errors**: Fixed unescaped apostrophes in JSX (`'` → `&apos;`)  
3. **Viewport metadata warnings**: Moved viewport configuration to separate export in Next.js 14
4. **Directory conflicts**: Resolved conflicting `/app` vs `/src/app` structure

#### Deployment Best Practices:
- Never override "Output Directory" in Vercel for static export projects
- Use `npm run build` as build command (includes postbuild automatically)
- Ensure all components use proper HTML entity escaping
- Test locally with `npm run build` before deploying
- Monitor build logs for any deprecation warnings

### Static Export Notes
- Uses `output: 'export'` in next.config.js for static site generation
- Generates optimized static files in `/out` directory
- Compatible with any static hosting platform
- Maintains all Next.js optimizations while being fully static