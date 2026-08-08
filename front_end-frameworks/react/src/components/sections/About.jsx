import Badge from '../ui/Badge';
import {steps} from '../../data/steps';
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  return (
    <section id="about-section" className="py-24 border-t border-slate-950/50 relative">
            {/* badge */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-12">
          <Badge text="What is agentic AI?" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <SectionTitle 
          mainText="AI that does more than answer" 
          highlightText="It acts with purpose" 
        />

        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-20">
          Agentic AI refers to artificial intelligence systems dessigned to pursue goals, make decisions, use tools, and adapt their actions across multiple steps. Instead of only responding to a single prompt, an AI agent can break down a task, plan a strategy, execute actions, evaluate result, and continue until the objective is reached.
        </p>
      </div>

      {/* --- CONTENU PRINCIPAL EN 2 COLONNES --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* COLONNE GAUCHE */}
        <div className="p-12 rounded-3xl border border-slate-800 bg-slate-950 md:ml-8 lg:ml-12 shadow-xl shadow-slate-950/40">
          {/* 1ère section */}
          <h3 className="text-2xl font-bold text-white mb-4">
            Traditional AI
          </h3>
          <p className="text-slate-500 leading-relaxed">
            Responds to direct instructions, generates content, answers questions, or analyse information within a limited interaction.
          </p>
          {/* Le trait de séparation */}
          <div className="w-full h-px bg-slate-800 my-8"></div>
          {/* 2ème section */}
          <h3 className="text-xl font-bold text-violet-300 mb-4">
            Agentic AI
          </h3>
          <p className="text-slate-500 leading-relaxed">
            Understands a goal, chooses actions, uses external tools, follows a plan, and adjusts its behavior based on feedback.
          </p>
        </div>

        {/* COLONNE DROITE steps */}
        <div>
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 md:gap-8">
              {/* Cercle + Ligne */}
              <div className="flex flex-col items-center">
                {/* Cercle violet */}
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-violet-500/40 relative z-10">
                  {index + 1}
                </div>
                {/* Le trait qui relie */}
                {index !== steps.length - 1 && (
                  <div className="w-[2px] grow bg-gradient-to-b from-violet-500 to-violet-500/10"></div>
                )}
              </div>

              {/* Le contenu de l'étape */}
              <div className={`pt-2 md:pt-3 ${index !== steps.length - 1 ? 'pb-8' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>

    </section>
  );
};

export default About;
