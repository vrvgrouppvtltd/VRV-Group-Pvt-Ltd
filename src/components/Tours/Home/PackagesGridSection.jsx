import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PackagesGridSection({ packagesData }) {
  const navigate = useNavigate()

  const handleViewDetails = (packageId) => {
    navigate(`/tours/${packageId}`)
  }

  return (
    <section id="all-packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fbfbfe]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13264f] tracking-tight mb-3">
            Curated Spiritual Journeys
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-sans">
            Embark on a profound journey of faith and heritage, carefully designed to offer an immersive, executive experience.
          </p>
        </div>

        {/* 2x2 package grid followed by the full-width Grand Braj & Agra package */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {[
            // Keep the first three packages in their existing order,
            // move the 5th package into the 2x2 grid,
            // and place the Grand Braj & Agra package last as a full-width card.
            packagesData[0],
            packagesData[1],
            packagesData[2],
            packagesData[4],
            packagesData[3],
          ].filter(Boolean).map((pkg, idx) => {
            const isFullWidth = idx === 4 // Grand Braj & Agra is now the last/full-width card

            return (
              <div
                key={pkg.id || idx}
                onClick={() => handleViewDetails(pkg.id)}
                className={`relative rounded-2xl overflow-hidden min-h-[340px] sm:min-h-[380px] p-6 sm:p-8 flex flex-col justify-between group shadow-lg border border-slate-100 cursor-pointer ${
                  isFullWidth ? 'md:col-span-2 min-h-[380px] sm:min-h-[420px]' : ''
                }`}
              >
                {/* Card Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={pkg.image}
                    alt={pkg.package_name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b37]/95 via-[#0d1b37]/65 to-[#0d1b37]/30" />
                </div>

                {/* Top Duration Pill Badge */}
                <div className="relative z-10">
                  <span className="inline-block bg-[#13264f]/80 backdrop-blur-md text-slate-200 text-[11px] font-medium px-3.5 py-1.5 rounded-md border border-white/10 tracking-wider">
                    {pkg.duration}
                  </span>
                </div>

                {/* Bottom Content & Action Bar */}
                <div className="relative z-10 pt-16">
                  {/* Package Title */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
                    {pkg.package_name}
                  </h3>

                  {/* Subtitle / Description for full width banner */}
                  {isFullWidth && (
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-2xl font-sans">
                      {pkg.tagline}
                    </p>
                  )}

                  {/* Pricing & View Details Action Row */}
                  <div className="flex items-end justify-between pt-4 border-t border-white/10">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider font-sans">
                        Starting from
                      </span>
                      <span className="text-lg sm:text-xl font-extrabold text-white font-display">
                        ₹{pkg.price_inr?.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleViewDetails(pkg.id)
                      }}
                      className="bg-[#F7D070] hover:bg-[#ebd05d] text-[#13264f] font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer font-sans"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 text-[#13264f]" />
                    </button>
                  </div>

                </div>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}