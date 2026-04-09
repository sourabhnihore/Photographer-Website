"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-50"
        />
      </div>

      <div className="container-custom relative z-20 text-center max-w-3xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gold tracking-[0.3em] uppercase text-sm mb-6"
        >
          Let's create magic
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-serif text-white mb-8"
        >
          Ready to tell your story?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 mb-12 text-lg leading-relaxed font-sans max-w-xl mx-auto"
        >
          We take on a limited number of weddings each year to ensure every couple gets our undivided artistic attention.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/contact" passHref>
            <Button size="lg" className="px-12">Inquire Now</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
