import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';


const Button = ({ text, href, variant = 'primary', showIcon = false }) => {
  // Styles de base communs aux deux boutons
  const baseStyle = "flex items-center justify-center gap-2 px-4 py-2 font-semibold text-white rounded-md transition-all duration-200";
  
  // Styles spécifiques
  const primaryStyle = "bg-violet-500 hover:bg-violet-600 shadow-lg shadow-violet-500/40";
  const secondaryStyle = "border border-slate-800 bg-slate-950 hover:bg-slate-900";

  return (
    <a 
      href={href} 
      className={`${baseStyle} ${variant === 'primary' ? primaryStyle : secondaryStyle}`}
    >
      {text}
      {/* N'affiche l'icône que si showIcon est true */}
      {showIcon && <ArrowRight className="w-5 h-5" />}
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired, // Le texte du bouton
  href: PropTypes.string.isRequired, // Le lien (#Started, etc.)
  variant: PropTypes.oneOf(['primary', 'secondary']), // Le style (violet ou sombre)
  showIcon: PropTypes.bool, // Afficher la flèche (true) ou non (false)
};

export default Button;
