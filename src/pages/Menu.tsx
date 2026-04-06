import { motion } from "motion/react";

const menuItems = [
  {
    category: "Botanical Brews",
    items: [
      { name: "Rose Cold Brew", price: "$9", desc: "24h cold brew infused with organic rose petals." },
      { name: "Lavender Latte", price: "$8", desc: "Espresso, steamed milk, house-made lavender syrup." },
      { name: "Hibiscus Espresso", price: "$7", desc: "Double shot espresso with a tart hibiscus finish." },
    ]
  },
  {
    category: "Artisanal Classics",
    items: [
      { name: "Indabo Signature", price: "$6", desc: "Our house blend with notes of jasmine and honey." },
      { name: "Silk Flat White", price: "$7", desc: "Velvety micro-foam, double ristretto." },
      { name: "Pour Over Reserve", price: "$8", desc: "Hand-poured seasonal single origin." },
    ]
  },
  {
    category: "Garden Pâtisserie",
    items: [
      { name: "Matcha Croissant", price: "$8", desc: "Hand-laminated with premium matcha butter." },
      { name: "Wildberry Macarons", price: "$12", desc: "Set of three, infused with forest berries." },
      { name: "Honey Almond Tart", price: "$10", desc: "Almond crust, organic local honey glaze." },
    ]
  }
];

export default function Menu() {
  return (
    <div className="pt-32 pb-24 bg-cream-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sage-500 tracking-[0.4em] uppercase text-sm font-bold mb-4 block"
          >
            The Botanical Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-6"
          >
            The Menu
          </motion.h1>
          <div className="w-24 h-[1px] bg-sage-500 mx-auto"></div>
        </div>

        <div className="space-y-24">
          {menuItems.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h2 className="text-3xl mb-10 text-center font-serif italic text-coffee-800">
                {section.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                {section.items.map((item) => (
                  <div key={item.name} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl font-medium group-hover:text-sage-500 transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex-1 border-b border-dotted border-coffee-900/20 mx-4"></div>
                      <span className="text-sage-500 font-bold">{item.price}</span>
                    </div>
                    <p className="text-coffee-700/60 text-sm italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-coffee-900 text-white rounded-2xl text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl mb-4">Botanical Tasting Experience</h3>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Book an exclusive session with our head barista to explore the 
              floral notes of rare vintages and botanical infusions.
            </p>
            <button className="bg-sage-500 text-white px-8 py-3 rounded-full font-bold tracking-widest uppercase hover:bg-sage-400 transition-colors">
              Inquire Now
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1000" 
              alt="Coffee background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
