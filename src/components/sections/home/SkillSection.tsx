import React from 'react'

import HeaderText from '../../typography/HeaderText'
import Text from '../../typography/Text'
import FadeIn from '../../transitions/FadeIn'

import ReactIcon from '../../../images/stack/react.png'
import NextjsIcon from '../../../images/stack/nextjs.png'
import TSIcon from '../../../images/stack/ts.png'
import VueIcon from '../../../images/stack/vue.png'
import TailwindIcon from '../../../images/stack/tailwind.png'
import ReactQueryIcon from '../../../images/stack/react-query.png'
import MotionIcon from '../../../images/stack/framer-motion.png'
import DjangoIcon from '../../../images/stack/django.png'
import SupabaseIcon from '../../../images/stack/supabase.png'

const stack = [
  {
    tool: 'React',
    icon: ReactIcon,
    experience: '5+ years',
  },
  {
    tool: 'Nextjs',
    icon: NextjsIcon,
    experience: '4+ years',
  },
  {
    tool: 'Typescript',
    icon: TSIcon,
    experience: '4+ years',
  },
  {
    tool: 'Vue.js',
    icon: VueIcon,
    experience: '4+ years',
  },
  {
    tool: 'Tailwind',
    icon: TailwindIcon,
    experience: '4+ years',
  },
  {
    tool: 'React Query',
    icon: ReactQueryIcon,
    experience: '3+ years',
  },
  {
    tool: 'Framer Motion',
    icon: MotionIcon,
    experience: '2+ years',
  },
  {
    tool: 'Django',
    icon: DjangoIcon,
    experience: '3+ years',
  },
  {
    tool: 'Supabase',
    icon: SupabaseIcon,
    experience: '2+ years',
  },
]

export const SkillSection = () => {
  return (
    <section id="skills" className="screen-gutter py-32 lg:py-40">
      {/* Stack */}
      <div className="max-w-5xl mx-auto bg-slate-50 rounded-2xl p-4 px-5 lg:px-6 space-y-6 overflow-hidden">
        <div>
          <HeaderText variant="h4">
            <h2>Stack</h2>
          </HeaderText>
          <Text className="text-gray-500">
            Frameworks and libraries I use regularly.
          </Text>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          {stack.map((stack) => (
            <div key={stack.tool} className="flex gap-2 items-center">
              <FadeIn
                delay={0.2}
                offset={5}
                withBlur
                className="shrink-0 w-12 md:w-14 lg:w-16 aspect-square p-2 relative grid place-items-center "
              >
                <img
                  src={stack.icon}
                  alt={stack.tool}
                  className="object-center object-contain h-full w-full"
                />
              </FadeIn>
              <FadeIn delay={1} offset={5} from="left">
                <Text>{stack.tool}</Text>
                <Text variant="sm" className="text-gray-400">
                  {stack.experience}
                </Text>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
