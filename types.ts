export enum VisualizationType {
  NONE = 'NONE',
  SPHERICAL_VS_PLANE = 'SPHERICAL_VS_PLANE',
  RAY_SURFACE = 'RAY_SURFACE',
  HUYGENS = 'HUYGENS',
  REFLECTION = 'REFLECTION',
  REFLECTION_PLANE = 'REFLECTION_PLANE',
  // New visualizations
  REFRACTION_INTRO = 'REFRACTION_INTRO',
  CRITICAL_ANGLE = 'CRITICAL_ANGLE',
  TIR_FIBER = 'TIR_FIBER',
  // Missing visualizations for presentation 1
  SIMPLE_WAVEFRONT = 'SIMPLE_WAVEFRONT',
  ECHOLOCATION = 'ECHOLOCATION'
}

export interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  content?: string;
  bullets?: string[];
  footer?: string;
  visualization?: VisualizationType;
  isTitleSlide?: boolean;
}

export interface Presentation {
  id: string;
  title: string;
  description: string;
  slides: SlideContent[];
}