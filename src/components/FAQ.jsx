import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ChevronDown,
  MapPin,
  Map,
  MessageCircle,
} from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'What services does VRV Group provide?',
    answer:
      'VRV Group brings Tours & Travel, Car Rental and Real Estate services together under one roof, with a focus on customers looking for reliable local support in and around Vrindavan and Mathura.',
  },
  {
    id: 2,
    question: 'Can I plan a Vrindavan or Braj trip with VRV Group?',
    answer:
      'Yes. Our Tours & Travel service is designed for local sightseeing, pilgrimage and family travel. You can discuss your dates, group size and requirements with the team to build a suitable plan.',
  },
  {
    id: 4,
    question: 'Does VRV Group help with property requirements?',
    answer:
      'Yes. Our Real Estate service supports residential and commercial property and plot requirements. Property details, availability and verification should be confirmed for each individual listing.',
  },
  {
    id: 5,
    question: 'Why should I choose a local service provider?',
    answer:
      'A local team can provide practical knowledge of the area, routes, neighbourhoods and customer requirements. Our goal is to combine that local understanding with clear communication and dependable service.',
  },
  {
    id: 6,
    question: 'How can I enquire about a service?',
    answer:
      'Use the Contact Us page from the navigation or footer. You can share what you need, your preferred dates or location, and any other relevant details so the team can respond with the appropriate options.',
  },
]

