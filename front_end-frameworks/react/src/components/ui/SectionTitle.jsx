import PropTypes from 'prop-types';


const SectionTitle = ({ mainText, highlightText, className = 'mb-12' }) => {
  return (
    <h2 className={`text-4xl md:text-5xl font-black text-white tracking-tight leading-none ${className}`}>
      {mainText}
      
      {/* On n'affiche la suite que si un highlightText a été fourni */}
      {highlightText && (
        <>
          {/* Un petit espace pour la version mobile où le <br> est caché */}
          {' '}
          <br className="hidden md:block" />
          <span className="text-violet-300">{highlightText}</span>
        </>
      )}
    </h2>
  );
};

SectionTitle.propTypes = {
  mainText: PropTypes.string.isRequired, // Le texte principal (blanc)
  highlightText: PropTypes.string,       // Le texte mis en valeur (violet)
  className: PropTypes.string,           // Pour modifier la marge si besoin
};

export default SectionTitle;
