"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main About Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 lg:col-span-8 bg-card/60 backdrop-blur-xl border border-border p-10 md:p-12 rounded-3xl shadow-sm"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" /> Established 1986
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Legacy of Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium">
              For over three decades, Maskavia Sdn Bhd has been at the forefront of digital transformation. We specialize in providing comprehensive, high-end corporate solutions designed to streamline operations and elevate user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              We are recognized for our continuous innovation and commitment to delivering world-class technology across Healthcare, Retail, Public, and Finance sectors.
            </p>
          </motion.div>
          
          {/* Status Cards in Bento layout */}
          <div className="md:col-span-5 lg:col-span-4 grid grid-cols-1 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card/60 backdrop-blur-lg border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-all cursor-default group"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-5 text-primary border border-border group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">MSC Status</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">Recognized by the Malaysian Government for world-class technology development.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-primary/5 backdrop-blur-lg border border-primary/20 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all cursor-default text-foreground relative overflow-hidden group"
            >
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center mb-5 border border-border relative z-10 text-primary group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2 relative z-10 text-foreground">Trusted Partner</h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10 font-medium">Decades of proven reliability across diverse enterprise industries.</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
