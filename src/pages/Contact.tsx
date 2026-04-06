import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sage-500 tracking-[0.4em] uppercase text-sm font-bold mb-4 block"
          >
            Connect with Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-6"
          >
            Visit the Sanctuary
          </motion.h1>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl mb-8 font-serif italic">Our Location</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-sage-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Botanical Flagship</p>
                    <p className="text-coffee-700/70 leading-relaxed">
                      456 Rue de la Paix<br />
                      75002 Paris, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-sage-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Opening Hours</p>
                    <p className="text-coffee-700/70 leading-relaxed">
                      Mon - Fri: 07:00 - 20:00<br />
                      Sat - Sun: 08:00 - 21:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl mb-8 font-serif italic">Connect</h2>
              <div className="space-y-4">
                <a href="mailto:hello@indabocaffe.com" className="flex items-center gap-4 text-coffee-700/70 hover:text-sage-500 transition-colors">
                  <Mail className="w-5 h-5" /> hello@indabocaffe.com
                </a>
                <a href="tel:0789472047" className="flex items-center gap-4 text-coffee-700/70 hover:text-sage-500 transition-colors">
                  <Phone className="w-5 h-5" /> 0789472047
                </a>
              </div>
              <div className="flex gap-6 mt-8">
                <Instagram className="w-6 h-6 text-coffee-900 hover:text-gold-500 cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-coffee-900 hover:text-gold-500 cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-coffee-900 hover:text-gold-500 cursor-pointer transition-colors" />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-2xl shadow-xl border border-coffee-900/5"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs tracking-widest uppercase font-bold text-coffee-900/50">Full Name</label>
                  <input type="text" className="w-full bg-cream-100 border-none rounded-lg p-4 focus:ring-2 focus:ring-gold-500 outline-none" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs tracking-widest uppercase font-bold text-coffee-900/50">Email Address</label>
                  <input type="email" className="w-full bg-cream-100 border-none rounded-lg p-4 focus:ring-2 focus:ring-gold-500 outline-none" placeholder="jean@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase font-bold text-coffee-900/50">Subject</label>
                <select className="w-full bg-cream-100 border-none rounded-lg p-4 focus:ring-2 focus:ring-gold-500 outline-none appearance-none">
                  <option>General Inquiry</option>
                  <option>Private Event</option>
                  <option>Wholesale</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase font-bold text-coffee-900/50">Message</label>
                <textarea rows={5} className="w-full bg-cream-100 border-none rounded-lg p-4 focus:ring-2 focus:ring-sage-500 outline-none resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-sage-500 text-white py-4 rounded-lg font-bold tracking-widest uppercase hover:bg-sage-600 transition-all">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Clock({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  );
}
