import React, { ComponentProps } from 'react'
import { cn } from '../../lib/utils'

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
      className={cn(
        'bg-slate-100 px-2 rounded-md h-10 flex items-center justify-center text-sm lg:text-base text-primary1 font-semibold overflow-hidden',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary2 focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default ButtonLight
