import React from 'react'

// Reusable Vrindavan Temple Skyline Architectural SVG Watermark
export function VrindavanTempleSkyline({ className = '', strokeColor = '#93B1D5', opacity = 0.55 }) {
  return (
    <svg
      viewBox="0 0 540 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ opacity }}
    >
      <g stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        {/* Soft Sacred Kadamba Trees */}
        <circle cx="36" cy="252" r="18" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />
        <circle cx="72" cy="254" r="14" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />
        <circle cx="112" cy="256" r="12" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />

        {/* Subsidiary Shikhara Shrine */}
        <path d="M 52 165 L 52 150 L 68 157 L 52 164 Z" fill={strokeColor} fillOpacity="0.2" />
        <circle cx="52" cy="168" r="2.5" />
        <ellipse cx="52" cy="174" rx="5" ry="2.5" />
        <path d="M 52 176 C 46 195, 41 218, 36 242 L 68 242 C 63 218, 58 195, 52 176 Z" />
        <path d="M 44 200 C 52 203, 52 203, 60 200" />
        <path d="M 40 222 C 52 226, 52 226, 64 222" />
        <rect x="33" y="242" width="38" height="42" />
        <path d="M 43 284 V 262 C 43 255, 61 255, 61 262 V 284" />

        {/* Grand Central Temple Spire (Banke Bihari / Prem Mandir Shikhara) */}
        <path d="M 124 54 L 124 28 L 152 40 L 124 50 Z" fill={strokeColor} fillOpacity="0.25" strokeWidth="1.4" />
        <circle cx="124" cy="58" r="3.5" />
        <ellipse cx="124" cy="67" rx="8.5" ry="3.5" />
        <ellipse cx="124" cy="73" rx="10.5" ry="4" />

        {/* Nagara Shikhara Body */}
        <path
          d="M 124 77 
             C 114 108, 102 152, 92 208 
             L 156 208 
             C 146 152, 134 108, 124 77 Z"
          strokeWidth="1.6"
          fill="#FFFFFF"
          fillOpacity="0.3"
        />

        {/* Horizontal Bhumi Tiers */}
        <path d="M 116 102 C 124 105, 124 105, 132 102" />
        <path d="M 111 122 C 124 126, 124 126, 137 122" />
        <path d="M 106 145 C 124 151, 124 151, 142 145" strokeWidth="1.4" />
        <path d="M 100 171 C 124 178, 124 178, 148 171" strokeWidth="1.4" />
        <path d="M 96 193 C 124 200, 124 200, 152 193" strokeWidth="1.4" />

        {/* Frontal Mini Arch */}
        <path d="M 113 162 C 119 150, 129 150, 135 162 L 135 208 L 113 208 Z" strokeDasharray="3 2" />

        {/* Garbhagriha / Base Platform */}
        <rect x="86" y="208" width="76" height="76" strokeWidth="1.6" fill="#FFFFFF" fillOpacity="0.2" />
        <path d="M 86 220 H 162" />
        <path d="M 86 232 H 162" />
        {/* Main Sacred Portal */}
        <path d="M 111 284 V 246 C 111 234, 137 234, 137 246 V 284" strokeWidth="1.5" />
        <path d="M 116 284 V 250 C 116 240, 132 240, 132 250 V 284" strokeWidth="1" />

        {/* Right Subsidiary Spire */}
        <path d="M 188 148 L 188 134 L 204 140 L 188 147 Z" fill={strokeColor} fillOpacity="0.2" />
        <circle cx="188" cy="152" r="2.8" />
        <ellipse cx="188" cy="158" rx="6" ry="2.6" />
        <path d="M 188 160 C 182 181, 177 208, 171 232 L 205 232 C 199 208, 194 181, 188 160 Z" />
        <path d="M 179 191 C 188 194, 188 194, 197 191" />
        <path d="M 175 214 C 188 218, 188 218, 201 214" />
        <rect x="167" y="232" width="44" height="52" />
        <path d="M 178 284 V 256 C 178 248, 200 248, 200 256 V 284" />

        {/* Rajasthani Chhatri (Ornamental Pavilion) */}
        <circle cx="248" cy="192" r="2.5" />
        <path d="M 230 212 C 230 194, 266 194, 266 212 Z" fill={strokeColor} fillOpacity="0.1" strokeWidth="1.4" />
        <path d="M 228 212 H 268" />
        <line x1="233" y1="212" x2="233" y2="284" />
        <line x1="243" y1="212" x2="243" y2="284" />
        <line x1="253" y1="212" x2="253" y2="284" />
        <line x1="263" y1="212" x2="263" y2="284" />

        {/* Base Jagati Steps */}
        <rect x="4" y="284" width="280" height="9" strokeWidth="1.5" />
        <line x1="0" y1="293" x2="310" y2="293" strokeWidth="1.6" />
        <line x1="0" y1="299" x2="330" y2="299" strokeWidth="1.3" />
        <line x1="0" y1="305" x2="355" y2="305" strokeWidth="1" opacity="0.6" />
      </g>
    </svg>
  )
}

// Full Atmospheric Background Overlay for any Section
export default function SpiritualTextureBg({
  showTemple = true,
  templePosition = 'bottom-left',
  showTrails = true,
  showGlow = true,
}) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Soft Ambient Radial Sky & Amber Glows */}
      {showGlow && (
        <>
          <div
            className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(238, 245, 252, 0.85) 0%, rgba(248, 250, 252, 0.3) 65%, transparent 100%)',
            }}
          />
          <div
            className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(238, 245, 252, 0.9) 0%, rgba(254, 248, 231, 0.35) 60%, transparent 100%)',
            }}
          />
        </>
      )}

      {/* Dashed Pilgrimage Trail with Floating Pin */}
      {showTrails && (
        <div className="hidden lg:block absolute top-6 left-12 w-48 h-40">
          <svg className="w-full h-full" viewBox="0 0 160 130" fill="none">
            <path
              d="M 140 10 C 70 35, 30 70, 50 125"
              stroke="#BACDE5"
              strokeWidth="1.8"
              strokeDasharray="5 5"
            />
          </svg>
        </div>
      )}

      {/* Temple Silhouette Watermark */}
      {showTemple && (
        <div
          className={`absolute ${
            templePosition === 'bottom-left'
              ? 'bottom-0 left-0 w-[340px] sm:w-[420px] lg:w-[480px]'
              : 'bottom-0 right-0 w-[340px] sm:w-[420px] lg:w-[480px] transform scale-x-[-1]'
          }`}
        >
          <VrindavanTempleSkyline className="w-full h-auto" opacity={0.45} />
        </div>
      )}
    </div>
  )
}