// Authentic Architectural Line-Art of Vrindavan Sacred Temples (Prem Mandir & Banke Bihari skyline)
function VrindavanSkylineArt({ className = '' }) {
  return (
    <svg
      viewBox="0 0 540 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="#93B1D5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        {/* Soft sacred Kadamba trees & groves */}
        <circle cx="36" cy="252" r="18" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />
        <circle cx="72" cy="254" r="14" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />
        <circle cx="112" cy="256" r="12" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />

        {/* Small Left Shikhara Shrine */}
        <path d="M 52 165 L 52 150 L 68 157 L 52 164 Z" fill="#93B1D5" fillOpacity="0.2" />
        <circle cx="52" cy="168" r="2.5" />
        <ellipse cx="52" cy="174" rx="5" ry="2.5" />
        <path d="M 52 176 C 46 195, 41 218, 36 242 L 68 242 C 63 218, 58 195, 52 176 Z" />
        <path d="M 44 200 C 52 203, 52 203, 60 200" />
        <path d="M 40 222 C 52 226, 52 226, 64 222" />
        <rect x="33" y="242" width="38" height="42" />
        <path d="M 43 284 V 262 C 43 255, 61 255, 61 262 V 284" />

        {/* Grand Central Shikhara (Temple Spire) */}
        {/* Fluttering Temple Flag & Sacred Kalash */}
        <path d="M 124 54 L 124 28 L 152 40 L 124 50 Z" fill="#93B1D5" fillOpacity="0.25" strokeWidth="1.4" />
        <circle cx="124" cy="58" r="3.5" />
        <ellipse cx="124" cy="67" rx="8.5" ry="3.5" />
        <ellipse cx="124" cy="73" rx="10.5" ry="4" />

        {/* Tiered Nagara-Style Shikhara Curves */}
        <path
          d="M 124 77 
             C 114 108, 102 152, 92 208 
             L 156 208 
             C 146 152, 134 108, 124 77 Z"
          strokeWidth="1.6"
          fill="#FFFFFF"
          fillOpacity="0.3"
        />

        {/* Bhumi / Tier Ridges */}
        <path d="M 116 102 C 124 105, 124 105, 132 102" />
        <path d="M 111 122 C 124 126, 124 126, 137 122" />
        <path d="M 106 145 C 124 151, 124 151, 142 145" strokeWidth="1.4" />
        <path d="M 100 171 C 124 178, 124 178, 148 171" strokeWidth="1.4" />
        <path d="M 96 193 C 124 200, 124 200, 152 193" strokeWidth="1.4" />

        {/* Miniature Urushringa Spire Frontal Arch */}
        <path d="M 113 162 C 119 150, 129 150, 135 162 L 135 208 L 113 208 Z" strokeDasharray="3 2" />

        {/* Garbhagriha / Sanctum Body Base */}
        <rect x="86" y="208" width="76" height="76" strokeWidth="1.6" fill="#FFFFFF" fillOpacity="0.2" />
        <path d="M 86 220 H 162" />
        <path d="M 86 232 H 162" />
        {/* Main Sacred Portal / Doorway Arch */}
        <path d="M 111 284 V 246 C 111 234, 137 234, 137 246 V 284" strokeWidth="1.5" />
        <path d="M 116 284 V 250 C 116 240, 132 240, 132 250 V 284" strokeWidth="1" />

        {/* Right Subsidiary Temple Spire */}
        <path d="M 188 148 L 188 134 L 204 140 L 188 147 Z" fill="#93B1D5" fillOpacity="0.2" />
        <circle cx="188" cy="152" r="2.8" />
        <ellipse cx="188" cy="158" rx="6" ry="2.6" />
        <path d="M 188 160 C 182 181, 177 208, 171 232 L 205 232 C 199 208, 194 181, 188 160 Z" />
        <path d="M 179 191 C 188 194, 188 194, 197 191" />
        <path d="M 175 214 C 188 218, 188 218, 201 214" />
        <rect x="167" y="232" width="44" height="52" />
        <path d="M 178 284 V 256 C 178 248, 200 248, 200 256 V 284" />

        {/* Far Right Rajasthani Chhatri (Ornamental Pillared Pavilion) */}
        <circle cx="248" cy="192" r="2.5" />
        <path d="M 230 212 C 230 194, 266 194, 266 212 Z" fill="#93B1D5" fillOpacity="0.1" strokeWidth="1.4" />
        <path d="M 228 212 H 268" />
        <line x1="233" y1="212" x2="233" y2="284" />
        <line x1="243" y1="212" x2="243" y2="284" />
        <line x1="253" y1="212" x2="253" y2="284" />
        <line x1="263" y1="212" x2="263" y2="284" />
        <path d="M 233 226 C 238 221, 258 221, 263 226" />

        {/* Far Left Entry Pavilion Arch */}
        <path d="M 8 252 H 34 V 284 H 8 Z" />
        <path d="M 15 284 V 264 C 15 258, 27 258, 27 264 V 284" />

        {/* Temple Base Platform (Adhisthana / Jagati Stairs) */}
        <rect x="4" y="284" width="280" height="9" strokeWidth="1.5" />
        <line x1="0" y1="293" x2="310" y2="293" strokeWidth="1.6" />
        <line x1="0" y1="299" x2="330" y2="299" strokeWidth="1.3" />
        <line x1="0" y1="305" x2="355" y2="305" strokeWidth="1" opacity="0.6" />
      </g>
    </svg>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="relative bg-white py-14 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-100">

      {/* ================= BACKGROUND AESTHETICS & GLOW BLOBS ================= */}
      {/* Top Left Organic Sky Blob */}
      <div
        className="absolute -top-16 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(235, 243, 254, 0.85) 0%, rgba(243, 248, 255, 0.4) 65%, transparent 100%)',
        }}
      />

      {/* Right Side Organic Sky Pebble Glow */}
      <div
        className="absolute top-1/4 -right-20 w-[540px] h-[540px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(235, 243, 254, 0.9) 0%, rgba(243, 248, 255, 0.5) 60%, transparent 100%)',
        }}
      />

      {/* Bottom Left Temple Watermark with Ambient Glow */}
      <div className="absolute bottom-0 left-0 w-[280px] sm:w-[440px] md:w-[480px] lg:w-[520px] pointer-events-none -z-0 select-none opacity-65">
        <VrindavanSkylineArt className="w-full h-auto" />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-14 relative"
        >
          {/* Eyebrow */}
          <p className="text-[#C9A227] font-bold text-xs sm:text-[13px] tracking-[0.22em] uppercase mb-2 sm:mb-2.5 select-none">
            FREQUENTLY ASKED QUESTIONS
          </p>

          {/* Display Heading - Golden as requested */}
          <h2
            className="heading-luxury-serif font-display text-2xl sm:text-4xl lg:text-[46px] font-bold tracking-tight leading-[1.18] mb-2 sm:mb-3"
            style={{ color: '#C9A227' }}
          >
            Questions you may have
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-normal">
            A quick overview of the questions customers commonly ask before choosing a service.
          </p>
        </motion.div>

        {/* ================= 3-COLUMN MAIN LAYOUT ================= */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-8 xl:gap-14">

          {/* ----------------- LEFT WING: PIN TRAIL & FLOATING CARD ----------------- */}
          <div className="hidden lg:flex flex-col items-center justify-between w-64 xl:w-72 pt-4 shrink-0 relative self-stretch">

            {/* Top Curved Dashed Line with GPS Pin */}
            <div className="relative w-full h-36">
              <svg
                className="absolute top-0 left-6 w-44 h-36 pointer-events-none"
                viewBox="0 0 160 130"
                fill="none"
              >
                <path
                  d="M 140 10 C 70 35, 30 70, 50 125"
                  stroke="#BACDE5"
                  strokeWidth="1.8"
                  strokeDasharray="5 5"
                />
              </svg>

              {/* Pin marker icon at curve top */}
              <div className="absolute top-0 left-32 w-10 h-10 rounded-full bg-white shadow-[0_4px_16px_rgba(27,42,85,0.08)] border border-blue-100 flex items-center justify-center text-[#2F5496] hover:scale-105 transition-transform">
                <MapPin size={17} className="text-[#2F5496]" />
              </div>
            </div>

            {/* Floating "Still have a question?" White Card */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="my-auto relative z-10 w-full pl-2"
            >
              <Link
                to="/contact"
                className="group flex items-center gap-3.5 bg-white/95 backdrop-blur-md px-4 py-4 rounded-2xl shadow-[0_12px_36px_rgba(27,42,85,0.08),0_2px_8px_rgba(27,42,85,0.04)] border border-slate-100 hover:border-[#C9A227]/50 hover:shadow-xl transition-all duration-300 block text-left"
              >
                <div className="w-11 h-11 rounded-full bg-[#EBF3FE] text-[#2F5496] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                  <MessageCircle size={21} className="text-[#2F5496]" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#14224A] group-hover:text-[#C9A227] transition-colors leading-snug">
                    Still have a question?
                  </h4>
                  <p className="text-[12px] text-slate-400 leading-tight mt-0.5">
                    We&apos;re here to help.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Spacer for bottom balance above temple skyline */}
            <div className="h-32" />
          </div>

          {/* ----------------- CENTER FAQ ACCORDION COLUMN ----------------- */}
          <div className="w-full max-w-[740px] space-y-3.5 sm:space-y-4 relative z-10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
                      ? 'border-2 border-[#C9A227] shadow-lg shadow-[#C9A227]/15 bg-[#FEF6D8]'
                      : 'border border-slate-200/80 bg-white hover:bg-[#FFF9E6] hover:border-[#C9A227]/70 shadow-[0_2px_8px_rgba(27,42,85,0.03)] hover:shadow-md'
                    }`}
                  style={isOpen ? { borderColor: '#C9A227' } : {}}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-3 sm:gap-4 text-left px-4 sm:px-6 py-3.5 sm:py-5 cursor-pointer select-none group"
                  >
                    {/* Question Text */}
                    <span className={`font-bold text-[13.5px] sm:text-[16px] leading-snug flex-1 pr-1 sm:pr-2 transition-colors ${isOpen ? 'text-[#8A6A12]' : 'text-[#16254C] group-hover:text-[#8A6A12]'
                      }`}>
                      {faq.question}
                    </span>

                    {/* Right Circular Chevron Button */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-xs ${isOpen
                          ? 'bg-[#C9A227] text-white'
                          : 'bg-[#F2F6FC] text-[#2F5496] group-hover:bg-[#C9A227]/20 group-hover:text-[#8A6A12]'
                        }`}
                    >
                      <ChevronDown size={17} className="stroke-[2.2]" />
                    </motion.div>
                  </button>

                  {/* ================= EXPANDABLE ANSWER WITH ANIMATE PRESENCE ================= */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        {/* Thin Divider & Answer Text */}
                        <div className="border-t border-[#C9A227]/25 px-4 sm:px-6 pb-4 sm:pb-5 pt-3 text-[12.5px] sm:text-[14.5px] text-[#4A3B10] leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}

            {/* Mobile / Tablet Friendly "Still have a question?" card */}
            <div className="block lg:hidden pt-4">
              <Link
                to="/contact"
                className="flex items-center justify-between bg-white px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl shadow-sm border border-slate-100 hover:border-[#C9A227]/40 transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EBF3FE] text-[#2F5496] flex items-center justify-center shrink-0">
                    <MessageCircle size={19} className="text-[#2F5496]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#14224A]">Still have a question?</h4>
                    <p className="text-xs text-slate-400">We&apos;re here to help.</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#C9A227] hover:underline">
                  Contact Us &rarr;
                </span>
              </Link>
            </div>
          </div>

          {/* ----------------- RIGHT WING: ORGANIC BLOB, MAP ICON & CARD ----------------- */}
          <div className="hidden lg:flex flex-col items-center justify-center w-64 xl:w-72 pt-4 shrink-0 relative self-stretch">

            {/* Organic soft blue shape backdrop container */}
            <div className="relative w-full py-6 flex flex-col items-center">

              {/* Organic Soft Blue Backdrop Shape */}
              <div
                className="absolute inset-0 bg-[#EEF5FC]/90 rounded-[48%_52%_68%_32%/38%_44%_56%_62%] -z-10 shadow-sm transform scale-110"
                style={{
                  boxShadow: 'inset 0 0 40px rgba(219, 234, 254, 0.4)',
                }}
              />

              {/* Folded Map Icon */}
              <div className="mb-4 text-[#14224A] hover:scale-105 transition-transform">
                <Map size={36} className="stroke-[1.75]" />
              </div>

              {/* Floating White Card */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white rounded-2xl shadow-[0_12px_36px_rgba(27,42,85,0.08),0_2px_8px_rgba(27,42,85,0.04)] border border-slate-100 p-5 w-52 text-left"
              >
                <p className="text-[14.5px] font-bold text-[#14224A] leading-tight">Explore.</p>
                <p className="text-[14.5px] font-bold text-[#14224A] leading-tight mt-1">Plan.</p>
                <p className="text-[14.5px] font-bold text-[#14224A] leading-tight mt-1">
                  Travel with Confidence.
                </p>
                <div className="w-8 h-[3px] bg-[#C9A227] rounded-full mt-3.5" />
              </motion.div>

              {/* Bottom Dashed Trail curving down to Map Pin */}
              <div className="relative w-full h-28 mt-2">
                <svg
                  className="absolute top-0 right-2 w-36 h-28 pointer-events-none"
                  viewBox="0 0 130 100"
                  fill="none"
                >
                  <path
                    d="M 20 5 C 50 30, 85 55, 100 85"
                    stroke="#BACDE5"
                    strokeWidth="1.8"
                    strokeDasharray="5 5"
                  />
                </svg>

                {/* Pin marker icon at curve end */}
                <div className="absolute bottom-0 right-2 w-9 h-9 rounded-full bg-white shadow-[0_4px_16px_rgba(27,42,85,0.08)] border border-blue-100 flex items-center justify-center text-[#2F5496] hover:scale-105 transition-transform">
                  <MapPin size={16} className="text-[#2F5496]" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

