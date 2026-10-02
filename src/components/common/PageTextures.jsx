import React from 'react'

/**
 * 1. INSTITUTIONAL TRUST & INTEGRITY TEXTURE
 * Used for: Values ("What We Stand For"), Principles, Governance, Corporate Transparency
 * Design: High-precision architectural surveyor grid, diamond coordinate nodes, clean alignment ticks.
 * ZERO flowers, ZERO clutter. Pure luxury and institutional trust.
 */
export function InstitutionalTrustTexture({ className = '', opacity = 0.25 }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ opacity }}
      >
        <g stroke="#C9A227" strokeWidth="1" strokeLinecap="round">
          {/* Outer Precision Surveyor Ring */}
          <circle cx="300" cy="300" r="260" strokeDasharray="3 6" opacity="0.4" />
          <circle cx="300" cy="300" r="230" stroke="#BACDE5" strokeWidth="0.8" opacity="0.3" />
          <circle cx="300" cy="300" r="160" stroke="#C9A227" strokeWidth="0.9" opacity="0.35" />

          {/* Clean Geometric Crosshair Axes */}
          <line x1="40" y1="300" x2="560" y2="300" stroke="#BACDE5" strokeWidth="0.8" strokeDasharray="6 8" opacity="0.4" />
          <line x1="300" y1="40" x2="300" y2="560" stroke="#BACDE5" strokeWidth="0.8" strokeDasharray="6 8" opacity="0.4" />

          {/* Coordinate Precision Ticks */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180
            const x1 = 300 + 250 * Math.cos(angle)
            const y1 = 300 + 250 * Math.sin(angle)
            const x2 = 300 + (i % 2 === 0 ? 262 : 256) * Math.cos(angle)
            const y2 = 300 + (i % 2 === 0 ? 262 : 256) * Math.sin(angle)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9A227" strokeWidth={i % 2 === 0 ? 1.2 : 0.8} opacity="0.5" />
          })}

          {/* 4 Diamond Governance Nodes */}
          <polygon points="300,135 306,145 300,155 294,145" fill="#FEF6D8" stroke="#C9A227" strokeWidth="1.2" />
          <polygon points="300,445 306,455 300,465 294,455" fill="#FEF6D8" stroke="#C9A227" strokeWidth="1.2" />
          <polygon points="135,300 145,306 155,300 145,294" fill="#FEF6D8" stroke="#C9A227" strokeWidth="1.2" />
          <polygon points="445,300 455,306 465,300 455,294" fill="#FEF6D8" stroke="#C9A227" strokeWidth="1.2" />

          {/* Center Precision Core Reticle */}
          <circle cx="300" cy="300" r="50" stroke="#C9A227" strokeWidth="1.2" />
          <circle cx="300" cy="300" r="28" stroke="#BACDE5" strokeDasharray="2 3" opacity="0.5" />
          <circle cx="300" cy="300" r="5" fill="#C9A227" />

          {/* Elegant 45-degree Architectural Alignment Brackets */}
          <path d="M 220 180 L 180 180 L 180 220" stroke="#C9A227" strokeWidth="1.2" opacity="0.5" />
          <path d="M 380 180 L 420 180 L 420 220" stroke="#C9A227" strokeWidth="1.2" opacity="0.5" />
          <path d="M 180 380 L 180 420 L 220 420" stroke="#C9A227" strokeWidth="1.2" opacity="0.5" />
          <path d="M 420 380 L 420 420 L 380 420" stroke="#C9A227" strokeWidth="1.2" opacity="0.5" />
        </g>
      </svg>
    </div>
  )
}

// Backward compatibility alias so no imports break
export const TrustMandalaTexture = InstitutionalTrustTexture

/**
 * 2. BRAJ YATRA & PILGRIMAGE ROUTE TEXTURE
 * Used for: Tours, Pilgrimage Packages, Sacred Yatra, Parikrama
 * Design: Sacred Braj 84 Kos waypoint path, Vrindavan-Mathura-Govardhan markers, temple shikhara elevation silhouette.
 */
export function BrajYatraRouteTexture({ className = '', opacity = 0.22 }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ opacity }}
      >
        <g stroke="#C9A227" strokeLinecap="round" strokeLinejoin="round">
          {/* Sacred Temple Shikhara Outline in background corner */}
          <g stroke="#BACDE5" strokeWidth="1" opacity="0.35">
            <path d="M 680 400 V 260 L 710 160 L 715 110 L 715 90 L 715 110 L 720 160 L 750 260 V 400" />
            <line x1="715" y1="90" x2="715" y2="70" stroke="#C9A227" strokeWidth="1.5" />
            <circle cx="715" cy="65" r="4" fill="#C9A227" stroke="none" />
            <path d="M 692 260 H 738" stroke="#C9A227" strokeWidth="0.8" />
            <path d="M 698 210 H 732" stroke="#BACDE5" strokeWidth="0.8" />
            <path d="M 704 160 H 726" stroke="#C9A227" strokeWidth="0.8" />
          </g>

          {/* Braj Parikrama Curved Route Path */}
          <path
            d="M 50 320 C 180 340, 240 180, 380 210 C 520 240, 580 120, 720 140"
            stroke="#C9A227"
            strokeWidth="1.8"
            strokeDasharray="6 8"
          />

          {/* Waypoint 1: Vrindavan Dham */}
          <g transform="translate(140, 290)">
            <circle cx="0" cy="0" r="14" fill="#FEF8E7" stroke="#C9A227" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="4" fill="#C9A227" />
            <text x="18" y="4" fill="#14224A" fontSize="10" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.08em">VRINDAVAN DHAM</text>
          </g>

          {/* Waypoint 2: Mathura (Janmabhoomi) */}
          <g transform="translate(360, 205)">
            <circle cx="0" cy="0" r="18" fill="#FEF8E7" stroke="#C9A227" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="6" fill="#C9A227" />
            <text x="-25" y="-24" fill="#C9A227" fontSize="11" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.1em">MATHURA</text>
          </g>

          {/* Waypoint 3: Govardhan */}
          <g transform="translate(560, 190)">
            <circle cx="0" cy="0" r="14" fill="#FEF8E7" stroke="#C9A227" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="4" fill="#C9A227" />
            <text x="18" y="4" fill="#14224A" fontSize="10" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.08em">GOVARDHAN</text>
          </g>

          {/* Waypoint 4: Barsana */}
          <g transform="translate(710, 140)">
            <circle cx="0" cy="0" r="12" fill="#FEF8E7" stroke="#C9A227" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="3.5" fill="#C9A227" />
            <text x="-58" y="-16" fill="#14224A" fontSize="10" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.08em">BARSANA</text>
          </g>

          {/* Compass Rose Header */}
          <g transform="translate(100, 90)">
            <circle cx="0" cy="0" r="28" stroke="#BACDE5" strokeWidth="0.8" strokeDasharray="2 3" />
            <line x1="0" y1="-34" x2="0" y2="34" stroke="#C9A227" strokeWidth="1" />
            <line x1="-34" y1="0" x2="34" y2="0" stroke="#C9A227" strokeWidth="1" />
            <polygon points="0,-34 -4,-22 0,-26 4,-22" fill="#C9A227" />
            <text x="-4" y="-38" fill="#C9A227" fontSize="9" fontWeight="700" fontFamily="sans-serif">N</text>
          </g>
        </g>
      </svg>
    </div>
  )
}

