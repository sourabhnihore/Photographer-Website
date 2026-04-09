"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import content from "@/data/content.json";

export function PortfolioPreview() {
  return (
    <section className="py-32 bg-background">
      <div className="container-custom text-center mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gold tracking-[0.2em] uppercase text-sm mb-4"
        >
          Featured Glimpses
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-serif text-foreground"
        >
          A Visual Symphony
        </motion.h2>
      </div>

      <div className="container-custom max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {content.portfolioItems.slice(0, 3).map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative overflow-hidden group ${img.className || ''}`}
            >
              <div className="absolute inset-0 transition-transform duration-[1.5s] group-hover:scale-110">
                <Image
                  src={img.type === "youtube" && img.thumbnail ? img.thumbnail : img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-serif tracking-widest text-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center" 
        >
          <Link href="/portfolio" passHref>
            <Button variant="outline" size="lg">View Full Portfolio</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
