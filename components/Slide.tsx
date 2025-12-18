import React from 'react';
import { motion } from 'framer-motion';
import { SlideContent } from '../types';
import { Visualizations } from './Visualizations';

interface SlideProps {
  data: SlideContent;
}

export const Slide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-6 md:px-12 py-4 md:py-8">
      {/* Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full text-center mb-6"
      >
        <h1 className={`font-bold text-white mb-2 ${data.isTitleSlide ? 'text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 py-2' : 'text-2xl md:text-4xl'}`}>
          {data.title}
        </h1>
        {data.subtitle && (
          <h2 className="text-lg md:text-2xl text-blue-200 font-light">
            {data.subtitle}
          </h2>
        )}
      </motion.div>

      {/* Body */}
      <div className={`w-full grid ${data.isTitleSlide ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'} gap-8 items-start`}>
        
        {/* Text Content */}
        {(data.content || data.bullets) && (
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${data.isTitleSlide ? 'text-center w-full mt-8' : 'text-left h-full flex flex-col justify-center'}`}
          >
            {data.content && (
              <p className="text-base md:text-xl text-slate-300 leading-relaxed mb-6">
                {data.content}
              </p>
            )}
            
            {data.bullets && (
              <ul className="space-y-3">
                {data.bullets.map((bullet, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    className="flex items-start text-base md:text-lg text-slate-200"
                  >
                    <span className="text-blue-500 mr-3 mt-1.5 min-w-[6px]">•</span>
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        )}

        {/* Visualizations Area */}
        {(!data.isTitleSlide && data.visualization && data.visualization !== 'NONE') && (
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full flex flex-col gap-4"
          >
            {/* Content Render */}
            <div className="relative w-full">
               <Visualizations type={data.visualization} />
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer / Author */}
      {data.footer && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 md:bottom-16 text-slate-500 text-sm"
        >
          {data.footer}
        </motion.div>
      )}
    </div>
  );
};