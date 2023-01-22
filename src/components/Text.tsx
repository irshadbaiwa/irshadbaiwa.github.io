import React from 'react'

interface Props {
  children: React.ReactNode
}

const Text: React.FC<Props> = ({ children }) => {
  // text-[#637381]
  return <div className="text-base md:text-lg text-zinc-600">{children}</div>
}

export default Text
