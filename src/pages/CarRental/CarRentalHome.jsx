import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Car,
  ShieldCheck,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
  Fuel,
  Users,
  Settings,
  Star,
  Clock,
  FileText,
  ChevronDown,
  X,
  Search,
  Check,
  Zap
} from 'lucide-react'
import { SITE_CONFIG } from '../../constants/siteConfig'
import SEOHead from '../../components/common/SEOHead'
import { CAR_FLEET, CAR_TERMS } from './data/cars'
import { MobilityExpresswayTexture, CarRentalMobilityArt } from '../../components/common/PageTextures'

export default function CarRentalHome() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [openFaq, setOpenFaq] = useState(null) // Inactive by default
  const [selectedDuration, setSelectedDuration] = useState('12h') // '12h' or '24h'

  // Booking / Search Form State
  const [pickupLoc, setPickupLoc] = useState('Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan')
  const [dropLoc, setDropLoc] = useState('Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan')
  const todayStr = useMemo(() => {
    const d = new Date()
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }, [])
  const [startDate, setStartDate] = useState(todayStr)
  const [endDate, setEndDate] = useState(todayStr)

  // Quick Enquiry Form State
  const [inquiryName, setInquiryName] = useState('')
  const [inquiryPhone, setInquiryPhone] = useState('')
  const [inquiryCar, setInquiryCar] = useState('Baleno / Standard Car')
  const [inquiryDuration, setInquiryDuration] = useState('12 Hours (200 KM)')
  const [inquirySubmitted, setInquirySubmitted] = useState(false)
  const [inquiryError, setInquiryError] = useState('')

  // Modal State
  const [selectedCar, setSelectedCar] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [modalError, setModalError] = useState('')

  // Filtered fleet (featured 6 vehicles on home page)
  const featuredFleet = useMemo(() => {
    let list = CAR_FLEET
    if (activeFilter !== 'all') {
      list = list.filter((car) => car.category === activeFilter || car.type === activeFilter)
    }
    return list.slice(0, 6)
  }, [activeFilter])

  // Calculate rental duration in days
  const rentalDays = useMemo(() => {
    if (!startDate || !endDate) return 1
    const s = new Date(startDate)
    const e = new Date(endDate)
    const diffTime = e.getTime() - s.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 1
  }, [startDate, endDate])

  const openBookingModal = (car) => {
    setSelectedCar(car)
    setCustomerName('')
    setCustomerPhone('')
    setModalError('')
    setModalOpen(true)
  }

  const handleModalSubmit = (e) => {
    e.preventDefault()
    setModalError('')

    const cleanPhone = customerPhone.replace(/\D/g, '')
    if (!customerName.trim()) {
      setModalError('Please enter your full name.')
      return
    }
    if (cleanPhone.length < 10) {
      setModalError('Please enter a valid 10-digit mobile number.')
      return
    }

    const durationLabel = selectedDuration === '6h' ? '6 Hours (120 KM Limit)' : selectedDuration === '12h' ? '12 Hours (200 KM Limit)' : '24 Hours (350 KM Limit)'

    const msg = `*SELF-DRIVE BOOKING REQUEST*
━━━━━━━━━━━━━━━━━━━━━
*Vehicle:* ${selectedCar.name} (${selectedCar.categoryBadge})
*Duration:* ${durationLabel} (${rentalDays} day${rentalDays > 1 ? 's' : ''})
*Pickup Location:* ${pickupLoc}
*Drop Location:* ${dropLoc}
*Dates:* ${startDate} to ${endDate}
*Name:* ${customerName.trim()}
*Phone:* ${customerPhone.trim()}`

    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank')
    setModalOpen(false)
  }

  const handleQuickInquiry = (e) => {
    e.preventDefault()
    setInquiryError('')

    const cleanPhone = inquiryPhone.replace(/\D/g, '')
    if (!inquiryName.trim()) {
      setInquiryError('Please enter your full name.')
      return
    }
    if (cleanPhone.length < 10) {
      setInquiryError('Please enter a valid 10-digit mobile number.')
      return
    }

    const msg = `*QUICK CAR RENTAL INQUIRY*
━━━━━━━━━━━━━━━━━━━━━
*Name:* ${inquiryName.trim()}
*Phone:* ${inquiryPhone.trim()}
*Preferred Vehicle:* ${inquiryCar}
*Duration:* ${inquiryDuration}
*Pickup Location:* Flat 104 Krishna 2C, Omaxe Eternity, Vrindavan`

    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank')
    setInquirySubmitted(true)
  }

  const faqs = [
    {
      q: 'Are these cars strictly self-drive?',
      a: 'Yes, VRV Car Rental provides 100% dedicated self-drive vehicles. Enjoy complete privacy and freedom for your family darshan without driver interference.'
    },
    {
      q: 'Where is the vehicle pickup and drop location in Vrindavan?',
      a: 'Vehicle handover takes place at Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan (281121). We can also provide delivery across major Mathura-Vrindavan locations upon prior request.'
    },
    {
      q: 'What are the kilometer limits and extra charges?',
      a: 'For 6-Hour rentals, 120 KM is included. For 12-Hour rentals, 200 KM is included. For 24-Hour rentals, 350 KM is included. Standard kilometer limits apply for each vehicle slab.'
    },
    {
      q: 'What documents are required to rent a self-drive car or Activa?',
      a: 'You only need an original valid Indian Driving Licence (LMV or 2-Wheeler) and a Government Photo ID (Aadhaar Card or Passport).'
    },
    {
      q: 'Do you offer two-wheelers like Honda Activa?',
      a: 'Yes! Honda Activa is available for 6-Hour, 12-Hour, and 24-Hour rentals, making it ideal for navigating through narrow temple lanes.'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <SEOHead
        title="Self-Drive Car & Scooter Rental in Vrindavan | VRV Group"
        description="Rent self-drive cars in Vrindavan &. Baleno, i20, Scorpio S11, Thar 4x4, Creta, Verna & Activa. Handover at Omaxe Eternity."
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[90vh] flex flex-col justify-center bg-[#070e20] text-white pt-10 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Crisp Cinematic Daylight Clarity */}
        <img
          src="/images/car-rental/car-rental.jpg"
          alt="Self Drive Vrindavan"
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-95 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
        />
        {/* Directional vignette: deeper on the left for maximum text contrast, clear and vibrant on the right so the car contours and frosted glass shine */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#070e20]/95 via-[#070e20]/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#070e20] via-transparent to-[#070e20]/30 pointer-events-none" />

        {/* Ambient atmospheric lighting orbs */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/20 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-blue-600/15 rounded-full blur-[150px]" />
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: Heading, Trust Badges & Action CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6"
            >

              {/* Top Shimmering Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider shadow-sm shadow-gold/10">
                <Sparkles size={14} className="text-gold animate-pulse" />
                <span>Self-Drive Vehicle Fleet &bull; Vrindavan</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Explore Braj at Your <br />
                <span className="bg-gradient-to-r from-gold via-[#ffd95b] to-amber-200 bg-clip-text text-transparent">
                  Own Peaceful Pace
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Reliable self-drive cars and Activa scooters in Vrindavan–Mathura. Clean, sanitized vehicles with handover at <strong className="text-white font-semibold">Omaxe Eternity</strong>.
              </p>

              {/* Quick Trust Highlights */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={15} className="text-gold" />
                  <span>100% Dedicated Self-Drive</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={15} className="text-gold" />
                  <span>DL &amp; Aadhaar Verification</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={15} className="text-gold" />
                  <span>Sanitized &amp; Inspected</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/car-rental/cars"
                  className="bg-gold hover:bg-[#e0b428] text-navy font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-all flex items-center gap-2 active:scale-95"
                >
                  <Car size={16} />
                  <span>Explore All 17+ Cars</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20VRV%20Group%2C%20I%20want%20to%20inquire%20about%20self-drive%20car%20rental%20in%20Vrindavan.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-950/30 transition-all flex items-center gap-2 active:scale-95 border border-emerald-400/30"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Booking</span>
                </a>
              </div>

            </motion.div>

            {/* Right Column: Interactive Fleet Tier Console */}
            <motion.div
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
              <div
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
                className="relative rounded-3xl p-6 sm:p-7 shadow-2xl text-white overflow-hidden"
              >
                {/* Decorative glow in card corner */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

                {/* Card Header with Live Handover Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold bg-gold/15 border border-gold/30 px-2.5 py-0.5 rounded-md">
                      Available Options
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-1.5">
                      Self-Drive Rental Fleet
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Omaxe Eternity
                    </span>
                  </div>
                </div>

                {/* Category Showcase Cards */}
                <div className="space-y-3 text-xs">
                  {/* Standard Cars */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-gold/60 hover:bg-white/[0.14] transition-all duration-300 flex items-center justify-between gap-3 group">
                    <div>
                      <div className="font-bold text-white text-xs sm:text-sm group-hover:text-gold transition-colors">
                        Standard Cars (Baleno, i20, Swift, Venue)
                      </div>
                      <div className="text-[11px] text-slate-300 mt-0.5">
                        120 KM / 200 KM / 350 KM Limit &bull; Clean &amp; Sanitized
                      </div>
                    </div>
                    <div className="shrink-0 text-right font-bold text-gold text-xs bg-gold/15 px-2.5 py-1.5 rounded-xl border border-gold/30 whitespace-nowrap">
                      6h / 12h / 24h
                    </div>
                  </div>

                  {/* Premium SUVs */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-gold/60 hover:bg-white/[0.14] transition-all duration-300 flex items-center justify-between gap-3 group">
                    <div>
                      <div className="font-bold text-white text-xs sm:text-sm group-hover:text-gold transition-colors">
                        Premium (Scorpio S11, Thar 4x4, Creta, Verna)
                      </div>
                      <div className="text-[11px] text-slate-300 mt-0.5">
                        120 KM / 200 KM / 350 KM Limit &bull; Luxury &amp; 4x4
                      </div>
                    </div>
                    <div className="shrink-0 text-right font-bold text-gold text-xs bg-gold/15 px-2.5 py-1.5 rounded-xl border border-gold/30 whitespace-nowrap">
                      6h / 12h / 24h
                    </div>
                  </div>

                  {/* Scooter */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-gold/60 hover:bg-white/[0.14] transition-all duration-300 flex items-center justify-between gap-3 group">
                    <div>
                      <div className="font-bold text-white text-xs sm:text-sm group-hover:text-gold transition-colors">
                        Honda Activa (Two-Wheeler)
                      </div>
                      <div className="text-[11px] text-slate-300 mt-0.5">
                        Temple Darshan &bull; Narrow Lanes
                      </div>
                    </div>
                    <div className="shrink-0 text-right font-bold text-gold text-xs bg-gold/15 px-2.5 py-1.5 rounded-xl border border-gold/30 whitespace-nowrap">
                      6h / 12h / 24h
                    </div>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <Link
                  to="/car-rental/cars"
                  className="mt-5 w-full bg-gold hover:bg-[#e0b428] text-navy font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-gold/20 active:scale-95"
                >
                  <span>View All 17 Vehicles &amp; Book</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

          </div>

          {/* ===================== QUICK SEARCH / DURATION SELECTOR CONSOLE ===================== */}
          <motion.div
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' }}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.78) 0%, rgba(255, 255, 255, 0.55) 100%)',
              backdropFilter: 'blur(14px) saturate(180%)',
              WebkitBackdropFilter: 'blur(14px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.80)',
              boxShadow: '0 20px 45px -12px rgba(15, 23, 42, 0.18), inset 0 1px 2px 0 rgba(255, 255, 255, 0.95)',
              isolation: 'isolate',
              transform: 'translate3d(0, 0, 0)',
              WebkitTransform: 'translate3d(0, 0, 0)'
            }}
            className="mt-10 lg:mt-12 text-navy rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle luxury ambient glow inside card */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-navy/10">
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Pickup &amp; Handover Location:
                </span>
                <div className="text-sm sm:text-base font-extrabold text-navy flex items-center gap-2 mt-1">
                  <MapPin size={16} className="text-gold shrink-0" />
                  <span>Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan (281121)</span>
                </div>
              </div>

              {/* Duration Switcher */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-bold text-slate-500">Rental Duration:</span>
                <div className="inline-flex rounded-xl bg-white/60 backdrop-blur-md p-1 border border-white/80 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setSelectedDuration('6h')}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${selectedDuration === '6h'
                      ? 'bg-navy text-gold shadow-md'
                      : 'text-slate-700 hover:text-navy hover:bg-white/40'
                      }`}
                  >
                    6 Hours (120 KM)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDuration('12h')}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${selectedDuration === '12h'
                      ? 'bg-navy text-gold shadow-md'
                      : 'text-slate-700 hover:text-navy hover:bg-white/40'
                      }`}
                  >
                    12 Hours (200 KM)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDuration('24h')}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${selectedDuration === '24h'
                      ? 'bg-navy text-gold shadow-md'
                      : 'text-slate-700 hover:text-navy hover:bg-white/40'
                      }`}
                  >
                    24 Hours (350 KM)
                  </button>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); const el = document.getElementById('fleet'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end mt-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                  Pickup Point
                </label>
                <select
                  value={pickupLoc}
                  onChange={(e) => setPickupLoc(e.target.value)}
                  className="w-full h-11 bg-white/70 backdrop-blur-md border border-slate-300/80 hover:border-gold/60 focus:bg-white/95 rounded-xl px-3 text-xs font-semibold text-navy focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all shadow-sm"
                >
                  <option value="Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan">
                    Flat 104, Krishna 2C, Omaxe Eternity (Main Office)
                  </option>
                  <option value="Omaxe Krishna Heights, Vrindavan">Omaxe Krishna Heights</option>
                  <option value="Mathura Junction Station">Mathura Junction</option>
                  <option value="Custom Vrindavan Hotel">Custom Vrindavan Hotel / Ashram</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                  Rental Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  min={todayStr}
                  onChange={(e) => {
                    const newStart = e.target.value
                    setStartDate(newStart)
                    if (endDate && newStart > endDate) {
                      setEndDate(newStart)
                    }
                  }}
                  className="w-full h-11 bg-white/70 backdrop-blur-md border border-slate-300/80 hover:border-gold/60 focus:bg-white/95 rounded-xl px-3 text-xs font-semibold text-navy focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all shadow-sm cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                  End Date ({rentalDays} Day{rentalDays > 1 ? 's' : ''})
                </label>
                <input
                  type="date"
                  value={endDate}
                  min={startDate || todayStr}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full h-11 bg-white/70 backdrop-blur-md border border-slate-300/80 hover:border-gold/60 focus:bg-white/95 rounded-xl px-3 text-xs font-semibold text-navy focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all shadow-sm cursor-pointer"
                />
              </div>

              <div>
                <Link
                  to="/car-rental/cars"
                  className="w-full h-11 bg-navy hover:bg-gold hover:text-navy text-gold font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-gold/30 active:scale-95"
                >
                  <Search size={15} />
                  <span>Browse Available Fleet</span>
                </Link>
              </div>
            </form>
          </motion.div>

        </div>
      </section>

      {/* ===================== VALUE PROPS / ADVANTAGES ===================== */}
      <section className="relative py-16 bg-[#FAFCFF] border-b border-slate-200 overflow-hidden">
        {/* Modern Highway Mobility Texture */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <div
            className="absolute -top-20 -right-20 w-[460px] h-[460px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(254, 248, 231, 0.6) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Bottom-Left Car Rental Mobility Line-Art Watermark (FAQ Sister Style) */}
        <div className="absolute bottom-0 left-0 w-[340px] sm:w-[420px] md:w-[480px] pointer-events-none select-none opacity-65">
          <CarRentalMobilityArt className="w-full h-auto" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-gold shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                <Car size={22} />
              </div>
              <h3 className="text-base font-bold text-navy mb-1.5">Strictly Self-Drive</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Zero chauffeur interference. Complete privacy and flexibility for your sacred family pilgrimage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-gold shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                <MapPin size={22} />
              </div>
              <h3 className="text-base font-bold text-navy mb-1.5">Omaxe Eternity Handover</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Pickup directly from Flat 104, Krishna 2C, Omaxe Eternity, or convenient doorstep ashram delivery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-gold shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                <Clock size={22} />
              </div>
              <h3 className="text-base font-bold text-navy mb-1.5">6h, 12h &amp; 24h Slabs</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Generous 120 KM (6h), 200 KM (12h) and 350 KM (24h) allowances with zero hassle.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-gold shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-base font-bold text-navy mb-1.5">Deep Sanitized Fleet</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Every vehicle undergoes full mechanical checkup and interior sanitization before every trip.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== FEATURED FLEET HIGHLIGHT ===================== */}
      <section id="fleet" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="eyebrow inline-block mb-2 font-bold text-xs uppercase tracking-widest text-gold border-b-2 border-gold pb-1">
              FEATURED VEHICLES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight mt-2">
              Popular Self-Drive Choices
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-md">
              Showing top choices. Browse the complete 17-vehicle fleet including SUVs, Sedans, Hatchbacks &amp; Scooters.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/car-rental/cars"
              className="px-5 py-2.5 bg-navy hover:bg-gold hover:text-navy text-gold text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 border border-gold/30"
            >
              <span>Explore All 17+ Cars</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Featured 6 Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {featuredFleet.map((car) => {
            const limit = selectedDuration === '6h' ? (car.kmLimit6h ?? 120) : selectedDuration === '12h' ? (car.kmLimit12h ?? 200) : (car.kmLimit24h ?? 350)

            return (
              <div
                key={car.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo & Badges */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg bg-navy/90 text-gold text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md border border-gold/30">
                        {car.categoryBadge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold flex items-center gap-1">
                        <Users size={13} className="text-gold" /> {car.seats}
                      </span>
                      <span className="font-semibold flex items-center gap-1">
                        <Fuel size={13} className="text-gold" /> {car.fuel}
                      </span>
                      <span className="font-semibold flex items-center gap-1">
                        <Settings size={13} className="text-gold" /> {car.transmission}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-navy group-hover:text-gold transition-colors mb-2">
                      {car.name}
                    </h3>

                    {/* Duration Allowance Badge */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 mb-3 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {selectedDuration === '6h' ? '6-Hour Slab' : selectedDuration === '12h' ? '12-Hour Slab' : '24-Hour Slab'}
                        </span>
                        <div className="text-xs font-bold text-navy">
                          Self-Drive Rental
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-200 inline-block">
                          {limit} KM Included
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-1 text-xs text-slate-600 mb-2">
                      {car.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check size={12} className="text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => openBookingModal(car)}
                    className="w-full bg-navy hover:bg-[#131f40] text-gold font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer border border-gold/30"
                  >
                    <span>Book Now</span>
                  </button>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Hello VRV Group, I want to book the self-drive ${car.name} (${selectedDuration === '6h' ? '6h Slab' : selectedDuration === '12h' ? '12h Slab' : '24h Slab'}). Handover at Omaxe Eternity, Vrindavan.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-navy to-[#1a2c5a] rounded-3xl p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-gold/30">
          <div>
            <h3 className="font-display text-2xl font-bold text-gold">Want to see all 17 vehicles?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Explore Thar 4x4, Scorpio N, Glanza, Fronx, Dzire, Aura, XUV 300, Creta, Seltos, MG Hector &amp; Honda Activa.
            </p>
          </div>
          <Link
            to="/car-rental/cars"
            className="shrink-0 bg-gold hover:bg-[#e0b428] text-navy font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2"
          >
            <Car size={16} />
            <span>Explore All 17+ Cars &amp; Scooters</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </section>

      {/* ===================== QUICK INQUIRY LEAD FORM (Item 7) ===================== */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
            <div className="text-center mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-navy px-3 py-1 rounded-full inline-block mb-2">
                Quick Rental Inquiry
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                Need a Custom Car or Immediate Booking?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill this quick form and our fleet manager at Omaxe Eternity will confirm availability immediately.
              </p>
            </div>

            {inquirySubmitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">Inquiry Prepared!</h3>
                <p className="text-xs text-slate-600 mt-1">WhatsApp has been opened to finalize your booking with our team.</p>
                <button
                  onClick={() => setInquirySubmitted(false)}
                  className="mt-4 px-5 py-2 bg-navy text-gold text-xs font-bold rounded-xl"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickInquiry} className="space-y-4 text-xs">
                {inquiryError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                    {inquiryError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Mobile / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Select Vehicle of Interest
                    </label>
                    <select
                      value={inquiryCar}
                      onChange={(e) => setInquiryCar(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs bg-white"
                    >
                      <option value="Baleno / i20 / Swift (Standard Car)">
                        Standard Car (Baleno / i20 / Swift / Dzire)
                      </option>
                      <option value="Scorpio S11 / Scorpio N (Premium SUV)">
                        Premium SUV (Scorpio Classic / Scorpio N)
                      </option>
                      <option value="Mahindra Thar 4x4 (Off-Roader)">
                        Mahindra Thar 4x4
                      </option>
                      <option value="Hyundai Creta / Kia Seltos (Executive SUV)">
                        Hyundai Creta / Kia Seltos
                      </option>
                      <option value="Honda Activa 6G / 125 (Scooter)">
                        Honda Activa (Scooter)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Rental Duration
                    </label>
                    <select
                      value={inquiryDuration}
                      onChange={(e) => setInquiryDuration(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs bg-white"
                    >
                      <option value="6 Hours (120 KM Limit)">6 Hours (120 KM Limit)</option>
                      <option value="12 Hours (200 KM Limit)">12 Hours (200 KM Limit)</option>
                      <option value="24 Hours (350 KM Limit)">24 Hours (350 KM Limit)</option>
                      <option value="Multiple Days (Custom Outstation)">Multiple Days / Outstation</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-navy hover:bg-[#131f40] text-gold font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer border border-gold/30 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>Submit Inquiry to Fleet Desk</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS (NO DEPOSIT STEP) ===================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow inline-block mb-2 font-bold text-xs uppercase tracking-widest text-gold border-b-2 border-gold pb-1">
              EFFORTLESS PROCESS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight mt-2">
              How Self-Drive Rental Works
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Drive out within minutes with our straightforward 3-step rental handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-navy text-gold flex items-center justify-center font-display text-2xl font-bold shadow-md ring-2 ring-gold/40 mb-5">
                1
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-dark block mb-1">Step 01</span>
              <h3 className="font-display text-xl font-bold text-navy mb-2">Choose Your Vehicle</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Browse our 17+ fleet of Standard Cars, Premium SUVs, or Activa and select 6h, 12h or 24h duration.
              </p>
            </div>

            <div className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-navy text-gold flex items-center justify-center font-display text-2xl font-bold shadow-md ring-2 ring-gold/40 mb-5">
                2
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-dark block mb-1">Step 02</span>
              <h3 className="font-display text-xl font-bold text-navy mb-2">Quick ID Verification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Show your valid Indian Driving Licence and Aadhaar/Govt ID for rapid 2-minute verification.
              </p>
            </div>

            <div className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-navy text-gold flex items-center justify-center font-display text-2xl font-bold shadow-md ring-2 ring-gold/40 mb-5">
                3
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-dark block mb-1">Step 03</span>
              <h3 className="font-display text-xl font-bold text-navy mb-2">Handover at Omaxe</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Collect sanitized vehicle keys at Flat 104, Krishna 2C, Omaxe Eternity and enjoy your pilgrimage!
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ===================== FAQ SECTION (Inactive by default) ===================== */}
      <section className="relative py-24 bg-gradient-to-b from-[#FFFFFF] via-[#FAFBFC] to-[#F5F7FA] border-b border-slate-200 overflow-hidden">
        {/* Ambient atmospheric lighting orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#D8C98A]/1 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#1B2A55]/15 blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-amber-50/15 blur-3xl pointer-events-none" />

        {/* SVG Blueprint Grid / Road Mesh Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-45 pointer-events-none select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="car-faq-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#1B2A55" strokeWidth="0.6" strokeOpacity="0.09" />
              <circle cx="22" cy="22" r="1.3" fill="#C9A227" fillOpacity="0.4" />
              <circle cx="0" cy="0" r="2" fill="#1B2A55" fillOpacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#car-faq-grid)" />
        </svg>

        {/* FULL SECTION BACKGROUND SVG: Big Visible Highway Map & Car Contour Backdrop (Visible on ALL screens!) */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-between">
          {/* Left Side Big SVG: Highway Ribbon, Waypoint Pins, and Compass Dial */}
          <div className="w-[340px] md:w-[420px] lg:w-[480px] h-[650px] -ml-16 md:-ml-10 lg:ml-0 opacity-80 md:opacity-90 transition-opacity">
            <svg viewBox="0 0 400 650" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Compass Dial */}
              <g transform="translate(100, 80)">
                <circle cx="0" cy="0" r="54" stroke="#1B2A55" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="4 4" />
                <circle cx="0" cy="0" r="44" stroke="#C9A227" strokeWidth="2" strokeOpacity="0.6" />
                <circle cx="0" cy="0" r="5" fill="#C9A227" />
                <path d="M0 -38 L7 -7 L0 0 L-7 -7 Z" fill="#1B2A55" />
                <path d="M0 38 L6 7 L0 0 L-6 7 Z" fill="#C9A227" />
                <text x="0" y="-42" textAnchor="middle" fill="#1B2A55" fontSize="11" fontWeight="bold">N</text>
                <text x="42" y="4" textAnchor="middle" fill="#C9A227" fontSize="10" fontWeight="bold">E</text>
                <text x="0" y="52" textAnchor="middle" fill="#1B2A55" fontSize="10" fontWeight="bold">S</text>
                <text x="-42" y="4" textAnchor="middle" fill="#C9A227" fontSize="10" fontWeight="bold">W</text>
              </g>

              {/* Highway Road with Center Dashed Gold Line */}
              <path
                d="M100 140 C 100 230, 40 260, 40 340 C 40 430, 160 470, 160 560 C 160 610, 120 635, 100 650"
                stroke="#1B2A55"
                strokeWidth="32"
                strokeLinecap="round"
                strokeOpacity="0.07"
              />
              <path
                d="M100 140 C 100 230, 40 260, 40 340 C 40 430, 160 470, 160 560 C 160 610, 120 635, 100 650"
                stroke="#1B2A55"
                strokeWidth="2"
                strokeOpacity="0.3"
              />
              <path
                d="M100 140 C 100 230, 40 260, 40 340 C 40 430, 160 470, 160 560 C 160 610, 120 635, 100 650"
                stroke="#C9A227"
                strokeWidth="3"
                strokeDasharray="8 10"
                strokeOpacity="0.9"
              />

              {/* Waypoint 1: Vrindavan Base */}
              <g transform="translate(98, 190)">
                <circle cx="0" cy="0" r="16" fill="#C9A227" fillOpacity="0.2" />
                <circle cx="0" cy="0" r="8" fill="#FFFFFF" stroke="#C9A227" strokeWidth="3" />
                <circle cx="0" cy="0" r="3" fill="#1B2A55" />
                <rect x="18" y="-12" width="124" height="24" rx="12" fill="#FFFFFF" stroke="#C9A227" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
                <text x="30" y="4" fill="#1B2A55" fontSize="10.5" fontWeight="bold">Vrindavan Base</text>
              </g>

              {/* Waypoint 2: Mathura Trail */}
              <g transform="translate(40, 340)">
                <circle cx="0" cy="0" r="14" fill="#1B2A55" fillOpacity="0.15" />
                <circle cx="0" cy="0" r="7" fill="#FFFFFF" stroke="#1B2A55" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="2.5" fill="#C9A227" />
                <rect x="16" y="-11" width="112" height="22" rx="11" fill="#FFFFFF" stroke="#1B2A55" strokeOpacity="0.4" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
                <text x="26" y="4" fill="#1B2A55" fontSize="10" fontWeight="bold">Mathura Trail</text>
              </g>

              {/* Waypoint 3: Govardhan Loop */}
              <g transform="translate(160, 520)">
                <circle cx="0" cy="0" r="16" fill="#C9A227" fillOpacity="0.2" />
                <circle cx="0" cy="0" r="8" fill="#FFFFFF" stroke="#C9A227" strokeWidth="3" />
                <circle cx="0" cy="0" r="3" fill="#C9A227" />
                <rect x="18" y="-12" width="126" height="24" rx="12" fill="#FFFFFF" stroke="#C9A227" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
                <text x="30" y="4" fill="#1B2A55" fontSize="10.5" fontWeight="bold">Govardhan Loop</text>
              </g>

              {/* 24/7 Road Assistance Badge */}
              <g transform="translate(60, 600)">
                <rect x="0" y="0" width="150" height="30" rx="8" fill="#1B2A55" fillOpacity="0.1" stroke="#C9A227" strokeWidth="1" />
                <text x="14" y="20" fill="#1B2A55" fontSize="10.5" fontWeight="bold" letterSpacing="0.5">24/7 Road Assistance</text>
              </g>
            </svg>
          </div>

          {/* Right Side Big SVG: Luxury Car Silhouette, Speedometer Arc & Wheel Motif */}
          <div className="w-[340px] md:w-[420px] lg:w-[480px] h-[650px] -mr-16 md:-mr-10 lg:mr-0 opacity-80 md:opacity-90 transition-opacity">
            <svg viewBox="0 0 400 650" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Speedometer Gauge at Upper Right */}
              <g transform="translate(280, 110)">
                <path d="M -70 24 A 75 75 0 1 1 70 24" stroke="#1B2A55" strokeWidth="3" strokeOpacity="0.2" strokeLinecap="round" />
                <path d="M -60 16 A 65 65 0 1 1 40 -50" stroke="#C9A227" strokeWidth="5" strokeLinecap="round" />
                {[-120, -90, -60, -30, 0, 30, 60, 90, 120].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180
                  const x1 = Math.sin(rad) * 52
                  const y1 = -Math.cos(rad) * 52
                  const x2 = Math.sin(rad) * (i % 2 === 0 ? 42 : 47)
                  const y2 = -Math.cos(rad) * (i % 2 === 0 ? 42 : 47)
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={i > 5 ? "#C9A227" : "#1B2A55"}
                      strokeWidth={i % 2 === 0 ? 2 : 1}
                      strokeOpacity={i > 5 ? 0.95 : 0.4}
                    />
                  )
                })}
                <line x1="0" y1="0" x2="34" y2="-34" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" />
                <circle cx="0" cy="0" r="6" fill="#1B2A55" />
                <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
                <text x="0" y="26" textAnchor="middle" fill="#1B2A55" fontSize="10.5" fontWeight="bold" letterSpacing="0.5">UNLIMITED KM</text>
                <text x="0" y="40" textAnchor="middle" fill="#C9A227" fontSize="8.5" fontWeight="bold" letterSpacing="1">SELF DRIVE</text>
              </g>

              {/* Sleek Aerodynamic Car Silhouette Contours */}
              <g transform="translate(60, 240)">
                <path
                  d="M 20 140 C 60 138, 100 135, 130 110 C 160 85, 200 82, 240 85 C 270 87, 290 110, 310 120"
                  stroke="#1B2A55"
                  strokeWidth="3.5"
                  strokeOpacity="0.45"
                  strokeLinecap="round"
                />
                <path
                  d="M 5 155 C 50 152, 95 153, 140 148 C 190 143, 240 145, 300 150"
                  stroke="#C9A227"
                  strokeWidth="3"
                  strokeOpacity="0.8"
                  strokeLinecap="round"
                />
                <path d="M 60 160 A 24 24 0 0 1 108 160" stroke="#1B2A55" strokeWidth="3" strokeOpacity="0.5" />
                <path d="M 220 160 A 24 24 0 0 1 268 160" stroke="#C9A227" strokeWidth="3.5" strokeOpacity="0.8" />
                <path d="M 0 115 Q 110 112 180 98" stroke="#C9A227" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 6" />
                <path d="M 30 175 Q 160 173 290 175" stroke="#1B2A55" strokeWidth="1.5" strokeOpacity="0.2" />
              </g>

              {/* Precision Alloy Wheel Motif */}
              <g transform="translate(260, 480)">
                <circle cx="0" cy="0" r="56" stroke="#1B2A55" strokeWidth="2" strokeOpacity="0.2" />
                <circle cx="0" cy="0" r="48" stroke="#C9A227" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="8 5" />
                <circle cx="0" cy="0" r="35" stroke="#1B2A55" strokeWidth="1" strokeOpacity="0.25" />
                <circle cx="0" cy="0" r="18" fill="#1B2A55" fillOpacity="0.08" stroke="#C9A227" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="6" fill="#C9A227" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                  <line
                    key={deg}
                    x1={Math.sin((deg * Math.PI) / 180) * 18}
                    y1={-Math.cos((deg * Math.PI) / 180) * 18}
                    x2={Math.sin((deg * Math.PI) / 180) * 48}
                    y2={-Math.cos((deg * Math.PI) / 180) * 48}
                    stroke="#1B2A55"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />
                ))}
                <rect x="-75" y="68" width="150" height="28" rx="14" fill="#FFFFFF" stroke="#C9A227" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
                <text x="0" y="86" textAnchor="middle" fill="#1B2A55" fontSize="10" fontWeight="bold" letterSpacing="0.8">100% SANITIZED FLEET</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B2A55] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-sans leading-relaxed">
              Everything you need to know about self-drive rentals, security deposits, pickup points, and driving freedom in Vrindavan.
            </p>

            {/* Central Decorative SVG Car & Highway Trail Banner (Always visible in center!) */}
            <div className="mt-6 flex justify-center items-center">
              <svg viewBox="0 0 500 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md h-12">
                <line x1="10" y1="25" x2="190" y2="25" stroke="#C9A227" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.7" />
                <circle cx="60" cy="25" r="4" fill="#C9A227" />
                <circle cx="130" cy="25" r="4" fill="#1B2A55" />
                {/* Center Stylized Car Emblem */}
                <g transform="translate(250, 25)">
                  <rect x="-35" y="-14" width="70" height="28" rx="14" fill="#FFFFFF" stroke="#C9A227" strokeWidth="1.5" filter="drop-shadow(0 2px 5px rgba(27,42,85,0.08))" />
                  <path d="M -18 4 L -12 -6 L 12 -6 L 18 4 Z" fill="none" stroke="#1B2A55" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="-10" cy="4" r="3" fill="#C9A227" />
                  <circle cx="10" cy="4" r="3" fill="#C9A227" />
                  <line x1="-20" y1="4" x2="20" y2="4" stroke="#1B2A55" strokeWidth="1.5" />
                </g>
                <line x1="310" y1="25" x2="490" y2="25" stroke="#C9A227" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.7" />
                <circle cx="370" cy="25" r="4" fill="#1B2A55" />
                <circle cx="440" cy="25" r="4" fill="#C9A227" />
              </svg>
            </div>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
                    ? 'border-2 border-[#C9A227] shadow-luxury bg-white'
                    : 'border border-slate-200/90 bg-white/95 backdrop-blur-md hover:border-[#C9A227]/60 hover:bg-white shadow-[0_2px_12px_-2px_rgba(27,42,85,0.06)] hover:shadow-card'
                    }`}
                >
                  {/* Active Indicator Accent Bar */}
                  {isOpen && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#C9A227] via-[#E1D6A8] to-[#B8A96A]" />
                  )}

                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 text-[#1B2A55] hover:text-[#B8A96A] transition-colors cursor-pointer"
                  >
                    <span className={`font-bold text-sm sm:text-base leading-snug ${isOpen ? 'text-[#1B2A55] pl-1' : ''}`}>
                      {faq.q}
                    </span>
                    <div className={`p-1.5 rounded-full transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#C9A227] text-white shadow-md' : 'bg-slate-100 text-[#1B2A55] hover:bg-[#C9A227]/20'
                      }`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-sans pl-7">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Direct Assistance Support Card - Solid inline gradient for guaranteed contrast */}
          <div
            style={{ background: 'linear-gradient(135deg, #111A35 0%, #1B2A55 50%, #263A70 100%)' }}
            className="mt-10 p-5 sm:p-6 rounded-2xl text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 border border-[#C9A227]/30"
          >
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="p-3 rounded-xl bg-[#C9A227]/20 text-[#C9A227] border border-[#C9A227]/30 shrink-0">
                <MessageCircle size={22} />
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base text-white">Have a specific question not covered here?</div>
                <div className="text-xs text-slate-300 mt-0.5">Our reservation desk at Omaxe Eternity, Vrindavan is ready to assist you anytime.</div>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello VRV Group, I have a question regarding Car Rental.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone1}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C9A227] hover:bg-[#B8A96A] text-white text-xs font-bold transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                <Phone size={15} />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* ===================== DIRECT BOOKING CTA DESK ===================== */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-block eyebrow text-gold font-bold text-xs uppercase tracking-widest">
            VRV Reservation Desk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Ready to Hit the Road in Vrindavan?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-sans">
            Need a self-drive car for an upcoming weekend, festival, or family pilgrimage? Connect directly with our fleet manager at Omaxe Eternity.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={`tel:${SITE_CONFIG.phone1}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-navy transition hover:bg-slate-100 shadow-md"
            >
              <Phone size={16} /> Call {SITE_CONFIG.phone1Formatted}
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20VRV%20Group%2C%20I%20want%20to%20enquire%20about%20self-drive%20car%20rental%20in%20Mathura%E2%80%93Vrindavan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg"
            >
              <MessageCircle size={17} /> WhatsApp Reservation
            </a>
          </div>
        </div>
      </section>

      {/* ===================== INTERACTIVE BOOKING MODAL ===================== */}
      {modalOpen && selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>

            <div className="text-left mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-gold/15 text-[#b88e16] px-2.5 py-1 rounded-md">
                {selectedCar.categoryBadge} Self-Drive
              </span>
              <h3 className="font-display text-2xl font-bold text-navy mt-2">
                Reserve {selectedCar.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {selectedDuration === '6h' ? '6 Hours (120 KM Included)' : selectedDuration === '12h' ? '12 Hours (200 KM Included)' : '24 Hours (350 KM Included)'} &bull; {selectedCar.seats} &bull; {selectedCar.fuel}
              </p>
            </div>

            {modalError && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {modalError}
              </div>
            )}

            <form onSubmit={handleModalSubmit} className="space-y-3.5 text-left text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3.5 text-xs text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Mobile / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3.5 text-xs text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Pickup Location</label>
                  <select
                    value={pickupLoc}
                    onChange={(e) => setPickupLoc(e.target.value)}
                    className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3 text-xs text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan">
                      Flat 104 Krishna 2C, Omaxe Eternity (Main Office)
                    </option>
                    <option value="Omaxe Krishna Heights, Vrindavan">Omaxe Krishna Heights</option>
                    <option value="Mathura Junction Station">Mathura Junction</option>
                    <option value="Custom Vrindavan Spot">Custom Vrindavan Spot</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Drop Location</label>
                  <select
                    value={dropLoc}
                    onChange={(e) => setDropLoc(e.target.value)}
                    className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3 text-xs text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan">
                      Flat 104 Krishna 2C, Omaxe Eternity (Main Office)
                    </option>
                    <option value="Omaxe Krishna Heights, Vrindavan">Omaxe Krishna Heights</option>
                    <option value="Mathura Junction Station">Mathura Junction</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    min={todayStr}
                    value={startDate}
                    onChange={(e) => {
                      const newStart = e.target.value
                      setStartDate(newStart)
                      if (endDate && newStart > endDate) {
                        setEndDate(newStart)
                      }
                    }}
                    className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3 text-xs text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">End Date</label>
                  <input
                    type="date"
                    min={startDate || todayStr}
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3 text-xs text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              {/* Booking Details Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-600 block">Duration &amp; Slab</span>
                  <strong className="text-xs text-navy">
                    {rentalDays} Day{rentalDays > 1 ? 's' : ''} &bull; {selectedDuration === '6h' ? '6h (120 KM)' : selectedDuration === '12h' ? '12h (200 KM)' : '24h (350 KM)'}
                  </strong>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-slate-600 block">Included Distance</span>
                  <strong className="text-sm font-bold text-emerald-700">
                    {(selectedDuration === '6h' ? (selectedCar.kmLimit6h ?? 120) : selectedDuration === '12h' ? (selectedCar.kmLimit12h ?? 200) : (selectedCar.kmLimit24h ?? 350)) * rentalDays} KM
                  </strong>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-navy hover:bg-[#131f40] text-gold font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2 border border-gold/30"
              >
                <MessageCircle size={17} />
                <span>Confirm &amp; Send to WhatsApp Desk</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}
