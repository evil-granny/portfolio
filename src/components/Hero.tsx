'use client'

import { Github, Linkedin, Mail, Download } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Greeting */}
          <p className="text-slate-400 text-lg mb-4 animate-fade-in">
            Hello, I&apos;m
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Denys Ohorodnik
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-6 animate-slide-up animation-delay-200">
            Senior Java Developer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8 animate-slide-up animation-delay-400">
            6+ years building high-performance backend systems using{' '}
            <span className="text-blue-400 font-medium">Java</span>,{' '}
            <span className="text-emerald-400 font-medium">Spring Boot</span>, and{' '}
            <span className="text-purple-400 font-medium">SQL/NoSQL</span>.{' '}
            <span className="text-orange-400 font-medium">70% database load reduction</span> and{' '}
            <span className="text-pink-400 font-medium">10K+ daily transactions</span> in scalable microservices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up animation-delay-600">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 border border-slate-700"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up animation-delay-800">
            <a
              href="https://github.com/denys-ohorodnik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800 rounded-lg"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/denys-ohorodnik-a82041154"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800 rounded-lg"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:den.ohorodnik@gmail.com"
              className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800 rounded-lg"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}