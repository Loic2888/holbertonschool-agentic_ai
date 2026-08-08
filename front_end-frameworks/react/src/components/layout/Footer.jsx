import Logo from '../ui/brandLogo';
import SocialButton from '../ui/SocialButton';


const Footer = () => {
  // --- GÉNÉRATION DYNAMIQUE DE L'ANNÉE ---
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-slate-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* === CONTENEUR PRINCIPAL (Gauche + Droite) === */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">

          {/* ========================================== */}
          {/* --- PARTIE GAUCHE (Logo + Réseaux Sociaux) - */}
          {/* ========================================== */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:w-1/3">
            
            {/* Logo et Texte */}
            <div>
              <div>
                <Logo className="justify-center lg:justify-start mb-3" />
              </div>
              {/* Ton style : text-xs */}
              <p className="text-xs text-slate-500">
                Explore the future of development with Agentic AI
              </p>
            </div>

            {/* Boutons Réseaux Sociaux */}
            <div className="flex items-center gap-2">
              
              <SocialButton href="https://instagram.com" ariaLabel="Instagram">
                <svg className="w-4 h-4 stroke-slate-300 group-hover:stroke-white transition-colors fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </SocialButton>

              <SocialButton href="https://tiktok.com" ariaLabel="TikTok">
                <svg className="w-4 h-4 fill-slate-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </SocialButton>

              <SocialButton href="https://x.com" ariaLabel="X">
                <svg className="w-4 h-4 fill-slate-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </SocialButton>

              <SocialButton href="https://youtube.com" ariaLabel="YouTube">
                <svg className="w-4 h-4 fill-slate-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </SocialButton>

            </div>
          </div>

          {/* ========================================== */}
          {/* --- PARTIE DROITE (Les 3 colonnes) ------- */}
          {/* ========================================== */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
            
            {/* Colonne 1 : Navigation (Liens Internes) */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold mb-2">Navigation</h3>
              <a href="#hero-section" className="text-sm text-slate-500 hover:text-white transition-colors">Hero Section</a>
              <a href="#about-section" className="text-sm text-slate-500 hover:text-white transition-colors">About</a>
              <a href="#features-section" className="text-sm text-slate-500 hover:text-white transition-colors">Features</a>
              <a href="#insights-section" className="text-sm text-slate-500 hover:text-white transition-colors">Insights</a>
              <a href="#contact-section" className="text-sm text-slate-500 hover:text-white transition-colors">Contact</a>
            </div>

            {/* Colonne 2 : Holberton School (Liens Externes) */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold mb-2">Holberton School</h3>
              <a href="https://www.holbertonschool.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors">
                Official Website
              </a>
              <a href="https://www.holbertonschool.com/about-us" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors">
                About Us
              </a>
              <a href="https://www.holbertonschool.com/campuses" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors">
                Campuses
              </a>
            </div>

            {/* Colonne 3 : Curriculum (Liens Externes) */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold mb-2">Curriculum</h3>
              <a href="https://www.holbertonschool.com/foundations" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors">
                Foundations
              </a>
              <a href="https://www.holbertonschool.com/specializations" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors">
                Specializations
              </a>
              <a href="https://www.holbertonschool.com/methodology" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors">
                Methodology
              </a>
            </div>

          </div>

        </div>

        {/* ========================================== */}
        {/* --- LIGNE DU BAS (Copyright dynamique) --- */}
        {/* ========================================== */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {currentYear} Loïc Cerqueira.</p>
          <p>Built for the Holberton School Front-end Frameworks curriculum.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
