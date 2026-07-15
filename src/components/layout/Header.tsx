"use client";

import Link from "next/link";
import { Menu, ChevronDown, Activity, Briefcase, BarChart, Settings, Users, MonitorPlay, ShieldCheck, Map, BookOpen, Scale, Network } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const solutions = [
  { name: "Customer Experience Consultancy", description: "Expert strategies to elevate your customer journeys.", icon: <Briefcase className="w-5 h-5" />, color: "text-blue-600", bg: "bg-blue-100" },
  { name: "Customer Journey Management", description: "End-to-end mapping and optimization tools.", icon: <Users className="w-5 h-5" />, color: "text-indigo-600", bg: "bg-indigo-100" },
  { name: "Virtual Queuing Solutions", description: "Eliminate physical lines and reduce wait times.", icon: <Activity className="w-5 h-5" />, color: "text-emerald-600", bg: "bg-emerald-100" },
  { name: "Online Appointment Booking", description: "Seamless scheduling for your clients.", icon: <Activity className="w-5 h-5" />, color: "text-amber-600", bg: "bg-amber-100" },
  { name: "Customer Feedback", description: "Actionable insights directly from users.", icon: <Activity className="w-5 h-5" />, color: "text-rose-600", bg: "bg-rose-100" },
  { name: "Business Intelligence", description: "Data-driven analytics and advanced reporting.", icon: <BarChart className="w-5 h-5" />, color: "text-purple-600", bg: "bg-purple-100" },
  { name: "Digital Signage", description: "Dynamic displays to engage your audience.", icon: <MonitorPlay className="w-5 h-5" />, color: "text-cyan-600", bg: "bg-cyan-100" },
  { name: "Integration", description: "Connect Maskavia with your existing tools.", icon: <Settings className="w-5 h-5" />, color: "text-slate-600", bg: "bg-slate-200" },
  { name: "Managed Service By Maskavia", description: "Let our experts handle the heavy lifting.", icon: <ShieldCheck className="w-5 h-5" />, color: "text-teal-600", bg: "bg-teal-100" },
  { name: "Wayfinding Solution", description: "Interactive indoor navigation systems.", icon: <Map className="w-5 h-5" />, color: "text-orange-600", bg: "bg-orange-100" },
];

const aboutItems = [
  { name: "Maskavia Partner Network", description: "Join our global ecosystem of partners.", icon: <Network className="w-5 h-5" />, color: "text-blue-600", bg: "bg-blue-100" },
  { name: "Quality Policy", description: "Our commitment to excellence.", icon: <Scale className="w-5 h-5" />, color: "text-emerald-600", bg: "bg-emerald-100" },
  { name: "Privacy Policy", description: "How we protect your data.", icon: <BookOpen className="w-5 h-5" />, color: "text-indigo-600", bg: "bg-indigo-100" },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-2xl border-b border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
      <header className="w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <span className="text-white font-heading font-black text-xl">M</span>
            </div>
            <span className="font-heading font-black text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">MASKAVIA</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 h-full" onMouseLeave={() => setActiveMenu(null)}>
            
            <Link href="/" className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300">
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div 
              className="relative h-full flex items-center px-1"
              onMouseEnter={() => setActiveMenu("solutions")}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${activeMenu === "solutions" ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"}`}>
                Solutions <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === "solutions" ? "rotate-180 text-blue-600" : ""}`} />
              </button>
              
              <AnimatePresence>
                {activeMenu === "solutions" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-[75px] left-1/2 -translate-x-1/2 w-[800px] bg-white border border-slate-200/60 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-3 z-50"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {solutions.map((item, idx) => (
                        <Link 
                          key={idx} 
                          href="#" 
                          className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg} ${item.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                            {item.icon}
                          </div>
                          <div>
                            <span className="block text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                              {item.name}
                            </span>
                            <span className="block text-xs font-medium text-slate-500 leading-relaxed">
                              {item.description}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    {/* Bottom CTA bar inside dropdown */}
                    <div className="mt-2 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="block text-sm font-bold text-slate-900">Not sure what you need?</span>
                        <span className="block text-xs text-slate-500">Talk to our enterprise consultants.</span>
                      </div>
                      <Link href="/contact" className="text-sm font-bold text-blue-600 hover:text-blue-700">
                        Get free consultation &rarr;
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="#industries" className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300">
              Industries
            </Link>

            {/* About Dropdown */}
            <div 
              className="relative h-full flex items-center px-1"
              onMouseEnter={() => setActiveMenu("about")}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${activeMenu === "about" ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"}`}>
                About <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === "about" ? "rotate-180 text-blue-600" : ""}`} />
              </button>
              
              <AnimatePresence>
                {activeMenu === "about" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-[75px] left-1/2 -translate-x-1/2 w-[350px] bg-white border border-slate-200/60 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-3 flex flex-col gap-1 z-50"
                  >
                    {aboutItems.map((item, idx) => (
                      <Link 
                        key={idx} 
                        href="#" 
                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.bg} ${item.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                          {item.icon}
                        </div>
                        <div>
                          <span className="block text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-0.5">
                            {item.name}
                          </span>
                          <span className="block text-xs font-medium text-slate-500">
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="#blog" className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300">
              Blog
            </Link>

          </nav>
          
          <div className="hidden lg:flex items-center gap-4">
             <button className="btn-premium-glow shadow-sm">
              Contact Us
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button className="p-2 text-slate-600 hover:text-blue-600 bg-slate-50 rounded-lg transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
