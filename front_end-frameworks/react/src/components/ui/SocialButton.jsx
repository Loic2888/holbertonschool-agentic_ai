import PropTypes from 'prop-types';


const SocialButton = ({ href, ariaLabel, children }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={ariaLabel} 
      className="p-2 bg-black text-white border border-slate-800 rounded-lg hover:bg-slate-900 hover:border-slate-400 transition-all group"
    >
      {/* C'est ici que le SVG sera injecté ! */}
      {children}
    </a>
  );
};

SocialButton.propTypes = {
  href: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SocialButton;
