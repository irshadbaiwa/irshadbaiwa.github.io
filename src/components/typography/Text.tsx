import React from 'react'

interface Props {
  children: React.ReactNode
}

const Text: React.FC<Props> = ({ children }) => {
  // text-[#637381]
  return (
    <p
      className="text-base md:text-lg text-[#637381]"
      style={{
        fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
      }}
    >
      {children}
    </p>
  )
}

export default Text
