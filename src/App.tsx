/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Cosplay images
import imgYumeko from './assets/cosplays/Yumeko-Jabami.jpg';
import imgMisa from './assets/cosplays/Misa-Amane.jpg';
import imgCalliope from './assets/cosplays/Calliope.jpg';
import imgKanaria from './assets/cosplays/Kanaria.jpg';
import imgMima from './assets/cosplays/Mima-Kirigoe.jpg';
import imgToph from './assets/cosplays/Toph-Beifong.jpg';
import imgChoso from './assets/cosplays/Choso.jpg';
import imgNami from './assets/cosplays/Nami.jpg';
import imgKimberly from './assets/cosplays/Kimberly.jpg';
import imgYoriichi from './assets/cosplays/Yoriichi-Tsugikuni.jpg';

// Hero images
import hero1 from './assets/hero/hero-1.jpg';
import hero2 from './assets/hero/hero-2.jpg';
import hero3 from './assets/hero/hero-3.jpg';
import hero4 from './assets/hero/hero-4.jpg';
import hero5 from './assets/hero/hero-5.jpg';

// Event images
import imgAfrotaku from './assets/events/Otaku RDV - AfrOtaku.jpg';
import imgSubarachill from './assets/events/Subarachill 2025.jpg';
import imgOtakuMangaContext from './assets/events/Otaku RDV - Manga Contexte.jpg';
import imgHallowen from './assets/events/Hallowen.png';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Instagram, 
  Mail,
  Award
} from 'lucide-react';

// --- Types ---

interface CosplayItem {
  id: number;
  name: string;
  source: string;
  description: string;
  image: string;
}

interface EventItem {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  image: string;
}

// --- Data ---

const COSPLAYS: CosplayItem[] = [
  {
    id: 1,
    name: "Yumeko Jabami",
    source: "Kakegurui",
    description: "Protagoniste de l'Académie privée Hyakkaou, Yumeko est fascinée par l'excitation du jeu et la psychologie des autres joueurs. Mon cosplay reflète son audace et son intelligence, tout en y apportant ma touche personnelle.",
    image: imgYumeko
  },
  {
    id: 2,
    name: "Misa Amane",
    source: "Death Note",
    description: "Idole, mannequin et chanteuse, Misa devient le « Second Kira ». Mon interprétation met en avant son côté charismatique et sa personnalité lumineuse, avec une attention particulière aux détails gothiques de son style.",
    image: imgMisa
  },
  {
    id: 3,
    name: "Calliope",
    source: "Hercule (Disney)",
    description: "Muse de la poésie épique, chef du groupe des cinq Muses. Mon cosplay illustre sa prestance et son énergie, tout en ajoutant ma touche créative sur les accessoires et la mise en scène.",
    image: imgCalliope
  },
  {
    id: 4,
    name: "Kanaria",
    source: "Hunter X Hunter",
    description: "Apprentie majordome de la famille Zoldyck et gardienne loyale, mon cosplay reflète la discipline et la loyauté du personnage tout en gardant ma propre expressivité.",
    image: imgKanaria
  },
  {
    id: 5,
    name: "Mima Kirigoe",
    source: "Perfect Blue",
    description: "Personnage principal de l'anime psychologique Perfect Blue. Mon cosplay capture la dualité entre innocence et tension dramatique du personnage.",
    image: imgMima
  },
  {
    id: 6,
    name: "Toph Beifong",
    source: "Avatar : Le Dernier Maître de l'Air",
    description: "Maîtresse de la terre aveugle, mon cosplay illustre sa force et son indépendance, avec des accessoires et postures fidèles à son univers.",
    image: imgToph
  },
  {
    id: 7,
    name: "Choso",
    source: "Jujutsu Kaisen",
    description: "Fœtus des Neuf Phases et allié stratégique, ce cosplay met en avant sa puissance et sa complexité, tout en incorporant ma propre identité.",
    image: imgChoso
  },
  {
    id: 8,
    name: "Nami",
    source: "One Piece",
    description: "Navigatrice experte en météorologie, mon cosplay combine l'aspect pratique de son personnage et ma touche créative personnelle pour rendre la tenue unique.",
    image: imgNami
  },
  {
    id: 9,
    name: "Kimberly",
    source: "Street Fighter 6",
    description: "Nouvelle combattante afro-américaine prodige, élève du ninja Guy, qui combine des attaques rapides et une grande mobilité pour déconcerter ses adversaires, utilisant des bombes de peinture et l'art de la tromperie pour ouvrir leur garde. Mon cosplay combine sa personnalité pleine d'énergie et notre passion pour l'art.",
    image: imgKimberly
  },
  {
    id: 10,
    name: "Yoriichi Tsugikuni",
    source: "Kimetsu no Yaiba",
    description: "Pourfendeur de démons légendaire, mon cosplay illustre son talent exceptionnel et sa maîtrise du sabre, tout en ajoutant des éléments créatifs pour refléter ma personnalité.",
    image: imgYoriichi
  }
];

