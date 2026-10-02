
import { Star } from 'lucide-react'
import testimonialsData from '../../../data/testimonialsData.json'

export default function TestimonialsSection() {
  const marqueeItems = [...testimonialsData, ...testimonialsData]

  return (
    <section
      id="testimonials"
      className="py-20 bg-[#fbfbfe] relative overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13264f] tracking-tight mb-3">
          Voices of the Sacred Journey
        </h2>

        <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-sans">
          Discover the profound transformations and quiet confidence our
          pilgrims have found along their curated spiritual paths in Vrindavan.
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden">

        {/* Left Fade Overlay */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#fbfbfe] to-transparent z-10" />

        {/* Right Fade Overlay */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#fbfbfe] to-transparent z-10" />

        {/* Marquee */}
        <div className="animate-marquee gap-6 py-4">

          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="
                w-[285px]
                sm:w-[380px]
                md:w-[420px]
                shrink-0
                bg-white
                rounded-3xl
                p-7
                sm:p-8
                border
                border-slate-200/80
                shadow-sm
                relative
                flex
                flex-col
                justify-between
                overflow-hidden
                group
                hover:shadow-xl
                hover:border-gold/50
                transition-all
                duration-300
                select-none
              "
            >

              {/* Background Decorative Watermark Quote */}
              <div className="absolute top-0 right-4 text-7xl sm:text-8xl font-display text-amber-500/10 pointer-events-none select-none">
                “
              </div>

              <div>

                {/* 5-Star Rating Row */}
                <div className="flex items-center gap-1 text-[#F7D070] mb-4 relative z-10">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F7D070] text-[#F7D070]"
                    />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="font-display font-medium text-slate-800 text-sm sm:text-base leading-relaxed mb-6 relative z-10 line-clamp-4">
                  "{item.quote}"
                </p>

              </div>

              {/* Author Information - Photo Removed */}
              <div className="border-t border-slate-100 pt-4 relative z-10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#13264f] font-sans">
                  {item.name}
                </h4>

                <span className="text-[11px] text-slate-400 font-medium font-sans">
                  {item.role}
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}


