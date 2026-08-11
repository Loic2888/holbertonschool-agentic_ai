import { Astroid } from 'lucide-react';
import PropTypes from 'prop-types';

const Badge = ({ text, className = '' }) => {
  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 text-xs text-violet-300 rounded-full border border-violet-500/20 bg-violet-500/10 ${className}`}>
      <Astroid className="w-1.5 h-1.5 fill-current" />
      {text}
      <Astroid className="w-1.5 h-1.5 fill-current" />
    </span>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Badge;
