import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, HeartHandshake } from 'lucide-react'
import testimonials from '../data/testimonials.js'
import { YamunaRiverWaveTexture } from './common/PageTextures'

function Stars({ rating }) {
  return (
    <div className="flex gap-1 mb-3" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={i < rating ? 'text-gold fill-gold' : 'text-slate-300'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const marqueeItems = [...testimonials, ...testimonials]

  return (
    <section className="relative bg-[#FAFCFF] py-20 md:py-28 border-b border-slate-100 overflow-hidden">
      {/* Bespoke Yamuna River Waves & Floating Aarti Lamps Watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(238, 245, 252, 0.7) 0%, rgba(254, 248, 231, 0.3) 60%, transparent 100%)',
          }}
        />
        <YamunaRiverWaveTexture className="absolute bottom-0 left-0 right-0 w-full h-64" opacity={0.14} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 sm:mb-14 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
            <HeartHandshake size={16} className="text-[#C9A227]" />
            <p className="text-[#C9A227] font-bold text-xs sm:text-[13px] tracking-[0.22em] uppercase select-none">
              VOICES FROM BRAJ DHAM
            </p>
          </div>
          <h2 className="heading-luxury-serif font-display text-2xl sm:text-4xl lg:text-[44px] font-bold text-[#14224A] tracking-tight mb-2 sm:mb-3">
            Trusted by Our Community
          </h2>
          <p className="text-xs sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Real stories and heartfelt experiences from families, pilgrims, and investors who chose VRV Group in Vrindavan–Mathura.
          </p>
        </motion.div>
      </div>

      {/* Marquee Track with Left & Right Gradient Shadows */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Overlay */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#FAFCFF] to-transparent z-10" />

        {/* Right Fade Overlay */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#FAFCFF] to-transparent z-10" />

        <div className="animate-marquee gap-6 py-4">
          {marqueeItems.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="w-[280px] xs:w-[320px] sm:w-[380px] shrink-0 group relative bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200/80 transition-all duration-300 hover:shadow-xl hover:border-gold/40 flex flex-col justify-between select-none"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-gold/15 group-hover:text-gold/30 transition-colors pointer-events-none" />

              <div>
                <Stars rating={t.rating} />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-serif italic line-clamp-4">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">

                <div>
                  <p className="font-bold text-xs sm:text-sm text-navy group-hover:text-gold transition-colors">{t.name}</p>
                  <p className="text-[11px] text-slate-400 font-sans">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
