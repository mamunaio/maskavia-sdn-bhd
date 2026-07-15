"use client";

import { motion } from "framer-motion";
import { Smartphone, BarChart3, ActivitySquare, LayoutDashboard, CheckCircle2, ArrowRight } from "lucide-react";

const capabilities = [
  {
    title: "Service Journey Management",
    description: "Manage the complete customer journey from pre-arrival planning and appointment scheduling to on-site check-in, queuing and service delivery. Gain full visibility and control to improve efficiency and reduce waiting times.",
    icon: <ActivitySquare className="w-16 h-16" />,
    points: ["Pre-arrival planning", "On-site check-in", "Queue optimization"],
    accent: "bg-blue-600",
    lightAccent: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    title: "Virtual Queuing (Mobile)",
    description: "Join queues remotely via QR or web. Stay informed with real-time updates and call notifications.",
    icon: <Smartphone className="w-16 h-16" />,
    points: ["Remote QR scanning", "Real-time SMS updates", "Reduced physical wait"],
    accent: "bg-indigo-600",
    lightAccent: "bg-indigo-50",
    textColor: "text-indigo-600"
  },
  {
    title: "Service Analytics",
    description: "Real-time insights into waiting times, service durations, and staff performance.",
    icon: <BarChart3 className="w-16 h-16" />,
    points: ["Performance tracking", "Predictive insights", "Exportable reports"],
    accent: "bg-emerald-600",
    lightAccent: "bg-emerald-50",
    textColor: "text-emerald-600"
  },
  {
    title: "Intelligent Dashboards",
    description: "Interactive, real-time dashboards for deeper analysis of service performance and data-driven decisions.",
    icon: <LayoutDashboard className="w-16 h-16" />,
    points: ["Live data feeds", "Customizable widgets", "Managerial overviews"],
    accent: "bg-orange-500",
    lightAccent: "bg-orange-50",
    textColor: "text-orange-600"
  }
];

export default function ZigZagFeatures() {
  return (
    <section className="py-24 bg-white relative border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 text-indigo-600 text-sm font-bold mb-4 tracking-widest uppercase bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full shadow-sm">
            Core Capabilities
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6"
          >
            Smarter Systems for <br className="hidden md:block"/> Seamless Experiences
          </motion.h2>
        </div>

        {/* Alternating Zig-Zag Layout */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {capabilities.map((feature, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <div key={idx} className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                
                {/* Text Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full lg:w-1/2 flex flex-col"
                >
                  <div className={`w-16 h-16 rounded-2xl ${feature.lightAccent} ${feature.textColor} flex items-center justify-center mb-8 shadow-sm border border-slate-100`}>
                    {/* A smaller version of the icon for the text block */}
                    <div className="scale-50">{feature.icon}</div>
                  </div>
                  
                  <h3 className="font-heading font-black text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                    {feature.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-4 text-slate-800 font-bold text-base">
                        <CheckCircle2 className={`w-5 h-5 ${feature.textColor} flex-shrink-0`} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div>
                    <button className={`inline-flex items-center gap-2 font-bold ${feature.textColor} hover:gap-4 transition-all`}>
                      Explore Feature <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>

                {/* Visual Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="w-full lg:w-1/2"
                >
                  <div className={`relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] ${feature.accent} overflow-hidden shadow-2xl group flex items-center justify-center`}>
                    
                    {/* Abstract overlay graphics */}
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                    
                    {/* Large central icon acting as a clean graphic */}
                    <div className="relative z-10 text-white transform group-hover:scale-110 transition-transform duration-700 ease-out">
                      {feature.icon}
                    </div>

                    {/* Floating mock element */}
                    <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4 text-white font-bold shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      System Optimized
                    </div>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
