import React from 'react';
import {features} from '../data/features';
import {Astroid} from 'lucide-react';


const Features = () => {
  return (
    <section id="features-section" className="py-24 border-t border-slate-950/50 relative">
      {/* badge */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-12">
          <div className="flex justify-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs text-violet-300 rounded-full border border-violet-500/20 bg-violet-500/10">
              <Astroid className="w-2 h-2 fill-current" />
                Features
              <Astroid className="w-2 h-2 fill-current" />
            </span>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-12">
            Everything You Need to Build <br className="hidden md:block" />
            <span className="text-violet-300">With powerful AI agents</span>
          </h2>
        </div>

        {/* GRILLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-6">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="p-8 rounded-3xl border md:mx-8 lg:mx-12 border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40">
                {IconComponent && (
                  <div className="w-12 h-12 rounded-xl bg-violet-500 border border-violet-500/20 flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {item.description}
                </p>
              </div>
              );
            })}
        </div>


    </section>
  );
};

export default Features;
