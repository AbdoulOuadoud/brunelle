import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  X
} from 'lucide-react';
import { SectionHeading } from '../components/Navbar';
import { EVENTS, EventItem } from '../data';

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <>
      {/* Hero Banner */}
      <div className="relative pt-32 pb-20 sm:pb-28 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-rose-600/10" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span>Événements & Aventures</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight"
          >
            Créer des moments<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">magiques & mémorables</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Au-delà des conventions otaku, je m'investis dans l'organisation d'activités variées pour pousser chacun à sortir de sa zone de confort.
          </motion.p>
        </div>
      </div>

      {/* Events List */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Tous les Événements"
            subtitle="Retrouvez ici l'ensemble des événements que j'ai eu le plaisir de coordonner et d'animer."
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
                      <span key={tag} className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                        tag.includes('Édition') 
                          ? 'bg-orange-600 text-white shadow-sm shadow-orange-200' 
                          : 'bg-gray-50 text-gray-500'
                      }`}>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Envie de participer ?</h2>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Rejoignez-nous pour les prochains événements et vivez des expériences uniques mêlant aventure, culture et partage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/participe"
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-orange-200 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
              >
                Participer
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/"
                className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-2xl hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 cursor-pointer"
              >
                Retour à l'accueil
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter text-gray-900 flex items-center gap-2">
            <span>BRUNELLE</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <Link to="/" className="hover:text-orange-600 transition-colors">Accueil</Link>
            <Link to="/evenements" className="hover:text-orange-600 transition-colors">Événements</Link>
            <Link to="/participe" className="hover:text-orange-600 transition-colors">Participer</Link>
          </div>

          <div className="flex gap-4">
            <a href="https://instagram.com/nelle_abyb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-600 hover:text-white transition-all cursor-pointer">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
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
              <div className="p-5 sm:p-8 overflow-y-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{selectedEvent.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{selectedEvent.fullDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.highlights.map(tag => (
                    <span key={tag} className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider ${
                      tag.includes('Édition')
                        ? 'bg-orange-600 text-white shadow-md shadow-orange-200'
                        : 'bg-orange-50 text-orange-700'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
