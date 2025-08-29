"use client";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
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
              Michael Maniatis
            </span>
          </h1>
          
          {/* Profile Picture Placeholder */}
          <div className="flex justify-center mb-6 fade-in-up">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 border-2 border-green-500/30 flex items-center justify-center shadow-lg hover:shadow-green-500/20 transition-shadow duration-300">
              <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          
          {/* Work History Blurb */}
          <div className="text-center mb-16 fade-in-up">
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
              University of Iowa • JPMorgan Chase<br />
              Currently Senior Engineering Manager, overseeing critical systems processing billions of events per day
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-3xl p-8 shadow-2xl scale-in tracer-border">
            <div className="grid grid-cols-3 md:grid-cols-7 gap-6 items-center justify-items-center fade-in-up">
              
              {/* Distributed Systems */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z M12 4.18l7 3.12V17c0 4.27-2.81 7.72-7 8.92-4.19-1.2-7-4.65-7-8.92V7.3l7-3.12z M8.5 11.5L10 13l4-4 1.5 1.5L10 16l-3-3z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-center text-cyan-400">Distributed<br />Systems</span>
              </div>

              {/* Java */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-center text-orange-400">Java</span>
              </div>

              {/* Kafka */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-lg group-hover:shadow-gray-500/50 transition-shadow">
                  <svg className="w-8 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-xs font-bold ml-1">K</span>
                </div>
                <span className="text-xs font-semibold text-center text-gray-300">Kafka</span>
              </div>

              {/* CockroachDB */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-center text-blue-400">CockroachDB</span>
              </div>

              {/* Cassandra */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/50 transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2zm0 2.18L5.82 7.5 12 10.82 18.18 7.5 12 4.18zm-7 4.82v8.18L12 19.82V11.64L5 9zm14 0L12 11.64v8.18L19 15.18V9z"/>
                  </svg>
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
                <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2zm0 2.03L18 8v8l-6 4.12L6 16V8l6-4.12z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-center text-green-400">Node.js</span>
              </div>
              
            </div>
            
            {/* Second row of skills */}
            <div className="grid grid-cols-3 md:grid-cols-7 gap-6 items-center justify-items-center mt-8 fade-in-up">
              
              {/* Next.js */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-gray-900 to-black flex items-center justify-center shadow-lg group-hover:shadow-gray-500/50 transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.46 0 2.85-.31 4.09-.87L7.5 11.5h9l-4.59 9.41C17.71 19.85 20 16.18 20 12c0-4.41-3.59-8-8-8z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-center text-gray-300">Next.js</span>
              </div>

              {/* Tailwind */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-center text-cyan-400">Tailwind</span>
              </div>

              {/* Postgres */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.128 4.2c-1.72 0-3.112.56-4.128 1.68C11.984 4.76 10.592 4.2 8.872 4.2c-3.44 0-6.24 2.8-6.24 6.24v3.12c0 3.44 2.8 6.24 6.24 6.24 1.72 0 3.112-.56 4.128-1.68 1.016 1.12 2.408 1.68 4.128 1.68 3.44 0 6.24-2.8 6.24-6.24v-3.12c0-3.44-2.8-6.24-6.24-6.24z"/>
                  </svg>
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
                <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg group-hover:shadow-gray-500/50 transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7v2h2V7H7zm0 4v2h6v-2H7zm0 4v2h10v-2H7z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-center text-gray-300">Bash</span>
              </div>

              {/* Linux */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-yellow-600 to-orange-700 flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/50 transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-center text-yellow-400">Linux</span>
              </div>

              {/* Python */}
              <div className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-blue-500 to-yellow-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM9.75 5.82l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/>
                  </svg>
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
            <div className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 group fade-in-left tracer-border">
              <div className="h-2 w-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mb-4 group-hover:w-24 transition-all"></div>
              <h4 className="text-xl font-bold mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">GetRankly.io</h4>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                SEO ranking and analytics platform helping businesses track their search performance and optimize their online presence.
              </p>
              <a href="https://getrankly.io" target="_blank" rel="noopener noreferrer" 
                 className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                View Project →
              </a>
            </div>
            
            <div className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 group fade-in-up tracer-border">
              <div className="h-2 w-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mb-4 group-hover:w-24 transition-all"></div>
              <h4 className="text-xl font-bold mb-4 text-green-400 group-hover:text-green-300 transition-colors">Alvsys.com</h4>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                AI agent workspace automation platform empowering teams with structured task queues and intelligent workflows.
              </p>
              <a href="https://alvsys.com" target="_blank" rel="noopener noreferrer" 
                 className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium">
                View Project →
              </a>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 group fade-in-right tracer-border">
              <div className="h-2 w-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-4 group-hover:w-24 transition-all"></div>
              <h4 className="text-xl font-bold mb-4 text-purple-400 group-hover:text-purple-300 transition-colors">VTeeGolf.com</h4>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Golf performance tracking and analytics platform for players to improve their game with data-driven insights.
              </p>
              <a href="https://vteegolf.com" target="_blank" rel="noopener noreferrer" 
                 className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
                View Project →
              </a>
            </div>
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
              Let's discuss how I can help bring your ideas to life
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
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
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