/**
 * 3. MOBILITY & EXPRESSWAY HIGHWAY TEXTURE
 * Used for: Car Rental, Self Drive, Fleet, Airport Transfers
 * Design: Curved expressway lanes leading into the horizon, distance markers, GPS navigation arcs.
 */
export function MobilityExpresswayTexture({ className = '', opacity = 0.22 }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ opacity }}
      >
        <g stroke="#C9A227" strokeLinecap="round">
          {/* Expressway Highway Perspective Curves */}
          <path
            d="M 50 450 C 150 320, 320 250, 600 200 L 780 180"
            stroke="#94A3B8"
            strokeWidth="1.4"
            opacity="0.4"
          />
          <path
            d="M 180 450 C 260 330, 420 260, 680 208 L 820 190"
            stroke="#C9A227"
            strokeWidth="1.8"
            strokeDasharray="12 12"
          />
          <path
            d="M 310 450 C 370 340, 520 270, 760 216 L 860 200"
            stroke="#94A3B8"
            strokeWidth="1.4"
            opacity="0.4"
          />

          {/* Modern Speedometer / Dynamic Arc */}
          <g transform="translate(160, 140)">
            <path
              d="M -90 0 A 90 90 0 0 1 90 0"
              stroke="#BACDE5"
              strokeWidth="1.2"
              strokeDasharray="3 5"
              opacity="0.5"
            />
            <path
              d="M -75 0 A 75 75 0 0 1 45 -60"
              stroke="#C9A227"
              strokeWidth="2"
            />
            <circle cx="0" cy="0" r="6" fill="#C9A227" />
            <line x1="0" y1="0" x2="40" y2="-55" stroke="#C9A227" strokeWidth="1.8" />
            {/* Speed Gauge Ticks */}
            {[-80, -40, 0, 40, 80].map((deg, i) => {
              const rad = (deg * Math.PI) / 180
              const x1 = 82 * Math.sin(rad)
              const y1 = -82 * Math.cos(rad)
              const x2 = 92 * Math.sin(rad)
              const y2 = -92 * Math.cos(rad)
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9A227" strokeWidth="1.2" />
            })}
          </g>

          {/* Highway Route Badge */}
          <g transform="translate(560, 90)">
            <rect x="0" y="0" width="130" height="34" rx="6" fill="#FEF8E7" stroke="#C9A227" strokeWidth="1.2" />
            <circle cx="18" cy="17" r="4" fill="#C9A227" />
            <text x="30" y="21" fill="#14224A" fontSize="10" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.1em">NH-19 / EXPRESSWAY</text>
          </g>

          {/* GPS Pin with Pulse Rings */}
          <g transform="translate(680, 206)">
            <circle cx="0" cy="0" r="16" stroke="#C9A227" strokeWidth="1" opacity="0.4" />
            <circle cx="0" cy="0" r="8" fill="#FEF8E7" stroke="#C9A227" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="3" fill="#C9A227" />
          </g>
        </g>
      </svg>
    </div>
  )
}

/**
 * 4. ARCHITECTURAL CADASTRE & PLOT BLUEPRINT TEXTURE
 * Used for: Real Estate, Verified Plots, Villa Developments, Property Listings
 * Design: Architectural plot boundary grid, dimension arrows, floor-plan angles, elevation outline.
 */
