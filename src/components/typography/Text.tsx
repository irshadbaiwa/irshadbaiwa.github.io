import React from 'react'

interface Props {
  children: React.ReactNode
}

const Text: React.FC<Props> = ({ children }) => {
  // text-[#637381]
  return <p className="text-base md:text-lg text-gray-600 ">{children}</p>
}

export default Text