const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Otaku RDV - Manga Contexte",
    category: "Culture & Art",
    description: "Organisé sur le campus, avec un défilé de cosplays exclusif et des chorégraphies dont j’ai été la directrice artistique.",
    fullDescription: "Organisé sur le campus, avec un défilé de cosplays exclusif et des chorégraphies dont j’ai été la directrice artistique. Des personnages tels que Luffy, Yor Forger, Robin, Mami Tsunade et Toph Beifong ont été mis en avant. L’événement a rassemblé une centaine de passionnés, qui ont apprécié le défilé et les moments conviviaux.",
    highlights: ["100+ Passionnés", "Cosplay Parade", "Artistic Direction"],
    image: imgOtakuMangaContext
  },
  {
    id: 2,
    title: "Otaku RDV - AfrOtaku",
    category: "Fusion Culturelle",
    description: "Une fusion entre cultures japonaise et africaine à travers un défilé thématique mettant en valeur des pagnes et accessoires africains.",
    fullDescription: "Cette édition visait à combiner les cultures japonaise et africaine à travers un défilé thématique, mettant en valeur des pagnes et accessoires africains sur des modèles japonais. Les tenues, chorégraphies et décorations ont été soigneusement choisis pour illustrer cette fusion culturelle. Plus de 100 passionnés ont participé à l’événement.",
    highlights: ["Cultural Fusion", "African Fabrics", "Unique Choreography"],
    image: imgAfrotaku
  },
  {
    id: 3,
    title: "Subarachill 2025",
    category: "Grand Événement",
    description: "L’un des plus grands rassemblements d’otakus au Bénin, où j’ai dirigé le défilé thématique combinant comédie musicale et narration.",
    fullDescription: "J’ai participé à Subarachill 2025, l’un des plus grands rassemblements d’otakus au Bénin, en dirigeant le défilé thématique, qui combinait comédie musicale et narration. Un moment fort de la scène otaku béninoise.",
    highlights: ["Musical Comedy", "Storytelling", "Major Gathering"],
    image: imgSubarachill
  },
  {
    id: 4,
    title: "Soirées Halloween",
    category: "Événement Personnel",
    description: "Organisation d’Halloween en comité restreint avec déguisements et ambiance immersive, ainsi que des soirées jeux de société.",
    fullDescription: "À titre personnel, j’ai organisé Halloween 2024 en comité restreint avec des déguisements et une ambiance immersive, ainsi que de petites soirées jeux de société pour des communautés plus intimes. Ces moments permettent de renforcer les liens entre passionnés dans un cadre chaleureux et convivial.",
    highlights: ["Halloween", "Jeux de Société", "Comité Restreint"],
    image: imgHallowen
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'À Propos', href: '#about' },
    { name: 'Événements', href: '#events' },
    { name: 'Cosplay', href: '#cosplay' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-orange-600 flex items-center gap-2">
          <span>BRUNELLE</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 bg-orange-600 text-white text-sm font-semibold rounded-full hover:bg-orange-700 transition-all shadow-lg shadow-orange-200"
          >
            Collaborons
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-gray-900'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg max-w-2xl ${light ? 'text-orange-100' : 'text-gray-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <div className={`h-1 w-20 mt-6 rounded-full ${light ? 'bg-white' : 'bg-orange-600'}`}></div>
  </div>
);

