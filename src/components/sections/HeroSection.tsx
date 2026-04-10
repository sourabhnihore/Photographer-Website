"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import content from "@/data/content.json";

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % content.heroSliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-[#0d0d0d]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background z-10 pointer-events-none" />
        
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={content.heroSliderImages[currentImageIndex]}
              alt="Wedding Highlight"
              fill
              sizes="100vw"
              priority={currentImageIndex === 0}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container-custom relative z-20 text-center max-w-5xl pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-6"
        >
          Welcome to PS
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1]"
        >
          Capturing Timeless
          <br className="hidden md:block" /> Wedding Stories
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16"
        >
          <Link href="/contact" passHref>
            <Button size="lg" className="w-full sm:w-auto min-w-[200px]">Check Availability</Button>
          </Link>
          <Link href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" passHref>
            <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px] gap-2 border-white text-white hover:border-gold hover:text-gold hover:bg-gold/10">
              <MessageCircle size={20} />
              WhatsApp Now
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
            animate={{ 
              top: ["-50%", "100%"] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "linear" 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
