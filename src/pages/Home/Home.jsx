import React from 'react'
import Hero from '../../components/Hero.jsx'
import ServiceCards from '../../components/ServiceCards.jsx'
import StatsStrip from '../../components/StatsStrip.jsx'
import ValueCards from '../../components/ValueCards.jsx'
import FAQ from '../../components/FAQ.jsx'
import Testimonials from '../../components/Testimonials.jsx'
import CommentSection from '../../components/CommentSection.jsx'

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