export function ArchitecturalCadastreTexture({ className = '', opacity = 0.22 }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ opacity }}
      >
        <g stroke="#C9A227" strokeLinecap="round" strokeLinejoin="round">
          {/* Architectural Cadastre Grid */}
          <g stroke="#BACDE5" strokeWidth="0.7" opacity="0.35">
            <line x1="100" y1="50" x2="100" y2="400" strokeDasharray="3 3" />
            <line x1="220" y1="50" x2="220" y2="400" strokeDasharray="3 3" />
            <line x1="340" y1="50" x2="340" y2="400" strokeDasharray="3 3" />
            <line x1="460" y1="50" x2="460" y2="400" strokeDasharray="3 3" />
            <line x1="580" y1="50" x2="580" y2="400" strokeDasharray="3 3" />

            <line x1="50" y1="120" x2="750" y2="120" strokeDasharray="3 3" />
            <line x1="50" y1="240" x2="750" y2="240" strokeDasharray="3 3" />
            <line x1="50" y1="360" x2="750" y2="360" strokeDasharray="3 3" />
          </g>

          {/* Highlighted Verified Plot 104 */}
          <g transform="translate(220, 120)">
            <rect x="0" y="0" width="120" height="120" fill="#FEF6D8" fillOpacity="0.35" stroke="#C9A227" strokeWidth="1.6" />
            {/* Dimension Lines */}
            <line x1="-12" y1="0" x2="-12" y2="120" stroke="#C9A227" strokeWidth="1" />
            <polyline points="-16,8 -12,0 -8,8" fill="none" stroke="#C9A227" strokeWidth="1" />
            <polyline points="-16,112 -12,120 -8,112" fill="none" stroke="#C9A227" strokeWidth="1" />
            <text x="-48" y="65" fill="#14224A" fontSize="9" fontWeight="700" fontFamily="sans-serif">60'-0"</text>

            <line x1="0" y1="-12" x2="120" y2="-12" stroke="#C9A227" strokeWidth="1" />
            <polyline points="8,-16 0,-12 8,-8" fill="none" stroke="#C9A227" strokeWidth="1" />
            <polyline points="112,-16 120,-12 112,-8" fill="none" stroke="#C9A227" strokeWidth="1" />
            <text x="45" y="-18" fill="#14224A" fontSize="9" fontWeight="700" fontFamily="sans-serif">50'-0"</text>

            {/* Plot Details Badge */}
            <text x="18" y="55" fill="#C9A227" fontSize="12" fontWeight="700" fontFamily="sans-serif">PLOT #104</text>
            <text x="18" y="74" fill="#64748B" fontSize="9" fontWeight="600" fontFamily="sans-serif">300 SQ. YD.</text>
          </g>

          {/* Corner Blueprint Drafting Angle Reticle */}
          <g transform="translate(620, 100)">
            <path d="M 0 0 L 70 0 L 70 70" stroke="#C9A227" strokeWidth="1.4" fill="none" />
            <line x1="15" y1="15" x2="70" y2="70" stroke="#BACDE5" strokeWidth="0.8" strokeDasharray="3 3" />
            <circle cx="70" cy="70" r="3" fill="#C9A227" />
            <text x="8" y="45" fill="#C9A227" fontSize="9" fontWeight="700" fontFamily="sans-serif">MVDA APPROVED</text>
          </g>
        </g>
      </svg>
    </div>
  )
}

/**
 * 5. HERITAGE BRAJ ARCH TEXTURE
 * Used for: About Us, Heritage Story, Vrindavan Roots
 * Design: Refined Rajasthani/Braj fluted stone arch silhouette and clean spandrel jaali.
 */
export function VrindavanJharokhaTexture({ className = '', opacity = 0.25 }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ opacity }}
      >
        <g stroke="#C9A227" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Outer Frame */}
          <path d="M 70 380 V 180 C 70 90, 250 40, 250 40 C 250 40, 430 90, 430 180 V 380" stroke="#94A3B8" strokeWidth="1.2" />
          <path d="M 85 380 V 185 C 85 105, 250 60, 250 60 C 250 60, 415 105, 415 185 V 380" stroke="#C9A227" strokeDasharray="4 4" />

          {/* Cusped Heritage Arch */}
          <path
            d="M 110 380 V 220 
               C 110 195, 130 185, 145 200 
               C 160 175, 190 170, 205 190 
               C 220 160, 250 150, 250 165 
               C 250 150, 280 160, 295 190 
               C 310 170, 340 175, 355 200 
               C 370 185, 390 195, 390 220 
               V 380"
            stroke="#C9A227"
            strokeWidth="1.6"
            fill="#FEFBF0"
            fillOpacity="0.2"
          />

          {/* Chhatri Kalash Finial */}
          <circle cx="250" cy="28" r="3" fill="#C9A227" />
          <path d="M 250 32 L 250 45" strokeWidth="1.5" />

          {/* Left & Right Fluted Columns */}
          <line x1="95" y1="180" x2="95" y2="380" strokeWidth="1.4" />
          <line x1="405" y1="180" x2="405" y2="380" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  )
}

/**
 * 6. SACRED YAMUNA RIVER WAVES TEXTURE
 * Used for: Testimonials, Customer Feedback, Braj Community Voices
 * Design: Flowing Yamuna water waves with soft evening Aarti diyas.
 */
export function YamunaRiverWaveTexture({ className = '', opacity = 0.28 }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 700 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ opacity }}
      >
        <g stroke="#93B1D5" strokeLinecap="round" strokeLinejoin="round">
          {/* Gentle flowing Yamuna river waves */}
          <path d="M 0 110 C 120 70, 240 150, 370 110 C 500 70, 600 140, 700 100" strokeWidth="1.2" />
          <path d="M 0 150 C 130 110, 260 180, 400 140 C 520 100, 620 170, 700 130" stroke="#C9A227" strokeWidth="1.2" opacity="0.6" />
          <path d="M 0 190 C 140 160, 270 220, 420 180 C 540 150, 630 210, 700 170" strokeWidth="1.2" strokeDasharray="5 6" />
          <path d="M 0 240 C 120 210, 270 270, 440 230 C 560 190, 640 250, 700 210" stroke="#93B1D5" strokeWidth="1.4" />

          {/* Floating Aarti Diya 1 */}
          <g transform="translate(190, 95)">
            <ellipse cx="16" cy="14" rx="12" ry="4" fill="#FEF8E7" stroke="#C9A227" strokeWidth="1.1" />
            <path d="M 16 10 Q 18 3, 16 0 Q 14 3, 16 10 Z" fill="#C9A227" />
            <circle cx="16" cy="5" r="7" fill="#C9A227" fillOpacity="0.18" stroke="none" />
          </g>

          {/* Floating Aarti Diya 2 */}
          <g transform="translate(510, 120)">
            <ellipse cx="16" cy="14" rx="12" ry="4" fill="#FEF8E7" stroke="#C9A227" strokeWidth="1.1" />
            <path d="M 16 10 Q 18 3, 16 0 Q 14 3, 16 10 Z" fill="#C9A227" />
            <circle cx="16" cy="5" r="7" fill="#C9A227" fillOpacity="0.18" stroke="none" />
          </g>
        </g>
      </svg>
    </div>
  )
}

/**
 * 7. CONNECTIVITY & LOCATION COORDINATES TEXTURE
 * Used for: Contact Page, Vrindavan Office, Direct Inquiries
 * Design: Geographic GPS coordinates of Vrindavan, radar locator rings, communication lines.
 */
