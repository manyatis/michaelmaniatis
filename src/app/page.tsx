"use client";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '50px 0px -10px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .tracer-border');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* High-tech background pattern */}
      <div className="fixed inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-green-500/20"></div>
        <div className="absolute inset-0 hexagon-grid"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-cyan-500/5 to-transparent"></div>
      </div>

      {/* Glassmorphism overlay */}
      <div className="fixed inset-0 backdrop-blur-[1px] bg-black/20"></div>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mb-8 text-center fade-in-up">
            <span className="hero-text text-white">
              Mike Maniatis
            </span>
          </h1>
          
          {/* Profile Picture */}
          <div className="flex justify-center mb-6 fade-in-up">
            <div className="w-32 h-32 rounded-full border-2 border-green-500/30 shadow-lg hover:shadow-green-500/20 transition-shadow duration-300 overflow-hidden">
              <img 
                src="/headshot.png" 
                alt="Mike Maniatis" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Work History Blurb */}
          <div className="text-center mb-16 fade-in-up">
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
              Solving Problems At Scale<br />
              Hands on Senior Engineering Manager
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="relative z-10 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-400">
            Impacting millions of customers each day
          </h2>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-3xl p-8 shadow-2xl scale-in tracer-border">
            <div className="grid grid-cols-3 md:grid-cols-7 gap-6 items-center justify-items-center fade-in-up">
              
              {/* Distributed Systems */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Distributed Systems" className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-center text-cyan-400">Distributed<br />Systems</span>
              </div>

              {/* Java */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-shadow">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-center text-orange-400">Java</span>
              </div>

              {/* Kafka */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-gray-500/50 transition-shadow">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apachekafka.svg" alt="Apache Kafka" className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-center text-gray-300">Kafka</span>
              </div>

              {/* CockroachDB */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cockroachlabs.svg" alt="CockroachDB" className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-center text-blue-400">CockroachDB</span>
              </div>

              {/* Cassandra */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/50 transition-shadow">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apachecassandra.svg" alt="Apache Cassandra" className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-center text-yellow-400">Cassandra</span>
              </div>

              {/* MCP */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-center text-purple-400">MCP</span>
              </div>

              {/* Node.js */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-shadow">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-center text-green-400">Node.js</span>
              </div>
              
            </div>
            
            {/* Second row of skills */}
            <div className="grid grid-cols-3 md:grid-cols-7 gap-6 items-center justify-items-center mt-8 fade-in-up">
              
              {/* Next.js */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-gray-500/50 transition-shadow">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-center text-gray-300">Next.js</span>
              </div>

              {/* Tailwind */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-center text-cyan-400">Tailwind</span>
              </div>

              {/* Postgres */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-center text-blue-400">Postgres</span>
              </div>

              {/* SQL */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM4 16V8h16v8H4zm2-6h2v4H6v-4zm4 0h2v4h-2v-4zm4 0h2v4h-2v-4z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-center text-indigo-400">SQL</span>
              </div>

              {/* Bash */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-gray-500/50 transition-shadow">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gnubash.svg" alt="GNU Bash" className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-center text-gray-300">Bash</span>
              </div>

              {/* Linux */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/50 transition-shadow">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-center text-yellow-400">Linux</span>
              </div>

              {/* Python */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-center text-blue-400">Python</span>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <a href="https://getrankly.io" target="_blank" rel="noopener noreferrer" className="block">
              <div className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 group fade-in-left tracer-border cursor-pointer h-full">
                <div className="h-2 w-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mb-4 group-hover:w-24 transition-all"></div>
                <h4 className="text-xl font-bold mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">GetRankly.io</h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  SEO ranking and analytics platform helping businesses track their search performance and optimize their online presence.
                </p>
                <span className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                  View Project →
                </span>
              </div>
            </a>
            
            <a href="https://alvsys.com" target="_blank" rel="noopener noreferrer" className="block">
              <div className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 group fade-in-up tracer-border cursor-pointer h-full">
                <div className="h-2 w-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mb-4 group-hover:w-24 transition-all"></div>
                <h4 className="text-xl font-bold mb-4 text-green-400 group-hover:text-green-300 transition-colors">Alvsys.com</h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  AI agent workspace automation platform empowering teams with structured task queues and intelligent workflows.
                </p>
                <span className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium">
                  View Project →
                </span>
              </div>
            </a>

            <a href="https://vteegolf.com" target="_blank" rel="noopener noreferrer" className="block">
              <div className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 group fade-in-right tracer-border cursor-pointer h-full">
                <div className="h-2 w-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-4 group-hover:w-24 transition-all"></div>
                <h4 className="text-xl font-bold mb-4 text-purple-400 group-hover:text-purple-300 transition-colors">VTeeGolf.com</h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Golf performance tracking and analytics platform for players to improve their game with data-driven insights.
                </p>
                <span className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
                  View Project →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-3xl p-12 shadow-2xl scale-in tracer-border">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent">
              Ready to Collaborate?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Let&apos;s discuss how I can help bring your ideas to life
            </p>
            <button className="bg-gradient-to-r from-cyan-700 to-green-700 hover:from-cyan-600 hover:to-green-600 text-white font-bold px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-700/25">
              Contact
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/20 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-8 fade-in-up">
            <a href="https://linkedin.com/in/mmaniatis" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://x.com/michaelmaniatis" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://github.com/manyatis" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
