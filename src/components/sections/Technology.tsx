"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, Monitor, BarChart2, Settings, ArrowRight, LayoutDashboard, CheckCircle2 } from "lucide-react";

const techFeatures = [
  {
    id: "visibility",
    icon: <Clock className="w-5 h-5" />,
    title: "Live Queue Visibility",
    desc: "Give both staff and customers instant visibility into queue movement, expected waiting times, and current service activity in real time. Eliminate uncertainty and improve satisfaction from the moment they arrive.",
    color: "text-blue-600",
    bgColor: "bg-blue-600",
    lightBg: "bg-blue-50"
  },
  {
    id: "ecosystem",
    icon: <Monitor className="w-5 h-5" />,
    title: "Unified Ecosystem",
    desc: "Connect kiosks, displays, counters, and software into a single, synchronized platform that ensures consistent, efficient service delivery across all touchpoints.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-600",
    lightBg: "bg-emerald-50"
  },
  {
    id: "analytics",
    icon: <BarChart2 className="w-5 h-5" />,
    title: "Advanced Analytics",
    desc: "Gain deeper visibility into service performance through intelligent analytics that reveal bottlenecks, track trends, and support smarter, data-driven improvements.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-600",
    lightBg: "bg-indigo-50"
  },
  {
    id: "control",
    icon: <Settings className="w-5 h-5" />,
    title: "Absolute Control",
    desc: "Stay connected to your operations at all times, with the ability to monitor, manage, and optimize service performance from anywhere.",
    color: "text-orange-600",
    bgColor: "bg-orange-500",
    lightBg: "bg-orange-50"
  }
];

export default function Technology() {
  const [activeTab, setActiveTab] = useState(techFeatures[0].id);

  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-indigo-600 text-sm font-bold mb-4 tracking-widest uppercase bg-white border border-slate-200 px-4 py-1.5 rounded shadow-sm">
            Intelligent Technology
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6"
          >
            Where Queue Management <br className="hidden md:block" /> Meets Service Excellence
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Seamless Interactive Tabs */}
          <div className="w-full lg:w-5/12 flex flex-col gap-2">
            {techFeatures.map((feat) => {
              const isActive = activeTab === feat.id;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveTab(feat.id)}
                  className={`text-left p-5 rounded-xl transition-all duration-300 relative overflow-hidden ${
                    isActive 
                      ? `bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60` 
                      : `bg-transparent border border-transparent hover:bg-slate-200/50`
                  }`}
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className={`absolute left-0 top-0 bottom-0 w-1 ${feat.bgColor}`}
                    />
                  )}
                  
                  <div className="flex items-center gap-4 relative z-10 ml-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-sm transition-colors ${
                      isActive ? `${feat.bgColor} text-white` : `bg-slate-200 text-slate-500`
                    }`}>
                      {feat.icon}
                    </div>
                    <div>
                      <h3 className={`font-heading font-bold text-lg transition-colors ${
                        isActive ? 'text-slate-900' : 'text-slate-600'
                      }`}>
                        {feat.title}
                      </h3>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className={`text-xs font-bold ${feat.color} mt-1`}
                        >
                          View Details &rarr;
                        </motion.div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Right Side: Premium Dashboard Card Display */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white border border-slate-200 rounded-[2rem] h-[520px] flex flex-col relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
              
              {techFeatures.map((feat) => (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ 
                    opacity: activeTab === feat.id ? 1 : 0,
                    scale: activeTab === feat.id ? 1 : 0.98,
                    pointerEvents: activeTab === feat.id ? "auto" : "none"
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 p-10 flex flex-col"
                >
                  <div className={`inline-flex items-center gap-2 ${feat.color} text-sm font-black mb-4 tracking-widest uppercase`}>
                    {feat.title}
                  </div>
                  
                  <p className="text-xl font-medium text-slate-600 mb-8 leading-relaxed">
                    {feat.desc}
                  </p>

                  {/* Clean Mock UI Inside Card */}
                  <div className="mt-auto bg-slate-50 rounded-2xl border border-slate-200 p-6 flex-grow flex flex-col justify-end relative overflow-hidden group cursor-pointer">
                    
                    {/* Floating Mock Elements */}
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-md ${feat.lightBg} flex items-center justify-center ${feat.color}`}>
                          <LayoutDashboard className="w-4 h-4" />
                        </div>
                        <div className="h-4 w-32 bg-slate-200 rounded-full" />
                      </div>
                      <div className="h-6 w-16 bg-white border border-slate-200 rounded-full flex items-center justify-center">
                        <div className={`w-2 h-2 rounded-full ${feat.bgColor} animate-pulse`} />
                      </div>
                    </div>
                    
                    {/* Mock Graph/Lines */}
                    <div className="flex items-end gap-2 h-24 mt-16">
                      {[40, 70, 45, 90, 65, 85].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end group-hover:scale-[1.02] transition-transform">
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: activeTab === feat.id ? `${h}%` : 0 }}
                            transition={{ duration: 0.8, delay: 0.2 + (i * 0.05) }}
                            className={`w-full rounded-t-sm ${i === 4 ? feat.bgColor : 'bg-slate-200'}`}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Gradient Overlay for Fade Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <CheckCircle2 className={`w-4 h-4 ${feat.color}`} /> System Active
                      </div>
                      <div className={`text-sm font-bold ${feat.color} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                        Explore <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
