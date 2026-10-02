import { useState } from 'react'
import { Sparkles, X, Maximize2 } from 'lucide-react'

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    {
      id: 1,
      title: "Yamuna Aarti at Vishram Ghat",
      subtitle: "Evening floating diyas and spiritual devotion",
      src: "/images/iternary_images/vishram_ghat_aarti.jpeg",
      className: "md:col-span-8 md:row-span-2 h-72 sm:h-96"
    },
    { id: 2,
  title: "Gehvan Kund",
  subtitle: "A sacred kund associated with the divine heritage of Braj",
    src: "/images/iternary_images/gahvar-kund.webp",
    className: "md:col-span-4 md:row-span-2 h-72 sm:h-96"
    },
    {
      id: 3,
    title: "Bhandir Van",
    subtitle: "A sacred forest known for its spiritual heritage and divine pastimes",
    src: "/images/iternary_images/bhandir_van.jpeg",
    className: "md:col-span-4 h-56 sm:h-64"
    },
    {
      id: 4,
      title: "Radha Kund",
      subtitle: "Serene sacred waters and sandstone chhatris at twilight",
      src: "/images/iternary_images/radha_kund.jpeg",
      className: "md:col-span-8 h-56 sm:h-64"
    },
    {
      id: 5,
      title: "Radha Raman Temple",
      subtitle: "Sacred devotion and timeless spiritual heritage of Vrindavan",
      src: "/images/iternary_images/radha-raman-temple-vrindavan-2.webp",
      className: "md:col-span-12 h-64 sm:h-80"
    }
  ]

  return (
    <section
      id="gallery"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13264f] tracking-tight mb-2">
            Visual Sanctuary
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm font-sans max-w-md mx-auto">
            A glimpse into the spiritual heart of Vrindavan.
          </p>
        </div>

        {/* Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-slate-100 ${item.className}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1d3a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

              {/* Hover Caption Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between text-white">
                <div>
                  <h4 className="font-display text-sm font-bold">
                    {item.title}
                  </h4>

                  <p className="text-[11px] text-slate-300">
                    {item.subtitle}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-300 shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-fade-in cursor-pointer overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-950 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto my-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Selected Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[65vh] sm:max-h-[75vh] object-contain bg-black"
            />

            {/* Image Details */}
            <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-amber-300">
                  {selectedImage.title}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  {selectedImage.subtitle}
                </p>
              </div>

              <span className="self-start sm:self-auto text-xs px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30 whitespace-nowrap">
                VRV Sanctuary
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}