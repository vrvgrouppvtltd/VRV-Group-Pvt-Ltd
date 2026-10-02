import {
  Droplets,
  Landmark,
  Flower2,
  Sun,
  Compass,
  MapPin,
  Sparkles,
  Flame
} from 'lucide-react'

// Helper to render icon badge on the timeline line based on icon key or index
const renderItineraryIcon = (iconKey, index) => {
  const iconProps = { className: 'w-4 h-4 sm:w-5 sm:h-5 text-[#f5cd68]' }

  switch (iconKey?.toLowerCase()) {
    case 'droplets':
    case 'water':
    case 'purification':
    case 'aarti':
      return <Droplets {...iconProps} />
    case 'temple':
    case 'landmark':
    case 'mandir':
      return <Landmark {...iconProps} />
    case 'flame':
    case 'fire':
      return <Flame {...iconProps} />
    case 'flower':
    case 'lotus':
    case 'meditation':
    case 'stillness':
      return <Flower2 {...iconProps} />
    case 'sun':
    case 'sunrise':
    case 'heritage':
      return <Sun {...iconProps} />
    case 'compass':
    case 'departure':
    case 'blessing':
      return <Compass {...iconProps} />
    default:
      if (index === 0) return <Droplets {...iconProps} />
      if (index === 1) return <Landmark {...iconProps} />
      if (index === 2) return <Flower2 {...iconProps} />
      if (index === 3) return <Sun {...iconProps} />
      return <Sparkles {...iconProps} />
  }
}

export default function ItinerarySection({
  itinerary = [],
  title = "The Journey Ahead",
  subtitle = "A glimpse into your five-day spiritual pilgrimage."
}) {
  if (!itinerary || itinerary.length === 0) return null

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fd] text-[#1b2540] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-24">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1b2540] mb-3">
            {title}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-sans">
            {subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Golden Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#eecb6a]/40 via-[#d4af37] to-[#eecb6a]/40 z-0" />

          {/* Left Vertical Golden Line for Mobile */}
          <div className="md:hidden absolute left-5 sm:left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#eecb6a]/40 via-[#d4af37] to-[#eecb6a]/40 z-0" />

          {/* Timeline Items */}
          <div className="space-y-16 sm:space-y-24">
            {itinerary.map((item, idx) => {
              const isEven = idx % 2 === 0 // 0, 2, 4 -> Card Left, Image Right
              const dayNumber = item.day || idx + 1
              const daySubtitle = item.subtitle || `Day ${dayNumber}: ${item.title}`
              const descriptionText =
                item.description ||
                (item.activities && item.activities.length > 0
                  ? item.activities.join(' • ')
                  : 'Experience sacred darshan and traditional morning rituals.')

              return (
                <div key={item.day || idx} className="relative z-10">
                  {/* DESKTOP ALTERNATING LAYOUT (md and up) */}
                  <div className="hidden md:grid md:grid-cols-12 md:gap-8 items-center">
                    {/* LEFT SIDE CONTENT/IMAGE */}
                    <div className={`md:col-span-5 ${isEven ? 'text-right' : 'order-1'}`}>
                      {isEven ? (
                        /* Card on Left (for Even index 0, 2, 4) */
                        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm shadow-slate-100 text-left transition-all duration-300 hover:shadow-md">
                          <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1b2540] mb-3 leading-snug">
                            {daySubtitle}
                          </h3>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans mb-4">
                            {descriptionText}
                          </p>

                          {/* Optional activities tags */}
                          {item.activities && item.activities.length > 0 && (
                            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                              {item.activities.slice(0, 3).map((act, aIdx) => (
                                <span
                                  key={aIdx}
                                  className="text-[11px] font-medium bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md border border-slate-200/60"
                                >
                                  {act}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Image on Left (for Odd index 1, 3) */
                        item.image && (
                          <div className="rounded-2xl overflow-hidden border border-slate-200/70 shadow-sm shadow-slate-100 aspect-[4/3] group">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                          </div>
                        )
                      )}
                    </div>

                    {/* CENTER TIMELINE NODE ICON */}
                    <div className="md:col-span-2 flex justify-center items-center relative order-2">
                      <div className="bg-[#0b162c] text-[#f5cd68] p-3 rounded-xl border border-[#f5cd68]/40 shadow-lg shadow-navy/20 transition-transform duration-300 hover:scale-110 cursor-pointer">
                        {renderItineraryIcon(item.icon, idx)}
                      </div>
                    </div>

                    {/* RIGHT SIDE CONTENT/IMAGE */}
                    <div className={`md:col-span-5 ${isEven ? 'order-3' : 'order-3 text-left'}`}>
                      {!isEven ? (
                        /* Card on Right (for Odd index 1, 3) */
                        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm shadow-slate-100 text-left transition-all duration-300 hover:shadow-md">
                          <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1b2540] mb-3 leading-snug">
                            {daySubtitle}
                          </h3>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans mb-4">
                            {descriptionText}
                          </p>

                          {/* Optional activities tags */}
                          {item.activities && item.activities.length > 0 && (
                            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                              {item.activities.slice(0, 3).map((act, aIdx) => (
                                <span
                                  key={aIdx}
                                  className="text-[11px] font-medium bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md border border-slate-200/60"
                                >
                                  {act}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Image on Right (for Even index 0, 2, 4) */
                        item.image && (
                          <div className="rounded-2xl overflow-hidden border border-slate-200/70 shadow-sm shadow-slate-100 aspect-[4/3] group">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* MOBILE STACKED LAYOUT (< md) */}
                  <div className="md:hidden flex items-start gap-4 sm:gap-6">
                    {/* Left Icon Badge */}
                    <div className="shrink-0 bg-[#0b162c] text-[#f5cd68] p-2.5 rounded-xl border border-[#f5cd68]/40 shadow-md z-10 mt-1">
                      {renderItineraryIcon(item.icon, idx)}
                    </div>

                    {/* Right Content Block */}
                    <div className="flex-1 space-y-4">
                      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm text-left">
                        <h3 className="font-serif text-base sm:text-lg font-medium text-[#1b2540] mb-2 leading-snug">
                          {daySubtitle}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans mb-3">
                          {descriptionText}
                        </p>

                        {/* Activities */}
                        {item.activities && item.activities.length > 0 && (
                          <div className="pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                            {item.activities.slice(0, 3).map((act, aIdx) => (
                              <span
                                key={aIdx}
                                className="text-[10px] sm:text-[11px] font-medium bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200/60"
                              >
                                {act}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Mobile Image */}
                      {item.image && (
                        <div className="rounded-xl overflow-hidden border border-slate-200/70 shadow-sm aspect-[16/9]">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
