'use client'

import { CheckCircle2, Zap, Database, Server } from 'lucide-react'

export function About() {
  const highlights = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "High-Performance Caching",
      description: "Architected Hazelcast solution reducing database load by 70% and improving response time by 40%"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Microservices Excellence", 
      description: "Led development of critical microservice handling 10,000+ daily transactions with 99.9% uptime"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Legacy Migration",
      description: "Migrated monolithic application to microservices, reducing deployment time from days to hours"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Query Optimization",
      description: "Optimized SQL queries processing millions of records, cutting execution time by 30%"
    }
  ]

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Introduction */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Senior Java Developer
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              With over 6 years of experience in building high-performance backend systems, 
              I specialize in creating scalable solutions using Java, Spring Boot, and modern 
              distributed technologies.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              My expertise spans across microservices architecture, database optimization, 
              and enterprise-level system design. I have a proven track record of solving 
              complex technical challenges and delivering solutions that handle thousands 
              of daily transactions with exceptional reliability.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">6+ years of Java development experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">Master&apos;s Degree in Software Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">Enterprise-level project experience</span>
              </div>
            </div>
          </div>

          {/* Right Column - Career Highlights */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Career Highlights
            </h3>
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-blue-400 mt-1">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-slate-300 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {/* Portum Experience */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">Senior Java Developer</h4>
                  <p className="text-blue-400 font-medium">Portum (via Modus Soft)</p>
                </div>
                <span className="text-slate-400 text-sm md:text-base">4 years 10 months</span>
              </div>
              <p className="text-slate-300 mb-4">
                White-label SaaS for Cisco BroadWorks management serving 50K+ users with 10K+ daily transactions.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Architected high-availability infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Implemented Hazelcast caching solution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Led monolith to microservices migration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Optimized database performance</span>
                </div>
              </div>
            </div>

            {/* Avery Dennison Experience */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">Java Developer</h4>
                  <p className="text-blue-400 font-medium">Avery Dennison D2Comm (via SoftServe)</p>
                </div>
                <span className="text-slate-400 text-sm md:text-base">8 months</span>
              </div>
              <p className="text-slate-300 mb-4">
                Enterprise e-commerce platform for custom apparel labeling with cross-platform design editor.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Developed complex SQL queries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Improved response time by 25%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Built Python ETL pipeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Processed 100K+ daily configurations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}