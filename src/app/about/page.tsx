"use client";

import { motion } from "framer-motion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function AboutPage() {
  return (
    <main className="pt-40 bg-background min-h-screen">
      <div className="container-custom max-w-5xl mb-24">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gold tracking-[0.2em] uppercase text-sm mb-4 text-center"
        >
          Our Story
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif text-white mb-16 text-center leading-tight"
        >
          More than visual art.
          <br className="hidden md:block" />
          <span className="italic text-white/50">It's a feeling captured in time.</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px]"
          >
            <div className="absolute inset-0 bg-[url('/images/portfolio/photographer03.jpg')] bg-cover bg-center" />
            <div className="absolute inset-4 border border-white/20 pointer-events-none" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif text-white mb-6">Meet The Visionary</h2>
            {siteConfig.photographer.bio.map((paragraph, i) => (
              <p key={i} className="text-beige/70 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
            <div className="pt-6">
              <h4 className="text-gold uppercase tracking-widest text-sm font-semibold italic font-serif">
                {siteConfig.photographer.name}
              </h4>
              <p className="text-xs uppercase tracking-widest text-white/50 mt-1">
                {siteConfig.photographer.role}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-[400px] bg-[url('/images/portfolio/photographer01.jpg')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" 
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-[400px] md:-translate-y-12 bg-[url('/images/portfolio/photographer02.jpg')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" 
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="h-[400px] bg-[url('/images/portfolio/photographer03.jpg')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" 
          />
        </div>
      </div>

      <FinalCTA />
    </main>
  );
}
