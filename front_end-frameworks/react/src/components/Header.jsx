import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950 border-b border-slate-950 text-white py-4">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-20 h-4 flex items-center justify-between">

        <div>
          <a href="/" className="flex items-center gap-3 text-slate-50 hover:opacity-80 transition-opacity">
            <div className="p-1.5 font-semibold rounded-lg bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/40">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>
            <span className="text-base font-bold">Agentic AI</span>
          </a>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden md:block">
            <ul className="flex space-x-8 font-medium">
              <li>
                <a href="#about-section" className="text-sm text-slate-500 hover:text-violet-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#features-section" className="text-sm text-slate-500 hover:text-violet-400 transition-colors">Features</a>
              </li>
              <li>
                <a href="#insights-section" className="text-sm text-slate-500 hover:text-violet-400 transition-colors">Insights</a>
              </li>
              <li>
                <a href="#contact-section" className="text-sm text-slate-500 hover:text-violet-400 transition-colors">Contact</a>
              </li>
            </ul>
          </nav>

          <div>
            <a 
              href="#signup" 
              className="px-3 py-1.5 font-semibold rounded-md text-sm text-white bg-violet-500 hover:bg-violet-600 shadow-lg shadow-violet-500/40"
            >
              Enroll now
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
