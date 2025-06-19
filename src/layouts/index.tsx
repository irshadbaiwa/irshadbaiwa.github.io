import React from 'react'
import Header from '../components/blocks/Header'
import { Footer } from '../components/blocks/Footer'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      {children}
      <Footer />
    </>
  )
}

export default Layout
