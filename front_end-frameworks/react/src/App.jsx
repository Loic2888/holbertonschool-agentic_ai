import { CheckCircle2 } from 'lucide-react';
import Header from './components/Header';
import './global.css';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import Insights from './sections/Insights';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Insights />
        <Contact />
        <Footer />
      </main>



    </div>
  );
}

export default App;
