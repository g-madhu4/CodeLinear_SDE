'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Solutions from '../components/Solutions'
import Features from '../components/Features'
import Benefits from '../components/Benefits'
import CTABanner from '../components/CTABanner'
import AppShowcase from '../components/AppShowcase'
import Insights from '../components/Insights'
import CaseStudies from '../components/CaseStudies'
import Footer from '../components/Footer'
import AppShowcaseCTA from '@/components/AppShowcaseCTA'

export default function Home() {
  return (
    <>
      <main className="bg-[#000d12]">
        <Header />
        <Hero />
        <Solutions />
        <Features />
        <Benefits />
        <CTABanner />
        {/* <CaseStudies /> */}
        <AppShowcase />
        <Insights />
         <CaseStudies />
         <AppShowcaseCTA />
      </main>
      <Footer />
    </>
  )
}
