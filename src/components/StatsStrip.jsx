import React from 'react'
import { motion } from 'framer-motion'
import stats from '../data/stats.js'

export default function StatsStrip() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-16 pt-12 sm:pt-16 pb-16 sm:pb-16 overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center pt-4 sm:pt-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="group p-2.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-slate-50/90 hover:-translate-y-1 hover:shadow-sm"
          >
            <p className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-navy group-hover:text-gold transition-colors duration-300">
              {stat.value}
            </p>
            <p className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wider uppercase mt-1 sm:mt-2 font-sans">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

