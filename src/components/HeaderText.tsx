import React from 'react'

interface Props {
  children: React.ReactNode
}

const HeaderText: React.FC<Props> = ({ children }) => {
  return (
    <div className="font-bold text-xl md:text-3xl text-zinc-900">
      {children}
    </div>
  )
}

export default HeaderText
