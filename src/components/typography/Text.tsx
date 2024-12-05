import React from 'react'

interface Props {
  children: React.ReactNode
}

const Text: React.FC<Props> = ({ children }) => {
  // text-[#637381]
  return (
    <p className="text-base md:text-lg text-gray-500 font-medium">{children}</p>
  )
}

export default Text
