import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  IoMail,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
} from 'react-icons/io5'

import BlobGradient from '../../../components/Blob'

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="h-full w-full flex flex-col justify-center items-center absolute z-10">
        <div className="relative m-4 grid place-items-center">
          <StaticImage
            src="../../../images/avatar.jpg"
            alt="My avatar"
            className="h-56 w-56 rounded-full z-10"
          />
        </div>
      </div>

      {/* Blurred Background Gradient */}
      <div className="bg-light blur-3xl h-full w-full grid place-items-center absolute z-0">
        <BlobGradient />
      </div>

      {/* Site under reconstruction */}
      <div className="bg-gradient-to-b from-transparent via-white to-white absolute bottom-0 z-20 p-7 w-full text-center">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-primary italic my-2">
          Reconstruction in progress...
        </h1>
        <p className="text-slate-600">
          You can contact Abubakar (Irshad) Baiwa meanwhile through the
          following channels
        </p>
        <div className="my-1 flex items-baseline justify-center">
          <Link to="mailto:irshaadbaiwa@gmail.com" className="m-2">
            <IoMail
              className="fill-slate-500 visited:fill-slate-500"
              size={24}
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/abubakar-baiwa-9328a81b0"
            className="m-2"
          >
            <IoLogoLinkedin
              className="fill-slate-500 visited:fill-slate-500"
              size={24}
            />
          </Link>
          <Link to="https://github.com/irshadbaiwa" className="m-2">
            <IoLogoGithub
              className="fill-slate-500 visited:fill-slate-500"
              size={24}
            />
          </Link>
          <Link to="https://twitter.com/codewith_irshad" className="m-2">
            <IoLogoTwitter
              className="fill-slate-500 visited:fill-slate-500"
              size={24}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
