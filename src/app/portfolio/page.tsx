"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Image from "next/image";
import content from "@/data/content.json";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(-1);

  const filteredImages = content.portfolioItems.filter(
    (img) => filter === "All" || img.category === filter
  );

  return (
    <main className="pt-40 pb-32 min-h-screen bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-beige/70 max-w-2xl mx-auto"
          >
            A curated collection of our finest work, showcasing the genuine emotions, vibrant colors, and timeless love stories we've had the honor to capture.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {content.portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 rounded-full ${
                filter === cat ? "bg-gold text-white" : "border border-white/20 text-white/70 hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.src}
                className="relative overflow-hidden group cursor-pointer break-inside-avoid"
                onClick={() => setIndex(i)}
                style={{ height: img.height }}
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <Image 
                    src={img.type === "youtube" && img.thumbnail ? img.thumbnail : img.src} 
                    alt={img.title || "Portfolio image"} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover" 
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-gold uppercase tracking-widest text-sm font-semibold">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={filteredImages.map(img => ({ src: img.src, type: img.type, title: img.title })) as any}
          render={{
            slide: ({ slide }: any) => {
              if (slide.type === "youtube") {
                return (
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <iframe
                      width="100%"
                      height="100%"
                      className="max-w-6xl max-h-[80vh] aspect-video"
                      src={slide.src}
                      title={slide.title || "YouTube video"}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                );
              }
              return undefined;
            }
          }}
        />
      </div>
    </main>
  );
}
