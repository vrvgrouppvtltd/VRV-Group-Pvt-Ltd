import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Compass,
  Building2,
  Car,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import { SITE_CONFIG } from '../../constants/siteConfig'
import SEOHead from '../../components/common/SEOHead'
import { ConnectivityCoordinatesTexture, ContactCompassArt } from '../../components/common/PageTextures'

export default function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('Tours & Travels (Yatra Packages)')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

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

    const whatsappMsg = `*NEW CONTACT INQUIRY - VRV GROUP*
━━━━━━━━━━━━━━━━━━━━━
*Full Name:* ${name.trim()}
*Phone / WhatsApp:* ${phone.trim()}
*Email:* ${email.trim() || 'Not specified'}
*Service:* ${service}
*Message:* ${message.trim() || 'Please contact me regarding your services'}`

    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative overflow-hidden">
      <SEOHead
        title="Contact VRV Group | Vrindavan & Mathura Office"
        description="Get in touch with VRV Group at Flat 104, Krishna 2C, Omaxe Eternity, Vrindavan. Call +91 89505 13077 or WhatsApp for tours, real estate & self-drive car rentals."
      />

      {/* Hero Banner */}
      <section className="relative bg-[#0a1226] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 rounded-full blur-[140px]" />
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <ConnectivityCoordinatesTexture className="absolute -top-10 -right-10 w-[600px] h-[340px]" opacity={0.10} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} /> Direct Assistance &bull; Vrindavan Office
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            We Are Here to <span className="text-gold">Guide &amp; Assist You</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether planning a sacred pilgrimage, seeking verified property in Braj Dham, or booking a self-drive car, our local team is ready to assist.
          </p>

          {/* Quick Glassmorphic Contact Highlights */}
          <div className="pt-4 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(11, 22, 51, 0.30) 100%)',
                backdropFilter: 'blur(14px) saturate(180%)',
                WebkitBackdropFilter: 'blur(14px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                boxShadow: '0 12px 30px -8px rgba(0, 0, 0, 0.45), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35)'
              }}
              className="p-3.5 rounded-2xl flex items-center justify-center gap-2.5 shadow-xl text-white"
            >
              <MapPin size={17} className="text-gold shrink-0" />
              <span className="text-xs font-semibold text-white">104, Krishna 2C, Omaxe Eternity • Vrindavan • Mathura</span>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(11, 22, 51, 0.30) 100%)',
                backdropFilter: 'blur(14px) saturate(180%)',
                WebkitBackdropFilter: 'blur(14px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                boxShadow: '0 12px 30px -8px rgba(0, 0, 0, 0.45), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35)'
              }}
              className="p-3.5 rounded-2xl flex items-center justify-center gap-2.5 shadow-xl text-white"
            >
              <Phone size={17} className="text-gold shrink-0" />
              <span className="text-xs font-semibold text-white">+91 89505 13077</span>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(11, 22, 51, 0.30) 100%)',
                backdropFilter: 'blur(14px) saturate(180%)',
                WebkitBackdropFilter: 'blur(14px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                boxShadow: '0 12px 30px -8px rgba(0, 0, 0, 0.45), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35)'
              }}
              className="p-3.5 rounded-2xl flex items-center justify-center gap-2.5 shadow-xl text-white"
            >
              <Clock size={17} className="text-gold shrink-0" />
              <span className="text-xs font-semibold text-white">24*7 Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
              <h2 className="font-display text-2xl font-bold text-navy mb-6">
                Corporate Office
              </h2>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gold/15 text-gold-dark flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Office Address</h3>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gold/15 text-gold-dark flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Phone Hotlines</h3>
                    <div className="mt-0.5 space-y-0.5">
                      <a href={`tel:${SITE_CONFIG.phone1}`} className="block text-slate-700 hover:text-gold font-medium">
                        {SITE_CONFIG.phone1Formatted} (Primary)
                      </a>
                      <a href={`tel:${SITE_CONFIG.phone2}`} className="block text-slate-700 hover:text-gold font-medium">
                        {SITE_CONFIG.phone2Formatted} (Support)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gold/15 text-gold-dark flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Email Support</h3>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-700 hover:text-gold font-medium mt-0.5 block">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gold/15 text-gold-dark flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Office Timings</h3>
                    <p className="text-slate-600 mt-0.5">
                      Monday to Sunday: 24*7 Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20VRV%20Group%2C%20I%20would%20like%20to%20connect%20with%20your%20team.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-2xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Quick Verticals Shortcuts */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="/tours"
                className="bg-white rounded-2xl p-4 border border-slate-200 text-center hover:border-gold shadow-xs hover:shadow-md transition"
              >
                <Compass size={20} className="mx-auto text-gold mb-1.5" />
                <div className="font-bold text-navy text-xs">Tours</div>
              </a>
              <a
                href="/real-estate"
                className="bg-white rounded-2xl p-4 border border-slate-200 text-center hover:border-gold shadow-xs hover:shadow-md transition"
              >
                <Building2 size={20} className="mx-auto text-gold mb-1.5" />
                <div className="font-bold text-navy text-xs">Real Estate</div>
              </a>
              <a
                href="/car-rental"
                className="bg-white rounded-2xl p-4 border border-slate-200 text-center hover:border-gold shadow-xs hover:shadow-md transition"
              >
                <Car size={20} className="mx-auto text-gold mb-1.5" />
                <div className="font-bold text-navy text-xs">Car Rental</div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
              <div className="mb-6">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-gold bg-navy px-2.5 py-1 rounded">
                  Inquiry Desk
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mt-2">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below and our team will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy">Message Prepared!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    We've prepared your inquiry and forwarded it directly to our WhatsApp helpdesk for instant response.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-navy text-gold text-xs font-bold rounded-xl shadow-md"
                  >
                    Send Another Message
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
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Service of Interest
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs bg-white"
                      >
                        <option value="Tours & Travels (Yatra Packages)">Tours &amp; Travels (Yatra Packages)</option>
                        <option value="Real Estate (Plots / Villas / Flats)">Real Estate (Plots / Villas / Flats)</option>
                        <option value="Self-Drive Car Rental (12h / 24h)">Self-Drive Car Rental (12h / 24h)</option>
                        <option value="Honda Activa Rental">Honda Activa Rental</option>
                        <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Your Message / Specific Requirements
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Please tell us about your dates, property requirements, or vehicle preferences..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-navy hover:bg-[#131f40] text-gold font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer border border-gold/30 flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>Send Message to Helpdesk</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ambient Glow Halo */}
      <div
        className="absolute -bottom-24 -left-24 w-[440px] h-[440px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(238, 245, 252, 0.85) 0%, transparent 70%)',
        }}
      />

      {/* Bottom-Left Contact Compass & Office Landmark Line-Art Watermark (FAQ Sister Style) */}
      <div className="absolute bottom-0 left-0 w-[340px] sm:w-[420px] md:w-[480px] pointer-events-none select-none opacity-65">
        <ContactCompassArt className="w-full h-auto" />
      </div>
    </div>
  )
}
