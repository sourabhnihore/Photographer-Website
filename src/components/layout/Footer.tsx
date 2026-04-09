import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

// ── Brand SVG Icons ──────────────────────────────────────────
// lucide-react does not ship social brand icons; we use pixel-perfect
// SVG paths sourced from the official brand kits.

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function YoutubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-light text-beige-dark pt-24 pb-12 border-t border-white/5">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <Link href="/" className="text-4xl font-serif text-gold tracking-widest inline-block mb-4">
            {siteConfig.logoText}
          </Link>
          <p className="text-sm max-w-sm leading-relaxed text-beige/70">
            {siteConfig.siteName} specializes in cinematic and premium wedding photography and cinematography. We capture the timeless stories, honest emotions, and beautiful moments of your special day.
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="p-2 border border-white/10 rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              <InstagramIcon size={20} />
            </Link>
            <Link
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="p-2 border border-white/10 rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              <FacebookIcon size={20} />
            </Link>
            <Link
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe on YouTube"
              className="p-2 border border-white/10 rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              <YoutubeIcon size={20} />
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-serif text-beige uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-4 text-sm text-beige/70">
            <li><Link href="/portfolio" className="hover:text-gold transition-colors uppercase tracking-widest">Portfolio</Link></li>
            <li><Link href="/services" className="hover:text-gold transition-colors uppercase tracking-widest">Services</Link></li>
            <li><Link href="/about" className="hover:text-gold transition-colors uppercase tracking-widest">About Us</Link></li>
            <li><Link href="/pricing" className="hover:text-gold transition-colors uppercase tracking-widest">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors uppercase tracking-widest">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-serif text-beige uppercase tracking-widest">Contact Us</h4>
          <ul className="space-y-4 text-sm text-beige/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
              <span>{siteConfig.address.line}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gold shrink-0" />
              <Link href={`tel:${siteConfig.whatsapp}`} className="hover:text-gold transition-colors">
                {siteConfig.phone}
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold shrink-0" />
              <Link href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">
                {siteConfig.email}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-beige/50 uppercase tracking-widest">
        <p>&copy; {currentYear} {siteConfig.siteName}. All rights reserved.</p>
        <p className="flex space-x-4">
          <Link href="/privacy" className="hover:text-gold">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gold">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}
