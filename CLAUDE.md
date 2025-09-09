# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a high-performance portfolio website for Denys Ohorodnik, a Senior Java Developer. Built with Next.js 14 using static export for optimal performance and hosting flexibility. The architecture emphasizes SEO optimization, PWA capabilities, and smooth user experience with custom animations.

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
- **Favicon**: Standard favicon.ico for browser and PWA icons

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