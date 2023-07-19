import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from 'react-icons/io5'

import BlobGradient from '../../gradients/Blob'
import Text from '../../typography/Text'
import HeaderText from '../../typography/HeaderText'
import ButtonPrimary from '../../buttons/ButtonPrimary'
import ButtonLight from '../../buttons/ButtonLight'

interface Props {}
const HeroSection: React.FC<Props> = () => {
  return (
    <section className="lg:min-h-screen relative overflow-hidden">
      {/* Blurred Background Gradient */}
      <div className="bg-light blur-3xl h-full w-full lg:grid lg:grid-cols-5 absolute z-0">
        <div className="m-4 h-80 lg:h-auto lg:col-span-2 lg:col-start-4 grid place-items-center">
          <BlobGradient />
        </div>
      </div>

      {/* Hero Content */}
      <div className="lg:h-full lg:w-full lg:grid lg:grid-cols-5 relative lg:absolute z-10">
        {/* Avatar */}
        <div className="lg:col-span-2 lg:order-2 relative m-4 h-80 lg:h-auto grid place-items-center">
          <StaticImage
            src="../../images/avatar1.jpg"
            alt="My avatar"
            className="h-56 w-56 md:h-72 md:w-72 rounded-full z-10"
          />
        </div>

        {/* Welcome */}
        <div className="lg:col-span-3 lg:order-1 bg-gradient-to-b lg:bg-gradient-to-l from-transparent to-white grid place-items-center">
          <div className="p-4 lg:px-10 text-center">
            {/* Intro */}
            <div className="mb-2">
              <div className="mb-4">
                <HeaderText variant="h1">
                  <h1 className="my-2 font-semibold">Barka Da Zuwa</h1>
                </HeaderText>
              </div>
              <div className="max-w-xl flex flex-col gap-1 items-center justify-center">
                <Text>Hey there! 👋</Text>
                <Text> My name is Abubakar Baiwa.</Text>
                <Text>
                  I am a passionate frontend developer, accomplished in
                  designing, building and maintaining performant web and mobile
                  apps.
                </Text>
              </div>
            </div>
            {/* Contact Links */}
            <div className="flex justify-center">
              <div className="my-4 gap-3 flex flex-wrap items-center justify-start">
                <a target="_blank" href="mailto:irshaadbaiwa@gmail.com">
                  <ButtonPrimary>Get in touch</ButtonPrimary>
                </a>
                <a
                  target="_blank"
                  className="text-primary1"
                  href="https://www.linkedin.com/in/abubakar-baiwa-9328a81b0"
                >
                  <ButtonLight>
                    <IoLogoLinkedin size={28} />
                  </ButtonLight>
                </a>
                <a
                  target="_blank"
                  className="text-primary1"
                  href="https://github.com/irshadbaiwa"
                >
                  <ButtonLight>
                    <IoLogoGithub size={28} />
                  </ButtonLight>
                </a>
                <a
                  target="_blank"
                  className="text-primary1"
                  href="https://twitter.com/codewith_irshad"
                >
                  <ButtonLight>
                    <IoLogoTwitter size={28} />
                  </ButtonLight>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
