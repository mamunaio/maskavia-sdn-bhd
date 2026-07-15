"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 2, suffix: "B+", label: "Customer Journeys" },
  { value: 65, suffix: "K+", label: "Systems" },
  { value: 120, suffix: "", label: "Countries" },
  { value: 40, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "+", label: "Partners" },
];

function AnimatedCounter({ value, suffix, duration = 2.5 }: { value: number, suffix: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          const easeOut = progress * (2 - progress);
          setCount(Math.floor(value * easeOut));
          requestAnimationFrame(animateCount);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      
      {/* Subtle Geometric Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * idx, duration: 0.5, ease: "easeOut" }}
              className="text-center px-4"
            >
              <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-2 text-white">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base font-bold text-blue-100 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
