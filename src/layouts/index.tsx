import React from 'react'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <title>Abubakar Baiwa</title>
      {children}
    </div>
  )
}

export default Layout
