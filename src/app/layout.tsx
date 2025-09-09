import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Denys Ohorodnik - Senior Java Developer Portfolio',
  description: 'Senior Java Developer with 6+ years building high-performance backend systems. Specializing in Spring Boot, Kafka, Microservices, and distributed systems.',
  keywords: ['Java Developer', 'Spring Boot', 'Kafka', 'Microservices', 'Hazelcast', 'Senior Developer'],
  authors: [{ name: 'Denys Ohorodnik' }],
  creator: 'Denys Ohorodnik',
  openGraph: {
    title: 'Denys Ohorodnik - Senior Java Developer Portfolio',
    description: 'Senior Java Developer with 6+ years building high-performance backend systems. Specializing in Spring Boot, Kafka, Microservices, and distributed systems.',
    type: 'website',
    locale: 'en_US',
    url: 'https://denysohorodnik.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denys Ohorodnik - Senior Java Developer Portfolio',
    description: 'Senior Java Developer with 6+ years building high-performance backend systems. Specializing in Spring Boot, Kafka, Microservices, and distributed systems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          {children}
        </div>
      </body>
    </html>
  )
}