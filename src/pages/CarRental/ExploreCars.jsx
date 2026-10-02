
import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Car,
  Search,
  MapPin,
  Clock,
  CheckCircle2,
  MessageCircle,
  Users,
  Fuel,
  Settings,
  Sparkles,
  ArrowLeft,
  X,
  Check
} from 'lucide-react'

import { CAR_FLEET, CAR_CATEGORIES, CAR_TERMS } from './data/cars'
import { SITE_CONFIG } from '../../constants/siteConfig'
import SEOHead from '../../components/common/SEOHead'
import { MobilityExpresswayTexture } from '../../components/common/PageTextures'

export default function ExploreCars() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDuration, setSelectedDuration] = useState('12h')
  const [searchQuery, setSearchQuery] = useState('')

  // Booking Modal State
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCar, setSelectedCar] = useState(null)

  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')

  const [rentalDate, setRentalDate] = useState(
    new Date().toISOString().split('T')[0]
  )

  const [pickupLoc, setPickupLoc] = useState(
    'Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan'
  )

  const [dropLoc, setDropLoc] = useState(
    'Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan'
  )

  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [formError, setFormError] = useState('')

  // Driver option
  const [withDriver, setWithDriver] = useState(false)

  // =========================================================
  // HELPER FUNCTIONS
  // =========================================================

  const getCarPrice = (car, duration) => {
    if (!car) return 0

    if (duration === '6h') {
      return car.price6h
    }

    if (duration === '12h') {
      return car.price12h
    }

    return car.price24h
  }

  const getCarKmLimit = (car, duration) => {
    if (!car) return 0

    if (duration === '6h') {
      return car.kmLimit6h ?? CAR_TERMS.slab6h.kmLimit
    }

    if (duration === '12h') {
      return car.kmLimit12h ?? CAR_TERMS.slab12h.kmLimit
    }

    return car.kmLimit24h ?? CAR_TERMS.slab24h.kmLimit
  }

  const getDurationLabel = (duration) => {
    if (duration === '6h') {
      return CAR_TERMS.slab6h.durationLabel
    }

    if (duration === '12h') {
      return CAR_TERMS.slab12h.durationLabel
    }

    return CAR_TERMS.slab24h.durationLabel
  }

  const getDurationShortLabel = (duration) => {
    if (duration === '6h') return '6 Hours'
    if (duration === '12h') return '12 Hours'
    return '24 Hours'
  }

  // =========================================================
  // DRIVER PRICE
  // =========================================================

  const getDriverPrice = (car) => {
    if (!car || car.category === 'two-wheeler') {
      return 0
    }

    if (car.category === 'premium') {
      return 1200
    }

    return 1000
  }

  const getTotalPrice = (car, duration) => {
    const basePrice = getCarPrice(car, duration)

    if (!basePrice) {
      return 0
    }

    const driverPrice = withDriver
      ? getDriverPrice(car)
      : 0

    return basePrice + driverPrice
  }

  // =========================================================
  // FILTERED FLEET
  // =========================================================

  const filteredCars = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()

    return CAR_FLEET.filter((car) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        car.category === selectedCategory

      const matchesSearch =
        car.name.toLowerCase().includes(query) ||
        car.categoryBadge.toLowerCase().includes(query) ||
        car.type.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  // =========================================================
  // BOOKING MODAL
  // =========================================================

  const openBookingModal = (car) => {
    setSelectedCar(car)
    setSubmitted(false)
    setFormError('')
    setWithDriver(false)

    // If 6h is selected but the car doesn't have 6h pricing,
    // automatically move to 12h.
    if (selectedDuration === '6h' && !car.price6h) {
      setSelectedDuration('12h')
    }

    setModalOpen(true)
  }

  const closeBookingModal = () => {
    setModalOpen(false)
    setSubmitted(false)
    setFormError('')
    setWithDriver(false)
  }

  // =========================================================
  // WHATSAPP BOOKING
  // =========================================================

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    setFormError('')

    if (!selectedCar) {
      setFormError('Please select a vehicle.')
      return
    }

    const cleanPhone = customerPhone.replace(/\D/g, '')

    if (!customerName.trim()) {
      setFormError('Please enter your full name.')
      return
    }

    if (cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number.')
      return
    }

    const kmLimit = getCarKmLimit(selectedCar, selectedDuration)
    const durationLabel = `${getDurationLabel(
      selectedDuration
    )} (${kmLimit} KM Limit)`

    const driverNote =
      selectedCar.category === 'two-wheeler'
        ? 'Not Available'
        : withDriver
          ? 'Yes'
          : 'No - Self Drive'

    const message = `*NEW CAR RENTAL BOOKING ENQUIRY*
━━━━━━━━━━━━━━━━━━━━━
*Vehicle:* ${selectedCar.name} (${selectedCar.categoryBadge})
*Duration:* ${durationLabel}
*Driver:* ${driverNote}
*Pickup Location:* ${pickupLoc}
*Drop Location:* ${dropLoc}
*Date:* ${rentalDate}
*Customer Name:* ${customerName.trim()}
*Customer Phone:* ${customerPhone.trim()}
*Notes:* ${notes.trim() || 'None'}

*VRV Group Car Rental*
Pickup: ${CAR_TERMS.pickupLocation}`

    const whatsappUrl =
      `https://wa.me/${SITE_CONFIG.whatsappNumber}` +
      `?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank')

    setSubmitted(true)
  }

  // =========================================================
  // DIRECT WHATSAPP MESSAGE
  // =========================================================

  const getQuickWhatsAppUrl = (car) => {
    const kmLimit = getCarKmLimit(
      car,
      selectedDuration
    )

    const durationText = `${getDurationShortLabel(
      selectedDuration
    )} / ${kmLimit || 'N/A'} KM Limit`

    const message = `Hello VRV Group, I want to book the self-drive ${car.name} (${durationText}). Pickup at Omaxe Eternity, Vrindavan.`

    return (
      `https://wa.me/${SITE_CONFIG.whatsappNumber}` +
      `?text=${encodeURIComponent(message)}`
    )
  }

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">

      <SEOHead
        title="Explore Self-Drive Cars & Scooters in Vrindavan | VRV Group"
        description="Browse our complete self-drive fleet in Vrindavan & Mathura. Baleno, i20, Swift, Scorpio S11, Thar 4x4, Creta, Verna, and Activa. Pickup at Omaxe Eternity."
      />

      {/* =====================================================
          HERO HEADER
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#0f1d3a] text-white pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-gold/20">
        {/* Modern Highway Mobility Texture */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <MobilityExpresswayTexture className="absolute -top-10 -right-10 w-[600px] h-[340px]" opacity={0.16} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          <Link
            to="/car-rental"
            className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Car Rental Overview
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

            <div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={13} />
                Official Self-Drive Fleet
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Self-Drive Car &amp; Scooter Fleet
              </h1>

              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
                Choose from our sanitized and reliable vehicles.
                6-Hour, 12-Hour &amp; 24-Hour slabs with pickup
                directly at Omaxe Eternity, Vrindavan.
              </p>

            </div>

            {/* QUICK TERMS */}

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-xs text-slate-200 shrink-0 space-y-2 sm:max-w-md">

              <div className="flex items-center gap-2 font-bold text-gold">
                <MapPin size={14} className="shrink-0" />

                <span>
                  Handover: Flat 104, Krishna 2C, Omaxe Eternity
                </span>
              </div>

              <div className="pt-2 border-t border-white/10 grid grid-cols-3 gap-2 text-center">

                <div>
                  <div className="font-bold text-white">
                    6h
                  </div>

                  <div className="text-[10px] text-slate-300">
                    {CAR_TERMS.slab6h.kmLimit} KM
                  </div>
                </div>

                <div>
                  <div className="font-bold text-white">
                    12h
                  </div>

                  <div className="text-[10px] text-slate-300">
                    {CAR_TERMS.slab12h.kmLimit} KM
                  </div>
                </div>

                <div>
                  <div className="font-bold text-white">
                    24h
                  </div>

                  <div className="text-[10px] text-slate-300">
                    {CAR_TERMS.slab24h.kmLimit} KM
                  </div>
                </div>

              </div>

              <div className="text-[10px] text-slate-300 text-center">
                6h, 12h &amp; 24h Flexible Duration Slabs
              </div>

              <div className="text-[10px] text-gold text-center font-bold">
                Self-Drive &amp; Chauffeur Options Available
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CATALOG
      ====================================================== */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

        {/* ===================================================
            CONTROL BAR
        ==================================================== */}

        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 mb-8 space-y-4">

          {/* DURATION */}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">

            <div className="flex items-center gap-2">
              <Clock size={16} className="text-gold shrink-0" />

              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Select Rental Duration:
              </span>
            </div>

            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 self-start sm:self-auto overflow-x-auto max-w-full">

              {/* 6 HOURS */}

              <button
                type="button"
                onClick={() => setSelectedDuration('6h')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedDuration === '6h'
                    ? 'bg-navy text-gold shadow-sm'
                    : 'text-slate-600 hover:text-navy'
                }`}
              >
                6 Hours ({CAR_TERMS.slab6h.kmLimit} KM)
              </button>

              {/* 12 HOURS */}

              <button
                type="button"
                onClick={() => setSelectedDuration('12h')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedDuration === '12h'
                    ? 'bg-navy text-gold shadow-sm'
                    : 'text-[#0f1d3a] hover:text-navy'
                }`}
              >
                12 Hours ({CAR_TERMS.slab12h.kmLimit} KM)
              </button>

              {/* 24 HOURS */}

              <button
                type="button"
                onClick={() => setSelectedDuration('24h')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedDuration === '24h'
                    ? 'bg-navy text-gold shadow-sm'
                    : 'text-[#0f1d3a] hover:text-navy'
                }`}
              >
                24 Hours ({CAR_TERMS.slab24h.kmLimit} KM)
              </button>

            </div>
          </div>

          {/* CATEGORY + SEARCH */}

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

            {/* CATEGORY FILTER */}

            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">

              {CAR_CATEGORIES.map((cat) => {

                const isActive =
                  selectedCategory === cat.id

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() =>
                      setSelectedCategory(cat.id)
                    }
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-gold text-[#0f1d3a] shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                )
              })}

            </div>

            {/* SEARCH */}

            <div className="relative min-w-[240px] sm:w-72">

              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search car model or brand..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={13} />
                </button>
              )}

            </div>

          </div>
        </div>

        {/* ===================================================
            VEHICLE COUNT
        ==================================================== */}

        <div className="flex items-center justify-between mb-5">

          <p className="text-xs text-slate-500">
            Showing{' '}
            <span className="font-bold text-navy">
              {filteredCars.length}
            </span>{' '}
            vehicles
          </p>

          <p className="text-[11px] text-slate-400">
            {getDurationShortLabel(selectedDuration)} slab
          </p>

        </div>

        {/* ===================================================
            VEHICLE GRID
        ==================================================== */}

        {filteredCars.length === 0 ? (

          <div className="bg-white rounded-3xl p-16 text-center border border-slate-200">

            <Car
              size={40}
              className="mx-auto text-slate-300 mb-3"
            />

            <h3 className="font-display text-xl font-bold text-navy">
              No vehicles found
            </h3>

            <p className="text-xs text-slate-500 mt-1">
              Try changing your search query or category filter.
            </p>

            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all')
                setSearchQuery('')
              }}
              className="mt-4 px-4 py-2 bg-navy text-gold text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">

            {filteredCars.map((car) => {

              const activePrice =
                getCarPrice(car, selectedDuration)

              const activeLimit =
                getCarKmLimit(car, selectedDuration)

              const hasSelectedDuration =
                Boolean(activePrice) &&
                Boolean(activeLimit)

              return (

                <motion.div
                  key={car.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 15
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
                >

                  <div>

                    {/* IMAGE */}

                    <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">

                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* BADGES */}

                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">

                        <span className="px-2.5 py-1 rounded-lg bg-navy/90 text-gold text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md border border-gold/30">
                          {car.categoryBadge}
                        </span>

                        {car.isPopular && (
                          <span className="px-2 py-1 rounded-lg bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                            Popular Choice
                          </span>
                        )}

                      </div>

                      {/* VEHICLE INFO */}

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs gap-2">

                        <span className="font-semibold flex items-center gap-1">
                          <Users
                            size={13}
                            className="text-gold"
                          />
                          {car.seats}
                        </span>

                        <span className="font-semibold flex items-center gap-1">
                          <Fuel
                            size={13}
                            className="text-gold"
                          />
                          {car.fuel}
                        </span>

                        <span className="font-semibold flex items-center gap-1">
                          <Settings
                            size={13}
                            className="text-gold"
                          />
                          {car.transmission}
                        </span>

                      </div>

                    </div>

                    {/* CARD BODY */}

                    <div className="p-5">

                      {/* NAME */}

                      <div className="flex items-start justify-between gap-2 mb-3">

                        <h3 className="font-display text-lg font-bold text-navy group-hover:text-gold transition-colors">
                          {car.name}
                        </h3>

                      </div>

                      {/* FEATURES */}

                      <ul className="space-y-1.5 text-xs text-slate-600 mb-2">

                        {car.features.map(
                          (feat, idx) => (

                            <li
                              key={idx}
                              className="flex items-center gap-2"
                            >

                              <Check
                                size={13}
                                className="text-emerald-600 shrink-0"
                              />

                              <span>
                                {feat}
                              </span>

                            </li>

                          )
                        )}

                      </ul>

                    </div>
                  </div>

                  {/* ACTION BUTTONS */}

                  <div className="p-5 pt-0 grid grid-cols-2 gap-2">

                    {/* BOOK NOW */}

                    <button
                      type="button"
                      onClick={() =>
                        openBookingModal(car)
                      }
                      disabled={!hasSelectedDuration}
                      className="w-full bg-navy hover:bg-[#131f40] disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-300 text-gold font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer border border-gold/30"
                    >
                      <span>
                        {hasSelectedDuration
                          ? 'Book Now'
                          : 'Unavailable'}
                      </span>
                    </button>

                    {/* WHATSAPP */}

                    <a
                      href={getQuickWhatsAppUrl(car)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                    >
                      <MessageCircle size={14} />
                      <span>
                        WhatsApp
                      </span>
                    </a>

                  </div>

                </motion.div>

              )
            })}

          </div>
        )}

      </main>

      {/* =====================================================
          BOOKING MODAL
      ====================================================== */}

      <AnimatePresence>

        {modalOpen && selectedCar && (

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-fade-in overflow-y-auto">

            <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-5 sm:p-8 relative border border-gold/30 my-auto max-h-[85vh] sm:max-h-[90vh] overflow-y-auto">

              {/* CLOSE */}

              <button
                type="button"
                onClick={closeBookingModal}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* SUCCESS STATE */}

              {submitted ? (

                <div className="text-center py-6">

                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-navy mb-2">
                    Booking Request Prepared!
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">

                    Thank you{' '}

                    <span className="font-bold text-navy">
                      {customerName}
                    </span>

                    . We've opened WhatsApp to confirm your booking for{' '}

                    <span className="font-bold text-navy">
                      {selectedCar.name}
                    </span>

                    {withDriver &&
                      selectedCar.category !==
                        'two-wheeler' && (
                        <>
                          {' '}
                          with driver
                        </>
                      )}

                    . Our fleet team at Omaxe Eternity will assist you immediately.

                  </p>

                  <button
                    type="button"
                    onClick={closeBookingModal}
                    className="px-6 py-2.5 bg-navy text-gold text-xs font-bold rounded-xl uppercase tracking-wider"
                  >
                    Done
                  </button>

                </div>

              ) : (

                <div>

                  {/* MODAL HEADER */}

                  <div className="text-center mb-6">

                    <span className="text-[10px] font-bold text-gold uppercase tracking-widest bg-navy px-3 py-1 rounded-full inline-block">
                      Car Rental • VRV Group
                    </span>

                    <h3 className="font-display text-2xl font-bold text-navy mt-2">
                      {selectedCar.name}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {selectedCar.categoryBadge} •{' '}
                      {getDurationShortLabel(
                        selectedDuration
                      )}
                    </p>

                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                      <Check size={13} />

                      {getCarKmLimit(
                        selectedCar,
                        selectedDuration
                      )}{' '}
                      KM Included
                    </div>

                  </div>

                  {/* ERROR */}

                  {formError && (
                    <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {formError}
                    </div>
                  )}

                  {/* FORM */}

                  <form
                    onSubmit={handleBookingSubmit}
                    className="space-y-3.5 text-xs"
                  >

                    {/* FULL NAME */}

                    <div>

                      <label className="block font-bold text-slate-700 mb-1">
                        Full Name{' '}
                        <span className="text-red-500">
                          *
                        </span>
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={customerName}
                        onChange={(e) =>
                          setCustomerName(
                            e.target.value
                          )
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs"
                      />

                    </div>

                    {/* PHONE */}

                    <div>

                      <label className="block font-bold text-slate-700 mb-1">
                        Mobile / WhatsApp Number{' '}
                        <span className="text-red-500">
                          *
                        </span>
                      </label>

                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={customerPhone}
                        onChange={(e) =>
                          setCustomerPhone(
                            e.target.value
                          )
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs"
                      />

                    </div>

                    {/* DATE + DURATION */}

                    <div className="grid grid-cols-2 gap-3">

                      {/* DATE */}

                      <div>

                        <label className="block font-bold text-slate-700 mb-1">
                          Date of Rental{' '}
                          <span className="text-red-500">
                            *
                          </span>
                        </label>

                        <input
                          type="date"
                          required
                          min={
                            new Date()
                              .toISOString()
                              .split('T')[0]
                          }
                          value={rentalDate}
                          onChange={(e) =>
                            setRentalDate(
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs"
                        />

                      </div>

                      {/* DURATION */}

                      <div>

                        <label className="block font-bold text-slate-700 mb-1">
                          Duration Slab
                        </label>

                        <select
                          value={selectedDuration}
                          onChange={(e) =>
                            setSelectedDuration(
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs bg-white"
                        >

                          <option value="6h">
                            6 Hours —{' '}
                            {selectedCar.kmLimit6h ??
                              CAR_TERMS.slab6h.kmLimit}{' '}
                            KM Included
                          </option>

                          <option value="12h">
                            12 Hours —{' '}
                            {selectedCar.kmLimit12h ??
                              CAR_TERMS.slab12h.kmLimit}{' '}
                            KM Included
                          </option>

                          <option value="24h">
                            24 Hours —{' '}
                            {selectedCar.kmLimit24h ??
                              CAR_TERMS.slab24h.kmLimit}{' '}
                            KM Included
                          </option>

                        </select>

                      </div>

                    </div>

                    {/* DRIVER OPTION */}

                    {selectedCar.category !==
                      'two-wheeler' && (

                      <div className="rounded-xl bg-amber-50 border border-amber-200 p-3">

                        <div className="flex items-center justify-between gap-3">

                          <div>

                            <p className="text-xs font-bold text-slate-800">
                              Need a Driver?
                            </p>

                            <p className="text-[10px] text-slate-500 mt-0.5">
                              Chauffeur option available on request
                            </p>

                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              setWithDriver(
                                !withDriver
                              )
                            }
                            className={`relative w-11 h-6 rounded-full transition-colors ${
                              withDriver
                                ? 'bg-navy'
                                : 'bg-slate-300'
                            }`}
                            aria-label="Toggle driver"
                          >

                            <span
                              className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                                withDriver
                                  ? 'translate-x-6'
                                  : 'translate-x-1'
                              }`}
                            />

                          </button>

                        </div>

                      </div>
                    )}

                    {/* PICKUP */}

                    <div>

                      <label className="block font-bold text-slate-700 mb-1">
                        Pickup Location
                      </label>

                      <select
                        value={pickupLoc}
                        onChange={(e) =>
                          setPickupLoc(
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs bg-white"
                      >

                        <option value="Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan">
                          Flat 104 Krishna 2C,
                          Omaxe Eternity
                          (Main Office)
                        </option>

                        <option value="Omaxe Krishna Heights, Vrindavan">
                          Omaxe Krishna Heights,
                          Vrindavan
                        </option>

                        <option value="Mathura Junction Railway Station">
                          Mathura Junction
                          Railway Station
                        </option>

                        <option value="Chatikara Road / NH-19">
                          Chatikara Road / NH-19
                          Crossing
                        </option>

                        <option value="Custom Hotel / Ashram Delivery">
                          Custom Hotel / Ashram
                          Delivery in Vrindavan
                        </option>

                      </select>

                    </div>

                    {/* DROP */}

                    <div>

                      <label className="block font-bold text-slate-700 mb-1">
                        Drop Location
                      </label>

                      <select
                        value={dropLoc}
                        onChange={(e) =>
                          setDropLoc(
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs bg-white"
                      >

                        <option value="Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan">
                          Flat 104 Krishna 2C,
                          Omaxe Eternity
                          (Main Office)
                        </option>

                        <option value="Omaxe Krishna Heights, Vrindavan">
                          Omaxe Krishna Heights,
                          Vrindavan
                        </option>

                        <option value="Mathura Junction Railway Station">
                          Mathura Junction
                          Railway Station
                        </option>

                        <option value="Chatikara Road / NH-19">
                          Chatikara Road / NH-19
                          Crossing
                        </option>

                        <option value="Custom Hotel / Ashram Delivery">
                          Custom Hotel / Ashram
                          Delivery in Vrindavan
                        </option>

                      </select>

                    </div>

                    {/* NOTES */}

                    <div>

                      <label className="block font-bold text-slate-700 mb-1">
                        Special Notes / Requests
                        (Optional)
                      </label>

                      <textarea
                        rows="2"
                        placeholder="e.g. Outstation visit to Agra, arrival time, child seat, etc."
                        value={notes}
                        onChange={(e) =>
                          setNotes(
                            e.target.value
                          )
                        }
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs resize-none"
                      />

                    </div>

                    {/* BOOKING SUMMARY */}

                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-1.5 text-xs">

                      {/* RENTAL TYPE */}

                      <div className="flex justify-between items-center">

                        <span className="text-slate-500">
                          Rental Type
                        </span>

                        <span className="font-bold text-navy">
                          {withDriver ? 'With Chauffeur' : 'Self-Drive'}
                        </span>

                      </div>

                      {/* DISTANCE */}

                      <div className="flex justify-between items-center">

                        <span className="text-slate-500">
                          Included Distance
                        </span>

                        <span className="font-bold text-emerald-700">
                          {getCarKmLimit(
                            selectedCar,
                            selectedDuration
                          )}{' '}
                          KM
                        </span>

                      </div>

                      {/* HANDOVER */}

                      <div className="flex justify-between items-center">

                        <span className="text-slate-500">
                          Handover Location
                        </span>

                        <span className="font-bold text-slate-700">
                          Omaxe Eternity
                        </span>

                      </div>

                    </div>

                    {/* SUBMIT */}

                    <button
                      type="submit"
                      className="w-full mt-2 bg-navy hover:bg-[#131f40] text-gold font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer border border-gold/30 flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={15} />

                      Confirm Booking on WhatsApp
                    </button>

                  </form>

                </div>
              )}

            </div>
          </div>
        )}

      </AnimatePresence>

    </div>
  )
}

