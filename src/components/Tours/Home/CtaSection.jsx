import { Link } from 'react-router-dom'

export default function CtaSection({ onPlanVisit }) {
  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-center"
      style={{ backgroundColor: '#1b2a55' }}
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundColor: '#1b2a55' }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md">
          Begin Your Divine Journey
        </h2>

        <p className="text-slate-200/90 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10 font-sans">
          Experience the soul-stirring heritage of Braj with our curated spiritual tours and executive pilgrimage services.
        </p>

        {/* 2 Buttons Side-by-Side */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-sans">
          <button
            onClick={onPlanVisit}
            className="w-full sm:w-auto bg-[#8a6a12] hover:bg-[#a8821f] text-white font-bold py-3.5 px-8 rounded-md text-sm tracking-wide shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
          >
            Plan Your Visit
          </button>

          <a
            href="#all-packages"
            className="w-full sm:w-auto border border-white/30 hover:bg-white/10 text-white font-bold py-3.5 px-8 rounded-md text-sm tracking-wide transition-all duration-300 active:scale-95 text-center"
          >
            Explore Packages
          </a>
        </div>
      </div>
    </section>
  )
}
