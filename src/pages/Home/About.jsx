import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Building2,
  Car,
  Compass,
  ShieldCheck,
  Award,
  Users,
  Lightbulb,
  Handshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
  Clock3,
  BadgeCheck,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { SITE_CONFIG } from '../../constants/siteConfig'
import SEOHead from '../../components/common/SEOHead'
import { VrindavanTempleArt } from '../../components/common/PageTextures'

const HERO_IMAGE = '/images/hero/aboutus-hero.png'

export default function About() {
  const teamScrollRef = useRef(null)
  const pillarsScrollRef = useRef(null)

  const scrollContainer = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -290 : 290
      ref.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const pillars = [
    {
      id: 'tours',
      icon: Compass,
      title: 'Tours & Travels',
      tagline: 'Sacred Pilgrimage & Sightseeing',
      desc: 'Curated Mathura-Vrindavan darshan, Braj 84 Kos Yatra, temple VIP access, and certified local guides.',
      link: '/tours',
      linkText: 'Explore Tours',
      image: '/images/services/tours.png'
    },
    {
      id: 'real-estate',
      icon: Building2,
      title: 'Real Estate & Land',
      tagline: 'Verified Plots & Luxury Stays',
      desc: '100% legally verified residential plots, villas, and commercial investments near Omaxe Eternity & NH-19.',
      link: '/real-estate',
      linkText: 'Browse Properties',
      image: '/images/services/real-estate.png'
    },
    {
      id: 'car-rental',
      icon: Car,
      title: 'Car Rental & Mobility',
      tagline: 'Self-Drive & Outstation Cabs',
      desc: 'Clean, sanitized hatchbacks, sedans, and SUVs with or without driver for local darshan and outstation trips.',
      link: '/car-rental',
      linkText: 'Rent a Car',
      image: '/images/services/car-rental.jpg'
    }
  ]

  const values = [
    {
      icon: Handshake,
      title: 'Trust',
      desc: 'We build every client relationship on honesty, transparency, and uncompromising integrity.'
    },
    {
      icon: Award,
      title: 'Quality',
      desc: 'We are committed to delivering the highest standards in every itinerary, vehicle, and property deal.'
    },
    {
      icon: Users,
      title: 'Customer First',
      desc: 'Your satisfaction and peace of mind is our utmost priority. We listen, care, and deliver.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      desc: 'We embrace modern technology and seamless booking systems to provide smoother experiences.'
    },
    {
      icon: ShieldCheck,
      title: 'Responsibility',
      desc: 'We operate with accountability towards our clients, local community, and the sacred heritage of Braj.'
    }
  ]

  const stats = [
    {
      icon: BadgeCheck,
      value: '100%',
      label: 'Legally Verified & Clear Title'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Happy Customers Monthly'
    },
    {
      icon: Clock3,
      value: '24/7',
      label: 'Dedicated On-Ground Support'
    },
    {
      icon: ShieldCheck,
      value: '10+',
      label: 'Years of Local Heritage'
    }
  ]

  const founders = [
    {
      name: 'Mr. Nishant Narwal',
      role: 'Founder',
      tag: 'Strategic Vision',
      image: '/images/founder/nishant.jpeg',
      desc: "Helping shape VRV Group's strategic direction while driving partnerships, business growth, and long-term vision."
    },
    {
      name: 'Mrs. Geetika',
      role: 'Founder',
      tag: 'Operations',
      image: '/images/founder/greetika.jpg',
      desc: 'Supporting company operations, guest experience, and day-to-day coordination with a focus on trust and service quality.'
    },
    {
      name: 'Mr. Pushkar',
      role: 'Co-Founder',
      tag: 'Partnerships',
      image: '/images/founder/pushkar.jpeg',
      desc: 'Supporting company operations, guest experience, and day-to-day coordination with a focus on trust and comfortable experiences.'
    },
    {
      name: 'Mr. Sarbjot Singh',
      role: 'COO',
      tag: 'Execution',
      image: '/images/founder/sarbjot.jpeg',
      desc: 'Directing company operations and overseeing service execution with a focus on quality, reliability, and trust.'
    },
    {
      name: 'Mr. Bikram Roy',
      role: 'Technical Consultant',
      tag: 'Technology',
      image: '/images/founder/bikram.jpeg',
      desc: 'Guiding technical architecture, digital strategy, and platform engineering to ensure innovative and robust solutions.'
    }
  ]

  const teamMembers = [
    {
      name: 'Anshul Vishwakarma',
      role: 'SDE Intern',
      dept: 'Technology',
      image: '/members/Anshul.jpeg',
      desc: 'Engineering the Tours & Travels portal while ensuring seamless page integration and navigation across the platform.'
    },
    {
      name: 'Mayank Arya',
      role: 'SDE Intern',
      dept: 'Technology',
      image: '/members/mayank.jpeg',
      desc: 'Developing the Car Rental module and building intuitive user interfaces for vehicle booking experiences.'
    },
    {
      name: 'Ashish Bansal',
      role: 'SDE Intern',
      dept: 'Technology',
      image: '/members/Ashish.jpeg',
      desc: 'Crafting the Real Estate showcase and optimizing property discovery workflows for seamless user browsing.'
    },
    {
      name: 'Aniruddha Mukerjee',
      role: 'SDE Intern',
      dept: 'Technology',
      image: '/members/Aniruddha.jpeg',
      desc: 'Supporting full-stack tech initiatives and assisting across feature development and continuous platform growth.'
    },
    {
      name: 'Ujjwal Thakur',
      role: 'SDE Intern',
      dept: 'Technology',
      image: '/members/Ujjawal.jpeg',
      desc: 'Structuring data management systems and ensuring reliable, optimized data flows across platform services.'
    }
  ]

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hello VRV Group, I want to inquire about your services in Mathura-Vrindavan.'
  )}`

  return (
    <div className="bg-white min-h-screen text-body font-sans selection:bg-gold selection:text-white">

      <SEOHead
        title="About Us | VRV Group"
        description="Learn about VRV Group - Your premier partner for Tours & Travels, Real Estate, and Car Rental across Mathura, Vrindavan, and Braj Dham."
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[640px] lg:min-h-[700px] flex items-center bg-navy text-white overflow-hidden py-14 lg:py-20">

        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 scale-105"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />

        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#070e20]/95 via-[#0b1633]/90 to-[#070e20]/80" />
        <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-[#070e20]/40 to-[#070e20]/95 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light mb-5 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-gold" />
            <span>About VRV Group Private Limited</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6"
          >
            One Brand. Three Promises.{' '}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-[#f5d77f]">
              Endless Possibilities.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-8"
          >
            At VRV Group, we believe in creating meaningful experiences and lasting relationships through trust, uncompromising quality, and deeply rooted local care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >

            <a
              href="#who-we-are"
              className="btn-gold shimmer-btn text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center gap-2"
            >
              <span>Discover Our Story</span>
              <ArrowRight size={16} />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/15 hover:bg-emerald-500 hover:text-white px-5 py-3.5 text-xs sm:text-sm font-bold text-emerald-300 backdrop-blur-md transition-all duration-300 shadow-sm"
            >
              <MessageCircle size={17} className="text-emerald-400" />
              <span>Connect on WhatsApp</span>
            </a>

          </motion.div>

          {/* Glassmorphic Pillars Console */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(11, 22, 51, 0.30) 100%)',
              backdropFilter: 'blur(14px) saturate(180%)',
              WebkitBackdropFilter: 'blur(14px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35)'
            }}
            className="mt-12 max-w-4xl mx-auto rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden text-left"
          >
            <div className="absolute top-0 right-0 w-44 h-44 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold bg-gold/15 border border-gold/30 px-2.5 py-0.5 rounded-md">
                VRV Group Trust Markers
              </span>
              <span className="text-xs font-semibold text-slate-300">
                Operating Across Vrindavan &amp; Mathura
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 text-center">
              <div className="p-3.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-gold/60 hover:bg-white/[0.14] transition-all duration-300 group">
                <span className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-gold transition-colors block">100%</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-0.5 block">Legally Vetted</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-gold/60 hover:bg-white/[0.14] transition-all duration-300 group">
                <span className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-gold transition-colors block">5,000+</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-0.5 block">Happy Yatris</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-gold/60 hover:bg-white/[0.14] transition-all duration-300 group">
                <span className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-gold transition-colors block">24/7</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-0.5 block">Fleet Support</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-gold/60 hover:bg-white/[0.14] transition-all duration-300 group">
                <span className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-gold transition-colors block">15+</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-0.5 block">Years In Braj</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ===================== SECTION: WHO WE ARE ===================== */}
      <section
        id="who-we-are"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200"
      >

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">

            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold border-b-2 border-gold pb-1">
              WHO WE ARE
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              Your Trusted Partner in <br />
              <span className="text-gold">Every Journey</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>VRV Group Private Limited</strong> is a multi-service enterprise dedicated to enhancing how you live, travel, and move across Mathura, Vrindavan, and the wider Braj region. With deep-rooted local expertise in <strong>Tours &amp; Travels, Real Estate, and Car Rental</strong>, we provide solutions that are reliable, personalized, and built around your peace of mind.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you are looking for verified plots to build your dream spiritual home, a soulful temple pilgrimage with VIP darshan, or a dependable self-drive car for effortless mobility — we are here to make it seamless and transparent.
            </p>

            {/* Verification Checklist */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-navy">
                  100% Freehold &amp; Legal Title
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-navy">
                  Zero Hidden Costs
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-navy">
                  24/7 On-Ground Support
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-navy">
                  Native Braj Specialists
                </span>
              </div>

            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white hover:bg-gold transition-all duration-300 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md group"
              >
                <span>Speak With Our Team</span>
                <ArrowRight
                  size={16}
                  className="text-gold group-hover:text-white transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

          </div>


          {/* Right Visual 3-Slice Showcase */}
          <div className="lg:col-span-6">

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-navy">

              <div className="grid grid-cols-3 h-72 sm:h-88 w-full relative">

                <div className="relative h-full overflow-hidden border-r-2 border-white/20 group">
                  <img
                    src="/images/services/real-estate.png"
                    alt="VRV Real Estate"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="relative h-full overflow-hidden border-r-2 border-white/20 group">
                  <img
                    src="/images/services/tours.png"
                    alt="VRV Tours & Travels"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="relative h-full overflow-hidden group">
                  <img
                    src="/images/services/car-rental.jpg"
                    alt="VRV Car Rental"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-transparent transition-colors" />
                </div>

              </div>


              {/* Bottom Integrated Service Tabs */}
              <div className="bg-navy py-4 px-4 border-t border-white/10">

                <div className="grid grid-cols-1 xs:grid-cols-3 text-center text-white text-xs sm:text-sm font-bold divide-y xs:divide-y-0 xs:divide-x divide-white/20 gap-2 xs:gap-0">

                  <Link
                    to="/real-estate"
                    className="flex items-center justify-center gap-2 py-1.5 xs:py-0 hover:text-gold transition"
                  >
                    <Building2 size={16} className="text-gold shrink-0" />
                    <span>Real Estate</span>
                  </Link>

                  <Link
                    to="/tours"
                    className="flex items-center justify-center gap-2 py-1.5 xs:py-0 hover:text-gold transition"
                  >
                    <Compass size={16} className="text-gold shrink-0" />
                    <span>Tours &amp; Travel</span>
                  </Link>

                  <Link
                    to="/car-rental"
                    className="flex items-center justify-center gap-2 py-1.5 xs:py-0 hover:text-gold transition"
                  >
                    <Car size={16} className="text-gold shrink-0" />
                    <span>Car Rental</span>
                  </Link>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ===================== SECTION: THREE PILLARS ===================== */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <span className="eyebrow inline-block mb-2 font-bold text-xs uppercase tracking-widest text-gold">
              Our Core Pillars
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight mb-4">
              Comprehensive Services, One Trusted Name
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Every vertical is operated by dedicated on-ground specialists committed to excellence, safety, and transparency.
            </p>

          </div>


          <div
            ref={pillarsScrollRef}
            className="flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 scrollbar-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >

            {pillars.map((pillar) => {
              const IconComp = pillar.icon

              return (
                <div
                  key={pillar.id}
                  className="w-[85vw] max-w-[320px] md:w-auto md:max-w-none shrink-0 snap-center group relative rounded-3xl overflow-hidden shadow-card border border-slate-200/80 bg-white flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gold/40"
                >

                  <div className="relative h-48 overflow-hidden">

                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md">
                      <IconComp size={16} className="text-gold" />
                      <span className="text-[11px] font-bold text-navy">
                        {pillar.tagline}
                      </span>
                    </div>

                  </div>


                  <div className="p-6 flex-1 flex flex-col justify-between">

                    <div>

                      <h3 className="font-display text-2xl font-bold text-navy mb-2 group-hover:text-gold-dark transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                        {pillar.desc}
                      </p>

                    </div>

                    <Link
                      to={pillar.link}
                      className="inline-flex items-center justify-between w-full bg-slate-50 hover:bg-gold hover:text-white text-navy text-xs sm:text-sm font-bold px-4 py-3 rounded-xl border border-slate-200/80 transition-all duration-300 group-hover:border-gold"
                    >
                      <span>{pillar.linkText}</span>
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>

                  </div>

                </div>
              )
            })}

          </div>

        </div>
      </section>


      {/* ===================== SECTION: OUR VALUES ===================== */}
      <section className="relative py-20 sm:py-28 bg-[#FAFCFF] border-b border-slate-100 overflow-hidden">
        {/* Ambient Glow Halos */}
        <div
          className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(circle, rgba(254, 248, 231, 0.7) 0%, rgba(238, 245, 252, 0.3) 60%, transparent 100%)',
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-[440px] h-[440px] rounded-full pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(circle, rgba(238, 245, 252, 0.85) 0%, transparent 70%)',
          }}
        />

        {/* Bottom-Left Vrindavan Temple Skyline Watermark (Grounded FAQ Sister Style) */}
        <div className="absolute bottom-0 left-0 w-[340px] sm:w-[420px] md:w-[480px] pointer-events-none -z-0 select-none opacity-55">
          <VrindavanTempleArt className="w-full h-auto" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

          <div className="max-w-3xl mx-auto mb-14">

            <span className="eyebrow inline-block mb-2 font-bold text-xs uppercase tracking-widest text-gold">
              What Drives Us
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight mb-4">
              Our Core Principles
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Guiding every recommendation, booking, and interaction across our business.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            {values.map((val, idx) => {
              const IconComponent = val.icon

              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-gold shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                >

                  <div className="w-14 h-14 rounded-2xl bg-white border border-gold/40 flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-white shadow-sm transition-all duration-300">
                    <IconComponent size={26} />
                  </div>

                  <h3 className="text-base font-bold text-navy mb-2 group-hover:text-gold-dark transition-colors">
                    {val.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {val.desc}
                  </p>

                </div>
              )
            })}

          </div>

        </div>
      </section>



      {/* ===================== SECTION: TRUST STATS STRIP ===================== */}
      <section className="bg-navy text-white py-12 md:py-16 border-y border-gold/30">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">

            {stats.map((stat, idx) => {
              const StatIcon = stat.icon

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-3 pt-5 md:pt-3"
                >

                  <StatIcon size={26} className="text-gold mb-2" />

                  <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>

                  <div className="text-xs sm:text-sm text-gold font-medium mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>

                </div>
              )
            })}

          </div>
        </div>
      </section>


      {/* ===================== SECTION: FOUNDERS ===================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">

          <span className="eyebrow inline-block font-bold text-xs uppercase tracking-widest text-gold border-b-2 border-gold pb-1">
            OUR LEADERSHIP
          </span>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight mt-3">
            The People Behind <span className="text-gold">VRV Group</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 max-w-2xl mx-auto">
            Driven by trust, local expertise, and a commitment to creating dependable experiences across Tours &amp; Travels, Real Estate, and Car Rental.
          </p>

        </div>


        {/* ===================== FOUNDERS CARDS ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-4 xl:gap-5 max-w-7xl mx-auto pb-4 items-start">
          {founders.map((founder, idx) => {
            const initials = founder.name
              .replace(/^(Mr|Mrs|Ms|Dr)\.?\s+/i, '')
              .split(' ')
              .map((n) => n[0])
              .join('')

            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-sm transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-gold/25 hover:border-gold/80 hover:scale-105 hover:z-30 p-3.5 flex flex-col"
              >
                {/* Top Glowing Gold Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl z-20" />

                {/* 1:1 Aspect Ratio Image */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-navy">
                  {founder.image ? (
                    <img
                      src={founder.image}
                      alt={`${founder.name} - ${founder.role}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        e.currentTarget.classList.add('hidden')
                        if (e.currentTarget.nextElementSibling) {
                          e.currentTarget.nextElementSibling.classList.remove('hidden')
                          e.currentTarget.nextElementSibling.classList.add('flex')
                        }
                      }}
                    />
                  ) : null}

                  {/* Monogram Avatar Fallback */}
                  <div
                    className={`w-full h-full flex-col items-center justify-center bg-gradient-to-br from-[#0c1830] via-[#16274a] to-[#091326] p-4 text-center ${founder.image ? 'hidden' : 'flex'
                      }`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/30 via-navy-800 to-gold/10 border border-gold/50 text-gold flex items-center justify-center text-xl font-bold font-display shadow-md shadow-gold/10 group-hover:scale-105 transition-transform duration-500 mb-2">
                      {initials}
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 tracking-wide uppercase">
                      VRV Leadership
                    </span>
                  </div>

                  {/* Floating Specialty Tag Badge */}
                  {founder.tag && (
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider bg-navy/85 backdrop-blur-md text-gold border border-gold/40 px-2 py-0.5 rounded-full shadow-sm">
                        {founder.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Smaller Card Info: Name & Role (Clearly visible, prominent & high contrast) */}
                <div className="pt-3 pb-1 text-center">
                  <h3 className="font-display text-base font-bold text-navy group-hover:text-gold transition-colors leading-tight">
                    {founder.name}
                  </h3>

                  <div className="flex items-center justify-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0" />
                    <span className="text-[11px] font-bold text-gold uppercase tracking-wider">
                      {founder.role}
                    </span>
                  </div>

                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                    VRV Group
                  </p>
                </div>

                {/* Expandable Information Drawer (Smoothly unfolds on hover) */}
                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <div className="pt-2.5 mt-2 border-t border-slate-100">
                    <p className="text-xs text-slate-600 leading-relaxed text-left">
                      {founder.desc}
                    </p>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-semibold text-navy/80 bg-slate-100 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                        {founder.tag || 'Executive'}
                      </span>
                      <span className="text-gold font-bold uppercase tracking-wider">
                        Leadership
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Highlight on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </div>
            )
          })}
        </div>


        {/* ===================== FOUNDER VISION ===================== */}
        <div className="mt-12 max-w-4xl mx-auto">

          <div className="rounded-3xl bg-[#FFFDF5] border border-gold/40 p-7 sm:p-10 shadow-sm text-center">

            <Quote
              size={34}
              className="text-gold mx-auto mb-4 opacity-80"
            />

            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-navy leading-relaxed">
              "Serving the Holy Dham with Transparency &amp; Heart"
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-5 max-w-3xl mx-auto">
              At VRV Group, our goal is to bring trustworthy, dependable, and transparent services under one single banner while serving the people and pilgrims of Mathura, Vrindavan, and Braj Dham.
            </p>

            <div className="pt-5">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-[#b88e16] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all duration-300"
              >
                <MessageCircle size={16} />
                <span>Connect With Our Founders</span>
              </a>

            </div>

          </div>
        </div>

      </section>

      {/* ===================== SECTION: THE VRV TEAM ===================== */}
      <section
        id="team"
        className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 relative"
      >

        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />


        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6 relative z-10">

          <div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-3">
              <Users size={14} />
              <span>Meet Our Team</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              Passionate Minds.{' '}
              <span className="text-gold">Purposeful Work.</span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
              Bringing together visionary leadership, operational precision, and software innovation to deliver exceptional experiences.
            </p>

          </div>


          {/* Controls & Badges */}
          <div className="flex items-center gap-4 justify-between lg:justify-end">

            <span className="text-xs font-bold text-navy bg-navy/5 border border-navy/10 px-3.5 py-2 rounded-xl shadow-xs">
              ✨ {teamMembers.length} Dedicated Professionals
            </span>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-2">

              <button
                onClick={() => scrollContainer(teamScrollRef, 'left')}
                aria-label="Previous team member"
                className="w-9 h-9 rounded-xl bg-white hover:bg-gold text-navy hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-gold/20 active:scale-95"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => scrollContainer(teamScrollRef, 'right')}
                aria-label="Next team member"
                className="w-9 h-9 rounded-xl bg-white hover:bg-gold text-navy hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-gold/20 active:scale-95"
              >
                <ChevronRight size={18} />
              </button>

            </div>
          </div>
        </div>


        {/* Team Cards Container */}
        <div
          ref={teamScrollRef}
          className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-4 xl:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory px-4 sm:px-0 pb-6 sm:pb-4 scrollbar-none relative z-10 items-start"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {teamMembers.map((member, idx) => {
            const initials = member.name
              .replace(/^(Mr|Mrs|Ms|Dr)\.?\s+/i, '')
              .split(' ')
              .map((n) => n[0])
              .join('')

            return (
              <div
                key={idx}
                className="w-[72vw] max-w-[240px] sm:w-auto sm:max-w-none shrink-0 snap-center group relative bg-white rounded-2xl border border-slate-200/90 shadow-sm transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-gold/25 hover:border-gold/80 hover:scale-105 hover:z-30 p-3.5 flex flex-col"
              >
                {/* Top Glowing Gold Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl z-20" />

                {/* 1:1 Aspect Ratio Photo */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        e.currentTarget.classList.add('hidden')
                        if (e.currentTarget.nextElementSibling) {
                          e.currentTarget.nextElementSibling.classList.remove('hidden')
                          e.currentTarget.nextElementSibling.classList.add('flex')
                        }
                      }}
                    />
                  ) : null}

                  {/* Monogram Avatar Fallback */}
                  <div
                    className={`w-full h-full flex-col items-center justify-center bg-gradient-to-br from-[#0c1830] via-[#16274a] to-[#091326] p-4 text-center ${member.image ? 'hidden' : 'flex'
                      }`}
                  >
                    <div className="relative mb-2">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/30 via-navy-800 to-gold/10 border border-gold/50 text-gold flex items-center justify-center text-xl font-bold font-display shadow-md shadow-gold/10 group-hover:scale-105 transition-transform duration-500">
                        {initials}
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-navy" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 tracking-wide uppercase">
                      VRV Team
                    </span>
                  </div>

                  {/* Role Pill Badge */}
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider bg-navy/85 backdrop-blur-md text-gold border border-gold/40 px-2 py-0.5 rounded-full shadow-sm">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Smaller Card Info: Name & Role/Dept (Clearly visible, high contrast) */}
                <div className="pt-3 pb-1 text-center">
                  <h3 className="font-display text-base font-bold text-navy group-hover:text-gold transition-colors leading-tight">
                    {member.name}
                  </h3>

                  <div className="flex items-center justify-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0" />
                    <span className="text-[11px] font-semibold text-gold/90">
                      {member.dept}
                    </span>
                  </div>

                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                    VRV Core
                  </p>
                </div>

                {/* Expandable Information Drawer (Smoothly unfolds on hover) */}
                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <div className="pt-2.5 mt-2 border-t border-slate-100">
                    <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3 text-left">
                      {member.desc}
                    </p>

                    <div className="pt-2.5 mt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-semibold text-navy/80 bg-slate-100/80 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                        {member.dept}
                      </span>
                      <div className="flex items-center gap-1 text-gold font-medium text-[10px]">
                        <Sparkles size={11} className="text-gold" />
                        <span>VRV Team</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Highlight on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
              </div>
            )
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-center gap-2 text-xs font-semibold text-slate-400 mt-4">
          <span>Swipe horizontally to explore team</span>
          <ArrowRight size={14} className="animate-pulse text-gold" />
        </div>

      </section>


      {/* ===================== SECTION: QUOTE BANNER ===================== */}
      <section className="py-14 sm:py-1 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-10">

        <div className="relative rounded-3xl bg-[#FFFDF5] border border-gold/40 p-8 sm:p-12 shadow-md overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="shrink-0 text-gold">
            <Quote size={48} className="text-gold rotate-180 opacity-80" />
          </div>

          <div className="flex-1 text-center md:text-left">

            <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-navy leading-relaxed italic">
              “At VRV, we don’t just provide services, <br className="hidden sm:inline" />
              we create experiences that stay with you forever.”
            </blockquote>

          </div>

          <div className="shrink-0 flex items-center justify-center">

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">

              <img
                src="/vrv-logo.webp"
                alt="VRV Logo"
                className="h-12 w-12 object-contain rounded-full border border-slate-200"
              />

              <div className="text-left pr-2">

                <div className="text-xs font-bold text-navy">
                  VRV GROUP
                </div>

                <div className="text-[10px] text-slate-500">
                  Real Estate &bull; Tours &bull; Rentals
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ===================== SECTION: FINAL CTA BANNER ===================== */}
      {/* <section className="bg-navy py-16 px-4 sm:px-6 lg:px-8 text-white text-center">

        <div className="max-w-4xl mx-auto space-y-6">

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Plan Your Next Step in Vrindavan With Us
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Have questions about pilgrimage darshan packages, renting a self-drive car, or investing in prime Vrindavan plots? Our team is always ready to guide you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">

            <a
              href={`tel:${SITE_CONFIG.phone1}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-navy transition hover:bg-slate-100 shadow-md"
            >
              <Phone size={16} />
              Call {SITE_CONFIG.phone1}
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold shimmer-btn inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold shadow-lg"
            >
              <MessageCircle size={17} />
              WhatsApp Consultation
            </a>

          </div>

        </div>
      </section> */}

    </div>
  )
}