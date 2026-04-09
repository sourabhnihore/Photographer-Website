"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";

const packages = [
  {
    name: "Essential",
    price: "₹85,000",
    desc: "Perfect for intimate gatherings and single-day wedding events.",
    features: [
      "1 Lead Photographer",
      "1 Lead Cinematographer",
      "8 Hours of Coverage",
      "Candid & Traditional Coverage",
      "3-5 Min Cinematic Highlight Film",
      "High-Resolution Edited Images",
      "Online Private Gallery"
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹1,50,000",
    desc: "Comprehensive coverage for multi-day grand celebrations.",
    features: [
      "2 Lead Photographers",
      "2 Lead Cinematographers",
      "2 Days of Coverage (16 Hours)",
      "Pre-Wedding Shoot Included",
      "Drone Coverage",
      "5-7 Min Cinematic Highlight Film",
      "30-45 Min Full Documentary Film",
      "Premium Leather Photobook"
    ],
    highlight: true,
  },
  {
    name: "Signature",
    price: "Custom",
    desc: "The ultimate bespoke experience for destination weddings.",
    features: [
      "Full Team Deployment",
      "Unlimited Hours / Multi-Day",
      "Concept Driven Pre-Wedding",
      "Same Day Edit Screening",
      "Aerial drone & crane setups",
      "Multiple Luxury Photobooks",
      "Expedited Delivery",
      "Dedicated Creative Director"
    ],
    highlight: false,
  }
];

export default function PricingPage() {
  return (
    <main className="pt-40 bg-background min-h-screen">
      <div className="container-custom text-center mb-24">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gold tracking-[0.2em] uppercase text-sm mb-4"
        >
          Investment
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-white mb-6"
        >
          Tailored For You
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-beige/70 max-w-2xl mx-auto block"
        >
          We believe in transparent pricing. Choose a package that suits your needs, or contact us to build a custom offering for your special day.
        </motion.p>
      </div>

      <div className="container-custom max-w-6xl mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`p-8 md:p-10 border transition-colors flex flex-col h-full
                ${pkg.highlight ? 'bg-black-lighter border-gold/30' : 'bg-transparent border-white/10 hover:border-white/30'}
              `}
            >
              {pkg.highlight && (
                <div className="text-gold uppercase tracking-widest text-xs font-semibold mb-6">Most Popular</div>
              )}
              <h3 className="text-3xl font-serif text-white mb-2">{pkg.name}</h3>
              <p className="text-beige/50 text-sm mb-8 h-10">{pkg.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-serif text-gold">{pkg.price}</span>
                {pkg.price !== "Custom" && <span className="text-sm text-white/50 tracking-widest uppercase"> / onwards</span>}
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-white/80">
                    <Check size={18} className="text-gold mr-3 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" passHref>
                <Button variant={pkg.highlight ? "default" : "outline"} className="w-full">
                  Inquire Now
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container-custom max-w-4xl mb-32 text-center">
        <h3 className="text-2xl font-serif text-white mb-6">A La Carte & Add-ons</h3>
        <p className="text-beige/70 leading-relaxed mb-8">
          Need something specific? We offer customized add-ons such as additional days of coverage, rushed delivery, raw footage hard drives, parent albums, canvas prints, and traditional videography.
        </p>
        <Link href="/contact" passHref>
          <Button variant="link">Request Full Pricing Brochure</Button>
        </Link>
      </div>

      <FinalCTA />
    </main>
  );
}
