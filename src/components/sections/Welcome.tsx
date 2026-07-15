"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket } from "lucide-react";

export default function Welcome() {
  return (
    <section className="py-24 md:py-32 bg-white relative border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Large Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold mb-6 tracking-widest uppercase bg-blue-50 px-4 py-2 rounded">
              Welcome to Maskavia
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Orchestrating <br/>
              <span className="text-blue-600">
                Flawless Experiences.
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
              Maskavia Sdn Bhd specializes in delivering customer experience solutions that streamline service delivery from initial engagement to final interaction. Our solutions optimize customer flow, reduce waiting times, and create efficient, well-managed service environments.
            </p>
          </motion.div>

          {/* Right Content - Structured Feature Blocks */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                <Lightbulb className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">Intelligent Operations</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Through intelligent queue management, appointment systems and digital communication platforms, we help organizations keep customers informed and engaged.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                <Rocket className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">End-to-End Transformation</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  At Maskavia, we combine software, hardware and analytics to transform the entire customer journey, enhancing service quality and empowering your staff.
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
