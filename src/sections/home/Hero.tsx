import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from 'react-icons/io5'

import BlobGradient from '../../components/Blob'
import IconGradient from '../../components/IconGradient'
import Text from '../../components/Text'
import HeaderText from '../../components/HeaderText'

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
              <HeaderText>
                <h1 className="my-2">Barka da zuwa</h1>
              </HeaderText>
              <Text>
                <p>
                  Howdy! This site is currently undergoing some updates, You can
                  contact me meanwhile through the links below;
                </p>
              </Text>
            </div>
            {/* Contact Links */}
            <div className="flex justify-center">
              <div className="my-4 flex flex-wrap items-center justify-start">
                <a
                  target="_blank"
                  href="mailto:irshaadbaiwa@gmail.com"
                  className="bg-gradient-to-b from-primary1 to-primary2 px-4 rounded-tl-xl rounded-br-xl m-2 h-10 grid place-items-center"
                >
                  <span className="text-sm lg:text-base text-white font-bold">
                    Get in touch
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/abubakar-baiwa-9328a81b0"
                  className="bg-light px-2 rounded-tl-xl rounded-br-xl m-2 h-10 grid place-items-center"
                >
                  <IconGradient Icon={IoLogoLinkedin} />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/irshadbaiwa"
                  className="bg-light px-2 rounded-tl-xl rounded-br-xl m-2 h-10 grid place-items-center"
                >
                  <IconGradient Icon={IoLogoGithub} />
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/codewith_irshad"
                  className="bg-light px-2 rounded-tl-xl rounded-br-xl m-2 h-10 grid place-items-center"
                >
                  <IconGradient Icon={IoLogoTwitter} />
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
