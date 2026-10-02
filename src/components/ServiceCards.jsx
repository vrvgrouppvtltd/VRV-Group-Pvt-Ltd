import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Compass, Building2, Car } from 'lucide-react'
import services from '../data/services.js'

const iconMap = {
  'tours-travel': Compass,
  'real-estate': Building2,
  'car-rental': Car,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function ServiceCards() {
  return (
    <section id="services" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#fbfbfe] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header with In-View Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <span className="eyebrow inline-block mb-2 font-bold text-xs uppercase tracking-widest text-gold">
            What We Deliver
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight mb-3 sm:mb-4">
            Curated Services Built Around Trust
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-sans max-w-xl mx-auto">
            Whether visiting for sacred darshan, investing in prime land, or navigating the city in comfort, our dedicated teams are with you at every step.
          </p>
        </motion.div>

        {/* 3 Service Cards Grid with Staggered In-View Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const IconComp = iconMap[service.id] || Compass

            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-slate-200/80 bg-white min-h-[360px] sm:min-h-[380px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2.5 hover:shadow-2xl hover:border-gold/50"
              >
                {/* Top Image Banner */}
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md group-hover:border-gold/40 border border-transparent transition">
                    <IconComp size={16} className="text-gold" />
                    <span className="text-[11px] font-bold text-navy">{service.tagline}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-navy mb-2 sm:mb-2.5 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4 sm:mb-6 font-sans">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to={service.href}
                    className="inline-flex items-center justify-between w-full bg-slate-50 hover:bg-gold hover:text-white text-navy text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200/80 transition-all duration-300 group-hover:border-gold group-hover:shadow-md cursor-pointer"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
