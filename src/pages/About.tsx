import { motion } from "motion/react";

export default function About() {
  return (
    <div className="pt-32 bg-cream-100">
      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sage-500 tracking-[0.4em] uppercase text-sm font-bold mb-4 block">
              Our Roots
            </span>
            <h1 className="text-5xl md:text-7xl mb-8 leading-tight">
              Inspired by <br />
              <span className="italic font-light">Nature's Bloom</span>
            </h1>
            <p className="text-coffee-700/80 text-lg leading-relaxed mb-6">
              Indabo Caffe was born from a simple vision: to create a coffee 
              experience that honors the natural world. "Indabo" represents the 
              blossom — the beginning of the coffee cherry and the beauty of growth.
            </p>
            <p className="text-coffee-700/80 text-lg leading-relaxed">
              We curate a sanctuary where the earth's finest beans meet botanical 
              elegance, creating a ritual that nourishes both the body and the soul.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1000"
              alt="Barista Craft"
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-gold-500 text-coffee-900 p-8 rounded-xl hidden md:block">
              <span className="text-4xl font-serif block mb-1">30+</span>
              <span className="text-xs tracking-widest uppercase font-bold">Years of Craft</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-coffee-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl mb-16"
          >
            The Three Pillars
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Harmony", desc: "Sourcing beans that are grown in harmony with their local ecosystems." },
              { title: "Purity", desc: "A roasting process that preserves the pure, organic essence of the bean." },
              { title: "Sanctuary", desc: "Creating a space that feels like a natural extension of the outdoors." },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 border border-white/10 rounded-2xl hover:border-sage-500/50 transition-colors"
              >
                <h3 className="text-2xl text-sage-500 mb-4">{pillar.title}</h3>
                <p className="text-white/60 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Atmosphere Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Sanctuary</h2>
          <p className="text-coffee-700/60 max-w-2xl mx-auto">
            Designed by award-winning architects, our space is a blend of 
            minimalist modernism and warm, organic textures.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=600",
          ].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="aspect-square overflow-hidden rounded-xl"
            >
              <img src={img} alt="Gallery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
