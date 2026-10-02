import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MapPin,
  Menu,
  Phone,
  X,
  MessageCircle,
  Compass,
  Building2,
  Car,
  Home,
  Info,
  Mail,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "../../constants/siteConfig";
import { useLiked } from "../../context/LikedContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const { likedCount } = useLiked();

  const phoneRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Completely lock page scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setPhoneOpen(false);
  }, [location.pathname, location.search]);

  // Close phone dropdown when clicking anywhere outside it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        phoneRef.current &&
        !phoneRef.current.contains(event.target)
      ) {
        setPhoneOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;

    if (path !== "/" && location.pathname.startsWith(path)) {
      return true;
    }

    return false;
  };

  const isLikedActive = location.search.includes("liked=true");

  const isRealEstateRoute =
    location.pathname.startsWith("/real-estate") ||
    location.pathname.startsWith("/properties") ||
    location.pathname.startsWith("/property");

  const whatsappInquiryUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber
    }?text=${encodeURIComponent(
      "Hello VRV Group, I would like to inquire about your services in Mathura-Vrindavan."
    )}`;

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Tours & Travels", path: "/tours" },
    { label: "Real Estate", path: "/real-estate" },
    { label: "Car Rental", path: "/car-rental" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full font-sans transition-all duration-300"
    >
      {/* 1. TOP UTILITY STRIP */}
      <div className="bg-[#0b1329] text-white border-b border-white/10 px-4 sm:px-8 lg:px-12 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs tracking-wide">
          {/* Left: Location & Region */}
          <div className="flex items-center gap-2 text-slate-300 min-w-0">
            <MapPin
              size={13}
              className="text-gold shrink-0"
            />

            <span className="font-medium truncate min-w-0">
              104, Krishna 2C, Omaxe Eternity &bull; Vrindavan &bull; Mathura
            </span>
          </div>

          {/* Right: WhatsApp Direct */}
          <div className="flex items-center gap-5 sm:gap-6 text-xs shrink-0">
            {/* Phone numbers removed from desktop/tablet */}

            <span className="hidden sm:inline-block h-3.5 w-px bg-white/20" />

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition"
            >
              <MessageCircle
                size={13}
                className="shrink-0"
              />

              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div
        className={`w-full bg-white/95 backdrop-blur-md border-b transition-all duration-300 px-4 sm:px-8 lg:px-12 ${scrolled
            ? "py-3 shadow-md border-slate-200/90"
            : "py-4 shadow-xs border-slate-100"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            onClick={() => {
              closeMenu();
              setPhoneOpen(false);
            }}
            className="flex items-center gap-2 sm:gap-3 shrink-0 group min-w-0"
          >
            <div className="relative h-9 w-9 sm:h-12 sm:w-12 rounded-full overflow-hidden border border-gold/40 bg-white p-0.5 shadow-sm group-hover:border-gold transition-all duration-300 group-hover:scale-105">
              <img
                src="/vrv-logo.webp"
                alt={`${SITE_CONFIG.name} Logo`}
                className="h-full w-full object-contain rounded-full"
              />
            </div>

            <div>
              <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
                <span className="font-display text-lg sm:text-2xl font-bold tracking-tight text-navy group-hover:text-gold transition-colors whitespace-nowrap">
                  VRV GROUP
                </span>

                <span className="text-[10px] font-bold text-gold bg-gold/10 px-1.5 py-0.5 rounded border border-gold/30 hidden xs:inline-block">
                  PVT. LTD.
                </span>
              </div>

              <div className="text-[11px] text-slate-500 font-medium tracking-wide">
                Vrindavan- Mathura
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => {
              const active =
                isActive(item.path) &&
                (item.path !== "/" || !isLikedActive);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setPhoneOpen(false)}
                  className={`text-sm font-semibold transition-colors duration-200 py-1 relative whitespace-nowrap ${active
                      ? "text-gold font-bold"
                      : "text-slate-700 hover:text-gold"
                    }`}
                >
                  <span>{item.label}</span>

                  {active && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Elements */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Liked Properties shortcut */}
            {isRealEstateRoute && (
              <Link
                to="/real-estate?liked=true"
                onClick={() => setPhoneOpen(false)}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl transition border ${isLikedActive
                    ? "bg-red-50 text-red-600 border-red-200 font-bold"
                    : "text-slate-600 hover:text-red-500 border-slate-200/80 hover:bg-red-50/50"
                  }`}
                title="Saved Properties"
              >
                <Heart
                  size={15}
                  className={
                    likedCount > 0
                      ? "fill-red-500 text-red-500"
                      : "text-slate-400"
                  }
                />

                <span className="hidden sm:inline">
                  Liked
                </span>

                <span className="bg-red-100 text-red-700 text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {likedCount}
                </span>
              </Link>
            )}

            {/* CALL BUTTON + PHONE DROPDOWN */}
            <div
              ref={phoneRef}
              className="relative"
            >
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setPhoneOpen((prev) => !prev);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy shadow-sm active:scale-95 transition-transform"
                aria-label="Show phone numbers"
                aria-expanded={phoneOpen}
                title="Call us"
              >
                <Phone size={14} />
              </button>

              <AnimatePresence>
                {phoneOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -6,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -6,
                      scale: 0.97,
                    }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-xl z-[60]"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Call Us
                    </div>

                    <a
                      href={`tel:${SITE_CONFIG.phone1}`}
                      onClick={() => setPhoneOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                    >
                      <Phone
                        size={14}
                        className="text-gold shrink-0"
                      />

                      <span>
                        {SITE_CONFIG.phone1Formatted}
                      </span>
                    </a>

                    <a
                      href={`tel:${SITE_CONFIG.phone2}`}
                      onClick={() => setPhoneOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                    >
                      <Phone
                        size={14}
                        className="text-gold shrink-0"
                      />

                      <span>
                        {SITE_CONFIG.phone2Formatted}
                      </span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick WhatsApp Button */}
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setPhoneOpen(false)}
              className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all active:scale-95"
            >
              <MessageCircle size={15} />

              <span>Inquire</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setPhoneOpen(false);
              }}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl bg-slate-100 text-navy hover:bg-gold/20 transition-colors"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden h-[100dvh] overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Drawer Sheet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 220,
              }}
              className="fixed inset-y-0 right-0 w-full h-[100dvh] bg-white shadow-2xl flex flex-col z-[101] overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full overflow-hidden border border-gold/40 bg-white p-0.5">
                    <img
                      src="/vrv-logo.webp"
                      alt={SITE_CONFIG.name}
                      className="h-full w-full object-contain rounded-full"
                    />
                  </div>

                  <div>
                    <div className="font-display font-bold text-navy text-base">
                      VRV GROUP
                    </div>

                    <div className="text-[11px] text-slate-500">
                      Vrindavan - Mathura
                    </div>
                  </div>
                </div>

                <button
                  onClick={closeMenu}
                  className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-700 hover:bg-red-50 hover:text-red-500 transition"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation List */}
              <nav className="p-4 sm:p-5 space-y-2 flex-1 overflow-hidden">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive("/") && !isLikedActive
                      ? "bg-gold/15 text-navy font-bold"
                      : "hover:bg-slate-50 text-slate-700"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Home
                      size={18}
                      className={
                        isActive("/") && !isLikedActive
                          ? "text-gold"
                          : "text-slate-400"
                      }
                    />

                    <span>Home</span>
                  </div>

                  <ArrowRight
                    size={15}
                    className="text-slate-400"
                  />
                </Link>

                <Link
                  to="/tours"
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive("/tours")
                      ? "bg-gold/15 text-navy font-bold"
                      : "hover:bg-slate-50 text-slate-700"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Compass
                      size={18}
                      className={
                        isActive("/tours")
                          ? "text-gold"
                          : "text-slate-400"
                      }
                    />

                    <span>Tours &amp; Travels</span>
                  </div>

                  <ArrowRight
                    size={15}
                    className="text-slate-400"
                  />
                </Link>

                <Link
                  to="/real-estate"
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive("/real-estate") && !isLikedActive
                      ? "bg-gold/15 text-navy font-bold"
                      : "hover:bg-slate-50 text-slate-700"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Building2
                      size={18}
                      className={
                        isActive("/real-estate") && !isLikedActive
                          ? "text-gold"
                          : "text-slate-400"
                      }
                    />

                    <span>Real Estate</span>
                  </div>

                  <ArrowRight
                    size={15}
                    className="text-slate-400"
                  />
                </Link>

                <Link
                  to="/car-rental"
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive("/car-rental")
                      ? "bg-gold/15 text-navy font-bold"
                      : "hover:bg-slate-50 text-slate-700"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Car
                      size={18}
                      className={
                        isActive("/car-rental")
                          ? "text-gold"
                          : "text-slate-400"
                      }
                    />

                    <span>Car Rental</span>
                  </div>

                  <ArrowRight
                    size={15}
                    className="text-slate-400"
                  />
                </Link>

                <Link
                  to="/about"
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive("/about")
                      ? "bg-gold/15 text-navy font-bold"
                      : "hover:bg-slate-50 text-slate-700"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Info
                      size={18}
                      className={
                        isActive("/about")
                          ? "text-gold"
                          : "text-slate-400"
                      }
                    />

                    <span>About Us</span>
                  </div>

                  <ArrowRight
                    size={15}
                    className="text-slate-400"
                  />
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive("/contact")
                      ? "bg-gold/15 text-navy font-bold"
                      : "hover:bg-slate-50 text-slate-700"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Mail
                      size={18}
                      className={
                        isActive("/contact")
                          ? "text-gold"
                          : "text-slate-400"
                      }
                    />

                    <span>Contact Us</span>
                  </div>

                  <ArrowRight
                    size={15}
                    className="text-slate-400"
                  />
                </Link>

                {/* Liked Properties Mobile */}
                {isRealEstateRoute && (
                  <Link
                    to="/real-estate?liked=true"
                    onClick={closeMenu}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition mt-2 border ${isLikedActive
                        ? "bg-red-500 text-white border-red-500"
                        : "bg-red-50 text-red-600 border-red-200"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <Heart
                        size={18}
                        className={
                          isLikedActive
                            ? "fill-white text-white"
                            : "fill-red-500 text-red-500"
                        }
                      />

                      <span>Liked Properties</span>
                    </div>

                    <span className="text-xs font-bold bg-white/30 px-2 py-0.5 rounded-full">
                      {likedCount}
                    </span>
                  </Link>
                )}
              </nav>

              {/* Drawer Footer Contact */}
              <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 space-y-3 shrink-0">
                <a
                  href={`tel:${SITE_CONFIG.phone1}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-navy text-gold text-xs font-bold shadow-sm"
                >
                  <Phone size={14} />

                  <span>
                    Call {SITE_CONFIG.phone1Formatted}
                  </span>
                </a>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-sm"
                >
                  <MessageCircle size={14} />

                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}