import { useState } from 'react'



import HeroSection from '../../components/Tours/Home/HeroSection'
import ExperienceSection from '../../components/Tours/Home/ExperienceSection'
import PackagesGridSection from '../../components/Tours/Home/PackagesGridSection'
import GallerySection from '../../components/Tours/Home/GallerySection'
import TestimonialsSection from '../../components/Tours/Home/TestimonialsSection'
import FaqSection from '../../components/Tours/Home/FaqSection'
import CtaSection from '../../components/Tours/Home/CtaSection'
import BookingModal from '../../components/Tours/Home/BookingModal'

import tourPackageData from '../../data/tourPackageData.app.json'

export default function Home() {
  const [destination, setDestination] = useState('Vrindavan & Mathura')
  const [travelDate, setTravelDate] = useState('')
  const [yatris, setYatris] = useState('1 Pilgrim')
  const [groupCount, setGroupCount] = useState('')

  // Booking Modal States
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [selectedPackageForModal, setSelectedPackageForModal] = useState(tourPackageData[0])
  const [bookingSubmitted, setBookingSubmitted] = useState(false)
  const [yatriName, setYatriName] = useState('')
  const [yatriPhone, setYatriPhone] = useState('')

  const handlePlanVisit = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    let matchedPkg = tourPackageData[0]
    if (destination.includes('Goverdhan') || destination.includes('Barsana')) {
      matchedPkg = tourPackageData.find((p) => p.id === 'goverdhan-barsana-3d2n') || tourPackageData[0]
    } else if (destination.includes('Agra') || destination.includes('Taj')) {
      matchedPkg = tourPackageData.find((p) => p.id === 'braj-chaurasi-5d4n') || tourPackageData[0]
    } else if (destination.includes('Gokul') || destination.includes('Nandgaon')) {
      matchedPkg = tourPackageData.find((p) => p.id === 'mathura-gokul-2d1n') || tourPackageData[0]
    }
    setSelectedPackageForModal(matchedPkg)
    setBookingModalOpen(true)
  }

  const handleQuickBook = (pkg) => {
    setSelectedPackageForModal(pkg)
    setBookingModalOpen(true)
  }

  const handleConfirmBooking = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    setBookingSubmitted(true)
    setTimeout(() => {
      setBookingSubmitted(false)
      setBookingModalOpen(false)
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-page text-body font-sans selection:bg-navy selection:text-gold">
      {/* 1. Header Navigation Bar */}


      {/* 2. Hero Section */}
      <HeroSection
        destination={destination}
        setDestination={setDestination}
        travelDate={travelDate}
        setTravelDate={setTravelDate}
        yatris={yatris}
        setYatris={setYatris}
        groupCount={groupCount}
        setGroupCount={setGroupCount}
        onPlanVisit={handlePlanVisit}
      />

      {/* 3. The VRV Group Experience Section ("A Sanctuary in Motion") */}
      <ExperienceSection />

      {/* 4. Curated Spiritual Journeys - Package Cards */}
      <PackagesGridSection
        packagesData={tourPackageData}
        onQuickBook={handleQuickBook}
      />

      {/* 5. Visual Sanctuary - Immersive Photo Gallery */}
      <GallerySection />

      {/* 6. Dynamic Testimonials Section ("Voices of the Journey") */}
      <TestimonialsSection />

      {/* 7. Common Inquiries - FAQ Accordion Grid */}
      <FaqSection />

      {/* 8. Call to Action Banner Section ("Begin Your Divine Journey") - BEFORE FOOTER */}
      {/* <CtaSection onPlanVisit={() => handlePlanVisit(null)} /> */}

      {/* 9. Interactive Booking Callback Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedPackage={selectedPackageForModal}
        bookingSubmitted={bookingSubmitted}
        yatriName={yatriName}
        setYatriName={setYatriName}
        yatriPhone={yatriPhone}
        setYatriPhone={setYatriPhone}
        destination={destination}
        travelDate={travelDate}
        yatris={yatris}
        groupCount={groupCount}
        onConfirmBooking={handleConfirmBooking}
      />

      {/* 10. Footer */}

    </div>
  )
}
