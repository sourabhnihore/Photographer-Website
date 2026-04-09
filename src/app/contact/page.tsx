"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function ContactPage() {
  const { address } = siteConfig;

  return (
    <main className="pt-40 bg-background min-h-screen">
      <div className="container-custom max-w-6xl mb-32">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Say Hello
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight"
          >
            Let's Start Your <br/> Next Chapter
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-beige/70 max-w-xl mx-auto"
          >
            We would love to hear from you. Fill out the form below with your details and we will get back to you within 24-48 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#121212] p-8 md:p-10 border border-white/5"
          >
            <h3 className="text-2xl font-serif text-white mb-8">Inquiry Form</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-beige/70 uppercase tracking-widest font-semibold text-[10px]">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-beige/70 uppercase tracking-widest font-semibold text-[10px]">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-beige/70 uppercase tracking-widest font-semibold text-[10px]">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-beige/70 uppercase tracking-widest font-semibold text-[10px]">Phone Number</label>
                  <input type="tel" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors" placeholder={siteConfig.phone} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-beige/70 uppercase tracking-widest font-semibold text-[10px]">Wedding Date</label>
                  <input type="date" className="w-full bg-transparent border-b border-white/20 pb-2 text-white/50 focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-beige/70 uppercase tracking-widest font-semibold text-[10px]">Location/Venue</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors" placeholder="E.g., Udaipur Palace" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-beige/70 uppercase tracking-widest font-semibold text-[10px]">Tell us about your wedding</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 pt-2 pb-2 text-white focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Share your vision, expected guest count, and any other details..." />
              </div>

              <Button type="submit" className="w-full mt-4">Send Inquiry</Button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-white">Direct Contact</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Studio Address</h4>
                  <p className="text-beige/70 leading-relaxed text-sm">
                    {address.street}<br />
                    {address.city}, {address.state} {address.postalCode}, {address.country}<br />
                    ({address.note})
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Phone</h4>
                  <p className="text-beige/70 leading-relaxed text-sm">
                    <a href={`tel:${siteConfig.whatsapp}`} className="hover:text-gold transition-colors">{siteConfig.phone}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Email</h4>
                  <p className="text-beige/70 leading-relaxed text-sm">
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">{siteConfig.email}</a><br />
                    <a href={`mailto:${siteConfig.bookingEmail}`} className="hover:text-gold transition-colors">{siteConfig.bookingEmail}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-gold shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Office Hours</h4>
                  <p className="text-beige/70 leading-relaxed text-sm">{siteConfig.officeHours}</p>
                </div>
              </div>
            </div>

            {/* Map — uses real iframe when URL is set, decorative mockup otherwise */}
            <div className="h-[250px] w-full bg-white/5 relative overflow-hidden">
              {siteConfig.googleMapsEmbedUrl ? (
                <iframe
                  src={siteConfig.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.9)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${siteConfig.siteName} Studio Location`}
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale mix-blend-screen" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                      <MapPin size={32} className="text-gold mx-auto mb-2 animate-bounce" />
                      <span className="font-serif text-white tracking-widest uppercase text-sm">{siteConfig.siteName}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
