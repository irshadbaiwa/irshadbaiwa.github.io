import React from 'react'
import type { HeadFC } from 'gatsby'
import SEO from '../components/wrappers/SEO'
import { LandingPageHeroSection } from '../components/sections/home/HeroSection'

const HomePage: React.FC = () => {
  return (
    <main>
      <LandingPageHeroSection />
      <div className="min-h-screen">Another section</div>
    </main>
  )
}

export default HomePage

export const Head: HeadFC = () => {
  return <SEO />
}
