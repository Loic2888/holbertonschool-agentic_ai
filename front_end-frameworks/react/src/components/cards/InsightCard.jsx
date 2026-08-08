// src/components/InsightCard.jsx
import PropTypes from 'prop-types';


const InsightCard = ({ insight, index }) => {
  const isFeatured = index === 0;

  return (
    <div 
      // Le conteneur doit être "relative" et avoir une hauteur minimale pour qu'on voie le fond
      className={`group relative rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden hover:border-violet-500/30 transition-all duration-300 min-h-[350px] md:min-h-[400px] flex flex-col justify-end ${
        isFeatured ? 'md:col-span-2' : ''
      }`}
    >
      {/* 1. L'IMAGE EN ARRIÈRE-PLAN */}
      <img 
        src={insight.image} 
        alt={insight.title} 
        // absolute inset-0 la force à prendre toute la taille de la carte en arrière-plan (z-0)
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0"
      />

      {/* 2. LE DÉGRADÉ SOMBRE (Pour que le texte blanc soit lisible sur l'image) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>

      {/* 3. LE TEXTE */}
      <div className="relative z-20 p-8 flex flex-col items-start mt-auto">
        
        {/* Category */}
        <span className="px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs tracking-wider mb-4 backdrop-blur-sm">
          {insight.category}
        </span>
        
        {/* Titre */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {insight.title}
        </h3>
        
        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed">
          {insight.description}
        </p>
      </div>
      
    </div>
  );
};

{/* validation des props */}
InsightCard.propTypes = {
  insight: PropTypes.shape({
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default InsightCard;
