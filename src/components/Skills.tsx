'use client'

export function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Java 21/17/8", level: 95 },
        { name: "Spring Boot 3.x", level: 90 },
        { name: "Spring Data JPA", level: 88 },
        { name: "Spring Security", level: 85 },
        { name: "Hibernate 6", level: 87 },
        { name: "JDBC", level: 85 }
      ]
    },
    {
      title: "Distributed Systems",
      skills: [
        { name: "Hazelcast 5.3", level: 90 },
        { name: "Apache Kafka", level: 88 },
        { name: "Redis", level: 85 },
        { name: "Spring Cloud", level: 82 },
        { name: "Microservices", level: 90 },
        { name: "REST API", level: 95 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL 8", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "Flyway", level: 85 },
        { name: "Query Optimization", level: 90 },
        { name: "Database Design", level: 87 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Maven", level: 90 },
        { name: "Jenkins", level: 80 },
        { name: "Git", level: 95 },
        { name: "Linux", level: 82 },
        { name: "CI/CD", level: 85 }
      ]
    },
    {
      title: "Monitoring & Testing",
      skills: [
        { name: "Prometheus", level: 80 },
        { name: "Grafana", level: 78 },
        { name: "JUnit 5", level: 90 },
        { name: "Mockito", level: 88 },
        { name: "JMeter", level: 82 },
        { name: "Integration Testing", level: 87 }
      ]
    },
    {
      title: "Methodologies",
      skills: [
        { name: "Agile (Scrum)", level: 90 },
        { name: "Kanban", level: 85 },
        { name: "TDD", level: 88 },
        { name: "Domain-Driven Design", level: 82 },
        { name: "Code Review", level: 90 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive expertise in modern Java development, distributed systems, 
            and enterprise-grade technologies with proven track record in high-traffic applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:bg-slate-900/70 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Technologies Highlight */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Core Technologies & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 border border-blue-700/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
              <div className="text-white font-medium mb-1">Years Experience</div>
              <div className="text-slate-400 text-sm">Java Development</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/50 to-emerald-800/50 border border-emerald-700/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">70%</div>
              <div className="text-white font-medium mb-1">Performance Boost</div>
              <div className="text-slate-400 text-sm">Database Load Reduction</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 border border-purple-700/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-white font-medium mb-1">Daily Transactions</div>
              <div className="text-slate-400 text-sm">99.9% Uptime</div>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/50 border border-orange-700/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">50K+</div>
              <div className="text-white font-medium mb-1">Active Users</div>
              <div className="text-slate-400 text-sm">Enterprise SaaS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}