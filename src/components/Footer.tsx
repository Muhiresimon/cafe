import { Link } from "react-router-dom";
import { Coffee, Instagram, Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Coffee className="w-8 h-8 text-sage-500" />
              <span className="text-2xl font-serif tracking-widest uppercase">Indabo Caffe</span>
            </Link>
            <p className="text-white/50 max-w-sm leading-relaxed mb-8">
              Where nature meets the craft of coffee. A sanctuary for the senses, 
              inspired by the beauty of the botanical world.
            </p>
            <div className="flex flex-col gap-2 mb-8">
              <a href="tel:0789472047" className="text-white/50 hover:text-gold-500 transition-colors text-sm flex items-center gap-2">
                0789472047
              </a>
              <div className="flex gap-6">
                <Instagram className="w-5 h-5 text-white/50 hover:text-gold-500 cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-white/50 hover:text-gold-500 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-white/50 hover:text-gold-500 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-gold-500 tracking-widest uppercase text-xs font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-white transition-colors">The Menu</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 tracking-widest uppercase text-xs font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-white/60 mb-4">Subscribe to receive exclusive offers and news.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-gold-500 flex-1"
              />
              <button className="bg-gold-500 text-coffee-900 p-2 rounded-lg hover:bg-gold-400 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-white/30">
          <p>© 2026 Indabo Caffe. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
