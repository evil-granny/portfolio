'use client'

import { Github, Linkedin, Mail, MessageSquare, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/denys-ohorodnik',
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/denys-ohorodnik-a82041154',
      icon: <Linkedin size={20} />
    },
    {
      name: 'Email',
      href: 'mailto:den.ohorodnik@gmail.com',
      icon: <Mail size={20} />
    },
    {
      name: 'Telegram',
      href: 'https://t.me/denys.ohorodnik',
      icon: <MessageSquare size={20} />
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                DO
              </span>
              <span className="text-white font-semibold">Denys Ohorodnik</span>
            </div>
            <p className="text-slate-400 mb-6">
              Senior Java Developer specializing in high-performance backend systems, 
              microservices architecture, and distributed computing solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800 rounded-lg"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div>
                <p className="text-slate-400 text-sm mb-1">Email</p>
                <a
                  href="mailto:den.ohorodnik@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  den.ohorodnik@gmail.com
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Response Time</p>
                <p className="text-slate-300">Usually within 24 hours</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Availability</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-emerald-400 text-sm">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Denys Ohorodnik. Built with</span>
              <Heart size={16} className="text-red-500" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <span>Powered by:</span>
                <div className="flex gap-3">
                  <span className="bg-slate-800 px-2 py-1 rounded text-xs">Next.js 14</span>
                  <span className="bg-slate-800 px-2 py-1 rounded text-xs">TypeScript</span>
                  <span className="bg-slate-800 px-2 py-1 rounded text-xs">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}