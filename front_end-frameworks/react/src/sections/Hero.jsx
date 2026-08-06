import React from 'react';
import { Asterisk, ArrowRight } from 'lucide-react'; // Vérifiez si vous utilisez Asterisk ou Astroid

const Hero = () => {
  return (
    <section id="hero-section" className="relative pt-36 pb-24 overflow-hidden">

      {/* 1. LE FOND LUMINEUX */}
      <div className="absolute inset-0 -z-0 pointer-events-none overflow-hidden">
        
        {/* Lueur Violette */}
        <div className="absolute -top-10 -left-80 md:-top-10 md:-left-80 w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] bg-violet-500/20 rounded-full blur-[150px] md:blur-[250px]"></div>
        <div className="absolute top-0 left-40 md:top-0 md:left-50 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-violet-500/30 rounded-full blur-[60px] md:blur-[90px]"></div>

        {/* Lueur Bleue */}
        <div className="absolute -bottom-100 -right-20 md:-bottom-100 md:-right-40 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-blue-800/20 rounded-full blur-[150px] md:blur-[250px]"></div>
        <div className="absolute bottom-50 right-10 md:bottom-60 md:right-20 w-[150px] md:w-[250px] h-[150px] md:h-[250px] bg-blue-500/30 rounded-full blur-[60px] md:blur-[90px]"></div>

        {/* Grille */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        {/* Fond degradé */}
        <div className="absolute bottom-0 left-0 right-0 h-40 md:h-64 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* 2. LE CONTENU */}
      <div className="relative z-0 max-w-6xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="flex justify-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs text-violet-300 rounded-full border border-violet-500/20 bg-violet-500/10">
            <Asterisk className="w-2 h-2 fill-current" />
            The future of coding
            <Asterisk className="w-2 h-2 fill-current" />
          </span>
        </div>

        {/* Titres */}
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-12">
          Build smarter workflows <br className="hidden md:block" />
          <span className="text-violet-300">with Agentic AI</span>
        </h1>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-20">
          Create autonomous AI agents that think, plan, and execute complex tasks. Transform your business with intelligent automation.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a 
            href="#Started" 
            className="flex items-center gap-2 px-4 py-2 font-semibold text-white rounded-md bg-violet-500 hover:bg-violet-600 shadow-lg shadow-violet-500/40 transition-all duration-200"
          >
            Start learning with Holberton School
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#Methodology" 
            className="px-4 py-2 font-semibold text-white rounded-md border border-slate-800 bg-slate-950 hover:bg-slate-900 transition-all duration-200"
          >
            Methodology
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="p-6 rounded-xl border border-slate-800 text-center bg-slate-950 shadow-xl shadow-slate-950/40">
            <h3 className="text-3xl md:text-4xl font-bold text-violet-300 mb-2">10K+</h3>
            <p className="text-sm text-slate-300">Active agents</p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 text-center bg-slate-950 shadow-xl shadow-slate-950/40">
            <h3 className="text-3xl md:text-4xl font-bold text-violet-300 mb-2">99.9%</h3>
            <p className="text-sm text-slate-300">Uptime</p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 text-center bg-slate-950 shadow-xl shadow-slate-950/40">
            <h3 className="text-3xl md:text-4xl font-bold text-violet-300 mb-2">50M+</h3>
            <p className="text-sm text-slate-300">Tasks automated</p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 text-center bg-slate-950 shadow-xl shadow-slate-950/40">
            <h3 className="text-3xl md:text-4xl font-bold text-violet-300 mb-2">24/7</h3>
            <p className="text-sm text-slate-300">Support</p>
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default Hero;