export function ConnectivityCoordinatesTexture({ className = '', opacity = 0.22 }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 700 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ opacity }}
      >
        <g stroke="#C9A227" strokeLinecap="round">
          {/* Radar Geographic Rings centered on Vrindavan Office */}
          <g transform="translate(520, 200)">
            <circle cx="0" cy="0" r="160" stroke="#BACDE5" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.4" />
            <circle cx="0" cy="0" r="110" stroke="#C9A227" strokeWidth="0.9" opacity="0.3" />
            <circle cx="0" cy="0" r="60" stroke="#C9A227" strokeWidth="1.2" opacity="0.5" />
            <circle cx="0" cy="0" r="20" fill="#FEF6D8" stroke="#C9A227" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="5" fill="#C9A227" />

            {/* Pulsing Coordinates Badge */}
            <g transform="translate(26, -30)">
              <rect x="0" y="0" width="130" height="28" rx="4" fill="#FEF8E7" stroke="#C9A227" strokeWidth="1" />
              <text x="10" y="18" fill="#14224A" fontSize="9" fontWeight="700" fontFamily="sans-serif">27.5706° N, 77.6593° E</text>
            </g>
          </g>

          {/* Connecting Communication Wave Vectors */}
          <path d="M 80 180 C 200 130, 320 220, 460 200" stroke="#C9A227" strokeWidth="1.5" strokeDasharray="5 7" />
          <path d="M 120 240 C 240 210, 360 270, 480 220" stroke="#94A3B8" strokeWidth="1" opacity="0.5" />
        </g>
      </svg>
    </div>
  )
}

/**
 * 8. MAJESTIC VRINDAVAN SKYLINE FOOTER TEXTURE
 * Used for: Global Footer (across every single page)
 * Design: Continuous panoramic silhouette of Shri Vrindavan Dham temples, shikharas, chhatris, and Yamuna Ghat steps.
 */
export function VrindavanSkylineFooterTexture({ className = '', opacity = 0.12 }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
        style={{ opacity }}
      >
        <g stroke="#C9A227" strokeLinecap="round" strokeLinejoin="round">
          {/* Base Yamuna River Ghat Stone Steps (Pauris) */}
          <line x1="0" y1="178" x2="1200" y2="178" strokeWidth="1.5" stroke="#BACDE5" opacity="0.4" />
          <line x1="0" y1="172" x2="1200" y2="172" strokeWidth="1.2" stroke="#C9A227" opacity="0.6" />
          <line x1="0" y1="166" x2="1200" y2="166" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />

          {/* Temple 1 (Far Left): Classic Braj Mandir with Kalash */}
          <g transform="translate(60, 166)">
            {/* Steps */}
            <path d="M -30 0 H 30" strokeWidth="1" />
            <path d="M -24 -6 H 24" strokeWidth="1" />
            {/* Sanctum Base */}
            <path d="M -18 -6 V -45 H 18 V -6" strokeWidth="1.2" />
            {/* Shikhara curves */}
            <path d="M -18 -45 C -14 -85, -6 -120, 0 -140 C 6 -120, 14 -85, 18 -45" strokeWidth="1.5" fill="#FEF8E7" fillOpacity="0.05" />
            {/* Shikhara Horizontal Ribs (Amalaka Rings) */}
            <line x1="-15" y1="-65" x2="15" y2="-65" strokeWidth="0.8" opacity="0.7" />
            <line x1="-12" y1="-90" x2="12" y2="-90" strokeWidth="0.8" opacity="0.7" />
            <line x1="-8" y1="-115" x2="8" y2="-115" strokeWidth="0.8" opacity="0.7" />
            {/* Amalaka & Kalash */}
            <ellipse cx="0" cy="-142" rx="5" ry="2" strokeWidth="1" />
            <circle cx="0" cy="-148" r="3" fill="#C9A227" />
            <line x1="0" y1="-151" x2="0" y2="-158" strokeWidth="1.2" />
          </g>

          {/* Chhatri 1: Domed Pavilion */}
          <g transform="translate(180, 166)">
            <path d="M -15 0 V -35 M 15 0 V -35" strokeWidth="1" />
            <path d="M -18 -35 Q 0 -55, 18 -35" strokeWidth="1.3" fill="#FEF8E7" fillOpacity="0.08" />
            <circle cx="0" cy="-57" r="2.5" fill="#C9A227" />
          </g>

          {/* Temple 2 (Left-Center): Royal Grand Shikhara */}
          <g transform="translate(340, 166)">
            <path d="M -40 0 H 40" strokeWidth="1.2" />
            <path d="M -32 -8 H 32" strokeWidth="1.2" />
            <path d="M -25 -8 V -55 H 25 V -8" strokeWidth="1.4" />
            {/* Main soaring spire */}
            <path d="M -25 -55 C -20 -105, -8 -145, 0 -165 C 8 -145, 20 -105, 25 -55" strokeWidth="1.8" fill="#FEF8E7" fillOpacity="0.06" />
            {/* Miniature Urushringa Side Spires */}
            <path d="M -25 -55 C -22 -85, -16 -105, -12 -115 V -55" strokeWidth="1" opacity="0.8" />
            <path d="M 25 -55 C 22 -85, 16 -105, 12 -115 V -55" strokeWidth="1" opacity="0.8" />
            {/* Kalash Top */}
            <ellipse cx="0" cy="-167" rx="7" ry="3" strokeWidth="1.2" />
            <circle cx="0" cy="-173" r="3.5" fill="#C9A227" />
            <line x1="0" y1="-176.5" x2="0" y2="-185" strokeWidth="1.4" />
          </g>

          {/* Temple 3 (Center): Majestic Banke Bihari / Prem Mandir Style Dome & Spire */}
          <g transform="translate(600, 166)">
            {/* Wide Platform */}
            <path d="M -60 0 H 60" strokeWidth="1.4" />
            <path d="M -50 -8 H 50" strokeWidth="1.2" />
            <path d="M -38 -8 V -60 H 38 V -8" strokeWidth="1.5" />
            {/* Center Archway */}
            <path d="M -14 -8 V -32 Q 0 -45, 14 -32 V -8" strokeWidth="1.2" />
            {/* Grand Shikhara */}
            <path d="M -38 -60 C -30 -115, -10 -155, 0 -172 C 10 -155, 30 -115, 38 -60" strokeWidth="2" fill="#FEF8E7" fillOpacity="0.08" />
            {/* Rib lines */}
            <line x1="-30" y1="-85" x2="30" y2="-85" strokeWidth="0.9" opacity="0.7" />
            <line x1="-22" y1="-115" x2="22" y2="-115" strokeWidth="0.9" opacity="0.7" />
            <line x1="-14" y1="-145" x2="14" y2="-145" strokeWidth="0.9" opacity="0.7" />
            {/* Crown Finial */}
            <ellipse cx="0" cy="-174" rx="8" ry="3.5" strokeWidth="1.3" />
            <circle cx="0" cy="-180" r="4" fill="#C9A227" />
            <path d="M 0 -184 L 0 -192" strokeWidth="1.5" />
            {/* Flanking Small Chhatris */}
            <path d="M -50 -8 V -40 Q -38 -55, -26 -40 V -8" strokeWidth="1" />
            <path d="M 26 -8 V -40 Q 38 -55, 50 -40 V -8" strokeWidth="1" />
          </g>

          {/* Chhatri 2 (Center-Right) */}
          <g transform="translate(760, 166)">
            <path d="M -16 0 V -38 M 16 0 V -38" strokeWidth="1" />
            <path d="M -20 -38 Q 0 -58, 20 -38" strokeWidth="1.3" fill="#FEF8E7" fillOpacity="0.08" />
            <circle cx="0" cy="-60" r="2.5" fill="#C9A227" />
          </g>

          {/* Temple 4 (Right-Center) */}
          <g transform="translate(900, 166)">
            <path d="M -32 0 H 32" strokeWidth="1.2" />
            <path d="M -22 -6 V -50 H 22 V -6" strokeWidth="1.3" />
            <path d="M -22 -50 C -16 -95, -6 -135, 0 -155 C 6 -135, 16 -95, 22 -50" strokeWidth="1.6" fill="#FEF8E7" fillOpacity="0.06" />
            <ellipse cx="0" cy="-157" rx="6" ry="2.5" strokeWidth="1" />
            <circle cx="0" cy="-163" r="3" fill="#C9A227" />
            <line x1="0" y1="-166" x2="0" y2="-174" strokeWidth="1.3" />
          </g>

          {/* Temple 5 (Far Right) */}
          <g transform="translate(1080, 166)">
            <path d="M -25 0 H 25" strokeWidth="1" />
            <path d="M -16 -6 V -42 H 16 V -6" strokeWidth="1.2" />
            <path d="M -16 -42 C -12 -75, -5 -110, 0 -130 C 5 -110, 12 -75, 16 -42" strokeWidth="1.4" fill="#FEF8E7" fillOpacity="0.05" />
            <ellipse cx="0" cy="-132" rx="5" ry="2" strokeWidth="1" />
            <circle cx="0" cy="-137" r="2.8" fill="#C9A227" />
            <line x1="0" y1="-140" x2="0" y2="-146" strokeWidth="1" />
          </g>
        </g>
      </svg>
    </div>
  )
}

