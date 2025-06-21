import React from 'react'
import { CiLocationArrow1, CiLock } from 'react-icons/ci'

import FadeIn from '../transitions/FadeIn'
import HeaderText from '../typography/HeaderText'
import Text from '../typography/Text'
import { cn } from '../../lib/utils'

interface Props {
  title: string
  logo: string
  description: string
  preview: string
  link?: string
  isConfidential?: boolean
}
export const ProjectCard: React.FC<Props> = ({
  title,
  logo,
  description,
  preview,
  link,
  isConfidential,
}) => {
  return (
    <div className="w-full bg-slate-50 rounded-2xl p-4 lg:p-5 flex flex-col gap-y-4 justify-between">
      <div className="flex gap-2 items-start">
        <FadeIn
          delay={0.2}
          offset={0}
          withBlur
          className="shrink-0 w-12 md:w-14 lg:w-16 aspect-square p-2 relative grid place-items-center"
        >
          <img
            src={logo}
            alt={title}
            className="object-center object-contain h-full w-full rounded"
          />
        </FadeIn>
        <FadeIn
          delay={0.2}
          offset={5}
          from="left"
          className="flex-1 -space-y-1 lg:space-y-0"
        >
          <HeaderText variant="h4">
            <h3>{title}</h3>
          </HeaderText>
          <Text className="text-gray-500">{description}</Text>
        </FadeIn>
        {isConfidential ? (
          <div className="rounded-full p-2 border border-gray-200 overflow-hidden hover:bg-gray-200 transition-all">
            <CiLock size={24} className="text-gray-400" />
          </div>
        ) : link ? (
          <a
            target="_blank"
            href={link}
            className={cn(
              'rounded-full p-2 border border-gray-200 overflow-hidden hover:bg-gray-200 transition-all',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary2 focus-visible:ring-offset-2'
            )}
          >
            <CiLocationArrow1 size={24} className="text-gray-400" />
          </a>
        ) : null}
      </div>
      <div className="w-full aspect-video rounded-xl bg-gray-300 overflow-hidden">
        <img
          src={preview}
          alt={title + ' preview'}
          className="object-center object-cover h-full w-full transition-all hover:scale-105 duration-150 ease-in"
        />
      </div>
    </div>
  )
}
