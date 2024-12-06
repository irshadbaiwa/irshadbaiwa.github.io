import React, { ComponentProps } from 'react'

interface Props {
  children?: React.ReactNode
  [x: string]: any
}

const ButtonLight: React.FC<Props & ComponentProps<'button'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={
        'bg-violet-100 px-2 rounded-md h-10 flex items-center justify-center text-sm lg:text-base text-primary1 font-bold overflow-hidden ' +
        className
      }
      {...props}
    >
      {children}
    </button>
  )
}

export default ButtonLight