/**
 * 9. VIP RIBBON LUXURY GEOMETRIC TEXTURE
 * Used for: Consultation banner in Footer, Highlight CTA bars
 * Design: Fine-line diamond filigree lattice with subtle golden node accents.
 */
export function VipRibbonTexture({ className = '', opacity = 0.18 }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 600 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ opacity }}
      >
        <g stroke="#C9A227" strokeWidth="0.8" strokeLinecap="round">
          {/* Diamond Lattice Pattern */}
          {Array.from({ length: 9 }).map((_, col) => {
            return Array.from({ length: 4 }).map((_, row) => {
              const cx = col * 75 + 25
              const cy = row * 60 + 20
              return (
                <g key={`${col}-${row}`}>
                  <polygon
                    points={`${cx},${cy - 22} ${cx + 32},${cy} ${cx},${cy + 22} ${cx - 32},${cy}`}
                    stroke="#C9A227"
                    strokeWidth="0.7"
                    fill="#FEF8E7"
                    fillOpacity="0.04"
                  />
                  <circle cx={cx} cy={cy} r="1.5" fill="#C9A227" opacity="0.6" />
                </g>
              )
            })
          })}
        </g>
      </svg>
    </div>
  )
}

/**
 * 10. STATS CONNECTING PILLARS TEXTURE
 * Used for: StatsStrip (connecting statistics metrics)
 * Design: Architectural horizontal datum line, milestone nodes, and subtle coordinate indicators.
 */
