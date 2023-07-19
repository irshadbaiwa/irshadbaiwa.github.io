import React from 'react'
import type { HeadFC } from 'gatsby'
import SEO from '../components/wrappers/SEO'
import HeroSection from '../components/sections/home/Hero'

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
    </main>
  )
}

export default HomePage

export const Head: HeadFC = () => {
  return <SEO />
}
