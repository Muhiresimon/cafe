import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Users, Clock } from "lucide-react";
import React, { useState } from "react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Handle final submission
      alert("Reservation request sent! We will contact you shortly.");
      onClose();
      setStep(1);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-coffee-900/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-cream-100 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="luxury-gradient p-8 text-white flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-serif">Table Reservation</h2>
                <p className="text-sage-500 text-xs tracking-widest uppercase mt-1">Indabo Caffe Experience</p>
              </div>
              <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex gap-2 mb-8">
                <div className={`h-1 flex-1 rounded-full ${step >= 1 ? "bg-sage-500" : "bg-coffee-900/10"}`} />
                <div className={`h-1 flex-1 rounded-full ${step >= 2 ? "bg-sage-500" : "bg-coffee-900/10"}`} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 ? (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-coffee-900/40 flex items-center gap-2">
                        <Calendar className="w-3 h-3" /> Select Date
                      </label>
                      <input
                        required
                        type="date"
                        className="w-full bg-white border border-coffee-900/5 rounded-xl p-4 focus:ring-2 focus:ring-sage-500 outline-none"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-coffee-900/40 flex items-center gap-2">
                          <Clock className="w-3 h-3" /> Time
                        </label>
                        <select
                          className="w-full bg-white border border-coffee-900/5 rounded-xl p-4 focus:ring-2 focus:ring-gold-500 outline-none appearance-none"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        >
                          <option>09:00 AM</option>
                          <option>11:00 AM</option>
                          <option>02:00 PM</option>
                          <option>04:00 PM</option>
                          <option>07:00 PM</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-coffee-900/40 flex items-center gap-2">
                          <Users className="w-3 h-3" /> Guests
                        </label>
                        <select
                          className="w-full bg-white border border-coffee-900/5 rounded-xl p-4 focus:ring-2 focus:ring-gold-500 outline-none appearance-none"
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        >
                          <option>1 Guest</option>
                          <option>2 Guests</option>
                          <option>3 Guests</option>
                          <option>4 Guests</option>
                          <option>5+ Guests</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-coffee-900/40">Your Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Jean Dupont"
                        className="w-full bg-white border border-coffee-900/5 rounded-xl p-4 focus:ring-2 focus:ring-gold-500 outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-coffee-900/40">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="jean@example.com"
                        className="w-full bg-white border border-coffee-900/5 rounded-xl p-4 focus:ring-2 focus:ring-gold-500 outline-none"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-sage-500 text-white py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-sage-600 transition-all"
                >
                  {step === 1 ? "Next Step" : "Confirm Reservation"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
