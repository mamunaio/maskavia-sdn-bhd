"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main About Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 lg:col-span-8 bg-white/50 backdrop-blur-xl border border-primary/10 p-10 md:p-12 rounded-3xl shadow-sm"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" /> Established 1986
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
              Legacy of Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              For over three decades, Maskavia Sdn Bhd has been at the forefront of digital transformation. We specialize in providing comprehensive, high-end corporate solutions designed to streamline operations and elevate user experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
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
              className="bg-gray-50/80 backdrop-blur-lg border border-primary/10 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-5 text-accent border border-gray-100">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2 text-gray-900">MSC Status</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Recognized by the Malaysian Government for world-class technology development.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-primary/95 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-[0_0_20px_rgba(30,58,138,0.2)] hover:shadow-[0_0_30px_rgba(30,58,138,0.4)] transition-all cursor-pointer text-white"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5 border border-white/10">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Trusted Partner</h3>
              <p className="text-blue-100 text-sm leading-relaxed">Decades of proven reliability across diverse enterprise industries.</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
