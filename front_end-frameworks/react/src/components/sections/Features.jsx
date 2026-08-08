import {features} from '../../data/features';
import Badge from '../ui/Badge';
import SectionTitle from '../ui/SectionTitle';


const Features = () => {
  return (
    <section id="features-section" className="py-24 border-t border-slate-950/50 relative">
      {/* badge */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-12">
          {/* Badge */}
          <div className="flex justify-center mb-12">
            <Badge text="Features" />
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-24">
          <SectionTitle 
            mainText="Everything You Need to Build" 
            highlightText="With powerful AI agents" 
          />
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
                <p className="text-sm text-slate-500">
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
