import { Presentation, SlideContent, VisualizationType } from '../types';

const presentation1: SlideContent[] = [
  {
    id: 1,
    title: "Powierzchnie falowe i zjawisko odbicia fali",
    subtitle: "Charakterystyka propagacji fal oraz zasada Huygensa",
    footer: "Autor: Daniel Łodyga",
    isTitleSlide: true
  },
  {
    id: 2,
    title: "Definicja powierzchni falowej",
    content: "Powierzchnia falowa to geometryczne miejsce punktów ośrodka, do których dotarło zaburzenie falowe w tym samym czasie i które drgają w tej samej fazie.",
    bullets: [
      "Wszystkie punkty na danej powierzchni falowej mają to samo wychylenie w danej chwili.",
      "Czoło fali to skrajna, najbardziej zewnętrzna powierzchnia falowa, wyznaczająca zasięg, do którego dotarła fala.",
      "W ośrodkach izotropowych (o stałych właściwościach w każdym kierunku) kształt powierzchni zależy bezpośrednio od geometrii źródła."
    ],
    visualization: VisualizationType.SIMPLE_WAVEFRONT
  },
  {
    id: 3,
    title: "Rodzaje fal a kształt powierzchni",
    content: "W zależności od źródła wyróżniamy różne kształty powierzchni falowych.",
    bullets: [
      "Fala kulista: Źródło punktowe w przestrzeni 3D. Energia rozchodzi się promieniście, a powierzchnie falowe tworzą koncentryczne sfery.",
      "Fala płaska: Powstaje w dużej odległości od źródła kulistego (lokalne przybliżenie) lub gdy źródłem jest drgająca płaszczyzna. Powierzchnie są równoległymi płaszczyznami.",
      "Fala cylindryczna (kołowa): Źródło liniowe lub punktowe na powierzchni płaskiej (np. kamień wrzucony do wody)."
    ],
    visualization: VisualizationType.SPHERICAL_VS_PLANE
  },
  {
    id: 4,
    title: "Promień fali vs Powierzchnia falowa",
    content: "Promień fali to abstrakcyjna linia wskazująca kierunek i zwrot rozchodzenia się energii fali.",
    bullets: [
      "Kluczowa zasada: Promienie falowe są zawsze prostopadłe do powierzchni falowych w każdym punkcie.",
      "W fali kolistej promienie rozbiegają się od źródła (dywergencja).",
      "W fali płaskiej promienie są równoległe do siebie, co oznacza, że energia nie rozprasza się geometrycznie wraz z odległością."
    ],
    visualization: VisualizationType.RAY_SURFACE
  },
  {
    id: 5,
    title: "Zasada Huygensa",
    content: "Christiaan Huygens (1678) podał geometryczny sposób konstruowania czoła fali w kolejnych chwilach czasowych.",
    bullets: [
      "Treść zasady: Każdy punkt ośrodka, do którego dociera czoło fali, staje się źródłem nowej, elementarnej fali kulistej.",
      "Konstrukcja: Nowe czoło fali jest obwiednią (powierzchnią styczną) do wszystkich fal elementarnych.",
      "Zastosowanie: Zasada ta wyjaśnia zjawiska odbicia, załamania oraz dyfrakcji (ugięcia) fali."
    ],
    visualization: VisualizationType.HUYGENS
  },
  {
    id: 6,
    title: "Prawo odbicia fali",
    content: "Zjawisko zmiany kierunku rozchodzenia się fali na granicy dwóch ośrodków, przy czym fala pozostaje w tym samym ośrodku.",
    bullets: [
      "Prawo odbicia: Kąt padania (α) jest ściśle równy kątowi odbicia (β).",
      "Definicja kątów: Kąty mierzymy zawsze pomiędzy promieniem a normalną (prostą prostopadłą do powierzchni w punkcie padania).",
      "Płaszczyzna padania: Promień padający, promień odbity i normalna leżą w jednej płaszczyźnie.",
      "Rodzaje: Odbicie zwierciadlane (gładka powierzchnia) vs odbicie rozproszone (szorstka powierzchnia)."
    ],
    visualization: VisualizationType.REFLECTION
  },
  {
    id: 7,
    title: "Odbicie fali płaskiej (Interpretacja Huygensa)",
    content: "Zasada Huygensa pozwala wyprowadzić prawo odbicia bez użycia promieni, analizując czoła fal.",
    bullets: [
      "Gdy czoło fali płaskiej pada na przeszkodę pod kątem, różne jego punkty docierają do powierzchni w różnym czasie.",
      "Punkty te stają się kolejno źródłami fal elementarnych.",
      "Złożenie (interferencja) tych fal tworzy nowe, płaskie czoło fali odbitej, które porusza się w kierunku zgodnym z prawem odbicia."
    ],
    visualization: VisualizationType.REFLECTION_PLANE
  },
  {
    id: 8,
    title: "Zastosowanie w życiu i technice",
    content: "Zjawisko odbicia jest fundamentem działania wielu systemów naturalnych i inżynieryjnych.",
    bullets: [
      "Echolokacja: Nietoperze i walenie emitują ultradźwięki i analizują ich echo, by lokalizować przeszkody i pożywienie.",
      "Sonar i Radar: Wykorzystują odbicie fal dźwiękowych (w wodzie) lub radiowych (w powietrzu) do nawigacji i detekcji.",
      "Medycyna (USG): Ultrasonografia wykorzystuje odbicie fal na granicy tkanek o różnej gęstości.",
      "Sejsmologia: Analiza fal sejsmicznych odbitych od warstw we wnętrzu Ziemi pozwala badać jej strukturę."
    ],
    visualization: VisualizationType.ECHOLOCATION
  },
  {
    id: 9,
    title: "Podsumowanie",
    bullets: [
      "Powierzchnia falowa to zbiór punktów o tej samej fazie; promienie są do niej zawsze prostopadłe.",
      "Fala kulista rozchodzi się ze źródła punktowego, fala płaska powstaje w dużej odległości lub ze źródła płaskiego.",
      "Zasada Huygensa: Każdy punkt czoła fali jest źródłem nowej fali cząstkowej - wyjaśnia to mechanizm propagacji.",
      "Prawo odbicia: Kąt padania równa się kątowi odbicia (α = β), mierzone względem normalnej."
    ],
    visualization: VisualizationType.NONE
  },
  {
    id: 10,
    title: "Dziękuję za uwagę",
    content: "",
    isTitleSlide: true,
    visualization: VisualizationType.NONE
  }
];

