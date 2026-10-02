
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  Phone,
  MapPin,
  Sparkles,
} from 'lucide-react'

import BookingModal from '../../components/Tours/Home/BookingModal'
import ItinerarySection from '../../components/Tours/Home/ItinerarySection'
import tourPackageData from '../../data/tourPackageData.app.json'
import { BrajYatraRouteTexture } from '../../components/common/PageTextures'

export default function PackageDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Find selected package
  const pkg = tourPackageData.find((item) => item.id === id)

  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [bookingSubmitted, setBookingSubmitted] = useState(false)

  const [yatriName, setYatriName] = useState('')
  const [yatriPhone, setYatriPhone] = useState('')

  // Scroll to top whenever package changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // Booking confirmation
  const handleConfirmBooking = (e) => {
    e.preventDefault()

    setBookingSubmitted(true)

    setTimeout(() => {
      setBookingSubmitted(false)
      setBookingModalOpen(false)
    }, 2500)
  }

  // Safety check
  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-red-50 flex items-center justify-center">
            <MapPin className="w-8 h-8 text-red-500" />
          </div>

          <h2 className="text-2xl font-bold text-[#13264f]">
            Package Not Found
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            The package you are looking for does not exist or the link is
            incorrect.
          </p>

          <button
            onClick={() => navigate('/')}
            className="mt-5 px-6 py-3 bg-[#13264f] text-[#F7D070] rounded-xl font-bold text-sm hover:bg-[#1a2b54] transition-all"
          >
            Go Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f9fe] text-slate-700 font-sans">

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0f1d3a] text-white overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={pkg.image}
            alt={pkg.package_name}
            className="w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-[#0f1d3a]/75" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1d3a] via-[#0f1d3a]/70 to-[#0f1d3a]/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto pt-6">

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-[#F7D070] transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Packages</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* ===================================================== */}
            {/* LEFT HERO CONTENT */}
            {/* ===================================================== */}

            <div className="lg:col-span-8">

              {/* Duration Badge */}
              <div className="inline-flex items-center gap-2 bg-[#F7D070] text-[#13264f] text-xs font-extrabold px-3.5 py-1.5 rounded-full mb-4 shadow-lg">
                <Clock className="w-3.5 h-3.5" />
                <span>{pkg.duration}</span>
              </div>

              {/* Package Name */}
              <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4 min-h-[64px] sm:min-h-[96px] flex items-center">
                {pkg.package_name}
              </h1>

              {/* Tagline */}
              <p className="text-slate-200/90 text-sm sm:text-base max-w-2xl leading-relaxed mb-6">
                {pkg.tagline}
              </p>

              {/* Info Badges */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">

                {/* Location */}
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#F7D070]" />

                  <span>
                    Vrindavan, Mathura &amp; Braj
                  </span>
                </span>

                {/* Guided Yatra */}
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#F7D070]" />

                  <span>
                    Guided Yatra
                  </span>
                </span>

                {/* Package Badge */}
                {pkg.badge && (
                  <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5 text-[#F7D070]" />

                    <span>
                      {pkg.badge}
                    </span>
                  </span>
                )}

              </div>
            </div>

            {/* ===================================================== */}
            {/* PRICE CARD */}
            {/* ===================================================== */}

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/20 text-center shadow-2xl">

              <span className="text-xs text-slate-300 uppercase font-bold tracking-wider block">
                Total Package Price
              </span>

              <div className="text-3xl sm:text-4xl font-extrabold text-[#F7D070] font-display my-2">
                ₹{pkg.price_inr?.toLocaleString('en-IN')}
              </div>

              <span className="text-xs text-slate-300 block mb-6">
                Per package
              </span>

              <button
                onClick={() => setBookingModalOpen(true)}
                className="w-full bg-[#F7D070] hover:bg-[#ebd05d] text-[#13264f] font-bold py-3.5 px-6 rounded-xl text-sm uppercase tracking-wider shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                Book This Yatra Now
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INCLUSIONS */}
      {/* ========================================================= */}

      <section className="py-8 bg-white border-b border-slate-200">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Package Inclusions &amp; Privileges
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {pkg.includes?.map((inc, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60"
              >
                <CheckCircle2 className="w-5 h-5 text-[#a8821f] shrink-0" />

                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  {inc}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ITINERARY */}
      {/* ========================================================= */}

      <ItinerarySection
        itinerary={pkg.itinerary || []}
        title="The Journey Ahead"
        subtitle={`A glimpse into your ${pkg.duration.toLowerCase()} spiritual pilgrimage.`}
      />

      {/* ========================================================= */}
      {/* BOTTOM CTA */}
      {/* ========================================================= */}

      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fd]">
        <div className="relative overflow-hidden max-w-4xl mx-auto text-center bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          {/* Sacred Yatra Route Watermark */}
          <BrajYatraRouteTexture className="absolute -top-10 -right-10 w-80 h-44 pointer-events-none select-none" opacity={0.15} />

          <div className="relative z-10">
            <h4 className="font-display text-2xl font-bold text-[#13264f] mb-2">
            Ready to embark on this spiritual journey?
          </h4>

          <p className="text-slate-500 text-xs sm:text-sm mb-6 max-w-md mx-auto">
            Our travel specialists will manage your entire itinerary,
            darshan slots, transportation and accommodation seamlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Book Button */}
            <button
              onClick={() => setBookingModalOpen(true)}
              className="bg-[#F7D070] hover:bg-[#ebd05d] text-[#13264f] font-bold py-3.5 px-8 rounded-xl text-sm uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Book This Package
            </button>

            {/* Call Button */}
            <a
              href="tel:+918950513077"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#13264f] hover:text-[#a8821f] transition-colors py-3.5 px-6"
            >
              <Phone className="w-4 h-4" />

              <span>
                Call Us: +91 89505 13077
              </span>
            </a>

          </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BOOKING MODAL */}
      {/* ========================================================= */}

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedPackage={pkg}
        bookingSubmitted={bookingSubmitted}
        yatriName={yatriName}
        setYatriName={setYatriName}
        yatriPhone={yatriPhone}
        setYatriPhone={setYatriPhone}
        onConfirmBooking={handleConfirmBooking}
      />

    </div>
  )
}




