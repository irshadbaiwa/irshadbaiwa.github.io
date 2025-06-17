import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoMail,
} from 'react-icons/io5'

import BlobGradient from '../../gradients/Blob'
import Text from '../../typography/Text'
import HeaderText from '../../typography/HeaderText'
import FadeIn from '../../transitions/FadeIn'
import ButtonPrimary from '../../buttons/ButtonPrimary'
import ButtonLight from '../../buttons/ButtonLight'

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
    <div className="min-h-screen pt-14 2xl:pt-16 flex flex-col lg:grid lg:grid-cols-12 px-4 md:px-8 lg:px-0 relative">
      {/* Blurred Background Gradient */}
      <div className="blur-3xl h-full w-full lg:grid lg:grid-cols-5 absolute top-0 lg:top-7 -z-10">
        <div className="m-4 h-80 lg:h-auto lg:col-span-2 lg:col-start-4 grid place-items-center">
          <BlobGradient />
        </div>
      </div>

      <div className="lg:col-span-7 order-1 lg:-order-1 w-full max-w-3xl mx-auto lg:h-full lg:px-12 pt-12 pb-20 lg:py-8 flex flex-col gap-10 items-center lg:items-start justify-center text-center lg:text-left">
        {/* Text */}
        <div className="py-4 screen-gutter text-center lg:text-left">
          {/* Intro */}
          <div className="mb-2">
            <div className="mb-4 flex flex-col lg:gap-1 items-center lg:items-start">
              <FadeIn delay={0.2} offset={4} withBlur>
                <HeaderText variant="h1">
                  <h1>
                    Hey, I'm Irshad. I build{' '}
                    <span className="text-gray-400">frontend interfaces.</span>
                  </h1>
                </HeaderText>
              </FadeIn>
            </div>
            <div className="max-w-xl flex flex-col gap-1 items-center lg:items-start justify-center">
              <FadeIn delay={0.4} offset={4} withBlur>
                <Text className="!text-gray-400 font-medium">
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
            className="w-full max-w-sm lg:max-w-full mx-auto lg:mx-0 mt-6 mb-4 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3"
          >
            <Link
              target="_blank"
              className="w-full lg:w-auto"
              to={primaryContactChannel.url}
            >
              <ButtonPrimary className="w-full lg:w-auto">
                <primaryContactChannel.icon size={28} className="mr-2" />
                <span>{primaryContactChannel.ctaText}</span>
              </ButtonPrimary>
            </Link>
            <hr className="h-[1px] w-4/5 lg:h-10 lg:w-[1px] bg-gray-200" />
            <FadeIn
              from="left"
              delay={1.0}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((item) => (
                <Link
                  key={item.platform}
                  target="_blank"
                  className="text-primary1"
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
      <FadeIn
        offset={0}
        delay={0}
        withBlur
        animateOnce
        className="lg:col-span-5 w-full lg:h-full relative grid place-items-center overflow-hidden"
      >
        {/* Image */}
        <StaticImage
          src="../../../images/baiwa.jpg"
          alt="Abubakar Baiwa | Frontend Engineer"
          className="h-56 w-56 lg:h-72 lg:w-72 rounded-full z-10 shadow border-2 border-primary2/10"
        />
      </FadeIn>
    </div>
  )
}
