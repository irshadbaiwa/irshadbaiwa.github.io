import React from 'react'

import { Timeline } from '../../blocks/timeline'
import Text from '../../typography/Text'

import ScratchcodeLogo from '../../../images/projects/sc-logo.png'
import BellvivLogo from '../../../images/projects/bellviv-logo.png'
import WorkmaiteLogo from '../../../images/projects/workmaite-logo.png'
import FITLogo from '../../../images/projects/fit-logo.webp'
import MyLogo from '../../../images/icon.svg'
import HeaderText from '../../typography/HeaderText'

const ExperienceDetails = ({
  position,
  responsibilities,
}: {
  position: string
  responsibilities: string[]
}) => {
  return (
    <div className="space-y-2">
      <HeaderText variant="h4">
        <h4 className="text-gray-600">{position}</h4>
        <hr className="w-16 lg:w-24 h-[4px] rounded-sm bg-primary1" />
      </HeaderText>
      <ul className="space-y-2">
        {responsibilities.map((item) => (
          <li key={item}>
            <Text variant="base" className="text-gray-400">
              {item}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  )
}

const data = [
  {
    title: 'Extello',
    logo: ScratchcodeLogo,
    duration: 'Mar, 2024 - Present',
    location: 'Ghana (Remote)',
    content: (
      <ExperienceDetails
        position="Senior Frontend Developer"
        responsibilities={[
          'At Extello, I contributed to building a learning platform for course delivery and student engagement, and led the development of an integrated online IDE that supports real-time coding, assessments, and collaboration.',
        ]}
      />
    ),
  },
  {
    title: 'Bellviv Professionals',
    logo: BellvivLogo,
    duration: 'Dec, 2024 - Mar, 2025.',
    location: 'Australia (Remote) - Contract',
    content: (
      <ExperienceDetails
        position="Frontend Developer"
        responsibilities={[
          'At Bellviv, I worked as a contractor on a cross-border multi-currency transaction platform, focusing on building a secure, intuitive frontend experience for users managing international payments.',
        ]}
      />
    ),
  },
  {
    title: 'Workmate',
    logo: WorkmaiteLogo,
    duration: 'Sep, 2024 - May, 2025.',
    location: 'Lagos (Remote) - Contract',
    content: (
      <ExperienceDetails
        position="Lead Frontend Engineer"
        responsibilities={[
          'I led the development of Workmate, an AI-powered, all-in-one project management tool, where I focused on designing and implementing intuitive workflows and smart user interfaces.',
        ]}
      />
    ),
  },
  {
    title: 'F.I.T',
    logo: FITLogo,
    duration: 'Aug, 2022 - Jan, 2023.',
    location: 'Lagos (Remote)',
    content: (
      <ExperienceDetails
        position="Mobile App Developer"
        responsibilities={[
          'I contributed to the development of 3 cross-platform mobile applications; Fusion One, Raise, and ABC Cargo App.',
        ]}
      />
    ),
  },
  {
    title: 'Contractor',
    logo: MyLogo,
    duration: 'Jan, 2020 - Present.',
    location: 'Nigeria',
    content: (
      <ExperienceDetails
        position="Software Developer"
        responsibilities={[
          'I develop and maintain tailored solutions for clients across finance, business, and education, delivering scalable and efficient applications to meet their unique needs.',
        ]}
      />
    ),
  },
]

export const WorkExperience = () => {
  return (
    <section className="py-16 lg:py-24 screen-gutter">
      <Timeline data={data} />
    </section>
  )
}
