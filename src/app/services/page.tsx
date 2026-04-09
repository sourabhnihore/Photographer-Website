"use client";

import { motion } from "framer-motion";
import { FinalCTA } from "@/components/sections/FinalCTA";

const serviceDetails = [
  {
    title: "Cinematic Wedding Films",
    desc: "We approach wedding films with a storyteller's eye, capturing the raw dialogue, the unseen tears, and the grand celebrations. Our cinematography feels like a premium movie where you are the lead characters.",
    image: "/images/portfolio/Haldi01.png",
    features: ["4K Resolution", "Drone Coverage", "Teaser & Full Length Film", "Professional Audio Setup"],
  },
  {
    title: "Candid & Fine Art Photography",
    desc: "Our photography style blends photojournalism with fine art. We focus on natural lighting and genuine emotions, ensuring your wedding album feels authentic, timeless, and exquisitely beautiful.",
    image: "/images/portfolio/Candid03.jpg",
    features: ["Candid Specialists", "High-Resolution Edits", "Premium Coffee Table Books", "Online Gallery"],
  },
  {
    title: "Pre-Wedding & Engagement",
    desc: "A stylized session to celebrate your romance before the big day. We scout breathtaking locations and direct you seamlessly to create enchanting, editorial-style imagery.",
    image: "/images/portfolio/prewedding02.png",
    features: ["Location Scouting", "Concept Planning", "Wardrobe Consultation", "Cinematic Teaser"],
  },
  {
    title: "Destination Weddings",
    desc: "Whether it's a royal palace in Rajasthan or a serene beach in the Maldives, our team is equipped to travel globally to document your grand celebration seamlessly.",
    image: "/images/portfolio/wedding05.png",
    features: ["Global Travel", "Dedicated Core Team", "Multi-day Coverage", "Logistics Handled"],
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-40 bg-background min-h-screen">
      <div className="container-custom text-center mb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gold tracking-[0.2em] uppercase text-sm mb-4"
        >
          Our Offerings
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-white mb-6"
        >
          Curating Your Legacy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-beige/70 max-w-2xl mx-auto"
        >
          Comprehensive photography and cinematography services designed to flawlessly document your union with an elegant, cinematic touch.
        </motion.p>
      </div>

      <div className="container-custom max-w-6xl mb-32">
        <div className="space-y-32">
          {serviceDetails.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-1000"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-4 border border-white/20 pointer-events-none" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif text-white">{service.title}</h2>
                <p className="text-beige/70 leading-relaxed text-lg">{service.desc}</p>
                <div className="pt-6">
                  <h4 className="text-gold uppercase tracking-widest text-xs font-semibold mb-4">Highlights</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-white/80">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <FinalCTA />
    </main>
  );
}
