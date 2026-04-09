"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PricingSummary() {
  return (
    <section className="py-32 bg-[#121212] relative">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-8"
        >
          <p className="text-gold tracking-[0.2em] uppercase text-sm">Investment</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Premium Packages
            <br />
            <span className="italic text-white/50 font-light">&</span> Custom Experiences
          </h2>
          <p className="text-beige/70 leading-relaxed max-w-md">
            Every wedding is unique. We offer comprehensive packages that can be tailored to match your specific vision and requirements. Let's discuss how we can beautifully document your day.
          </p>
          <div className="pt-4 border-t border-white/10 inline-block w-full max-w-sm">
            <p className="text-sm font-sans text-white/50 uppercase tracking-widest mb-2">Packages Starting From</p>
            <p className="text-3xl font-serif text-gold">₹85,000 <span className="text-base text-white/50 font-sans tracking-normal">/ day</span></p>
          </div>
          <div className="pt-8">
            <Link href="/pricing" passHref>
              <Button>View Detailed Pricing</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 relative h-[600px]"
        >
          {/* Decorative framed image */}
          <div className="absolute inset-4 border border-gold/30 z-20 pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center z-10" />
        </motion.div>
      </div>
    </section>
  );
}
