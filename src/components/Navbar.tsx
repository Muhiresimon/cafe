import { Link, useLocation } from "react-router-dom";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ReservationModal from "./ReservationModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Menu", path: "/menu" },
    { name: "Our Story", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-coffee-900/95 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Coffee className={`w-8 h-8 transition-colors ${scrolled ? "text-sage-500" : "text-white"}`} />
          <span className={`text-2xl font-serif tracking-widest uppercase transition-colors ${scrolled ? "text-coffee-900" : "text-white"}`}>
            Indabo Caffe
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-[0.2em] uppercase font-medium transition-all hover:text-gold-500 ${
                location.pathname === link.path ? "text-gold-500" : scrolled ? "text-white/80" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => setIsReserveOpen(true)}
            className="bg-sage-500 text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-sage-600 transition-colors"
          >
            Reserve
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      <ReservationModal isOpen={isReserveOpen} onClose={() => setIsReserveOpen(false)} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-coffee-900 border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-serif tracking-widest uppercase ${
                    location.pathname === link.path ? "text-sage-500" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