export function StatsPillarsTexture({ className = '', opacity = 0.2 }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1000 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ opacity }}
      >
        <g stroke="#C9A227" strokeLinecap="round">
          {/* Continuous Architectural Datum Line */}
          <line x1="50" y1="40" x2="950" y2="40" stroke="#BACDE5" strokeWidth="1.2" strokeDasharray="6 8" opacity="0.6" />
          <line x1="120" y1="40" x2="880" y2="40" stroke="#C9A227" strokeWidth="1.6" opacity="0.8" />

          {/* 4 Primary Metric Anchor Nodes */}
          {[160, 390, 620, 840].map((cx, i) => (
            <g key={i} transform={`translate(${cx}, 40)`}>
              <circle cx="0" cy="0" r="14" stroke="#BACDE5" strokeWidth="1" opacity="0.65" />
              <circle cx="0" cy="0" r="7" fill="#FEF8E7" stroke="#C9A227" strokeWidth="1.8" />
              <circle cx="0" cy="0" r="3" fill="#C9A227" />
              <line x1="0" y1="-20" x2="0" y2="-14" stroke="#C9A227" strokeWidth="1.5" />
              <line x1="0" y1="14" x2="0" y2="20" stroke="#C9A227" strokeWidth="1.5" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}

/**
 * 11. ARCHITECTURAL LINE-ART CORNER WATERMARKS (FAQ SISTERS)
 * Inspired by the beloved Vrindavan temple silhouette in the FAQ section.
 * Placed in the bottom-left corner with opacity-65, soft Kadamba trees, and clean architectural strokes.
 */

// 11.A: Sacred Vrindavan Temple Art (Re-exported for Tours & Pilgrimage)
export function VrindavanTempleArt({ className = '' }) {
  return (
    <svg
      viewBox="0 0 540 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="#93B1D5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        {/* Soft sacred Kadamba trees & groves */}
        <circle cx="36" cy="252" r="18" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />
        <circle cx="72" cy="254" r="14" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />
        <circle cx="112" cy="256" r="12" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />

        {/* Small Left Shikhara Shrine */}
        <path d="M 52 165 L 52 150 L 68 157 L 52 164 Z" fill="#93B1D5" fillOpacity="0.2" />
        <circle cx="52" cy="168" r="2.5" />
        <ellipse cx="52" cy="174" rx="5" ry="2.5" />
        <path d="M 52 176 C 46 195, 41 218, 36 242 L 68 242 C 63 218, 58 195, 52 176 Z" />
        <path d="M 44 200 C 52 203, 52 203, 60 200" />
        <path d="M 40 222 C 52 226, 52 226, 64 222" />
        <rect x="33" y="242" width="38" height="42" />
        <path d="M 43 284 V 262 C 43 255, 61 255, 61 262 V 284" />

        {/* Grand Central Shikhara (Temple Spire) */}
        <path d="M 124 54 L 124 28 L 152 40 L 124 50 Z" fill="#93B1D5" fillOpacity="0.25" strokeWidth="1.4" />
        <circle cx="124" cy="58" r="3.5" />
        <ellipse cx="124" cy="67" rx="8.5" ry="3.5" />
        <ellipse cx="124" cy="73" rx="10.5" ry="4" />

        {/* Tiered Nagara-Style Shikhara Curves */}
        <path
          d="M 124 77 C 114 108, 102 152, 92 208 L 156 208 C 146 152, 134 108, 124 77 Z"
          strokeWidth="1.6"
          fill="#FFFFFF"
          fillOpacity="0.3"
        />

        {/* Bhumi / Tier Ridges */}
        <path d="M 116 102 C 124 105, 124 105, 132 102" />
        <path d="M 111 122 C 124 126, 124 126, 137 122" />
        <path d="M 106 145 C 124 151, 124 151, 142 145" strokeWidth="1.4" />
        <path d="M 100 171 C 124 178, 124 178, 148 171" strokeWidth="1.4" />
        <path d="M 96 193 C 124 200, 124 200, 152 193" strokeWidth="1.4" />

        {/* Sanctum Body Base */}
        <rect x="86" y="208" width="76" height="76" strokeWidth="1.6" fill="#FFFFFF" fillOpacity="0.2" />
        <path d="M 86 220 H 162" />
        <path d="M 86 232 H 162" />
        <path d="M 111 284 V 246 C 111 234, 137 234, 137 246 V 284" strokeWidth="1.5" />

        {/* Right Subsidiary Temple Spire */}
        <path d="M 188 148 L 188 134 L 204 140 L 188 147 Z" fill="#93B1D5" fillOpacity="0.2" />
        <circle cx="188" cy="152" r="2.8" />
        <ellipse cx="188" cy="158" rx="6" ry="2.6" />
        <path d="M 188 160 C 182 181, 177 208, 171 232 L 205 232 C 199 208, 194 181, 188 160 Z" />
        <rect x="167" y="232" width="44" height="52" />

        {/* Far Right Rajasthani Chhatri */}
        <circle cx="248" cy="192" r="2.5" />
        <path d="M 230 212 C 230 194, 266 194, 266 212 Z" fill="#93B1D5" fillOpacity="0.1" strokeWidth="1.4" />
        <path d="M 228 212 H 268" />
        <line x1="233" y1="212" x2="233" y2="284" />
        <line x1="243" y1="212" x2="243" y2="284" />
        <line x1="253" y1="212" x2="253" y2="284" />
        <line x1="263" y1="212" x2="263" y2="284" />

        {/* Temple Base Platform */}
        <rect x="4" y="284" width="280" height="9" strokeWidth="1.5" />
        <line x1="0" y1="293" x2="310" y2="293" strokeWidth="1.6" />
        <line x1="0" y1="299" x2="330" y2="299" strokeWidth="1.3" />
        <line x1="0" y1="305" x2="355" y2="305" strokeWidth="1" opacity="0.6" />
      </g>
    </svg>
  )
}

// 11.B: Car Rental Mobility Line-Art (Vehicle, Expressway bridge, trees)
export function CarRentalMobilityArt({ className = '' }) {
  return (
    <svg
      viewBox="0 0 540 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="#93B1D5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        {/* Trees along expressway */}
        <circle cx="40" cy="248" r="16" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />
        <circle cx="75" cy="250" r="13" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />

        {/* Highway Milestone / Route Pillar */}
        <path d="M 60 210 H 90 V 284 H 60 Z" fill="#EEF5FC" strokeWidth="1.4" />
        <path d="M 60 210 Q 75 195, 90 210" fill="#C9A227" fillOpacity="0.2" strokeWidth="1.4" />
        <text x="66" y="235" fill="#14224A" fontSize="9" fontWeight="800" fontFamily="sans-serif">NH19</text>

        {/* Elegant Executive Vehicle Silhouette (SUV/Sedan) */}
        <g transform="translate(130, 200)">
          {/* Car Body Contour */}
          <path
            d="M 10 65 
               L 30 65 
               C 35 55, 55 55, 60 65 
               L 125 65 
               C 130 55, 150 55, 155 65 
               L 180 65 
               C 185 65, 188 60, 185 52 
               L 175 40 
               C 172 36, 166 35, 150 34 
               L 115 15 
               C 108 12, 65 12, 50 15 
               L 32 35 
               L 15 42 
               C 8 45, 5 55, 10 65 Z"
            strokeWidth="1.8"
            fill="#FFFFFF"
            fillOpacity="0.4"
          />
          {/* Windows / Greenhouse */}
          <path
            d="M 52 32 L 65 18 H 105 L 120 32 Z"
            stroke="#93B1D5"
            strokeWidth="1.2"
            fill="#EEF5FC"
            fillOpacity="0.5"
          />
          <path
            d="M 125 32 L 110 18 H 112 L 145 32 Z"
            stroke="#93B1D5"
            strokeWidth="1.2"
          />
          {/* Wheels */}
          <circle cx="47.5" cy="65" r="14" fill="#FFFFFF" strokeWidth="1.8" />
          <circle cx="47.5" cy="65" r="7" fill="#C9A227" fillOpacity="0.2" strokeWidth="1.2" />
          <circle cx="142.5" cy="65" r="14" fill="#FFFFFF" strokeWidth="1.8" />
          <circle cx="142.5" cy="65" r="7" fill="#C9A227" fillOpacity="0.2" strokeWidth="1.2" />
          {/* Headlight & Door lines */}
          <line x1="88" y1="18" x2="88" y2="58" strokeWidth="1" />
          <path d="M 172 45 Q 182 46, 178 52" stroke="#C9A227" strokeWidth="1.4" />
        </g>

        {/* Expressway Highway Lanes & Overpass Bridge */}
        <path d="M 0 284 H 360" strokeWidth="1.8" />
        <path d="M 0 292 H 390" strokeWidth="1.4" />
        <path d="M 0 300 H 420" strokeWidth="1.2" strokeDasharray="8 8" />
        <path d="M 0 308 H 450" strokeWidth="1.5" />

        {/* Bridge Columns */}
        <line x1="260" y1="230" x2="260" y2="284" strokeWidth="1.4" />
        <line x1="280" y1="230" x2="280" y2="284" strokeWidth="1.4" />
        <path d="M 250 230 H 330" strokeWidth="1.6" />
      </g>
    </svg>
  )
}

// 11.C: Real Estate Architecture Line-Art (Modern Villa, Gated Entry, Trees)
export function RealEstateArchitectureArt({ className = '' }) {
  return (
    <svg
      viewBox="0 0 540 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="#93B1D5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        {/* Garden Trees */}
        <circle cx="45" cy="245" r="18" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />
        <circle cx="85" cy="248" r="14" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />

        {/* Modern 2-Storey Luxury Villa Elevation */}
        {/* Ground Floor */}
        <rect x="110" y="195" width="130" height="89" strokeWidth="1.8" fill="#FFFFFF" fillOpacity="0.4" />
        {/* Main Entrance Door */}
        <rect x="155" y="235" width="30" height="49" strokeWidth="1.4" fill="#EEF5FC" />
        <circle cx="180" cy="260" r="1.5" fill="#C9A227" />
        {/* Ground Floor Windows */}
        <rect x="122" y="215" width="24" height="34" strokeWidth="1.2" />
        <line x1="134" y1="215" x2="134" y2="249" />
        <rect x="195" y="215" width="34" height="34" strokeWidth="1.2" />
        <line x1="212" y1="215" x2="212" y2="249" />

        {/* First Floor Cantilevered Balcony */}
        <rect x="125" y="115" width="105" height="80" strokeWidth="1.6" fill="#FFFFFF" fillOpacity="0.3" />
        {/* Pergola Roof Slats */}
        <line x1="118" y1="110" x2="238" y2="110" strokeWidth="2" stroke="#C9A227" />
        <line x1="135" y1="102" x2="135" y2="110" strokeWidth="1.4" />
        <line x1="160" y1="102" x2="160" y2="110" strokeWidth="1.4" />
        <line x1="185" y1="102" x2="185" y2="110" strokeWidth="1.4" />
        <line x1="210" y1="102" x2="210" y2="110" strokeWidth="1.4" />
        {/* Balcony Glass Railing */}
        <rect x="125" y="170" width="45" height="25" strokeWidth="1.2" strokeDasharray="3 2" fill="#EEF5FC" fillOpacity="0.4" />
        <rect x="178" y="135" width="42" height="45" strokeWidth="1.3" />
        <line x1="199" y1="135" x2="199" y2="180" />

        {/* Gated Boundary Wall & Security Pillar */}
        <rect x="250" y="225" width="18" height="59" strokeWidth="1.5" fill="#EEF5FC" />
        <circle cx="259" cy="220" r="3" fill="#C9A227" />
        <line x1="268" y1="240" x2="340" y2="240" strokeWidth="1.2" />
        <line x1="268" y1="255" x2="340" y2="255" strokeWidth="1.2" />
        <line x1="268" y1="270" x2="340" y2="270" strokeWidth="1.2" />

        {/* Foundation & Paved Roadway */}
        <rect x="10" y="284" width="340" height="8" strokeWidth="1.6" />
        <line x1="0" y1="292" x2="370" y2="292" strokeWidth="1.6" />
        <line x1="0" y1="299" x2="390" y2="299" strokeWidth="1.3" strokeDasharray="6 6" />
        <line x1="0" y1="306" x2="420" y2="306" strokeWidth="1.5" />
      </g>
    </svg>
  )
}

// 11.D: Institutional Trust & Ethics Pillar Line-Art (Dharma Stambha, Carved Capital, Base)
export function TrustEthicsPillarArt({ className = '' }) {
  return (
    <svg
      viewBox="0 0 540 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="#93B1D5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        {/* Sacred groves on side */}
        <circle cx="45" cy="252" r="16" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />
        <circle cx="80" cy="254" r="12" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />

        {/* Royal Ashoka-Style Dharma Stambha / Carved Stone Pillar */}
        <g transform="translate(140, 40)">
          {/* Pillar Capital Crest with Golden Chakra */}
          <circle cx="30" cy="30" r="18" fill="#FEF8E7" stroke="#C9A227" strokeWidth="1.6" />
          <circle cx="30" cy="30" r="5" fill="#C9A227" />
          {/* 8 Chakra Spokes */}
          {Array.from({ length: 8 }).map((_, i) => {
            const rad = (i * 45 * Math.PI) / 180
            return (
              <line
                key={i}
                x1={30 + 6 * Math.cos(rad)}
                y1={30 + 6 * Math.sin(rad)}
                x2={30 + 17 * Math.cos(rad)}
                y2={30 + 17 * Math.sin(rad)}
                stroke="#C9A227"
                strokeWidth="1.2"
              />
            )
          })}

          {/* Abacus & Inverted Bell Lotus Capital */}
          <rect x="12" y="52" width="36" height="8" strokeWidth="1.4" fill="#EEF5FC" />
          <path d="M 15 60 C 18 72, 42 72, 45 60 Z" strokeWidth="1.4" fill="#FFFFFF" fillOpacity="0.4" />

          {/* Fluted Monolithic Pillar Shaft */}
          <rect x="20" y="72" width="20" height="172" strokeWidth="1.8" fill="#FFFFFF" fillOpacity="0.3" />
          <line x1="25" y1="72" x2="25" y2="244" strokeWidth="0.9" opacity="0.6" />
          <line x1="30" y1="72" x2="30" y2="244" stroke="#C9A227" strokeWidth="1" opacity="0.8" />
          <line x1="35" y1="72" x2="35" y2="244" strokeWidth="0.9" opacity="0.6" />

          {/* Tiered Moulded Pedestal Base */}
          <rect x="14" y="244" width="32" height="12" strokeWidth="1.5" fill="#EEF5FC" />
          <rect x="8" y="256" width="44" height="12" strokeWidth="1.6" />
          <rect x="2" y="268" width="56" height="10" strokeWidth="1.8" />
        </g>

        {/* Heritage Jharokha Arch Spandrel beside pillar */}
        <path d="M 210 284 V 200 C 210 150, 270 120, 310 160 C 350 120, 410 150, 410 200 V 284" strokeWidth="1.4" fill="#EEF5FC" fillOpacity="0.2" />
        <path d="M 225 284 V 210 C 225 170, 270 145, 310 175 C 350 145, 395 170, 395 210 V 284" stroke="#C9A227" strokeDasharray="4 4" />

        {/* Foundation Base Lines */}
        <rect x="10" y="284" width="420" height="8" strokeWidth="1.6" />
        <line x1="0" y1="292" x2="450" y2="292" strokeWidth="1.6" />
        <line x1="0" y1="298" x2="480" y2="298" strokeWidth="1.3" opacity="0.6" />
      </g>
    </svg>
  )
}

// 11.E: Contact & Navigation Compass Line-Art (Office Gateway, Compass Rose, GPS Marker)
export function ContactCompassArt({ className = '' }) {
  return (
    <svg
      viewBox="0 0 540 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="#93B1D5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        {/* Sacred groves & trees */}
        <circle cx="45" cy="246" r="16" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />
        <circle cx="82" cy="250" r="12" fill="#EEF5FC" stroke="#A7C3E2" strokeDasharray="3 3" />

        {/* GPS Map Pin Milestone on Left */}
        <g transform="translate(48, 150)">
          <path
            d="M 22 5 C 10 5, 2 13, 2 24 C 2 38, 22 58, 22 58 C 22 58, 42 38, 42 24 C 42 13, 34 5, 22 5 Z"
            fill="#FFFFFF"
            fillOpacity="0.8"
            stroke="#93B1D5"
            strokeWidth="1.6"
          />
          <circle cx="22" cy="24" r="7" fill="#FEF8E7" stroke="#C9A227" strokeWidth="1.5" />
          <circle cx="22" cy="24" r="2.5" fill="#C9A227" />
          {/* Signal Waves */}
          <path d="M 12 12 C 16 8, 28 8, 32 12" stroke="#C9A227" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" />
        </g>

        {/* 8-Point Navigation Compass Rose */}
        <g transform="translate(130, 80)">
          <circle cx="50" cy="50" r="42" stroke="#93B1D5" strokeWidth="1.2" strokeDasharray="4 3" />
          <circle cx="50" cy="50" r="30" stroke="#BACDE5" strokeWidth="0.9" />
          <circle cx="50" cy="50" r="5" fill="#C9A227" />
          {/* North Point */}
          <polygon points="50,12 55,45 50,50 45,45" fill="#C9A227" fillOpacity="0.85" stroke="#C9A227" strokeWidth="1" />
          {/* South Point */}
          <polygon points="50,88 55,55 50,50 45,55" fill="#BACDE5" stroke="#93B1D5" strokeWidth="1" />
          {/* East Point */}
          <polygon points="88,50 55,55 50,50 55,45" fill="#BACDE5" stroke="#93B1D5" strokeWidth="1" />
          {/* West Point */}
          <polygon points="12,50 45,55 50,50 45,45" fill="#BACDE5" stroke="#93B1D5" strokeWidth="1" />
          {/* Ordinal Points */}
          <line x1="28" y1="28" x2="72" y2="72" stroke="#93B1D5" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="28" y1="72" x2="72" y2="28" stroke="#93B1D5" strokeWidth="1" strokeDasharray="2 2" />
          <text x="47" y="6" fill="#C9A227" fontSize="9" fontWeight="bold" fontFamily="sans-serif">N</text>
        </g>

        {/* Vrindavan Office Gateway & Arches */}
        <rect x="230" y="195" width="120" height="89" strokeWidth="1.8" fill="#FFFFFF" fillOpacity="0.4" />
        {/* Welcoming Archway Entrance */}
        <path d="M 270 284 V 230 C 270 215, 310 215, 310 230 V 284" strokeWidth="1.6" fill="#EEF5FC" />
        <path d="M 276 284 V 235 C 276 224, 304 224, 304 235 V 284" stroke="#C9A227" strokeDasharray="3 3" />
        {/* Office Windows */}
        <rect x="242" y="215" width="20" height="28" strokeWidth="1.2" fill="#EEF5FC" fillOpacity="0.5" />
        <rect x="318" y="215" width="20" height="28" strokeWidth="1.2" fill="#EEF5FC" fillOpacity="0.5" />
        {/* Cornice & Parapet */}
        <line x1="225" y1="195" x2="355" y2="195" strokeWidth="2" stroke="#C9A227" />
        <line x1="220" y1="190" x2="360" y2="190" strokeWidth="1.4" />

        {/* Highway / Roadway leading to office */}
        <path d="M 0 284 H 390" strokeWidth="1.8" />
        <path d="M 0 292 H 420" strokeWidth="1.5" />
        <path d="M 0 300 H 450" strokeWidth="1.2" strokeDasharray="8 8" />
        <path d="M 0 308 H 480" strokeWidth="1.5" />
      </g>
    </svg>
  )
}

