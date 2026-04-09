"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Candid Photography",
    desc: "Capturing the raw, unscripted, and spontaneous moments that define your true story.",
    image: "/images/portfolio/candid03.jpg"
  },
  {
    title: "Cinematography",
    desc: "Focusing on storytelling, we create premium wedding films that feel like mainstream movies.",
    image: "/images/portfolio/Haldi01.png"
  },
  {
    title: "Pre-Wedding",
    desc: "A stylized session to celebrate your romance and the journey before the big day.",
    image: "/images/portfolio/prewedding02.png"
  }
];

export function ServicesPreview() {
  return (
    <section className="py-32 bg-black-light text-beige">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Our Expertise</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Curating Your Legacy</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/services" className="group flex items-center gap-2 text-gold uppercase tracking-widest text-sm hover:text-white transition-colors">
              Explore All Services
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[500px] w-full overflow-hidden mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-3">{service.title}</h3>
              <p className="text-beige/70 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
