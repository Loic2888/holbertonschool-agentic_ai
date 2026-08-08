import Header from './components/layout/Header';
import './global.css';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Features from './components/sections/Features';
import Insights from './components/sections/Insights';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

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
