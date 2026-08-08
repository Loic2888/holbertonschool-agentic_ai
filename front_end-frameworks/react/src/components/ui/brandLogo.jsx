import { BrainCircuit } from 'lucide-react';
import PropTypes from 'prop-types';

const Logo = ({ className = '' }) => {
  return (
    <a href="/" className={`flex items-center gap-3 text-slate-50 hover:opacity-80 transition-opacity ${className}`}>
      <div className="p-1.5 font-semibold rounded-lg bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/40">
        <BrainCircuit className="w-5 h-5 text-white" />
      </div>
      <span className="text-base font-bold">Agentic AI</span>
    </a>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
