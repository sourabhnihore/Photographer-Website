"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform duration-300"
    >
      <Link
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center"
      >
        <MessageCircle size={28} />
        <span className="sr-only">Chat on WhatsApp</span>
      </Link>
    </motion.div>
  );
}
