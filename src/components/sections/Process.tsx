"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Consultation & Discovery", desc: "We uncover operational realities and align outcomes with business priorities." },
  { num: "02", title: "Journey Analysis", desc: "Map existing touchpoints and identify service delivery gaps." },
  { num: "03", title: "Solution Engineering", desc: "Architect a tailored solution aligning technology, processes, and user experience." },
  { num: "04", title: "System Integration", desc: "Configure and integrate seamlessly with existing platforms for real-time data flow." },
  { num: "05", title: "Operational Readiness", desc: "Execute a controlled rollout with hands-on training for your team." },
  { num: "06", title: "Continuous Optimization", desc: "Monitor performance and refine operations continuously to drive improvements." }
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-white relative border-b border-slate-200 overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-bold mb-4 tracking-widest uppercase bg-emerald-50 border border-emerald-100 px-4 py-1.5 rounded-full shadow-sm">
            Our Methodology
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="font-heading text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6"
          >
            The Maskavia Service <br/> Transformation Framework
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-lg text-slate-600 font-medium max-w-2xl mx-auto"
          >
            A disciplined approach to redesign, implement and continuously elevate your customer experience.
          </motion.p>
        </div>

        {/* Seamless Premium Bento Grid */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-200 gap-[1px] p-[1px] rounded-[2rem] overflow-hidden shadow-sm"
          >
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 p-10 flex flex-col hover:bg-white transition-colors duration-300 group relative"
              >
                {/* Number Badge */}
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-heading font-black text-xl text-emerald-600 mb-8 shadow-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300">
                  {step.num}
                </div>
                
                {/* Text Content */}
                <div className="flex-grow">
                  <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-lg">
                    {step.desc}
                  </p>
                </div>
                
                {/* Subtle visual link to the next step */}
                {idx !== steps.length - 1 && (
                  <div className="absolute right-6 top-12 hidden lg:flex text-slate-300 group-hover:text-emerald-300 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
