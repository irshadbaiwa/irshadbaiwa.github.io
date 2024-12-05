import React, { ComponentProps } from 'react'

interface Props {
  children?: React.ReactNode
  [x: string]: any
}

const ButtonPrimary: React.FC<Props & ComponentProps<'button'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`bg-primary1 px-4 rounded-md h-10 flex items-center justify-center text-sm lg:text-base text-white font-bold overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default ButtonPrimary
