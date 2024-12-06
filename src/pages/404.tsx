import React from 'react'
import { Link, HeadFC } from 'gatsby'
import HeaderText from '../components/typography/HeaderText'
import ButtonPrimary from '../components/buttons/ButtonPrimary'
import ButtonLight from '../components/buttons/ButtonLight'
import { IoChevronBack, IoMail } from 'react-icons/io5'
import Text from '../components/typography/Text'

const NotFoundPage = () => {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="w-full max-w-4xl mx-auto px-3 lg:px-4 py-4 grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-center lg:text-start gap-6">
        <div className="flex flex-col lg:gap-1 items-center lg:items-start">
          <HeaderText variant="h2">
            <h1>Page Not Found</h1>
          </HeaderText>
          <HeaderText variant="h4">
            <h2 className="text-gray-400">Looking for something?</h2>
          </HeaderText>
          <Text className="mt-2 lg:mt-4">
            The page you were trying to access couldn't be found.
          </Text>
        </div>
        <div className="w-full flex flex-col gap-2 items-center justify-center">
          <Link to="/" className="w-full">
            <ButtonLight className="w-full">
              <IoChevronBack size={24} className="mr-2" />
              Back to home
            </ButtonLight>
          </Link>
          <Link
            to="mailto:irshaadbaiwa@gmail.com"
            target="_blank"
            className="w-full"
          >
            <ButtonPrimary className="w-full">
              <IoMail size={24} className="mr-2" />
              Get in touch
            </ButtonPrimary>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
