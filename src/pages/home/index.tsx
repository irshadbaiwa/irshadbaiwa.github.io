import * as React from 'react'
import type { HeadFC } from 'gatsby'
import HeroSection from './sections/Hero'

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
    </main>
  )
}

export default HomePage

export const Head: HeadFC = () => <title>Abubakar Baiwa</title>
