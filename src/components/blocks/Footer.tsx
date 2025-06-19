import React from 'react'
import Text from '../typography/Text'

export const Footer = () => {
  return (
    <footer className="w-full screen-gutter py-4 flex justify-center">
      <Text variant="xs" className="text-gray-400">
        &copy; {new Date().getFullYear()} All rights reserved
      </Text>
    </footer>
  )
}
