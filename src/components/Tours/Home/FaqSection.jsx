import { useState } from 'react'
import {
  ChevronDown,
  Luggage,
  Users,
  Accessibility,
  ShieldCheck,
  Utensils,
  HelpCircle
} from 'lucide-react'
import faqData from '../../../data/faqData.json'

export default function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState(null) // Inactive by default

  const getFaqIcon = (iconName) => {
    switch (iconName) {
      case 'Luggage':
        return <Luggage className="w-4 h-4 text-gold shrink-0" />
      case 'Users':
        return <Users className="w-4 h-4 text-gold shrink-0" />
      case 'Accessibility':
        return <Accessibility className="w-4 h-4 text-gold shrink-0" />
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
      case 'Utensils':
        return <Utensils className="w-4 h-4 text-gold shrink-0" />
      default:
        return <HelpCircle className="w-4 h-4 text-gold shrink-0" />
    }
  }

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fbfbfe] border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13264f] tracking-tight mb-3">
            Common Inquiries
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-sans">
            Find answers to the most frequently asked questions regarding our spiritual journeys and logistical details.
          </p>
        </div>

        {/* FAQ Accordion 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {faqData.map((faq) => {
            const isOpen = openFaqId === faq.id

            return (
              <div
                key={faq.id}
                onClick={() => toggleFaq(faq.id)}
                className={`bg-white rounded-xl border transition-all duration-300 p-5 shadow-sm hover:shadow-card cursor-pointer ${
                  isOpen ? 'border-gold/60 ring-1 ring-gold/20' : 'border-slate-200/80'
                }`}
              >
                {/* FAQ Header Row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gold/10">
                      {getFaqIcon(faq.icon)}
                    </div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-[#13264f]">
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-gold' : ''
                    }`}
                  />
                </div>

                {/* FAQ Answer Body */}
                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-slate-100 animate-fade-in">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
