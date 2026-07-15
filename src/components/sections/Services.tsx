"use client";

import { motion } from "framer-motion";
import { 
  Users, MonitorPlay, Video, Navigation, 
  CalendarCheck, MessageSquare, BarChart, 
  Link as LinkIcon, ShieldCheck, Briefcase,
  ArrowRight
} from "lucide-react";

const solutions = [
  {
    title: "Customer Experience Consultancy",
    desc: "Expert guidance to redesign and elevate your customer journeys across all touchpoints.",
    icon: <Briefcase className="w-6 h-6" />,
    colSpan: "md:col-span-2 lg:col-span-2",
    accent: "from-blue-50 to-indigo-50/0 border-blue-200 text-blue-600 group-hover:bg-blue-600"
  },
  {
    title: "Smart CJM",
    desc: "Intelligent Customer Journey Management systems designed to optimize queues and reduce wait times.",
    icon: <Users className="w-6 h-6" />,
    colSpan: "md:col-span-2 lg:col-span-2",
    accent: "from-purple-50 to-pink-50/0 border-purple-200 text-purple-600 group-hover:bg-purple-600"
  },
  {
    title: "Virtual Queuing",
    desc: "Allow customers to wait remotely with real-time updates and improved convenience.",
    icon: <Video className="w-6 h-6" />,
    colSpan: "col-span-1",
    accent: "from-emerald-50 to-teal-50/0 border-emerald-200 text-emerald-600 group-hover:bg-emerald-600"
  },
  {
    title: "Appointment Booking",
    desc: "Smart scheduling matches customers with appropriate staff, ensuring smoother visits.",
    icon: <CalendarCheck className="w-6 h-6" />,
    colSpan: "col-span-1",
    accent: "from-orange-50 to-red-50/0 border-orange-200 text-orange-600 group-hover:bg-orange-600"
  },
  {
    title: "Customer Feedback",
    desc: "Collect real-time feedback linked to operations data for continuous service improvement.",
    icon: <MessageSquare className="w-6 h-6" />,
    colSpan: "col-span-1",
    accent: "from-cyan-50 to-blue-50/0 border-cyan-200 text-cyan-600 group-hover:bg-cyan-600"
  },
  {
    title: "Business Intelligence",
    desc: "Transform operational data into actionable insights for smarter decisions.",
    icon: <BarChart className="w-6 h-6" />,
    colSpan: "col-span-1",
    accent: "from-yellow-50 to-orange-50/0 border-yellow-200 text-amber-600 group-hover:bg-amber-500"
  },
  {
    title: "Digital Signage",
    desc: "Dynamic, high-resolution enterprise displays for corporate communication.",
    icon: <MonitorPlay className="w-6 h-6" />,
    colSpan: "col-span-1",
    accent: "from-pink-50 to-rose-50/0 border-pink-200 text-pink-600 group-hover:bg-pink-600"
  },
  {
    title: "Integration",
    desc: "Seamless integration within your ecosystem to connect kiosks, displays, and software.",
    icon: <LinkIcon className="w-6 h-6" />,
    colSpan: "col-span-1",
    accent: "from-indigo-50 to-blue-50/0 border-indigo-200 text-indigo-600 group-hover:bg-indigo-600"
  },
  {
    title: "Managed Services",
    desc: "End-to-end management of your service infrastructure by our expert team.",
    icon: <ShieldCheck className="w-6 h-6" />,
    colSpan: "col-span-1",
    accent: "from-green-50 to-emerald-50/0 border-green-200 text-green-600 group-hover:bg-green-600"
  },
  {
    title: "Wayfinding Solution",
    desc: "Interactive digital directories to guide visitors effortlessly through facilities.",
    icon: <Navigation className="w-6 h-6" />,
    colSpan: "col-span-1",
    accent: "from-sky-50 to-cyan-50/0 border-sky-200 text-sky-600 group-hover:bg-sky-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
      
      {/* Light Mode Soft Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold mb-4 tracking-widest uppercase bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
            Our Solutions
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6"
          >
            Comprehensive Enterprise Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed font-medium"
          >
            Delivering robust, scalable, and intelligent systems tailored for the unique demands of modern businesses across every touchpoint.
          </motion.p>
        </div>
        
        {/* Light Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {solutions.map((sol, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={sol.colSpan}
            >
              <div className="group relative flex flex-col h-full p-8 bg-white rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-default">
                
                {/* Subtle Background Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sol.accent.split(' ').slice(0, 2).join(' ')} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* FIXED BUG: Added 'relative' here so the absolute inset-0 stays inside this icon container! */}
                  <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white border shadow-sm ${sol.accent.split(' ')[2]} ${sol.accent.split(' ')[3]} group-hover:text-white transition-all duration-500`}>
                    
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${sol.accent.split(' ')[4]}`}></div>
                    
                    <div className="relative z-10">
                      {sol.icon}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-3 text-slate-900">
                    {sol.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-grow font-medium">
                    {sol.desc}
                  </p>
                  
                  {/* Subtle Learn More Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
                    Explore Solution <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
