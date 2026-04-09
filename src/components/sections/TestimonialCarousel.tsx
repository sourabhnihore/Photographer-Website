"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import content from "@/data/content.json";

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === content.testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev === content.testimonials.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? content.testimonials.length - 1 : prev - 1));

  return (
    <section className="py-32 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black-lighter opacity-50 z-0">
        <Quote size={400} />
      </div>
      
      <div className="container-custom relative z-10 max-w-4xl text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold tracking-[0.2em] uppercase text-sm mb-16"
        >
          Words of Love
        </motion.p>

        <div className="min-h-[250px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <p className="text-2xl md:text-4xl font-serif text-foreground leading-relaxed mb-8 italic">
                "{content.testimonials[current].quote}"
              </p>
              
              {content.testimonials[current].image && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-gold/20">
                  <Image 
                    src={content.testimonials[current].image}
                    alt={content.testimonials[current].author}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              )}

              <h4 className="text-gold uppercase tracking-widest text-sm font-semibold">
                {content.testimonials[current].author}
              </h4>
              <p className="text-foreground/50 text-xs uppercase tracking-widest mt-2 block">
                {content.testimonials[current].location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button onClick={prev} className="p-3 border border-white/10 rounded-full hover:border-gold hover:text-gold transition-colors text-foreground">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {content.testimonials.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 transition-all duration-300 ${idx === current ? "w-8 bg-gold" : "w-2 bg-white/20"}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-3 border border-white/10 rounded-full hover:border-gold hover:text-gold transition-colors text-foreground">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
