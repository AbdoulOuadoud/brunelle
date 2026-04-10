import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle, Clock, Instagram, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/Navbar';
import { EVENTS } from '../data';

export default function ParticipePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 sm:pb-20 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-rose-600/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Calendar className="w-4 h-4" />
            <span>Participe</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6"
          >
            Rejoins le prochain{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
              événement
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Découvre nos événements et inscris-toi directement pour vivre des moments inoubliables avec la communauté.
          </motion.p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            title="Nos Événements"
            subtitle="Choisis l'événement qui t'intéresse et inscris-toi si les inscriptions sont ouvertes."
          />

          <div className="space-y-6">
            {EVENTS.filter(e => e.personal).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-orange-50 transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-48 md:w-56 shrink-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 sm:h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600">
                          {event.category}
                        </span>
                        {event.registrationOpen ? (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold">
                            <CheckCircle className="w-3 h-3" />
                            Inscriptions ouvertes
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-400 rounded-full text-xs font-bold">
                            <Clock className="w-3 h-3" />
                            Terminé
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {event.highlights.map(tag => (
                          <span
                            key={tag}
                            className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                              tag.includes('Édition')
                                ? 'bg-orange-600 text-white'
                                : 'bg-gray-50 text-gray-500'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action button */}
                    <div>
                      {event.registrationOpen ? (
                        <a
                          href={`mailto:abyblittleakuma@gmail.com?subject=Inscription – ${event.title}&body=Bonjour, je souhaite m'inscrire à l'événement "${event.title}".`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-200 transition-all text-sm"
                        >
                          Inscription
                          <Send className="w-4 h-4" />
                        </a>
                      ) : (
                        <a
                          href="#newsletter"
                          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-200 text-orange-600 font-bold rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-all text-sm"
                        >
                          Me tenir informé
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Me tenir informé */}
      <section id="newsletter" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-orange-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
              Me tenir informé
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Laisse ton adresse mail pour être notifié(e) dès qu'un nouvel événement est annoncé.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 text-green-600 font-bold text-lg"
              >
                <CheckCircle className="w-6 h-6" />
                Merci ! Tu seras informé(e) des prochains événements.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ton@email.com"
                  className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  S'inscrire
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-gray-900 flex items-center gap-2">
            <span>BRUNELLE</span>
          </Link>
          
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <Link to="/" className="hover:text-orange-600 transition-colors">Accueil</Link>
            <Link to="/evenements" className="hover:text-orange-600 transition-colors">Événements</Link>
            <Link to="/participe" className="hover:text-orange-600 transition-colors">Participe</Link>
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
        <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-sm">© 2026 Brunelle Portfolio. Fait avec passion pour la culture Otaku.</p>
        </div>
      </footer>
    </>
  );
}
