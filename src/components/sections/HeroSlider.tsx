"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MonitorSmartphone, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HeroSlider() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-28 pb-20 lg:pt-36 lg:pb-32 border-b border-slate-900">
      
      {/* Vibrant Technical Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        
        {/* Animated glowing line */}
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform -skew-y-12" />
        <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent transform -skew-y-12" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:pr-8 text-center lg:text-left pt-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-sm font-bold mb-8 shadow-sm backdrop-blur-md">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="uppercase tracking-widest">Next-Gen Enterprise OS</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
              Flawless <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                Experiences.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-medium">
              Maskavia delivers cutting-edge Smart CJM, Digital Signage, and Security solutions. Optimize workflows and strengthen service quality globally.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <Link 
                href="/solutions"
                className="btn-premium-glow group w-full sm:w-auto"
              >
                <span className="flex items-center gap-3">
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-slate-300 border border-slate-700 font-bold rounded-xl hover:border-slate-600 hover:text-white transition-all duration-300 shadow-sm w-full sm:w-auto"
              >
                Book a Demo
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm font-bold text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <span>Enterprise Grade</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Glowing Dark Mode Dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end mt-10 lg:mt-0 perspective-1000"
          >
            {/* The Dashboard UI */}
            <div className="relative w-full max-w-lg bg-slate-900/80 backdrop-blur-2xl rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800 overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
              
              {/* Header */}
              <div className="bg-slate-950/80 px-6 py-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-slate-500 font-mono text-[10px] font-bold tracking-widest uppercase">Maskavia Data Center</div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Stat Card 1 */}
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300 group">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-3 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
                      <MonitorSmartphone className="w-5 h-5" />
                    </div>
                    <div className="text-3xl font-black text-white mb-1">99.9%</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">System Uptime</div>
                  </div>
                  {/* Stat Card 2 */}
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-colors duration-300 group">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="text-3xl font-black text-white mb-1">12M+</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Interactions</div>
                  </div>
                </div>

                {/* Glowing Bar Chart Mockup */}
                <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
                  <div className="flex items-center justify-between mb-8">
                    <div className="font-bold text-slate-300">Service Efficiency</div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                      </span>
                      <div className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">Live Stream</div>
                    </div>
                  </div>
                  <div className="flex items-end gap-3 h-32">
                    {[30, 50, 40, 80, 60, 100, 75].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col justify-end gap-2 group">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                          className={`w-full rounded-t-md relative ${i === 5 ? 'bg-blue-500' : 'bg-slate-700'}`}
                        >
                          {i === 5 && (
                            <div className="absolute inset-0 bg-blue-400 blur-md opacity-50 rounded-t-md" />
                          )}
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Alert */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
              className="absolute -left-12 bottom-20 bg-slate-900/90 backdrop-blur-xl p-4 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.4)] border border-indigo-500/30 flex items-center gap-4 hidden md:flex"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-black text-white">Network Secured</div>
                <div className="text-xs font-bold text-slate-400">Active monitoring on</div>
              </div>
            </motion.div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
