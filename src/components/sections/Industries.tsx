"use client";

import { motion } from "framer-motion";
import { Activity, Building2, Landmark, ShoppingBag, GraduationCap, Briefcase, Hotel, BusFront } from "lucide-react";

const industries = [
  {
    title: "HEALTHCARE",
    desc: "Hospitals, clinics & specialist centres",
    icon: <Activity className="w-6 h-6" />,
    color: "bg-rose-500"
  },
  {
    title: "PUBLIC",
    desc: "Government agencies & local councils",
    icon: <Landmark className="w-6 h-6" />,
    color: "bg-blue-500"
  },
  {
    title: "FINANCE",
    desc: "Banks, insurance & financial services",
    icon: <Building2 className="w-6 h-6" />,
    color: "bg-emerald-500"
  },
  {
    title: "RETAIL",
    desc: "Retail chains, showrooms & service centres",
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "bg-orange-500"
  },
  {
    title: "EDUCATION",
    desc: "Universities, colleges & training centers",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "bg-purple-500"
  },
  {
    title: "CORPORATE",
    desc: "Corporate offices & multinational headquarters",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-indigo-500"
  },
  {
    title: "HOSPITALITY",
    desc: "Hotels, resorts & entertainment venues",
    icon: <Hotel className="w-6 h-6" />,
    color: "bg-cyan-500"
  },
  {
    title: "TRANSPORTATION",
    desc: "Airports, train stations & transport hubs",
    icon: <BusFront className="w-6 h-6" />,
    color: "bg-amber-500"
  }
];

export default function Industries() {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-rose-600 text-sm font-bold mb-4 tracking-widest uppercase bg-rose-50 border border-rose-100 px-4 py-1.5 rounded shadow-sm">
            Industries We Serve
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6"
          >
            Powering Service Excellence Across Industries
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            We empower sectors to strengthen service quality, improve workflow efficiency, and better manage the overall customer journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex flex-col items-center text-center h-full p-8 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 text-white shadow-md ${industry.color}`}>
                  {industry.icon}
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-slate-900 tracking-wider uppercase">{industry.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  {industry.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
