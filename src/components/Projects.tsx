'use client'

import { ExternalLink, Github, Server, Database, Zap, Users } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: "Portum - BroadWorks SaaS Platform",
      company: "Modus Soft",
      duration: "4 years 10 months",
      description: "White-label SaaS for Cisco BroadWorks management serving 50K+ users with 10K+ daily transactions. Led architecture and development of high-performance microservices.",
      achievements: [
        "Reduced database load by 70% with Hazelcast caching solution",
        "Achieved 99.9% uptime handling 10,000+ daily transactions",
        "Migrated from monolith to microservices architecture",
        "Optimized SQL queries reducing execution time by 30%"
      ],
      technologies: [
        "Java", "Spring Boot", "Spring Cloud", "Hazelcast", "MySQL", "Kafka", "Redis", "AWS SNS/SQS", "Docker", "Jenkins"
      ],
      metrics: {
        users: "50K+",
        transactions: "10K+ daily",
        uptime: "99.9%",
        performance: "70% load reduction"
      },
      category: "Enterprise SaaS"
    },
    {
      title: "Avery Dennison D2Comm",
      company: "SoftServe",
      duration: "8 months",
      description: "Enterprise e-commerce platform for custom apparel labeling with cross-platform design editor. Focused on backend optimization and ETL pipeline development.",
      achievements: [
        "Improved system response time by 25%",
        "Built Python ETL pipeline processing 100K+ daily configurations",
        "Refactored legacy Spring 4 components",
        "Implemented asynchronous request processing"
      ],
      technologies: [
        "Java 8", "Python 2.7", "Spring 4", "PostgreSQL", "Hibernate 4", "Flyway", "Jenkins", "Git"
      ],
      metrics: {
        performance: "25% faster",
        processing: "100K+ daily",
        team: "25 members",
        legacy: "Spring 4 → Modern"
      },
      category: "E-commerce Platform"
    },
    {
      title: "Home Away Booking Platform",
      company: "SoftServe",
      duration: "8 months",
      description: "Travel accommodation booking platform built with microservices architecture. Contributed to backend architecture and performance optimization.",
      achievements: [
        "Implemented microservices architecture for booking system",
        "Designed RESTful API endpoints and database schema",
        "Created comprehensive unit and component tests",
        "Optimized pagination and performance based on benchmarking"
      ],
      technologies: [
        "Java", "Spring", "Hibernate", "Jersey", "Kafka", "JUnit", "PostgreSQL", "Swagger", "Git", "Jenkins"
      ],
      metrics: {
        architecture: "Microservices",
        testing: "Full Coverage",
        team: "8 members",
        api: "RESTful Design"
      },
      category: "Travel Platform"
    }
  ]

  const getIcon = (category: string) => {
    switch (category) {
      case "Enterprise SaaS":
        return <Server className="w-6 h-6" />
      case "E-commerce Platform":
        return <Database className="w-6 h-6" />
      case "Travel Platform":
        return <Users className="w-6 h-6" />
      default:
        return <Zap className="w-6 h-6" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-4"></div>
          <p className="text-slate-200 max-w-2xl mx-auto">
            Enterprise-level projects demonstrating expertise in scalable backend systems, 
            microservices architecture, and high-performance optimization.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800/30 border border-slate-700 rounded-lg p-8 hover:bg-slate-800/50 transition-all duration-300 hover:border-slate-600"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Project Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-400">
                      {getIcon(project.category)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-slate-400">
                        <span className="font-medium text-blue-400">{project.company}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="lg:w-80">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4 text-center">Project Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-lg font-bold text-blue-400 mb-1">{value}</div>
                          <div className="text-xs text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <div className="text-center">
                        <span className="inline-block bg-gradient-to-r from-blue-400 to-emerald-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="mt-12 text-center">
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Open Source & Personal Projects
            </h3>
            <p className="text-slate-300 mb-6">
              Explore my algorithm implementations, Spring Boot demos, and modern Java development 
              patterns on GitHub. Including circuit breaker implementations, Kafka streaming, 
              and performance optimization examples.
            </p>
            <a
              href="https://github.com/denys-ohorodnik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <Github size={20} />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}