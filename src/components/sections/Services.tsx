"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Navigation, Video, Users, ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6"
          >
            Our Enterprise Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Delivering robust, scalable, and intelligent systems tailored for the unique demands of modern businesses.
          </motion.p>
        </div>
        
        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Main Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 bg-white/70 backdrop-blur-lg border border-primary/10 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="text-accent w-6 h-6" />
            </div>
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-semibold text-2xl mb-4 text-gray-900">Smart CJM</h3>
            <p className="text-gray-600 leading-relaxed text-lg max-w-md">
              Intelligent Customer Journey Management systems designed to optimize queues, reduce wait times, and enhance satisfaction across your entire enterprise footprint.
            </p>
          </motion.div>

          {/* Vertical Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="bg-primary backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-sm hover:shadow-[0_0_30px_rgba(30,58,138,0.3)] transition-all group cursor-pointer text-white relative"
          >
             <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="text-white w-6 h-6" />
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white border border-white/5">
              <MonitorPlay className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-heading font-semibold text-2xl mb-4">Digital Signage</h3>
            <p className="text-blue-100 leading-relaxed">
              Dynamic, high-resolution enterprise displays for corporate communication, advertising, and information dissemination.
            </p>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/70 backdrop-blur-lg border border-primary/10 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <Video className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">CCTV Solutions</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              State-of-the-art security surveillance systems with AI-powered analytics.
            </p>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="md:col-span-2 bg-white/70 backdrop-blur-lg border border-primary/10 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group cursor-pointer flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 text-primary">
              <Navigation className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-xl mb-2 text-gray-900">Wayfinding Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Interactive digital directories and wayfinding kiosks to guide visitors effortlessly through complex facilities and corporate campuses.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
