import { useState, useEffect } from 'react';
import { InteractiveBackground } from './components/InteractiveBackground';
import { IntroPortal } from './components/IntroPortal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PortfolioAI } from './components/PortfolioAI';
import { EasterEggModal } from './components/EasterEggModal';

export default function App() {
  const [hasEnteredWorld, setHasEnteredWorld] = useState<boolean>(false);
  const [isAIOpen, setIsAIOpen] = useState<boolean>(false);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState<boolean>(false);

  // Sync with browser history for natural Back/Forward behavior
  const handleEnterWorld = () => {
    window.history.pushState({ enteredWorld: true }, '', '#home');
    setHasEnteredWorld(true);
  };

  const handleExitWorld = () => {
    setHasEnteredWorld(false);
    setIsAIOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (window.history.state?.enteredWorld) {
      window.history.back();
    }
  };

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (e.state?.enteredWorld) {
        setHasEnteredWorld(true);
      } else {
        setHasEnteredWorld(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Background Interactive Particles & Grid */}
      <InteractiveBackground />

      {/* Opening "ENTER MY WORLD" Portal Experience */}
      {!hasEnteredWorld && (
        <IntroPortal onEnter={handleEnterWorld} />
      )}

      {/* Main Portfolio Surface */}
      <div className={`transition-opacity duration-1000 ${hasEnteredWorld ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Navigation with Exit World action */}
        <Navbar
          onOpenAI={() => setIsAIOpen(true)}
          onOpenEasterEgg={() => setIsEasterEggOpen(true)}
          onExitWorld={handleExitWorld}
        />

        {/* Content Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Certificates />
          <Contact />
        </main>

        {/* Footer */}
        <Footer 
          onOpenEasterEgg={() => setIsEasterEggOpen(true)} 
          onExitWorld={handleExitWorld}
        />

        {/* Grounded Portfolio AI Assistant */}
        <PortfolioAI
          isOpen={isAIOpen}
          onOpen={() => setIsAIOpen(true)}
          onClose={() => setIsAIOpen(false)}
        />

        {/* Secret Developer Terminal Easter Egg */}
        <EasterEggModal
          isOpen={isEasterEggOpen}
          onOpen={() => setIsEasterEggOpen(true)}
          onClose={() => setIsEasterEggOpen(false)}
        />

      </div>

    </div>
  );
}
