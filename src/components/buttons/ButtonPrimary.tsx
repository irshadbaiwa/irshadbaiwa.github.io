import React, { ComponentProps } from 'react'
import { cn } from '../../lib/utils'

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
      className={cn(
        `bg-primary1 px-4 rounded-md h-10 flex items-center justify-center text-sm lg:text-base text-white font-bold overflow-hidden`,
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary2 focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default ButtonPrimary
