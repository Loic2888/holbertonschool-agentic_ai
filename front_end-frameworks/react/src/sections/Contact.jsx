import React, {useState} from 'react';
import { ArrowRight, Sparkles, FolderCode, UsersRound, Astroid, User, Mail, AtSign } from 'lucide-react';


const Contact = () => {
  {/* STATE */}
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback(null);

    // Simulation d'envoi
    setTimeout(() => {
      setIsSending(false);
      setFeedback("Message sent successfully! We'll be in touch soon.");
      setFormData({ fullName: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact-section" className="py-24 border-t relative">

      {/* 1. LE FOND LUMINEUX */}
      <div className="absolute inset-0 -z-0 pointer-events-none overflow-hidden">
        
        {/* Lueur Violette */}
        <div className="absolute -top-10 -left-80 md:-top-10 md:-left-80 w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] bg-violet-500/20 rounded-full blur-[150px] md:blur-[250px]"></div>
        <div className="absolute top-0 left-40 md:top-0 md:left-50 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-violet-500/30 rounded-full blur-[60px] md:blur-[90px]"></div>

        {/* Lueur Bleue */}
        <div className="absolute -bottom-100 -right-20 md:-bottom-100 md:-right-40 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-blue-800/20 rounded-full blur-[150px] md:blur-[250px]"></div>
        <div className="absolute bottom-50 right-10 md:bottom-60 md:right-20 w-[150px] md:w-[250px] h-[150px] md:h-[250px] bg-blue-500/30 rounded-full blur-[60px] md:blur-[90px]"></div>

        {/* Grille */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        {/* Fond degradé */}
        <div className="absolute bottom-0 left-0 right-0 h-40 md:h-64 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* badge */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-12">
        <div className="flex justify-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs text-violet-300 rounded-full border border-violet-500/20 bg-violet-500/10">
            <Astroid className="w-2 h-2 fill-current" />
              Start your AI journey
            <Astroid className="w-2 h-2 fill-current" />
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-12">
          Ready to Explore <br className="hidden md:block" />
          <span className="text-violet-300">Agentic AI?</span>
        </h2>
      </div>

      {/* Boutons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a 
          href="#Started" 
          className="flex items-center gap-2 px-4 py-2 font-semibold text-white rounded-md bg-violet-500 hover:bg-violet-600 shadow-xl shadow-violet-500/30 transition-all duration-200"
        >
          Enroll at Holberton School
          <ArrowRight className="w-5 h-5" />
        </a>
        <a 
          href="#Methodology" 
          className="px-4 py-2 relative z-10 font-semibold text-white rounded-md border border-slate-800 bg-slate-950 hover:bg-slate-900/50 transition-all duration-200"
        >
          Need more information?
        </a>
      </div>

      {/* --- SHORT LIST OF HIGHLIGHTS --- */}
      <div className="flex flex-col sm:flex-row items-center justify-center mb-20 gap-6 sm:gap-8 text-sm text-slate-400">
        {/* Highlight 1 */}
        <div className="flex items-center gap-2">
          <FolderCode className="w-4 h-4 text-violet-500" />
          <span>Project-based learning</span>
        </div>
        {/* Highlight 2 */}
        <div className="flex items-center gap-2">
          <UsersRound className="w-4 h-4 text-violet-500" />
          <span>Peer learning environnement</span>
        </div>
        {/* Highlight 3 */}
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-violet-500" />
          <span>AI-powered workflows</span>
        </div>
      </div>

      {/* --- FORMULAIRE --- */}
      <div className="max-w-xl mx-auto relative z-10 p-8 rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40">
        {/* Message de succès (Feedback) */}
        {feedback && (
          <div className="mb-6 p-4 rounded-xl border border-green-900 bg-green-950/30 text-green-400 text-center font-medium">
            {feedback}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Champ : Full Name */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-violet-500" />
              <label className="text-white font-semibold">Full name</label>
            </div>
            <input
              type="text"
              name="fullName"
              placeholder="Your full name..."
              autoComplete="off"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-slate-800 rounded-md text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
            />
          </div>

          {/* Champ : Email */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <AtSign className="w-5 h-5 text-violet-500" />
              <label className="text-white font-semibold">Email</label>
            </div>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-slate-800 rounded-md text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
            />
          </div>

          {/* Champ : Message */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-violet-500" />
              <label className="text-white font-semibold">Message</label>
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your project or learning goals!"
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 bg-black border border-slate-800 rounded-md text-white placeholder-slate-600 focus:outline-none focus:border-slate-950 focus:ring-1 focus:ring-violet-500 transition-all resize-none"
            ></textarea>
          </div>

          {/* Bouton de Soumission */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full mt-2 flex justify-center items-center gap-2 py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-lg shadow-lg shadow-violet-500/40 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? (
              "Sending..."
            ) : (
              <>
                Send message
              </>
            )}
          </button>
          {/* Description Slate 500 */}
          <p className="text-slate-500 text-sm text-center">
            Please fill all required fields.
          </p>
        </form>
      </div>

    </section>
  );
};

export default Contact;
