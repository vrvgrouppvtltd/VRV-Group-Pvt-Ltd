import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ChevronRight,
  ArrowUp,
  Heart,
  Sparkles,
  Compass,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "../../constants/siteConfig";
import { VrindavanSkylineFooterTexture, VipRibbonTexture } from "../common/PageTextures";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hello VRV Group, I am reaching out from your website for inquiry & consultation."
  )}`;

  return (
    <footer className="relative bg-gradient-to-b from-[#0e172e] via-navy-950 to-[#070b16] text-white overflow-hidden border-t border-gold/20 font-sans">
      {/* Decorative Golden Ambient Glow Background */}
{/* 
<div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none heavenly-aura" />

// 1. PRE-FOOTER VIP CONSULTATION RIBBON
<div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-8">
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#172449] via-[#1f305f] to-[#172449] border border-gold/30 p-6 sm:p-8 lg:p-10 shadow-2xl"
  >
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

    <div className="grid lg:grid-cols-12 gap-6 items-center">
      <div className="lg:col-span-8 space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-3 py-1 text-xs font-bold text-gold-light">
          <Sparkles size={14} className="text-gold" />
          <span>Braj Pilgrimage &bull; Real Estate &bull; Car Rental</span>
        </div>

        <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white tracking-tight">
          Planning Your Braj Yatra or Investing in Vrindavan Real Estate?
        </h3>

        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed font-sans">
          Get authentic, on-the-ground local guidance from our Mathura-Vrindavan specialists. We offer 100% verified properties, customized sacred tour packages, and reliable 24/7 chauffeur cabs.
        </p>
      </div>

      <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold hover:bg-[#b88e16] text-white px-6 py-3 text-sm font-bold shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 active:scale-95 cursor-pointer whitespace-nowrap shimmer-btn"
        >
          <MessageCircle size={18} />
          <span>WhatsApp Consultation</span>
        </a>

        <a
          href={`tel:${SITE_CONFIG.phone1}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 text-sm font-semibold text-white transition backdrop-blur-sm hover:-translate-y-0.5 active:scale-95 cursor-pointer whitespace-nowrap"
        >
          <Phone size={15} className="text-gold" />
          <span>Call Hotline: {SITE_CONFIG.phone1Formatted}</span>
        </a>
      </div>
    </div>
  </motion.div>
