// src/sections/Insights.jsx
import { useState, useEffect } from 'react';
import { getInsights } from '../../services/insightsService';
import InsightCard from '../cards/InsightCard';
import Badge from '../ui/Badge';
import SectionTitle from '../ui/SectionTitle';


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
          {/* Badge */}
          <div className="flex justify-center mb-12">
            <Badge text="Insights" />
          </div>

          <SectionTitle 
            mainText="Explore Agentic AI" 
            highlightText="Through real-world scenes" 
          />
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