const presentation2: SlideContent[] = [
  {
    id: 1,
    title: "Całkowite wewnętrzne odbicie",
    subtitle: "Zjawisko na granicy ośrodków o różnej gęstości optycznej",
    content: "Szczególny przypadek zjawiska odbicia i załamania światła.",
    isTitleSlide: true
  },
  {
    id: 2,
    title: "Definicja zjawiska",
    content: "Całkowite wewnętrzne odbicie to zjawisko optyczne, które zachodzi, gdy światło przechodzi z ośrodka, w którym rozchodzi się wolniej (optycznie gęstszego), do ośrodka, w którym rozchodzi się szybciej (optycznie rzadszego).",
    bullets: [
        "Warunek konieczny: v1 < v2 (np. z wody do powietrza).",
        "Przy odpowiednio dużym kącie padania światło nie przechodzi do drugiego ośrodka, lecz w całości odbija się od granicy ośrodków."
    ],
    visualization: VisualizationType.TIR_FIBER
  },
  {
    id: 3,
    title: "Załamanie i odbicie światła",
    content: "Na granicy dwóch ośrodków światło zazwyczaj częściowo się odbija, a częściowo załamuje.",
    bullets: [
        "Kąt padania jest zawsze równy kątowi odbicia.",
        "Kąt załamania zależy od prędkości rozchodzenia się światła w danym ośrodku (Prawo Snella).",
        "Gdy światło przechodzi do ośrodka rzadszego, załamuje się 'od normalnej' (kąt załamania jest większy od kąta padania)."
    ],
    visualization: VisualizationType.REFRACTION_INTRO
  },
  {
    id: 4,
    title: "Kiedy zachodzi całkowite wewnętrzne odbicie?",
    content: "Zjawisko całkowitego wewnętrznego odbicia nie zachodzi zawsze.",
    bullets: [
        "Musi nastąpić przejście z ośrodka gęstszego optycznie do rzadszego (np. szkło -> powietrze).",
        "Kąt padania musi być większy od tzw. kąta granicznego.",
        "W przeciwnym przypadku (kąt mniejszy od granicznego), część światła zawsze ucieka do drugiego ośrodka jako promień załamany."
    ],
    visualization: VisualizationType.REFRACTION_INTRO
  },
  {
    id: 5,
    title: "Kąt graniczny",
    content: "Kąt graniczny to taki kąt padania, dla którego kąt załamania wynosi dokładnie 90°.",
    bullets: [
        "Promień załamany ślizga się wtedy po granicy ośrodków.",
        "Dla wody i powietrza kąt ten wynosi ok. 49°.",
        "Dla szkła i powietrza ok. 42°.",
        "Dla diamentu i powietrza zaledwie ok. 24° (dlatego diamenty tak 'uwięzią' światło)."
    ],
    visualization: VisualizationType.CRITICAL_ANGLE
  },
  {
    id: 6,
    title: "Przykłady i obserwacje",
    content: "Całkowite wewnętrzne odbicie odpowiada za wiele efektownych zjawisk.",
    bullets: [
        "Błysk diamentów i oszlifowanych kamieni szlachetnych.",
        "Refleksy widoczne pod wodą, gdy patrzymy na powierzchnię wody od dołu (wygląda jak lustro).",
        "Działanie pryzmatów w lornetkach i peryskopach."
    ],
    visualization: VisualizationType.TIR_FIBER
  },
  {
    id: 7,
    title: "Światłowody – zastosowanie zjawiska",
    content: "Najważniejszym praktycznym zastosowaniem całkowitego wewnętrznego odbicia są światłowody.",
    bullets: [
        "Budowa: Rdzeń (gęstszy) i płaszcz (rzadszy).",
        "Działanie: Światło wprowadzone do rdzenia pod odpowiednim kątem ulega wielokrotnemu całkowitemu odbiciu.",
        "Zaleta: Przesył informacji na ogromne odległości z prędkością bliską prędkości światła, bez zakłóceń elektromagnetycznych."
    ],
    visualization: VisualizationType.TIR_FIBER
  },
  {
    id: 8,
    title: "Podsumowanie",
    bullets: [
        "Całkowite wewnętrzne odbicie zachodzi tylko przy przejściu do ośrodka rzadszego.",
        "Kąt padania musi być większy od kąta granicznego.",
        "Kąt graniczny to kąt padania, dla którego kąt załamania wynosi 90°.",
        "Zjawisko to jest podstawą działania światłowodów i telekomunikacji."
    ],
    visualization: VisualizationType.NONE
  },
  {
    id: 9,
    title: "Koniec",
    content: "Dziękuję za uwagę.",
    isTitleSlide: true,
    visualization: VisualizationType.NONE
  }
];

export const presentations: Presentation[] = [
  {
    id: 'waves-reflection',
    title: 'Powierzchnie falowe i odbicie',
    description: 'Zasada Huygensa, fale koliste, płaskie i prawo odbicia.',
    slides: presentation1
  },
  {
    id: 'internal-reflection',
    title: 'Całkowite wewnętrzne odbicie',
    description: 'Światłowody, kąt graniczny i załamanie światła.',
    slides: presentation2
  }
];

// Default export for backward compatibility if needed, though we will switch to named exports
export { presentation1, presentation2 };