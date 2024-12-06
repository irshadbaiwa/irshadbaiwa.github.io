import React, { ComponentProps } from 'react'

interface Props {
  children: React.ReactNode
}

const Text: React.FC<Props & ComponentProps<'p'>> = ({
  children,
  className,
}) => {
  // text-[#637381]
  return (
    <p className={'text-base md:text-lg text-gray-600 ' + className}>
      {children}
    </p>
  )
}

export default Text
