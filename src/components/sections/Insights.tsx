"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const insights = [
  {
    title: "Business Intelligence: Turning Operational Data into Strategic Performance Insights",
    excerpt: "Discover how AI and machine learning are revolutionizing the way enterprises manage customer flow and reduce perceived wait times.",
    date: "July 12, 2026",
    category: "Technology",
    color: "bg-blue-600", 
    imageBg: "bg-slate-200"
  },
  {
    title: "Elevating Retail Customer Engagement Through Digital Signage Solutions",
    excerpt: "Learn how top hospitals are utilizing our Virtual Queuing and Wayfinding solutions to streamline patient journeys.",
    date: "June 28, 2026",
    category: "Case Study",
    color: "bg-emerald-600", 
    imageBg: "bg-slate-200"
  },
  {
    title: "Customer Journey Management as a Strategic Driver of Public Sector Excellence",
    excerpt: "Why capturing customer feedback across digital and physical touchpoints is critical for continuous business growth.",
    date: "June 15, 2026",
    category: "Business Strategy",
    color: "bg-indigo-600", 
    imageBg: "bg-slate-200"
  },
  {
    title: "The Future of Queue Management in 2026",
    excerpt: "Discover how AI and machine learning are revolutionizing the way enterprises manage customer flow and reduce perceived wait times.",
    date: "July 12, 2026",
    category: "Technology",
    color: "bg-blue-600", 
    imageBg: "bg-slate-200"
  }
];

export default function Insights() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-indigo-600 text-sm font-bold mb-4 tracking-widest uppercase bg-white border border-slate-200 px-4 py-1.5 rounded shadow-sm"
          >
            Latest Blog
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6"
          >
            Explore Our Latest Insights
          </motion.h2>
        </div>

        <div className="relative max-w-7xl mx-auto px-12">
          {/* Navigation Buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center shadow-sm hover:shadow-md transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center shadow-sm hover:shadow-md transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {insights.map((post, idx) => (
                <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6 py-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="h-full"
                  >
                    <div className="flex flex-col h-full bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                      {/* Image Placeholder */}
                      <div className={`w-full h-48 ${post.imageBg} flex items-center justify-center text-slate-400 font-bold border-b border-slate-100`}>
                        Image / Graphic
                      </div>
                      <div className="p-8 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{post.category}</span>
                          <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-xl text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                          {post.title}
                        </h3>
                        <div className="mt-auto pt-4 border-t border-slate-100">
                          <button className="text-indigo-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read Article <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
