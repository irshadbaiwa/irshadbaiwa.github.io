import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoMail,
} from 'react-icons/io5'

import Text from '../../typography/Text'
import HeaderText from '../../typography/HeaderText'
import FadeIn from '../../transitions/FadeIn'
import ButtonPrimary from '../../buttons/ButtonPrimary'
import ButtonLight from '../../buttons/ButtonLight'
import BlurEffect from '../../transitions/BlurEffect'

const primaryContactChannel = {
  platform: 'Mail',
  url: 'mailto:irshaadbaiwa@gmail.com',
  icon: IoMail,
  ctaText: 'Get in touch',
}
const socialLinks = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abubakar-baiwa-9328a81b0',
    icon: IoLogoLinkedin,
  },
  {
    platform: 'Github',
    url: 'https://github.com/irshadbaiwa',
    icon: IoLogoGithub,
  },
  {
    platform: 'X / Twitter',
    url: 'https://x.com/irshad_baiwa',
    icon: IoLogoTwitter,
  },
]

export const LandingPageHeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-[30rem] pt-14 lg:pt-32 2xl:pt-40 pb-8 lg:pb-14 flex flex-col lg:grid lg:grid-cols-12 screen-gutter relative overflow-hidden"
    >
      <div className="lg:col-span-7 w-full max-w-3xl mx-auto lg:h-full lg:px-12 pt-12 pb-12 lg:py-8 flex flex-col gap-10 items-center lg:items-start justify-center text-center lg:text-left">
        {/* Text */}
        <div className="py-4 screen-gutter text-center lg:text-left">
          {/* Intro */}
          <div className="mb-2">
            <div className="mb-4 flex flex-col lg:gap-1 items-center lg:items-start">
              <FadeIn delay={0.2} offset={4} withBlur>
                <HeaderText variant="h1">
                  <h1>
                    Hey, I'm Irshad.{' '}
                    <span className="text-gray-400">
                      I build frontend interfaces.
                    </span>
                  </h1>
                </HeaderText>
              </FadeIn>
            </div>
            <div className="max-w-xl flex flex-col gap-1 items-center lg:items-start justify-center">
              <FadeIn delay={0.4} offset={4} withBlur>
                <Text variant="md" className="text-gray-500 font-medium">
                  A Frontend Engineer driven by passion for building intuitive,
                  scalable interfaces that deliver seamless experiences across
                  web and mobile platforms.
                </Text>
              </FadeIn>
            </div>
          </div>
          {/* Contact Links */}
          <FadeIn
            delay={0.4}
            className="w-full max-w-full mx-auto lg:mx-0 mt-6 mb-4 flex flex-row flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <Link
              target="_blank"
              className="w-auto focus-visible:outline-none"
              to={primaryContactChannel.url}
            >
              <ButtonPrimary className="w-auto">
                <primaryContactChannel.icon size={28} className="mr-2" />
                <span>{primaryContactChannel.ctaText}</span>
              </ButtonPrimary>
            </Link>
            {/* <hr className="h-10 w-[1px] bg-gray-200" /> */}
            <FadeIn
              from="left"
              delay={1.0}
              className="flex flex-nowrap items-center justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((item) => (
                <Link
                  key={item.platform}
                  target="_blank"
                  className="text-primary1 focus-visible:outline-none"
                  to={item.url}
                >
                  <ButtonLight>
                    <item.icon size={28} />
                  </ButtonLight>
                </Link>
              ))}
            </FadeIn>
          </FadeIn>
        </div>
      </div>
      <div className="lg:col-span-5 w-full lg:h-full relative grid place-items-center">
        {/* Image */}
        <BlurEffect
          delay={0.4}
          blurIntensity={32}
          className="lg:col-span-5 sm:max-w-sm lg:max-w-lg lg:h-full relative grid place-items-center overflow-hidden"
        >
          <StaticImage
            src="../../../images/hero.jpg"
            alt="Abubakar Baiwa | Frontend Engineer"
            className="rounded-3xl"
          />
        </BlurEffect>
      </div>
    </section>
  )
}
