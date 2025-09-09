'use client'

import { Mail, MessageSquare, Linkedin, Github, MapPin } from 'lucide-react'

export function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "den.ohorodnik@gmail.com",
      href: "mailto:den.ohorodnik@gmail.com",
      description: "Send me an email for business inquiries"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "denys-ohorodnik-a82041154",
      href: "https://linkedin.com/in/denys-ohorodnik-a82041154",
      description: "Connect with me professionally"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Telegram",
      value: "@denys.ohorodnik",
      href: "https://t.me/denys.ohorodnik",
      description: "Quick messaging and communication"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "denys-ohorodnik",
      href: "https://github.com/denys-ohorodnik",
      description: "View my code and contributions"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Ready to build something amazing? I&apos;m always interested in discussing new opportunities, 
            challenging projects, and innovative solutions in Java development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:bg-slate-900/70 hover:border-slate-700 transition-all duration-200 group"
                >
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{method.title}</h4>
                    <p className="text-blue-400 font-medium mb-2">{method.value}</p>
                    <p className="text-slate-400 text-sm">{method.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border border-emerald-800/30 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <h4 className="text-white font-semibold">Currently Available</h4>
              </div>
              <p className="text-slate-300 text-sm">
                Open to new opportunities in backend development, microservices architecture, 
                and distributed systems. Remote or hybrid positions preferred.
              </p>
            </div>
          </div>

          {/* Right Column - Quick Stats & Specializations */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Why Choose Me?
            </h3>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">6+</div>
                <div className="text-slate-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">70%</div>
                <div className="text-slate-300 text-sm">Performance Boost</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">10K+</div>
                <div className="text-slate-300 text-sm">Daily Transactions</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">99.9%</div>
                <div className="text-slate-300 text-sm">System Uptime</div>
              </div>
            </div>

            {/* Specializations */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Specializations</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-900/30 border border-slate-800 rounded-lg">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">High-Performance Backend Systems</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-900/30 border border-slate-800 rounded-lg">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-300">Microservices Architecture</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-900/30 border border-slate-800 rounded-lg">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-300">Database Optimization</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-900/30 border border-slate-800 rounded-lg">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">Distributed Systems & Caching</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Response Time</h4>
              <p className="text-slate-300 text-sm">
                I typically respond to inquiries within <span className="text-blue-400 font-medium">24 hours</span>. 
                For urgent matters, feel free to reach out via Telegram.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-900/30 to-emerald-900/30 border border-blue-800/50 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Let&apos;s discuss how I can help bring your ideas to life with robust, scalable Java solutions.
            </p>
            <a
              href="mailto:den.ohorodnik@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <Mail size={20} />
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}