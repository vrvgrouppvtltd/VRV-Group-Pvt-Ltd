import React, { useMemo, useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Grid2X2, Heart, List, Search, MessageCircle, Phone, SlidersHorizontal, X, Check } from "lucide-react";

import PropertyFilters from "../../components/property/PropertyFilters";
import PropertyGrid from "../../components/property/PropertyGrid";
import PropertyMap from "../../components/property/PropertyMap";
import SEOHead from "../../components/common/SEOHead";
import Pagination from "../../components/common/Pagination";
import { properties } from "../../data/properties";
import { filterPropertyList, PROPERTY_TYPES } from "../../utils/filterHelpers";
import { SITE_CONFIG } from "../../constants/siteConfig";
import { useLiked } from "../../context/LikedContext";
import PropertyInquiryForm from "../../components/property/PropertyInquiryForm";
import { ArchitecturalCadastreTexture, RealEstateArchitectureArt } from "../../components/common/PageTextures";

const EMPTY_FILTERS = {
  location: "",
  minPrice: "",
  maxPrice: "",
  bhk: "",
  type: "",
  furnishing: "",
};

const ITEMS_PER_PAGE = 6;

export default function PropertiesPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { likedIds } = useLiked();

  useEffect(() => {
    if (location.hash === '#about-us') {
      const el = document.getElementById('about-us');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Check URL params for liked=true
  const isLikedQuery = searchParams.get("liked") === "true";

  const [tab, setTab] = useState(isLikedQuery ? "Liked Properties" : "All Properties");
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState(EMPTY_FILTERS);
  const [heroSearch, setHeroSearch] = useState("");
  const [heroType, setHeroType] = useState("");
  const [heroMinPrice, setHeroMinPrice] = useState("");
  const [heroMaxPrice, setHeroMaxPrice] = useState("");
  const [sort, setSort] = useState("Newest First");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync tab with URL search parameter changes
  useEffect(() => {
    if (isLikedQuery) {
      setTab("Liked Properties");
    } else if (tab === "Liked Properties") {
      setTab("All Properties");
    }
  }, [isLikedQuery, tab]);

  const handleTabChange = (selectedTab) => {
    setTab(selectedTab);
    setCurrentPage(1);
    if (selectedTab === "Liked Properties") {
      setSearchParams({ liked: "true" });
    } else {
      if (searchParams.has("liked")) {
        searchParams.delete("liked");
        setSearchParams(searchParams);
      }
    }
  };

  // Combine filters from hero bar and sidebar filter
  const finalFilters = useMemo(
    () => ({
      ...appliedFilters,
      location: appliedFilters.location || heroSearch,
      minPrice: appliedFilters.minPrice || heroMinPrice,
      maxPrice: appliedFilters.maxPrice || heroMaxPrice,
      type: appliedFilters.type || heroType,
    }),
    [appliedFilters, heroSearch, heroMinPrice, heroMaxPrice, heroType]
  );

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (appliedFilters.location || heroSearch) count++;
    if (appliedFilters.minPrice || heroMinPrice) count++;
    if (appliedFilters.maxPrice || heroMaxPrice) count++;
    if (appliedFilters.bhk) count++;
    if (appliedFilters.type || heroType) count++;
    if (appliedFilters.furnishing) count++;
    return count;
  }, [appliedFilters, heroSearch, heroMinPrice, heroMaxPrice, heroType]);

  // Filtered & Sorted Properties List
  const filteredProperties = useMemo(() => {
    let list = properties;

    // Filter by tab status
    if (tab === "Buy") {
      list = list.filter((p) => p.status === "For Sale");
    } else if (tab === "Rent") {
      list = list.filter((p) => p.status === "For Rent");
    } else if (tab === "Liked Properties") {
      list = list.filter((p) => likedIds.includes(p.id));
    }

    // Apply combined filter helpers
    list = filterPropertyList(list, finalFilters);

    // Sort list
    if (sort === "Price: Low to High") {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === "Price: High to Low") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [tab, finalFilters, sort, likedIds]);

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE) || 1;

  const paginatedProperties = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProperties.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProperties, currentPage]);

  const handleHeroSearch = () => {
    setAppliedFilters((prev) => ({
      ...prev,
      location: heroSearch,
      type: heroType,
      minPrice: heroMinPrice,
      maxPrice: heroMaxPrice,
    }));
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setFilters(EMPTY_FILTERS);
    setAppliedFilters(EMPTY_FILTERS);
    setHeroSearch("");
    setHeroType("");
    setHeroMinPrice("");
    setHeroMaxPrice("");
    setCurrentPage(1);
  };

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hello VRV Group, I am looking for property in Vrindavan-Mathura. Please assist me with available options."
  )}`;

  return (
    <div className="min-h-screen bg-[#F5F5F3] pb-16 font-sans text-body relative overflow-hidden">
      <SEOHead
        title={tab === "Liked Properties" ? "Saved Liked Properties" : "Real Estate Vrindavan–Mathura"}
        description={`Explore verified plots, flats, apartments, and villas in Vrindavan and Mathura and  with ${SITE_CONFIG.name}.`}
      />

      {/* Hero Banner with Search */}
      <section className="relative bg-navy py-10 sm:py-14 lg:py-16 text-white overflow-hidden shadow-md">
        {/* Cinematic Real Estate Hero Image */}
        <img
          src="/images/hero/real-estate-hero.jpg"
          alt="Verified Properties in Vrindavan"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-80 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#070e20]/85 via-[#0b1633]/50 to-[#070e20]/75" />
        <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-[#070e20]/20 to-[#070e20]/85 pointer-events-none" />

        {/* Ambient atmospheric glow orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Subtle Architectural Blueprint Cadastre Texture */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <ArchitecturalCadastreTexture className="absolute -top-10 -right-10 w-[700px] h-[380px]" opacity={0.12} />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1720px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          {/* Breadcrumb & Headings with Animation */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/90 mb-3">
              <span>Home</span>
              <span className="text-gold font-bold">›</span>
              <span className="text-gold">Properties</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              {tab === "Liked Properties" ? "Your Liked Properties" : "Real Estate Listings"}
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="my-2.5 h-1 rounded-full bg-gold"
            />
            <p className="text-xs sm:text-sm xl:text-base leading-relaxed text-white/90">
              Find verified residential flats, studios, plots, and villas in <b className="text-gold">{SITE_CONFIG.cityRegion}</b>.
              Buy or Rent with full transparency and direct local guidance.
            </p>
          </motion.div>

          {/* Unified Dark Glassmorphic Search Card with Smooth Slide-Up Animation */}
          <motion.div
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(11, 22, 51, 0.30) 100%)',
              backdropFilter: 'blur(14px) saturate(180%)',
              WebkitBackdropFilter: 'blur(14px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35)',
              transform: 'translate3d(0, 0, 0)',
              WebkitTransform: 'translate3d(0, 0, 0)',
              isolation: 'isolate'
            }}
            className="relative mt-6 w-full rounded-3xl p-5 sm:p-6 xl:p-7 shadow-2xl text-white overflow-hidden"
          >
            {/* Ambient decorative interior gold glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

            {/* All Properties / Buy / Rent Tabs */}
            <div className="relative z-10 mb-4 flex max-w-md overflow-hidden rounded-xl bg-white/10 p-1 border border-white/15 backdrop-blur-md">
              {["All Properties", "Buy", "Rent"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleTabChange(item)}
                  className={`h-9 xl:h-10 flex-1 rounded-lg text-xs xl:text-sm font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    tab === item
                      ? "bg-gold text-[#13264f] shadow-md font-extrabold"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Inputs Grid */}
            <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1.5fr_1.2fr_1fr_1fr_auto]">
              <div className="h-11 xl:h-12 bg-white border border-slate-200 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/40 rounded-xl px-3 flex items-center transition-all shadow-sm">
                <input
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleHeroSearch()}
                  placeholder="Enter Locality (e.g. Prem Mandir, Omaxe)"
                  className="w-full bg-transparent text-xs xl:text-sm text-navy placeholder:text-slate-400 outline-none font-medium"
                />
              </div>

              <div className="h-11 xl:h-12 bg-white border border-slate-200 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/40 rounded-xl px-3 flex items-center transition-all shadow-sm">
                <select
                  value={heroType}
                  onChange={(e) => setHeroType(e.target.value)}
                  className="w-full bg-transparent text-xs xl:text-sm font-semibold text-navy outline-none cursor-pointer [&>option]:bg-white [&>option]:text-navy"
                >
                  <option value="" className="bg-white text-navy font-medium">All Property Types</option>
                  {PROPERTY_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-white text-navy font-medium">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="h-11 xl:h-12 bg-white border border-slate-200 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/40 rounded-xl px-3 flex items-center transition-all shadow-sm">
                <input
                  type="number"
                  value={heroMinPrice}
                  onChange={(e) => setHeroMinPrice(e.target.value)}
                  placeholder="Min Price (₹)"
                  className="w-full bg-transparent text-xs xl:text-sm text-navy placeholder:text-slate-400 outline-none font-medium"
                />
              </div>

              <div className="h-11 xl:h-12 bg-white border border-slate-200 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/40 rounded-xl px-3 flex items-center transition-all shadow-sm">
                <input
                  type="number"
                  value={heroMaxPrice}
                  onChange={(e) => setHeroMaxPrice(e.target.value)}
                  placeholder="Max Price (₹)"
                  className="w-full bg-transparent text-xs xl:text-sm text-navy placeholder:text-slate-400 outline-none font-medium"
                />
              </div>

              <button
                onClick={handleHeroSearch}
                className="flex h-11 xl:h-12 items-center justify-center gap-2 rounded-xl bg-gold hover:bg-gold-light px-6 xl:px-8 text-xs xl:text-sm font-extrabold text-[#13264f] transition-all hover:shadow-lg hover:shadow-gold/20 cursor-pointer active:scale-95"
              >
                <Search size={16} className="text-[#13264f]" /> Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Listing & Filters Section */}
      <main className="mx-auto mt-6 grid w-full min-w-0 max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1720px] grid-cols-1 gap-6 xl:gap-7 2xl:gap-8 px-3 sm:px-4 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[310px_minmax(0,1fr)] 2xl:grid-cols-[330px_minmax(0,1fr)] lg:pl-3 lg:pr-5 xl:px-6 2xl:px-8">

        {/* Desktop Sidebar Filters (Hidden on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="hidden lg:block"
          style={{ marginTop: '53px' }}
        >
          <div className="sticky top-24">
            <PropertyFilters
              filters={filters}
              setFilters={setFilters}
              onApply={(f) => {
                setAppliedFilters(f);
                setCurrentPage(1);
              }}
              onClear={handleClearAll}
            />
          </div>
        </motion.div>

        {/* Property Grid Results Column */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="min-w-0 max-w-full"
        >
          {/* Top Bar Header */}
          <div className="mb-4 flex min-h-10 flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">

            <div className="flex items-center gap-3">
              <h2 className="text-base xl:text-lg 2xl:text-xl font-bold text-navy">
                <span className="text-[#df9a08]">{filteredProperties.length}</span> Properties Found
                <span className="text-xs font-normal text-slate-500 ml-2 hidden sm:inline">
                  ({tab === "Liked Properties" ? "Saved Wishlist" : tab === "All Properties" ? "All" : tab === "Buy" ? "For Sale" : "For Rent"})
                </span>
              </h2>

              {/* Mobile Filter Button (Visible on Mobile Only) */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 rounded-xl bg-navy text-white px-3.5 py-2 text-xs font-bold shadow-md hover:bg-gold hover:text-navy transition lg:hidden cursor-pointer"
              >
                <SlidersHorizontal size={14} className="text-gold" />
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span className="grid h-4.5 min-w-4.5 place-items-center rounded-full bg-gold px-1.5 text-[10px] font-extrabold text-[#13264f]">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>

            <div className="flex w-full flex-wrap items-center justify-between gap-2 sm:w-auto sm:justify-end sm:gap-3">
              {/* View Toggle (Desktop Only) */}
              <div className="hidden sm:flex overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  onClick={() => setView("grid")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs transition cursor-pointer ${view === "grid" ? "bg-[#fff8e6] font-bold text-[#9c7000]" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  aria-label="Grid View"
                >
                  <Grid2X2 size={14} /> Grid
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs transition cursor-pointer ${view === "list" ? "bg-[#fff8e6] font-bold text-[#9c7000]" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  aria-label="List View"
                >
                  <List size={14} /> List
                </button>
              </div>

              {/* Sorting Select */}
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                Sort:
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="h-9 rounded-xl border border-slate-200 bg-white px-3 text-xs outline-none cursor-pointer"
                >
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </label>
            </div>
          </div>

          {/* Empty State for Liked Properties */}
          {tab === "Liked Properties" && filteredProperties.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-red-50 text-red-500">
                <Heart size={32} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy">No Liked Properties Yet</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                You haven't added any properties to your saved wishlist yet. Click the heart icon on any property card to save it here!
              </p>
              <button
                onClick={() => handleTabChange("Buy")}
                className="mt-6 rounded-xl bg-navy px-6 py-2.5 text-xs font-bold text-white hover:bg-gold hover:text-navy transition shadow-sm cursor-pointer"
              >
                Browse All Properties
              </button>
            </div>
          ) : (
            <>
              {/* Property Cards Grid */}
              <PropertyGrid
                properties={paginatedProperties}
                view={view}
                onClearFilters={handleClearAll}
              />

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }}
              />
            </>
          )}
        </motion.section>
      </main>

      {/* ===================== ARCHITECTURAL SHOWCASE + SITE VISIT FORM + INTERACTIVE MAP ===================== */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mt-10 mb-16 w-full min-w-0 max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1720px] px-3 sm:px-4 lg:pl-3 lg:pr-5 xl:px-6 2xl:px-8"
      >
        <div className="flex flex-col lg:flex-row items-stretch gap-6 xl:gap-8">

          {/* Left House Architectural Showcase (Prominently sized on left side of Form & Map) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:flex shrink-0 w-[420px] xl:w-[490px] 2xl:w-[540px] flex-col justify-center items-center relative self-stretch overflow-hidden"
          >
            <img
              src="/images/real-estate-feature-visual.png"
              alt="VRV Group Luxury Architecture & Prime Real Estate"
              className="w-full h-full max-h-[850px] object-contain object-center pointer-events-none select-none drop-shadow-sm scale-y-[1.12] origin-center"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column: Schedule Site Visit Form + Interactive Map & About VRV */}
          <div className="flex-1 min-w-0 flex flex-col justify-between gap-6 xl:gap-7">
            {/* Schedule Site Visit / Request Property Info Lead Form */}
            <div>
              <PropertyInquiryForm />
            </div>

            {/* Map View & Why Choose VRV Section */}
            <div className="grid min-w-0 gap-5 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <h3 className="mb-2 text-sm font-bold text-navy">Interactive Map Locations</h3>
                <PropertyMap properties={filteredProperties.length ? filteredProperties : properties} />
              </div>

              <div id="about-us" className="scroll-mt-24 flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-gold uppercase">About VRV Group</span>
                  <h3 className="text-base font-bold text-navy mt-0.5">Your Trusted Real Estate &amp; Travel Partner</h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed mb-4">
                    {SITE_CONFIG.name} is dedicated to providing transparent, hassle-free property buying, selling, and renting services in the holy city of Mathura–Vrindavan.
                  </p>
                  <div className="space-y-2.5">
                    {[
                      "100% Verified Legal Titles & Direct Owner Deals",
                      "Best Price Guarantee with Zero Hidden Charges",
                      "Complete Assistance with Site Visits & Legal Registry",
                      "Local Expertise in Prem Mandir, ISKCON & Bankey Bihari Belts",
                    ].map((item) => (
                      <p key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                          <Check size={10} strokeWidth={3} />
                        </span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Contact Us WhatsApp Banner */}
                <div className="mt-4 rounded-xl bg-[#eefbf3] p-4 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <b className="block text-xs text-emerald-950 font-bold">Have Questions or Need Site Visit?</b>
                    <span className="text-[10px] text-emerald-700">Chat directly with VRV local team on WhatsApp</span>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition shadow-sm"
                    >
                      <MessageCircle size={14} /> WhatsApp
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.phone1}`}
                      className="flex items-center gap-1 rounded-lg border border-emerald-600 bg-white px-3 py-2 text-xs font-bold text-emerald-800 hover:bg-emerald-50 transition shadow-xs"
                    >
                      <Phone size={14} /> Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Ambient Halo Glow */}
      <div
        className="absolute -bottom-24 -left-24 w-[460px] h-[460px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(238, 245, 252, 0.85) 0%, transparent 70%)',
        }}
      />

      {/* Bottom-Left Real Estate Modern Villa Art Watermark (FAQ Sister Style) */}
      <div className="absolute bottom-0 left-0 w-[340px] sm:w-[420px] md:w-[480px] pointer-events-none -z-0 select-none opacity-65">
        <RealEstateArchitectureArt className="w-full h-auto" />
      </div>

      {/* ===================== MOBILE FILTER MODAL / BOTTOM SHEET ===================== */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-navy/80 backdrop-blur-sm p-0 sm:p-4 lg:hidden animate-fade-in">
          <div className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 max-h-[85vh] overflow-y-auto relative animate-slide-up">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-gold" />
                <h3 className="text-base font-bold text-navy">Filter Properties</h3>
              </div>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
                aria-label="Close Filters"
              >
                <X size={18} />
              </button>
            </div>

            <PropertyFilters
              filters={filters}
              setFilters={setFilters}
              onApply={(f) => {
                setAppliedFilters(f);
                setCurrentPage(1);
                setMobileFiltersOpen(false);
              }}
              onClear={handleClearAll}
            />
          </div>
        </div>
      )}

    </div>
  );
}
