import React from 'react'
import type { HeadFC } from 'gatsby'
import SEO from '../components/wrappers/SEO'
import { LandingPageHeroSection } from '../components/sections/home/HeroSection'
import { SkillSection } from '../components/sections/home/SkillSection'
import { ProjectsSection } from '../components/sections/home/ProjectsSection'
import { WorkExperience } from '../components/sections/home/ExperienceSection'

const HomePage: React.FC = () => {
  return (
    <main>
      <LandingPageHeroSection />
      <SkillSection />
      <WorkExperience />
      <ProjectsSection />
    </main>
  )
}

export default HomePage

export const Head: HeadFC = () => {
  return <SEO />
}