</div>
*/}

      {/* 2. MAIN 4-COLUMN FOOTER BODY */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Manifesto */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" aria-label="VRV Group Home" className="flex items-center gap-3 group">
              <div className="h-12 w-12 rounded-full overflow-hidden border border-gold/40 bg-white p-0.5 shadow-sm group-hover:border-gold transition">
                <img
                  src="/vrv-logo.webp"
                  alt={SITE_CONFIG.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-white tracking-tight">
                  VRV GROUP
                </div>
                <div className="text-[11px] font-bold text-gold uppercase tracking-wider">
                  PVT. LTD. &bull; Vrindavan-Mathura
                </div>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed font-sans pr-2">
             Vrindavan-Mathura’s premier multidisciplinary group dedicated to providing seamless Braj Yatra pilgrimages, legally verified luxury real estate investments, and reliable round-the-clock car rentals.
            </p>

            {/* Trust Checkpoints */}
            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-gold shrink-0" />
                <span>Govt. Registered &amp; Verified Entity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-gold shrink-0" />
                <span>100% Legally Verified Freehold Land</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-gold shrink-0" />
                <span>Dedicated Local Braj Tour Guides</span>
              </div>

              
{/* Instagram */}
<a
  href="https://www.instagram.com/vrvgroup.official"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 mt-2 text-slate-300 hover:text-gold transition-colors group"
  aria-label="Follow VRV Group on Instagram"
>
  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 group-hover:border-gold/40 group-hover:bg-gold/10 flex items-center justify-center transition-all">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-5 h-5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  </div>

  <span className="text-xs font-medium group-hover:text-gold transition-colors">
    @vrvgroup.official
  </span>
</a>

            </div>
          </div>

          {/* Column 2: Braj Yatra & Tour Packages */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-gold uppercase tracking-wider pb-1 border-b border-white/10">
              <Compass size={16} />
              <span>Braj Yatra &amp; Tours</span>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-300 font-sans">
              <li>
                <Link
                  to="/tours"
                  className="flex items-center gap-2 hover:text-gold transition-colors group"
                >
                  <ChevronRight size={14} className="text-gold/60 group-hover:text-gold group-hover:translate-x-0.5 transition-transform" />
                  <span>Vrindavan Mathura Darshan</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  className="flex items-center gap-2 hover:text-gold transition-colors group"
                >
                  <ChevronRight size={14} className="text-gold/60 group-hover:text-gold group-hover:translate-x-0.5 transition-transform" />
                  <span>Braj 84 Kos Parikrama</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  className="flex items-center gap-2 hover:text-gold transition-colors group"
                >
                  <ChevronRight size={14} className="text-gold/60 group-hover:text-gold group-hover:translate-x-0.5 transition-transform" />
                  <span>Govardhan &amp; Barsana Special</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  className="flex items-center gap-2 hover:text-gold transition-colors group"
                >
                  <ChevronRight size={14} className="text-gold/60 group-hover:text-gold group-hover:translate-x-0.5 transition-transform" />
                  <span>Custom Spiritual Itineraries</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/car-rental"
                  className="flex items-center gap-2 hover:text-gold transition-colors group"
                >
                  <ChevronRight size={14} className="text-gold/60 group-hover:text-gold group-hover:translate-x-0.5 transition-transform" />
                  <span>Chauffeur Cabs &amp; Transfers</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Real Estate */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-gold uppercase tracking-wider pb-1 border-b border-white/10">
              <Building2 size={16} />
              <span>Real Estate</span>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-300 font-sans">
              <li>
                <Link
                  to="/real-estate"
                  className="flex items-center gap-2 hover:text-gold transition-colors group"
                >
                  <ChevronRight size={14} className="text-gold/60 group-hover:text-gold group-hover:translate-x-0.5 transition-transform" />
                  <span>Residential Plots</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/real-estate"
                  className="flex items-center gap-2 hover:text-gold transition-colors group"
                >
                  <ChevronRight size={14} className="text-gold/60 group-hover:text-gold group-hover:translate-x-0.5 transition-transform" />
                  <span>Luxury Villas</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/real-estate"
                  className="flex items-center gap-2 hover:text-gold transition-colors group"
                >
                  <ChevronRight size={14} className="text-gold/60 group-hover:text-gold group-hover:translate-x-0.5 transition-transform" />
                  <span>Commercial Land</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-2 hover:text-gold transition-colors group"
                >
                  <ChevronRight size={14} className="text-gold/60 group-hover:text-gold group-hover:translate-x-0.5 transition-transform" />
                  <span>About VRV Group</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 hover:text-gold transition-colors group"
                >
                  <ChevronRight size={14} className="text-gold/60 group-hover:text-gold group-hover:translate-x-0.5 transition-transform" />
                  <span>Contact &amp; Map</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Head Office & Support Hub */}
          <div className="lg:col-span-3 space-y-3" id="contact">
            <div className="flex items-center gap-2 text-sm font-bold text-gold uppercase tracking-wider pb-1 border-b border-white/10">
              <MapPin size={16} />
              <span>Head Office</span>
            </div>

            {/* Office Address Card */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-xs text-slate-300 space-y-1.5">
              <div className="font-bold text-white flex items-center gap-1.5">
                <MapPin size={14} className="text-gold shrink-0" />
                <span>VRV Group Head Office</span>
              </div>
              <p className="leading-relaxed text-slate-300">
                {SITE_CONFIG.fullAddress}
              </p>
            </div>

            {/* Phone Hotlines */}
            <div className="space-y-2 pt-1 text-xs">
              <a
                href={`tel:${SITE_CONFIG.phone1}`}
                className="flex items-center gap-2 rounded-lg bg-white/5 hover:bg-gold/15 border border-white/10 hover:border-gold/40 p-2.5 text-slate-200 hover:text-gold transition"
              >
                <Phone size={14} className="text-gold shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400">Primary Hotline</div>
                  <div className="font-bold text-sm">{SITE_CONFIG.phone1Formatted}</div>
                   <div className="font-bold text-sm">{SITE_CONFIG.phone2Formatted}</div>
                </div>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 p-2.5 text-slate-200 hover:text-gold transition break-all"
              >
                <Mail size={14} className="text-gold shrink-0" />
                <span className="font-medium">{SITE_CONFIG.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Continuous Panoramic Vrindavan Sacred Skyline Silhouette */}
      <div className="relative w-full h-24 sm:h-28 overflow-hidden pointer-events-none select-none -mb-1">
        <VrindavanSkylineFooterTexture className="absolute bottom-0 left-0 w-full h-full" opacity={0.12} />
      </div>

      {/* 3. BOTTOM LEGAL STRIP & BACK TO TOP */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 border-t border-white/10 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          {/* Copyright */}
          <div>
            <span>© {new Date().getFullYear()} {SITE_CONFIG.name} All rights reserved.</span>
            <span className="hidden sm:inline mx-2 text-white/20">|</span>
            <span className="block sm:inline mt-1 sm:mt-0 text-slate-400">
              Vrindavan &bull; Mathura &bull; Uttar Pradesh
            </span>
          </div>

          {/* Spiritual Tribute */}
          <div className="text-slate-300 font-medium flex items-center justify-center gap-1">
            <span>Crafted with devotion &amp; trust in Shri Dham Vrindavan</span>
            <Sparkles size={13} className="text-gold" />
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-gold hover:text-navy-950 border border-white/20 hover:border-gold px-4 py-2 text-xs font-bold text-white transition-colors cursor-pointer shadow-sm"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
