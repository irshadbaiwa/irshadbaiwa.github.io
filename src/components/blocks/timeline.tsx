import React, { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, motion } from 'motion/react'
import { IoLocationSharp } from 'react-icons/io5'

import HeaderText from '../typography/HeaderText'
import Text from '../typography/Text'

interface TimelineEntry {
  title: string
  logo: string
  duration: string
  location: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-8 space-y-2 lg:space-y-4">
        <HeaderText variant="h1">
          <h2>Work Experience</h2>
        </HeaderText>
        <Text variant="md" className="text-gray-500 max-w-2xl">
          I&apos;ve built web and mobile apps for startups, agencies, and tech
          companies across education, logistics, and fintech.
        </Text>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-14 md:pt-40 md:gap-10"
          >
            <div className="flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-16 w-16 absolute left-0 md:left-0 rounded-full bg-white flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-slate-100 border border-slate-300 p-2 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="object-center object-contain h-full w-auto mx-auto max-w-full"
                  />
                </div>
              </div>
              <div className="shrink-0 hidden relative top-2 md:flex gap-4 items-start md:pl-20">
                <div>
                  <HeaderText variant="h3">
                    <h3>{item.title}</h3>
                  </HeaderText>
                  <Text className="text-gray-500">{item.duration}</Text>
                  <div className="flex gap-1 items-center">
                    <IoLocationSharp className="text-gray-300" size={14} />
                    <Text
                      variant="sm"
                      className="text-gray-400 italic font-normal"
                    >
                      {item.location}
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden relative top-2 flex flex-col gap-2 items-start mb-4">
                <div>
                  <HeaderText variant="h3">
                    <h3 className="text-left">{item.title}</h3>
                  </HeaderText>
                  <Text className="text-gray-500">{item.duration}</Text>
                  <div className="flex gap-1 items-center">
                    <IoLocationSharp className="text-gray-300" size={14} />
                    <Text
                      variant="sm"
                      className="text-gray-400 italic font-normal"
                    >
                      {item.location}
                    </Text>
                  </div>
                </div>
              </div>
              {item.content}{' '}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-100 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-primary1 via-primary2 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
