import React from 'react';
import { motion } from 'framer-motion';
import { VisualizationType } from '../types';

interface VisualizationProps {
  type: VisualizationType;
}

export const Visualizations: React.FC<VisualizationProps> = ({ type }) => {
  const containerClass = "w-full h-64 md:h-96 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 p-4 relative overflow-hidden";

  switch (type) {
    case VisualizationType.SIMPLE_WAVEFRONT:
      return (
        <div className={containerClass}>
          <svg width="400" height="300" viewBox="0 0 400 300">
            {/* Source */}
            <circle cx="200" cy="150" r="8" fill="#f59e0b" />
            <text x="200" y="120" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="bold">Źródło</text>

            {/* Expading Ripples */}
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={`wave-${i}`}
                cx="200"
                cy="150"
                r="10"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 8, opacity: 0 }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "linear" }}
              />
            ))}
            
            <text x="200" y="280" textAnchor="middle" fill="#3b82f6" fontSize="14">Rozchodzące się czoła fali</text>
          </svg>
        </div>
      );

    case VisualizationType.ECHOLOCATION:
      return (
        <div className={containerClass}>
          <svg width="400" height="200" viewBox="0 0 400 200">
            {/* Emitter (Left) */}
            <path d="M60,100 L30,80 L30,120 Z" fill="#3b82f6" />
            <rect x="20" y="85" width="10" height="30" fill="#1e40af" rx="2" />
            <text x="45" y="145" textAnchor="middle" fill="#3b82f6" fontSize="12">Nadajnik</text>

            {/* Obstacle (Right) */}
            <rect x="340" y="60" width="20" height="80" fill="#94a3b8" rx="4" />
            <text x="350" y="160" textAnchor="middle" fill="#94a3b8" fontSize="12">Przeszkoda</text>

            {/* Outgoing Pulse (Yellow) */}
            <motion.path 
              d="M0,-25 Q15,0 0,25" 
              stroke="#f59e0b" strokeWidth="4" fill="none" strokeLinecap="round"
              initial={{ x: 70, y: 100, opacity: 0 }}
              animate={{ x: 330, opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 0 }}
            />

            {/* Returning Pulse (Red) */}
            <motion.path 
              d="M0,-25 Q-15,0 0,25" 
              stroke="#ef4444" strokeWidth="4" fill="none" strokeLinecap="round"
              initial={{ x: 330, y: 100, opacity: 0 }}
              animate={{ x: 70, opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2, delay: 2, repeat: Infinity, repeatDelay: 0 }}
            />
            
            <text x="200" y="40" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">
              <tspan fill="#f59e0b">Fala wysłana</tspan> {' → '} <tspan fill="#ef4444">Echo</tspan>
            </text>
          </svg>
        </div>
      );

    case VisualizationType.SPHERICAL_VS_PLANE:
      return (
        <div className={`${containerClass} flex-col md:flex-row gap-8`}>
          {/* Spherical Wave */}
          <div className="flex flex-col items-center">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="5" fill="#f59e0b" />
              {[1, 2, 3, 4].map((i) => (
                <motion.circle
                  key={`sphere-${i}`}
                  cx="100"
                  cy="100"
                  r={i * 20}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0.2, 1, 0], scale: [0.8, 1.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}
              <text x="100" y="190" textAnchor="middle" fill="white" fontSize="12">Fala Kulista</text>
            </svg>
          </div>
          {/* Plane Wave */}
          <div className="flex flex-col items-center">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
                </marker>
              </defs>
              <line x1="20" y1="100" x2="50" y2="100" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
              
              {[0, 1, 2, 3].map((i) => (
                <motion.line
                  key={`plane-${i}`}
                  x1={70 + i * 30} y1="40"
                  x2={70 + i * 30} y2="160"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 20, opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
                />
              ))}
              <text x="100" y="190" textAnchor="middle" fill="white" fontSize="12">Fala Płaska</text>
            </svg>
          </div>
        </div>
      );

    case VisualizationType.RAY_SURFACE:
      return (
        <div className={containerClass}>
          <svg width="300" height="200" viewBox="0 0 300 200">
            <defs>
              <marker id="ray-arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
              </marker>
            </defs>
            
            {/* Wave Surfaces */}
            <path d="M100,20 Q150,20 150,180" stroke="#3b82f6" strokeWidth="3" fill="none" />
            <path d="M140,20 Q190,20 190,180" stroke="#3b82f6" strokeWidth="3" fill="none" />
            <path d="M180,20 Q230,20 230,180" stroke="#3b82f6" strokeWidth="3" fill="none" />

            {/* Ray */}
            <line x1="50" y1="100" x2="145" y2="100" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#ray-arrow)" />
            
            {/* Right Angle Symbol */}
            <path d="M140,100 L135,100 L135,90" stroke="white" strokeWidth="1" fill="none" />

            <text x="70" y="90" fill="#f59e0b" fontSize="14">Promień</text>
            <text x="200" y="190" fill="#3b82f6" fontSize="14">Powierzchnie falowe</text>
          </svg>
        </div>
      );

    case VisualizationType.HUYGENS:
      return (
        <div className={containerClass}>
          <svg width="400" height="250" viewBox="0 0 400 250">
            {/* Original Wavefront */}
            <path d="M50,200 Q200,50 350,200" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="5,5" />
            <text x="200" y="120" fill="#3b82f6" fontSize="12" textAnchor="middle">Stare czoło fali</text>

            {/* Sources */}
            {[0.2, 0.35, 0.5, 0.65, 0.8].map((t, i) => {
               // Approximate points on the quad curve
               const x = 50 + t * 300;
               const y = 200 - 150 * Math.sin(t * Math.PI); 
               return (
                 <g key={i}>
                   <circle cx={x} cy={y} r="3" fill="white" />
                   <motion.circle 
                      cx={x} cy={y} r="30" 
                      stroke="rgba(255,255,255,0.3)" 
                      fill="none" 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 2, repeat: Infinity }}
                   />
                 </g>
               )
            })}

            {/* New Wavefront (Envelope) */}
            <motion.path 
              d="M50,170 Q200,20 350,170" 
              stroke="#f59e0b" 
              strokeWidth="3" 
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <text x="200" y="50" fill="#f59e0b" fontSize="12" textAnchor="middle">Nowe czoło fali</text>
          </svg>
        </div>
      );

    case VisualizationType.REFLECTION:
      return (
        <div className={containerClass}>
           <svg width="400" height="300" viewBox="0 0 400 300">
             <defs>
              <marker id="arrow-sm" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="white" />
              </marker>
            </defs>
            {/* Surface */}
            <rect x="50" y="250" width="300" height="10" fill="#475569" />
            <line x1="50" y1="250" x2="350" y2="250" stroke="#94a3b8" strokeWidth="2" />

            {/* Normal */}
            <line x1="200" y1="50" x2="200" y2="250" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,5" />
            <text x="205" y="60" fill="#94a3b8" fontSize="12">Normalna</text>

            {/* Incident Ray */}
            <motion.line 
              x1="50" y1="100" x2="200" y2="250" 
              stroke="#f59e0b" strokeWidth="3" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            />
            {/* Reflected Ray */}
            <motion.line 
              x1="200" y1="250" x2="350" y2="100" 
              stroke="#3b82f6" strokeWidth="3" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.5, repeat: Infinity, repeatDelay: 1 }}
            />

            {/* Angles */}
            <path d="M170,220 Q185,240 200,220" stroke="white" fill="none" opacity="0.5" />
            <text x="180" y="210" fill="white">α</text>

            <path d="M230,220 Q215,240 200,220" stroke="white" fill="none" opacity="0.5" />
            <text x="215" y="210" fill="white">β</text>

            <text x="80" y="280" fill="white" fontSize="14">Powierzchnia odbijająca</text>
           </svg>
        </div>
      );
      
      case VisualizationType.REFLECTION_PLANE:
        return (
          <div className={containerClass}>
             <svg width="300" height="200" viewBox="0 0 300 200">
              {/* Wall */}
              <rect x="250" y="20" width="10" height="160" fill="#64748b" />
              
              {/* Incoming Waves */}
              {[0, 1, 2].map((i) => (
                <motion.line
                  key={`inc-${i}`}
                  x1={50 + i * 30} y1="50"
                  x2={50 + i * 30} y2="150"
                  stroke="#f59e0b" strokeWidth="2"
                  initial={{ x: 0, opacity: 1 }}
                  animate={{ x: 200, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                />
              ))}

              {/* Reflected Waves */}
               {[0, 1, 2].map((i) => (
                <motion.path
                  key={`ref-${i}`}
                  d={`M250,50 L${150 - i*30},50 M250,150 L${150 - i*30},150`} // Just schematic lines moving back
                  stroke="none"
                  fill="none"
                />
              ))}
               {/* Simplified concept for Huygens reflection: Points hitting wall become sources */}
               <circle cx="250" cy="100" r="5" fill="#f59e0b">
                  <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
               </circle>
               <motion.circle 
                 cx="250" cy="100" r="10" stroke="#3b82f6" fill="none"
                 initial={{ r: 5, opacity: 1}}
                 animate={{ r: 80, opacity: 0 }}
                 transition={{ duration: 2, repeat: Infinity }}
               />
               <text x="150" y="190" fill="white" fontSize="12" textAnchor="middle">Fale elementarne od przeszkody</text>
             </svg>
          </div>
        )
    
    // --- NEW VISUALIZATIONS FOR TOPIC 2 ---

    case VisualizationType.REFRACTION_INTRO:
      return (
        <div className={containerClass}>
          <svg width="400" height="300" viewBox="0 0 400 300">
             {/* Mediums */}
             <rect x="0" y="0" width="400" height="150" fill="#0f172a" fillOpacity="0.5" />
             <text x="10" y="30" fill="#94a3b8" fontSize="12">Ośrodek 2 (Szybki - Powietrze)</text>
             <rect x="0" y="150" width="400" height="150" fill="#1e3a8a" fillOpacity="0.3" />
             <text x="10" y="280" fill="#93c5fd" fontSize="12">Ośrodek 1 (Wolny - Woda)</text>
             
             {/* Interface */}
             <line x1="0" y1="150" x2="400" y2="150" stroke="#94a3b8" strokeWidth="1" />
             {/* Normal */}
             <line x1="200" y1="20" x2="200" y2="280" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />

             {/* Incident Ray (From Water) */}
             <motion.line 
               x1="100" y1="250" x2="200" y2="150" 
               stroke="#f59e0b" strokeWidth="3"
             />
             
             {/* Refracted Ray (Bends away from normal) */}
             <motion.line 
               x1="200" y1="150" x2="320" y2="30" 
               stroke="#3b82f6" strokeWidth="3"
               strokeOpacity="0.8"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
             />

             {/* Weak Reflection */}
             <motion.line 
               x1="200" y1="150" x2="300" y2="250" 
               stroke="#f59e0b" strokeWidth="1.5"
               strokeOpacity="0.4"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
             />
             
             <text x="250" y="100" fill="#3b82f6" fontSize="12">Załamanie</text>
             <text x="250" y="200" fill="#f59e0b" fontSize="12" opacity="0.6">Słabe odbicie</text>
          </svg>
        </div>
      );

    case VisualizationType.CRITICAL_ANGLE:
      return (
        <div className={containerClass}>
           <div className="absolute top-2 left-2 text-xs text-white bg-black/50 px-2 py-1 rounded">
             Kąt padania = Kąt graniczny
           </div>
           <svg width="400" height="300" viewBox="0 0 400 300">
             <rect x="0" y="0" width="400" height="150" fill="#0f172a" fillOpacity="0.5" />
             <rect x="0" y="150" width="400" height="150" fill="#1e3a8a" fillOpacity="0.3" />
             <line x1="0" y1="150" x2="400" y2="150" stroke="#94a3b8" strokeWidth="1" />
             <line x1="200" y1="20" x2="200" y2="280" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />

             {/* Incident Ray (Critical Angle) */}
             <line x1="80" y1="250" x2="200" y2="150" stroke="#f59e0b" strokeWidth="3" />

             {/* Refracted Ray (Along the surface 90deg) */}
             <motion.line 
               x1="200" y1="148" x2="380" y2="148" 
               stroke="#ef4444" strokeWidth="4"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
             />
             <text x="250" y="140" fill="#ef4444" fontSize="12" fontWeight="bold">Kąt załamania = 90°</text>
          </svg>
        </div>
      );

    case VisualizationType.TIR_FIBER:
      return (
        <div className={containerClass}>
           <svg width="400" height="200" viewBox="0 0 400 200">
             {/* Fiber Core */}
             <rect x="10" y="60" width="380" height="80" rx="40" fill="#1e3a8a" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1" />
             <text x="200" y="105" fill="#3b82f6" fontSize="50" opacity="0.1" textAnchor="middle" fontWeight="bold">FIBER</text>

             {/* Zig Zag Path */}
             <motion.path
               d="M10,100 L80,70 L160,130 L240,70 L320,130 L390,100"
               fill="none"
               stroke="#f59e0b"
               strokeWidth="3"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
             
             {/* Bounce points */}
             <circle cx="80" cy="70" r="2" fill="white" />
             <circle cx="160" cy="130" r="2" fill="white" />
             <circle cx="240" cy="70" r="2" fill="white" />
             <circle cx="320" cy="130" r="2" fill="white" />

             <text x="200" y="180" textAnchor="middle" fill="#white" fontSize="14" className="text-white">Całkowite wewnętrzne odbicie w światłowodzie</text>
           </svg>
        </div>
      );

    default:
      return null;
  }
};