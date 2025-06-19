import React, { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'

import HeaderText from '../../typography/HeaderText'
import ButtonLight from '../../buttons/ButtonLight'
import { ProjectCard } from '../../blocks/ProjectCard'

import ReactIcon from '../../../images/stack/react.png'
import ScratchcodeLogo from '../../../images/projects/sc-logo.png'
import ScratchcodeLMSPreview from '../../../images/projects/sc.png'
import ScratchcodePlaygroundPreview from '../../../images/projects/sc-playground.png'
import TalentSourceLogo from '../../../images/projects/ts-logo.png'
import TalentSourcePreview from '../../../images/projects/ts.png'
import WidophRemitLogo from '../../../images/projects/wr-logo.png'
import WidophRemitPreview from '../../../images/projects/wr.png'
import KoaLogo from '../../../images/projects/koa-logo.png'
import KoaPreview from '../../../images/projects/koa.png'
import EmbeeLogo from '../../../images/projects/embee-logo.png'
import EmbeePreview from '../../../images/projects/embee.png'
import WorkmaiteLogo from '../../../images/projects/workmaite-logo.png'
import WorkmaitePreview from '../../../images/projects/workmaite.png'

const previewProjects: {
  title: string
  description: string
  logo: string
  preview: string
  link?: string
  isConfidential?: boolean
}[] = [
  {
    title: 'Scratchcode Academy',
    description: 'Learning platform',
    logo: ScratchcodeLogo,
    preview: ScratchcodeLMSPreview,
    link: 'https://scratchcode.org',
  },
  {
    title: 'Scratchcode Playground',
    description: 'Online IDE',
    logo: ScratchcodeLogo,
    preview: ScratchcodePlaygroundPreview,
    link: 'https://playground.scratchcode.org',
  },
  {
    title: 'Koa dashboard',
    description: 'Koa dashboar',
    logo: KoaLogo,
    preview: KoaPreview,
    isConfidential: true,
  },
  {
    title: 'Talentsource',
    description: 'Job-matching platform',
    logo: TalentSourceLogo,
    preview: TalentSourcePreview,
    link: 'https://talentsource.vercel.app',
  },
]

const moreProjects: {
  title: string
  description: string
  logo: string
  preview: string
  link?: string
  isConfidential?: boolean
}[] = [
  {
    title: 'Workmate',
    description: 'Project management tool',
    logo: WorkmaiteLogo,
    preview: WorkmaitePreview,
  },
  {
    title: 'Widoph Remit',
    description: 'Cross-border multi-currency transactions',
    logo: WidophRemitLogo,
    preview: WidophRemitPreview,
  },
  {
    title: 'Embee Realty',
    description: 'Real-estate company website',
    logo: EmbeeLogo,
    preview: EmbeePreview,
  },
]

export const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="projects" className="screen-gutter py-4 lg:py-6">
      <div className="mb-6 lg:mb-8">
        <HeaderText variant="h1">
          <h2>Featured Projects</h2>
        </HeaderText>
      </div>
      <div className="w-full relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 overflow-hidden">
        {previewProjects.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
        {showMore ? (
          <>
            {moreProjects.map((project) => (
              <ProjectCard {...project} key={project.title} />
            ))}
            <div className="lg:col-span-2 bg-white w-full flex justify-center pt-8 pb-2 [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%)]">
              <ButtonLight className="px-3" onClick={() => setShowMore(false)}>
                Show less
                <IoChevronDown
                  size={16}
                  className="ml-2 rotate-180 text-inherit"
                />
              </ButtonLight>
            </div>
          </>
        ) : (
          <div className="absolute bottom-0 left-0 bg-white w-full flex justify-center pt-8 pb-2 [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%)]">
            <ButtonLight className="px-3" onClick={() => setShowMore(true)}>
              Show more
              <IoChevronDown size={16} className="ml-2 text-inherit" />
            </ButtonLight>
          </div>
        )}
      </div>
    </section>
  )
}
