import { motion } from "motion/react";
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReservationModal from "../components/ReservationModal";

export default function Home() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <ReservationModal isOpen={isReserveOpen} onClose={() => setIsReserveOpen(false)} />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=2000"
            alt="Botanical Coffee Shop"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
            <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sage-500 tracking-[0.4em] uppercase text-sm font-bold mb-4 block"
          >
            Botanical Coffee Sanctuary
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl text-white mb-8 leading-tight"
          >
            Nature's Finest <br />
            <span className="italic font-light">Brewed to Perfection</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/menu"
              className="bg-gold-500 text-coffee-900 px-10 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-gold-400 transition-all flex items-center gap-2 group"
            >
              Explore Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => setIsReserveOpen(true)}
              className="text-white border border-white/30 px-10 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-white/10 transition-all"
            >
              Book a Table
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll to Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                icon: <Star className="w-8 h-8 text-sage-500" />,
                title: "Ethical Bloom",
                desc: "Sourced from sustainable farms where coffee and nature thrive together.",
              },
              {
                icon: <Clock className="w-8 h-8 text-sage-500" />,
                title: "Artisanal Roast",
                desc: "Small-batch roasting that honors the unique floral notes of every bean.",
              },
              {
                icon: <MapPin className="w-8 h-8 text-sage-500" />,
                title: "Organic Spaces",
                desc: "A sanctuary of wood, stone, and living greenery for your daily ritual.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-2xl mb-4">{feature.title}</h3>
                <p className="text-coffee-700/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-24 bg-coffee-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sage-500 tracking-[0.3em] uppercase text-xs font-bold mb-4 block"
            >
              Botanical Signature
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl mb-8 leading-tight"
            >
              The Rose <br />
              <span className="italic font-light">Infused Cold Brew</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white/60 mb-10 text-lg leading-relaxed max-w-lg"
            >
              A delicate fusion of our 24-hour cold brew and organic rose petals, 
              finished with a hint of wild honey and botanical essence.
            </motion.p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-4 text-gold-500 font-bold tracking-widest uppercase group"
            >
              View Full Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="flex-1 relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1000"
                alt="Botanical Coffee"
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-sage-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
