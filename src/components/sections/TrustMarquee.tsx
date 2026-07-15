"use client";

import { motion } from "framer-motion";

const industries = [
  "Healthcare", "Retail", "Public Sector", "Finance",
  "Education", "Corporate", "Hospitality", "Transportation"
];

export default function TrustMarquee() {
  return (
    <section id="clients" className="py-20 bg-white/80 border-y border-primary/10 overflow-hidden relative backdrop-blur-md">
      <div className="container mx-auto px-4 mb-12 text-center">
        <p className="text-sm font-semibold tracking-wider text-primary/60 uppercase">
          Empowering Industries Worldwide
        </p>
      </div>
      
      <div className="relative flex whitespace-nowrap">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-16 items-center"
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {[...industries, ...industries, ...industries].map((industry, i) => (
            <div key={i} className="flex items-center gap-16 text-2xl md:text-4xl font-heading font-bold text-gray-200">
              <span className="hover:text-primary transition-colors duration-300 cursor-default">{industry}</span>
              <span className="w-2 h-2 rounded-full bg-accent/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
