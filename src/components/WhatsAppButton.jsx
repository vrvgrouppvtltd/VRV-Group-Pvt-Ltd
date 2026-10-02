import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton({ phone = '918950513077' }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center">
      {/* Floating Animated Tooltip with AnimatePresence */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2 bg-[#0d1730] text-white text-xs font-bold py-2 px-3.5 rounded-xl shadow-2xl mr-3 border border-gold/30 pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Need help? Chat with VRV Group</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing Outer Ping Ring + Floating Button */}
      <div className="relative">
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        
        <motion.a
          href={`https://wa.me/${phone}?text=Hello%20VRV%20Group%2C%20I%20want%20to%20inquire%20about%20your%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          whileHover={{ scale: 1.12, rotate: 4 }}
          whileTap={{ scale: 0.92 }}
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-2xl transition-shadow duration-300 hover:shadow-emerald-500/50 cursor-pointer"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-sm" />
        </motion.a>
      </div>
    </div>
  )
}
