import React from 'react'
import Hero from '../../../../../v6/VRV-Group-Pvt-Ltd-/src/components/Hero.jsx'
import ServiceCards from '../../../../../v6/VRV-Group-Pvt-Ltd-/src/components/ServiceCards.jsx'
import StatsStrip from '../../../../../v6/VRV-Group-Pvt-Ltd-/src/components/StatsStrip.jsx'
import ValueCards from '../../../../../v6/VRV-Group-Pvt-Ltd-/src/components/ValueCards.jsx'
import FAQ from '../../../../../v6/VRV-Group-Pvt-Ltd-/src/components/FAQ.jsx'
import Testimonials from '../../../../../v6/VRV-Group-Pvt-Ltd-/src/components/Testimonials.jsx'
import CommentSection from '../../../../../v6/VRV-Group-Pvt-Ltd-/src/components/CommentSection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <StatsStrip />
      {/* <ValueCards /> */}
      <Testimonials />
      <FAQ />
      {/* <CommentSection /> */}
    </>
  )
}
