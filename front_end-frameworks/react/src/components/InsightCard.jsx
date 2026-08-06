// src/components/InsightCard.jsx
import React from 'react';


const InsightCard = ({ insight, index }) => {
  const isFeatured = index === 0;

  return (
    <div 
      // Si c'est le 1er (isFeatured), on lui dit de prendre 2 colonnes (md:col-span-2) et de s'afficher à l'horizontale (md:flex)
      className={`group rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden hover:border-violet-500/30 transition-all duration-300 ${
        isFeatured ? 'md:col-span-2 md:flex' : ''
      }`}
    >
      {/* image */}
      <div className={`overflow-hidden ${isFeatured ? 'md:w-1/2' : 'h-48'}`}>
        <img 
          src={insight.image} 
          alt={insight.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/*  text */}
      <div className={`p-8 ${isFeatured ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
        <span className="text-violet-400 text-xs font-bold uppercase tracking-wider mb-2 block">
          {insight.category}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {insight.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {insight.description}
        </p>
      </div>
      
    </div>
  );
};

export default InsightCard;
