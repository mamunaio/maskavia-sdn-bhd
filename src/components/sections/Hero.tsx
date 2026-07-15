"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32 lg:pt-36 lg:pb-40">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-primary/10 text-primary text-sm font-medium mb-8 backdrop-blur-md shadow-sm"
          >
            <Activity className="w-4 h-4 text-accent" />
            <span>Empowering Enterprises Since 1986</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight"
          >
            Order in Motion <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Care in Control.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Delivering cutting-edge Smart CJM, Digital Signage, and Security solutions to optimize workflows and enhance experiences across industries.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-medium text-lg transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(30,58,138,0.4)] hover:shadow-[0_0_30px_rgba(30,58,138,0.6)]">
              Explore Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/70 backdrop-blur-md border border-primary/10 hover:border-primary/30 text-gray-700 rounded-full font-medium text-lg transition-all shadow-sm hover:bg-white/90">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
