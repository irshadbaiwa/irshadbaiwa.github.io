import React from 'react'

interface Props {
  children?: React.ReactNode
}

const BgGradient: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-gradient-to-bl from-primary2 to-primary1">
      {children}
    </div>
  )
}

export default BgGradient
