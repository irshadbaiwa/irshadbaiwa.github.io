import React from 'react'
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
            src="../../../images/avatar1.jpg"
            alt="Abubakar Baiwa | Frontend developer"
            className="h-56 w-56 md:h-72 md:w-72 rounded-full z-10 border-2 border-primary2/20"
          />
        </div>

        {/* Welcome */}
        <div className="lg:col-span-3 lg:order-1 bg-gradient-to-b lg:bg-gradient-to-l from-transparent to-white grid place-items-center">
          <div className="py-4 screen-gutter text-center lg:text-left">
            {/* Intro */}
            <div className="mb-2">
              <div className="mb-4 flex flex-col lg:gap-1 items-center lg:items-start">
                <HeaderText variant="h1">
                  <h1>Abubakar Baiwa</h1>
                </HeaderText>
                <HeaderText variant="h4">
                  <h2 className="text-gray-400">Sr. Frontend Developer</h2>
                </HeaderText>
              </div>
              <div className="max-w-xl flex flex-col gap-1 items-center lg:items-start justify-center">
                <Text>
                  I build scalable and performant web and mobile apps with a
                  focus on clean architecture, seamless user experience, and
                  robust frontend engineering.
                </Text>
              </div>
            </div>
            {/* Contact Links */}
            <div className="w-full max-w-sm lg:max-w-full mx-auto lg:mx-0 mt-6 mb-4 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                target="_blank"
                className="w-full lg:w-auto"
                href="mailto:irshaadbaiwa@gmail.com"
              >
                <ButtonPrimary className="w-full lg:w-auto">
                  <IoMail size={28} className="mr-2" />
                  <span>Get in touch</span>
                </ButtonPrimary>
              </a>
              <hr className="h-[1px] w-4/5 lg:h-10 lg:w-[1px] bg-gray-200" />
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
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
                  href="https://twitter.com/irshad_baiwa"
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
