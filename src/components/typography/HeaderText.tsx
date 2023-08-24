import React from 'react'

interface Props {
  children: React.ReactNode
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const TYPOGRAPHY: any = {
  h1: 'text-3xl md:text-5xl',
  h2: 'text-2xl md:text-4xl',
  h3: 'text-xl md:text-3xl',
  h4: 'text-lg md:text-2xl',
  h5: 'text-base md:text-xl',
  h6: 'text-sm md:text-base',
}

const HeaderText: React.FC<Props> = ({ children, variant }) => {
  return (
    <div
      className={
        (TYPOGRAPHY[variant] ?? TYPOGRAPHY.h1) + ' font-bold text-zinc-900'
      }
      style={{ fontFamily: 'Merriweather' }}
    >
      {children}
    </div>
  )
}

export default HeaderText