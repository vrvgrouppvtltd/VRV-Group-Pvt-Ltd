import { useState } from 'react'
import { X, CheckCircle2, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '../../../constants/siteConfig'

export default function BookingModal({
  isOpen,
  onClose,
  selectedPackage,
  bookingSubmitted,
  yatriName,
  setYatriName,
  yatriPhone,
  setYatriPhone,
  destination,
  travelDate,
  yatris,
  groupCount,
  onConfirmBooking
}) {
  const [requirements, setRequirements] = useState('')
  const [modalError, setModalError] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setModalError('')

    const cleanPhone = yatriPhone.replace(/\D/g, '')
    if (!yatriName.trim()) {
      setModalError('Please enter your full name.')
      return
    }
    if (cleanPhone.length < 10) {
      setModalError('Please enter a valid 10-digit mobile number.')
      return
    }

    const pilgrimsCount = yatris === 'Group (5+)' && groupCount ? `Group of ${groupCount} Pilgrims` : yatris

    const message = `*NEW YATRA TOUR BOOKING REQUEST*
━━━━━━━━━━━━━━━━━━━━━
*Package:* ${selectedPackage?.package_name || 'Spiritual Yatra'}
*Duration:* ${selectedPackage?.duration || 'Custom'}
*Price:* ₹${selectedPackage?.price_inr?.toLocaleString('en-IN') || 'Custom Quote'}
*Destination Route:* ${destination || 'Vrindavan & Mathura'}
*Date:* ${travelDate || 'Flexible'}
*Pilgrims:* ${pilgrimsCount || '1-2 Yatris'}
*Yatri Name:* ${yatriName.trim()}
*Phone:* ${yatriPhone.trim()}
*Requirements:* ${requirements.trim() || 'None'}`

    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
    if (onConfirmBooking) onConfirmBooking(e)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-soft max-w-md w-full p-6 sm:p-8 relative border border-gold/30 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto my-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-muted hover:text-body p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {bookingSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-display text-2xl font-bold text-body mb-2">
              Yatra Request Received!
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Thank you <span className="font-bold text-body">{yatriName}</span>. We've connected you to our WhatsApp coordination desk to finalize your holy itinerary!
            </p>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest bg-navy px-3 py-1 rounded-full inline-block">
                VRV Group Pvt Ltd
              </span>
              <h3 className="font-display text-2xl font-bold text-body mt-3">
                {selectedPackage?.package_name || 'Plan Your Spiritual Visit'}
              </h3>
              <p className="text-xs text-muted mt-1">
                {selectedPackage?.duration} &bull; ₹{selectedPackage?.price_inr?.toLocaleString('en-IN')}
              </p>
            </div>

            {modalError && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {modalError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div>
                <label className="block text-xs font-bold uppercase text-muted mb-1.5">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  value={yatriName}
                  onChange={(e) => setYatriName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-muted mb-1.5">
                  Mobile / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={yatriPhone}
                  onChange={(e) => setYatriPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-muted mb-1.5">
                  Special Requirements (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Elderly support, wheelchair pickup, hotel preference, etc."
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-navy hover:bg-[#131f40] text-gold font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider shadow-card transition-all active:scale-95 cursor-pointer mt-2 border border-gold/30 flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Confirm &amp; Book on WhatsApp</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
