import React from 'react'
import { motion } from 'framer-motion'
import { VrindavanTempleArt } from './common/PageTextures'

const values = [
  {
    id: 'local-trust',
    title: 'Local Knowledge, Real Guidance',
    text: 'We know Vrindavan and the surrounding Braj region closely, so our recommendations are practical, local, and focused on what actually works for visitors and residents.',
  },
  {
    id: 'one-roof',
    title: 'Many Needs, One Trusted Partner',
    text: 'From travel planning and local transport to property requirements, VRV Group brings complementary services together so customers can deal with one dependable team.',
  },
  {
    id: 'simple-service',
    title: 'Simple, Transparent Service',
    text: 'Our approach is straightforward: understand the requirement first, explain the available options clearly, and help the customer make an informed decision.',
  },
  {
    id: 'long-term',
    title: 'Built for Long-Term Relationships',
    text: 'We aim to earn repeat business and referrals through responsive service, responsible guidance, and a customer-first mindset rather than one-time transactions.',
  },
]

export default function ValueCards() {
  return (
    <section className="section-bg px-5 sm:px-6 md:px-16 py-16 md:py-24 border-b border-slate-200 overflow-hidden relative">
      {/* Background Texture: Top-Right open space framing the section header */}
      <div className="absolute top-2 right-0 w-[420px] sm:w-[480px] md:w-[540px] pointer-events-none -z-0 select-none opacity-45">
        <VrindavanTempleArt className="w-full h-auto" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-12"
        >
          <p className="eyebrow mb-3">What we stand for</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-3">
            A service mindset built around trust
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            A few principles that guide how we approach travel, mobility and property services.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((card, idx) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
              className="group relative bg-white border border-slate-200/80 rounded-2xl p-7 min-h-[240px] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gold/40 cursor-default"
            >
              {/* Expanding Accent Bar on Hover */}
              <div className="h-1.5 w-10 bg-gold rounded-full mb-6 transition-all duration-500 ease-out group-hover:w-20 group-hover:bg-[#a98318]" />
              <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {card.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}



