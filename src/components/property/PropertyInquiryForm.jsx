import React, { useState } from 'react'
import { MessageCircle, CheckCircle2, Calendar, MapPin, Phone, User } from 'lucide-react'
import { SITE_CONFIG } from '../../constants/siteConfig'

export default function PropertyInquiryForm({ propertyTitle, propertyLocation, propertyId }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [visitDate, setVisitDate] = useState('')
  const [notes, setNotes] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const cleanPhone = phone.replace(/\D/g, '')
    if (!name.trim()) {
      setError('Please enter your full name.')
      return
    }
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }

    const propText = propertyTitle 
      ? `Property #${propertyId || ''}: ${propertyTitle} (${propertyLocation || 'Vrindavan'})`
      : 'General Real Estate Inquiry / Site Visit Request'

    const msg = `*REAL ESTATE SITE VISIT / INQUIRY*
━━━━━━━━━━━━━━━━━━━━━
*Interest:* ${propText}
*Name:* ${name.trim()}
*Mobile:* ${phone.trim()}
*Preferred Visit Date:* ${visitDate || 'Flexible / As soon as possible'}
*Notes:* ${notes.trim() || 'Please share detailed brochure and price break-up'}`

    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-gold bg-navy px-2.5 py-1 rounded">
          Site Visit &amp; Property Info
        </span>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-navy mt-2">
          {propertyTitle ? `Inquire About ${propertyTitle}` : 'Schedule a Free Site Visit'}
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Direct assistance from our local property advisors in Vrindavan–Mathura.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-6">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 size={24} />
          </div>
          <h4 className="font-display text-lg font-bold text-navy">Inquiry Prepared!</h4>
          <p className="text-xs text-slate-600 mt-1">WhatsApp chat opened to coordinate your site visit.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-4 py-2 bg-navy text-gold text-xs font-bold rounded-xl"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  required
                  placeholder="e.g. Amit Verma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Mobile / WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Preferred Site Visit Date
              </label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Specific Location / Budget
              </label>
              <input
                type="text"
                placeholder="e.g. Near ISKCON / Under 50 Lakhs"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-navy hover:bg-[#131f40] text-gold font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer border border-gold/30 flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} />
            <span>Request Site Visit on WhatsApp</span>
          </button>
        </form>
      )}
    </div>
  )
}