const HERO_IMAGES = [hero1, hero2, hero3, hero4, hero5];

const HeroSection = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative min-h-screen flex items-stretch overflow-hidden bg-gray-950">
      {/* Image side — carousel with crossfade */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImg}
            src={HERO_IMAGES[currentImg]}
            alt="Cosplay showcase"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </AnimatePresence>
        {/* Gradient overlay blending into dark side */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-gray-950/40" />

        {/* Image counter dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImg(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === currentImg ? 'bg-orange-500 w-6' : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content side */}
      <div className="w-full lg:w-1/2 flex items-center relative z-10 px-8 md:px-16 lg:px-20 py-32">
        {/* Mobile background image */}
        <div className="absolute inset-0 lg:hidden">
          <img src={HERO_IMAGES[currentImg]} alt="" className="w-full h-full object-cover object-top opacity-20" />
          <div className="absolute inset-0 bg-gray-950/80" />
        </div>

        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span>Cosplayeuse & Organisatrice</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8 text-white"
          >
            INCARNER
            <br />
            LE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">RÊVE</span>,
            <br />
            <span className="text-orange-500">ORGANISER</span>
            <br />
            LA JOIE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-md"
          >
            Passionnée par l'univers Otaku, je fusionne l'art du Cosplay et l'organisation d'événements pour créer des moments magiques au cœur du Bénin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#events"
              className="group px-7 py-3.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all flex items-center gap-2"
            >
              Voir mes projets
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#cosplay"
              className="px-7 py-3.5 border border-white/15 text-white font-bold rounded-xl hover:bg-white/5 hover:border-orange-500/40 transition-all"
            >
              Mes cosplays
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 sm:mt-14 flex gap-6 sm:gap-10"
          >
            {[
              { value: '10+', label: 'Cosplays' },
              { value: '3+', label: 'Événements' },
              { value: '100+', label: 'Passionnés' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedCosplay, setSelectedCosplay] = useState<CosplayItem | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <p className="text-orange-600 text-sm font-bold uppercase tracking-widest mb-4">À propos</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
              Apporter de la joie<br />au cœur des autres.
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Passionnée de jeux de société, de mangas et d'organisation d'événements, je dédie mon énergie à rassembler les gens.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 mb-10 sm:mb-16 border border-gray-100 shadow-sm"
          >
            <span className="absolute -top-5 left-10 text-7xl font-black text-orange-200 leading-none select-none">&ldquo;</span>
            <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed italic relative z-10">
              Dans un monde où chacun affronte ses propres défis, pouvoir apporter un moment de bonheur est pour moi une véritable bénédiction.
            </p>
            <p className="mt-6 text-sm font-bold text-orange-600 uppercase tracking-widest">— Brunelle</p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                accent: 'bg-orange-600',
                number: '01',
                title: 'Ma Mission',
                text: "Créer des moments de bonheur et d\u2019évasion à travers l\u2019art du cosplay et l\u2019organisation d\u2019événements qui rassemblent les passionnés."
              },
              {
                accent: 'bg-purple-600',
                number: '02',
                title: 'Communauté',
                text: "Organiser des rassemblements pour permettre à chacun de se détendre autour d\u2019activités saines et de partager notre passion commune."
              },
              {
                accent: 'bg-blue-600',
                number: '03',
                title: 'Culture',
                text: 'Promouvoir la culture Otaku au Bénin, en créant des ponts entre la culture populaire japonaise et nos racines africaines.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-orange-50 transition-all duration-500"
              >
                <div className={`w-12 h-1 ${item.accent} rounded-full mb-6 group-hover:w-20 transition-all duration-500`}></div>
                <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">{item.number}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Événements Marquants" 
            subtitle="De Otaku RDV à BOW, découvrez les moments que j'ai eu le plaisir de coordonner et d'animer."
          />

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {EVENTS.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl md:rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-orange-600 shadow-sm">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {event.highlights.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-50 rounded-lg text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors cursor-pointer"
                  >
                    En savoir plus
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BOW Details */}
          <div className="mt-12 md:mt-20 p-6 sm:p-8 md:p-10 bg-gray-900 rounded-2xl md:rounded-[3rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-600 text-white text-xs font-bold mb-6">
                  <Award className="w-4 h-4" />
                  <span>Capitaine de la 5ᵉ Division</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Bénin Otaku World (BOW)</h3>
                <p className="text-orange-100 text-lg mb-8 leading-relaxed">
                  En charge de l'organisation de toutes les activités en extérieur. J'ai coordonné plus de 8 activités outdoor majeures pour l'association.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2 uppercase text-xs tracking-widest">Sportives</h4>
                    <p className="text-sm text-gray-400">Basket, Football, Footing, Marche</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2 uppercase text-xs tracking-widest">Ludiques</h4>
                    <p className="text-sm text-gray-400">After Subarachill, Saint-Valentin, Noël</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2 uppercase text-xs tracking-widest">Caritatives</h4>
                    <p className="text-sm text-gray-400">Un instant de charité BOW</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-500 mb-2 uppercase text-xs tracking-widest">Spéciales</h4>
                    <p className="text-sm text-gray-400">Halloween 2024, Soirées privées</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800">
                  <img src="https://picsum.photos/seed/bow1/400/400" alt="BOW Activity" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800 mt-8">
                  <img src="https://picsum.photos/seed/bow2/400/400" alt="BOW Activity" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosplay Philosophy */}
      <section id="cosplay" className="py-16 sm:py-20 md:py-24 bg-orange-600 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 text-5xl sm:text-7xl md:text-9xl font-black rotate-12">COSPLAY</div>
          <div className="absolute bottom-20 right-10 text-5xl sm:text-7xl md:text-9xl font-black -rotate-12">ART</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Le Cosplay est un Art" 
                subtitle="Bien plus qu'un simple déguisement, c'est l'art d'incarner une âme tout en conservant sa propre essence."
                light
              />
              
              <div className="space-y-6 text-orange-50">
                <p className="text-xl leading-relaxed italic">
                  "Donnez-moi un personnage, et vous le retrouverez en moi tout en me voyant."
                </p>
                <div className="grid gap-4">
                  {[
                    "Incarner un personnage avec sa propre personnalité",
                    "Transmettre un message à travers le choix du héros",
                    "Adapter les traits du personnage à son propre caractère",
                    "Création locale et artisanale avec Herlinda Couture"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl md:rounded-[3rem] border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Mon Processus Créatif</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <p className="font-bold text-lg mb-1">Sélection & Vision</p>
                    <p className="text-orange-100 text-sm">Choix du personnage selon son caractère et l'événement.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <p className="font-bold text-lg mb-1">Confection Locale</p>
                    <p className="text-orange-100 text-sm">Collaboration avec Herlinda Couture pour les tissus et la couture.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <p className="font-bold text-lg mb-1">Accessoires & Détails</p>
                    <p className="text-orange-100 text-sm">Fabrication artisanale des katanas, bijoux et coiffures spécifiques.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosplay Gallery */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Galerie de Cosplays" 
            subtitle="Chaque création est unique, reflétant à la fois le personnage et ma propre créativité."
          />

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6">
            {COSPLAYS.map((cosplay, index) => (
              <motion.div 
                key={cosplay.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/4] rounded-t-xl sm:rounded-t-2xl overflow-hidden bg-gray-100">
                  <img 
                    src={cosplay.image} 
                    alt={cosplay.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 sm:p-5">
                    <h4 className="text-white text-sm sm:text-lg font-bold">{cosplay.name}</h4>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCosplay(cosplay)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:py-2.5 bg-orange-600 text-white text-xs sm:text-sm font-bold rounded-b-xl sm:rounded-b-2xl hover:bg-orange-700 transition-colors cursor-pointer"
                >
                  Découvrir
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl sm:rounded-[3rem] md:rounded-[4rem] p-6 sm:p-10 md:p-20 shadow-2xl shadow-orange-100 border border-gray-100 overflow-hidden relative">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl -mb-48 -mr-48"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <SectionHeading 
                title="Créons des moments inoubliables ensemble" 
                subtitle="Vous organisez un événement ou souhaitez collaborer sur un projet créatif ? Je suis toujours ouverte à de nouvelles aventures."
              />
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <a href="mailto:abyblittleakuma@gmail.com" className="p-8 rounded-3xl bg-gray-50 hover:bg-orange-600 hover:text-white transition-all group">
                  <Mail className="w-10 h-10 mx-auto mb-4 text-orange-600 group-hover:text-white" />
                  <p className="font-bold">Email</p>
                  <p className="text-xs sm:text-sm opacity-70 break-all">abyblittleakuma@gmail.com</p>
                </a>
                <a href="https://instagram.com/nelle_abyb" target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl bg-gray-50 hover:bg-orange-600 hover:text-white transition-all group">
                  <Instagram className="w-10 h-10 mx-auto mb-4 text-orange-600 group-hover:text-white" />
                  <p className="font-bold">Instagram</p>
                  <p className="text-sm opacity-70">@nelle_abyb</p>
                </a>
                <a href="https://tiktok.com/@nelle_abyb" target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl bg-gray-50 hover:bg-orange-600 hover:text-white transition-all group">
                  <svg className="w-10 h-10 mx-auto mb-4 text-orange-600 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z"/></svg>
                  <p className="font-bold">TikTok</p>
                  <p className="text-sm opacity-70">@nelle_abyb</p>
                </a>
              </div>

              <div className="mt-16 pt-16 border-t border-gray-100">
                <p className="text-gray-400 text-sm font-medium">
                  © 2026 Brunelle Portfolio. Fait avec passion pour la culture Otaku.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter text-gray-900 flex items-center gap-2">
            <span>BRUNELLE</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-orange-600 transition-colors">À Propos</a>
            <a href="#events" className="hover:text-orange-600 transition-colors">Événements</a>
            <a href="#cosplay" className="hover:text-orange-600 transition-colors">Cosplay</a>
          </div>

          <div className="flex gap-4">
            <a href="https://instagram.com/nelle_abyb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-600 hover:text-white transition-all cursor-pointer">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://tiktok.com/@nelle_abyb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-600 hover:text-white transition-all cursor-pointer">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z"/></svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedEvent(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative aspect-video shrink-0">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5 sm:left-6">
                  <span className="px-3 py-1 bg-orange-600 rounded-full text-xs font-bold text-white">
                    {selectedEvent.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-5 sm:p-8 overflow-y-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{selectedEvent.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{selectedEvent.fullDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.highlights.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-xs font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cosplay Modal */}
      <AnimatePresence>
        {selectedCosplay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedCosplay(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative min-h-[200px] max-h-[50vh] shrink overflow-hidden">
                <img
                  src={selectedCosplay.image}
                  alt={selectedCosplay.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <button
                  onClick={() => setSelectedCosplay(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 right-5 sm:right-6">
                  <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">{selectedCosplay.source}</p>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedCosplay.name}</h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-5 sm:p-8 overflow-y-auto">
                <p className="text-gray-600 leading-relaxed">{selectedCosplay.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
