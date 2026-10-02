import { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

// List of critical image assets across all pages to preload into browser cache
const PRELOAD_IMAGES = [
  '/vrv-logo.webp',
  '/vrv-logo.svg',
  '/logo.jpeg',
  '/images/founder/nishant.jpeg',
  '/images/founder/greetika.jpg',
  '/images/founder/pushkar.jpeg',
  '/images/founder/sarbjot.jpg',
  '/images/founder/bikram.jpeg',
  '/images/hero/vrindavan-hero.jpg',
  '/images/services/tours.png',
  '/images/services/car-rental.jpg',
  '/images/services/real-estate.png',
  '/images/hero_yamuna_ghat.jpg',
  '/images/hero_temple_bg.jpg',
  '/images/itinerary_archway.jpg',
  '/images/pkg_vrindavan.jpg',
  '/members/Anshul.jpeg',
  '/members/Mayank.jpeg',
  '/members/Ashish.jpeg',
  '/members/Aniruddha.jpeg',
  '/members/Ujjawal.jpeg',
  '/images/car-rental/car-rental.jpg',
  '/images/hero/real-estate-hero.jpg',
  '/images/hero/contact-hero.jpg',
  '/images/car-rental/car-rental-poster.jpg',
  '/images/car-rental/i20-feature.jpg',
  '/images/car-rental/scorpio.jpg',
  '/images/car-rental/verna.jpg',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80'
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [statusText, setStatusText] = useState('Initializing VRV Group Experience...');

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = PRELOAD_IMAGES.length;

    if (totalImages === 0) {
      const timer = setTimeout(() => {
        setProgress(100);
        setIsLoaded(true);
      }, 0);
      return () => clearTimeout(timer);
    }

    const updateProgress = () => {
      loadedCount++;
      const currentPct = Math.min(Math.round((loadedCount / totalImages) * 100), 100);
      setProgress(currentPct);

      // Update status caption based on progress
      if (currentPct < 30) {
        setStatusText('Initializing VRV Group Experience...');
      } else if (currentPct < 60) {
        setStatusText('Preloading High-Resolution Visuals...');
      } else if (currentPct < 90) {
        setStatusText('Optimizing Fleet & Property Showcases...');
      } else {
        setStatusText('Welcome to VRV Group!');
      }

      if (loadedCount >= totalImages) {
        setTimeout(() => setIsLoaded(true), 400);
      }
    };

    // Preload each image into browser memory
    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress; // Proceed gracefully if an image fails
    });

    // Safety timeout: Ensure loading screen fades out after 3.5s even on slow connections
    const timeout = setTimeout(() => {
      setProgress(100);
      setStatusText('Welcome to VRV Group!');
      setTimeout(() => setIsLoaded(true), 300);
    }, 3500);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoaded) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-[#070D1B] flex flex-col items-center justify-center p-6 select-none overflow-hidden transition-opacity duration-700">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full">
        {/* Animated Brand Emblem Header */}
        <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
          {/* Outer Spinning Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400/40 animate-[spin_10s_linear_infinite]" />
          {/* Inner Glowing Ring */}
          <div className="absolute inset-1.5 rounded-full border border-amber-400/60 bg-gradient-to-br from-[#121f3d] to-[#0a1122] shadow-xl shadow-amber-500/10 flex items-center justify-center p-3">
            <img
              src="/vrv-logo.webp"
              alt="VRV Group Logo"
              className="w-full h-full object-contain animate-pulse"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }
              }}
            />
            {/* Fallback Text Badge */}
            <div className="hidden w-full h-full flex-col items-center justify-center text-amber-400 font-bold font-display text-xl tracking-wider">
              VRV
            </div>
          </div>
        </div>

        {/* Brand Title */}
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
          VRV <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">GROUP</span>
        </h1>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400/80 mb-8">
          Tours • Real Estate • Car Rental
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-[#111c33] border border-amber-400/20 rounded-full h-2.5 overflow-hidden mb-3 relative p-0.5 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 rounded-full transition-all duration-300 ease-out shadow-sm shadow-amber-400/50"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage & Status Text */}
        <div className="w-full flex items-center justify-between text-xs font-semibold px-1 text-slate-300">
          <span className="text-[11px] text-slate-400 transition-all duration-300">
            {statusText}
          </span>
          <span className="font-bold text-amber-400 font-mono text-sm">
            {progress}%
          </span>
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-12 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-400">
          <ShieldCheck size={14} className="text-amber-400" />
          <span>Premier Partner in Vrindavan & Mathura</span>
        </div>
      </div>
    </div>
  );
}
