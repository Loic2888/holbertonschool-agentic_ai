// src/sections/Insights.jsx
import React, { useState, useEffect } from 'react';
import {Astroid} from 'lucide-react';
import { getInsights } from '../services/insightsService';
import InsightCard from '../components/InsightCard';


const Insights = () => {
  // --- 1. STATE ---
  const [insightsList, setInsightsList] = useState([]);
  const [error, setError] = useState(null);

  // --- 2. USEEFFECT ---
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getInsights();
        setInsightsList(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadData();
  }, []);

  return (
    <section id="insights-section" className="py-24 bg-black relative">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* EN-TÊTE */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs text-violet-300 mb-6 rounded-full border border-violet-500/20 bg-violet-500/10">
              <Astroid className="w-2 h-2 fill-current" />
              Insights
              <Astroid className="w-2 h-2 fill-current" />
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-24">
            Explore Agentic AI <br className="hidden md:block" />
            <span className="text-violet-300">Through real-world scenes</span>
          </h2>
        </div>

        {/* ZONE DE MESSAGE D'ERREUR */}
        {error && (
          <div className="mb-12 p-4 rounded-xl border border-red-900 bg-red-950/30 text-red-400 text-center">
            <p className="font-semibold">Oops! Something went wrong.</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* GRILLE D'INSIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsList.map((item, index) => (
            <InsightCard 
              key={index} 
              insight={item}
              index={index}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Insights;
