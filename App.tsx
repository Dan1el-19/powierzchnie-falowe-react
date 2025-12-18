import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, RotateCcw, Home, Play } from 'lucide-react';
import { presentations } from './data/slides';
import { Slide } from './components/Slide';
import { Presentation } from './types';

const App: React.FC = () => {
  const [selectedPresentation, setSelectedPresentation] = useState<Presentation | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // --- SELECTION MENU LOGIC ---
  if (!selectedPresentation) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black z-0"></div>
         
         <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="z-10 text-center mb-12"
         >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
              Fizyka - Prezentacje
            </h1>
         </motion.div>

         <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
            {presentations.map((deck, idx) => (
              <motion.button
                key={deck.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => {
                  setSelectedPresentation(deck);
                  setCurrentSlideIndex(0);
                }}
                className="group relative bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
              >
                <div className="absolute top-6 right-6 p-2 bg-blue-500/10 rounded-full text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Play size={24} fill="currentColor" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200">{deck.title}</h2>
                <p className="text-slate-400 group-hover:text-slate-300">{deck.description}</p>
                <div className="mt-6 flex items-center text-sm text-slate-500 font-mono">
                  {deck.slides.length} slajdów
                </div>
              </motion.button>
            ))}
         </div>
         
         <footer className="absolute bottom-6 text-slate-600 text-sm">
            Autor: Daniel Łodyga
         </footer>
      </div>
    );
  }

  // --- PRESENTATION LOGIC ---
  return <PresentationView presentation={selectedPresentation} slideIndex={currentSlideIndex} setSlideIndex={setCurrentSlideIndex} onExit={() => setSelectedPresentation(null)} />;
};

interface PresentationViewProps {
  presentation: Presentation;
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
  onExit: () => void;
}

const PresentationView: React.FC<PresentationViewProps> = ({ presentation, slideIndex, setSlideIndex, onExit }) => {
  const totalSlides = presentation.slides.length;

  const nextSlide = useCallback(() => {
    setSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides, setSlideIndex]);

  const prevSlide = useCallback(() => {
    setSlideIndex((prev) => Math.max(prev - 1, 0));
  }, [setSlideIndex]);

  const resetPresentation = () => {
      setSlideIndex(0);
  }

  const toggleFullScreen = () => {
      if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        // Optional: onExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const progress = ((slideIndex + 1) / totalSlides) * 100;

  // Global click handler to advance slides
  const handleGlobalClick = (e: React.MouseEvent) => {
    nextSlide();
  };

  return (
    <div 
      className="relative w-screen h-screen bg-slate-900 overflow-hidden flex flex-col text-white font-sans selection:bg-blue-500 selection:text-white cursor-pointer"
      onClick={handleGlobalClick}
    >
      
      {/* Toolbar */}
      <div className="absolute top-4 right-4 z-50 flex gap-2" onClick={(e) => e.stopPropagation()}>
           <button onClick={onExit} className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors" title="Wróć do menu">
               <Home size={20} className="text-slate-300" />
           </button>
           <button onClick={toggleFullScreen} className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors" title="Pełny ekran">
               <Maximize2 size={20} className="text-slate-300" />
           </button>
      </div>

      {/* Main Slide Area */}
      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${presentation.id}-${slideIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Slide data={presentation.slides[slideIndex]} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Controls & Progress */}
      <footer 
        className="h-16 w-full bg-slate-950/50 backdrop-blur-sm border-t border-slate-800 flex items-center justify-between px-6 z-40 cursor-auto"
        onClick={(e) => e.stopPropagation()} // Prevent clicking footer from advancing slide
      >
        
        <div className="text-slate-500 text-sm font-mono w-24">
          {slideIndex + 1} / {totalSlides}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={prevSlide}
            disabled={slideIndex === 0}
            className="p-3 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={resetPresentation}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all"
            title="Restart"
          >
             <RotateCcw size={18} />
          </button>

          <button 
            onClick={nextSlide}
            disabled={slideIndex === totalSlides - 1}
            className="p-3 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Empty spacer to balance layout */}
        <div className="w-24"></div>

        {/* Progress Bar (Absolute Bottom) */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 to-emerald-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </footer>
    </div>
  );
};

export default App;